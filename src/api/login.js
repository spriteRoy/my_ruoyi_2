import request from '@/utils/request'

// 获取验证码
export function getCodeImg(){
  return request({
    url:'/captchaImage',
    method:'get',
    headers: {
      notToken: true
    },
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
    // 不要写错位置，注意：headers是小写的h
    headers: {
      notToken: true
    },
    data
  })
}

// 获取用户信息
export function getInfo() {
  return request({
    url: '/getInfo',
    method: 'get',
  })
}