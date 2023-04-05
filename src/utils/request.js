import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_URL,
  // 超时时间
  timeout: 10000
})
service.interceptors.response.use(res => {
  const code = res.data.code
  const msg = res.data.msg
  if (code === 500) {
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

