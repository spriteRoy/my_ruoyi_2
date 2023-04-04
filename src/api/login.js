import request from '@/utils/request'

// 获取验证码
export function getCodeImg(){
  return request({
    url:'/captchaImage',
    method:'get',
    timeout:2000
  })
}

// 登录
export function login(username,password,code,uuid){
  const data = {
    username,
    password,
    code,
    uuid
  }
  return request({
    url:'/login',
    method:'post',
    data
  })
}