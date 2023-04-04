import request from '@/utils/request'

export function getCodeImg(){
  return request({
    url:'/captchaImage',
    method:'get',
    timeout:2000
  })
}