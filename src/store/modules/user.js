import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
const user = {
  state: {
    token: getToken(),
    name: '',
    password:'',
    userId:'',
    avatar: '',
    roles: []
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_PASSWORD:(state, password) =>{
      state.password = password;
    },
    SET_USERID:(state, userId) =>{
      state.userId =userId;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    Login ({ commit }, userInfo) {
      const username = userInfo.userID.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data.data
          const tokenStr = data.tokenHead + data.token
          setToken(tokenStr)
          commit('SET_TOKEN', tokenStr)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetInfo ({commit, state}) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          const data = response.data.data
          commit('SET_NAME', data.username)
          commit('SET_PASSWORD',data.password)
          commit('SET_USERID',data.userId)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    LogOut ({commit, state}) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_NAME', '')
          commit('SET_PASSWORD','')
          commit('SET_USERID','')
          removeToken()
          resolve()
        })
      })
    },
    FedLogout ({commit}) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_NAME', '')
        removeToken()
        resolve()
      })
    }
  }
}
export default user
