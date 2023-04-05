import axios from 'axios'
import { Message } from 'element-ui'
import { getToken } from './auth'

const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_URL,
  // 超时时间
  timeout: 10000
})

// 请求拦截器
// config是请求的配置信息
service.interceptors.request.use(config => {
  // 并不是所有的请求都需要携带token，比如：登录请求
  const notToken = (config.headers || {}).notToken === true
  if (getToken() && !notToken) {
    console.log('进来了吗');
    config.headers['Authorization'] = 'Bearer ' + getToken()
    console.log('config');
    console.log(config);
  }
  // 最后一定要返回config
  return config
})

// 响应拦截器
service.interceptors.response.use(res => {
  const code = res.data.code
  const msg = res.data.msg
  if (code === 401) {
    return Promise.reject(new Error('无效的会话，或者会话已过期，请重新登录。'))
  } else if (code === 500) {
    Message({
      message:msg,
      type:'error'
    })
    // return Promise.reject(new Error(msg))
    return Promise.reject(new Error('code值为500'))
  } else if (code !== 200) {
    // return Promise.reject(new Error(msg))
    return Promise.reject(new Error('code值不等于500，也不等于200'))
  } 
  else {
    return res.data
  }
})

export default service

