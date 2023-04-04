import axios from 'axios'

const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_URL,
  // 超时时间
  timeout: 10000
})
service.interceptors.response.use(res => {
  return res.data
})

export default service

