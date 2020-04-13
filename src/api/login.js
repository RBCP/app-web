import request from '@/utils/request'
export function login (username, password) {
  return request({
    url: 'mpVue/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
export function getInfo () {
  return request({
    url: '/mpVue/info',
    method: 'get'
  })
}
export function logout () {
  return request({
    url: '/mpVue/logout',
    method: 'get'
  })
}
