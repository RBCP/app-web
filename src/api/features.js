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
export function updateMenu(params){
  return request(
    {
      url :'/mp/update',
      method:'post',
      params:params
    }
  )
}
