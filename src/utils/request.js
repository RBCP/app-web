import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'
import Qs from 'qs'
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 30000,
  transformRequest: [function (data) {
    data = Qs.stringify(data, {arrayFormat: 'repeat'})
    return data
  }
  ]
})
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['access-token'] = getToken()
  }
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      Message({
        message: res.message,
        type: 'error',
        duration: 3 * 1000
      })
      if (res.code === 401 || res.code === 403) {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登陆', '确定登出', {
          confirmButtonText: '重新登陆',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload()
          })
        })
      }
    } else {
      return response
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)
export default service
