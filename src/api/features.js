import request from '@/utils/request'

export function pushSingle(params){
  return request(
    {
      url :'/tigase/pushsingle83',
      method:'post',
      params:params
    }
  )
}
export function searchUser(params){
  return request(
    {
      url:'/mpVue/searchUser',
      method:'get',
      params:params
    }
  )
}
export function getDeptList(){
  return request(
    {
      url:'/consoleVue/getDeptList',
      method:'get'
    }
  )
}
export function getLocusList(){
  return request({
   url:'/consoleVue/getLocusList',
   method:'get'
  })
}
export function getMenuList(){
  return request({
    url:'/mpVue/getMenuList',
    method:'get'
  })
}
export function addMenu(params){
  return request({
    url:'/mpVue/menu/save',
    method:'post',
    params:params
  })
}
export function deleteMenu(params){
  return request({
    url:'/mpVue/menu/delete',
    method:'post',
    params:params
  })
}
export function getMenuDetail(params){
  return request({
    url:'/mpVue/getMenu',
    method:'get',
    params:params
  })
}
export function updateMenu(params){
  return request({
    url:'/mpVue/menu/update',
    method:'post',
    params:params
  })
}
