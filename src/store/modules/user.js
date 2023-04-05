import { login,getInfo } from '@/api/login'
import {setToken,getToken} from '@/utils/auth.js'

const state = {
  token: getToken(),
  roles: [],
}
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
}
const actions = {
  // 点击“登录”按钮，该方法会被调用
  Login({ commit }, userInfo) {
    const username = userInfo.username;
    const password = userInfo.password;
    const code = userInfo.code;
    const uuid = userInfo.uuid;
    return new Promise((resolve, reject) => {
      login(username, password, code, uuid).then((resA) => {
        // 将token进行本地存储
        setToken(resA.token)
        // 将token设置给vuex
        commit('SET_TOKEN', resA.token)
        // 在成功的逻辑里面写resolve()，在调用Login方法的then方法里面就可以处理后续的逻辑,其中，resolve()里面的参数将会传递给调用Login方法的then方法
        resolve(resA)
      }).catch(error => {
        // 在失败的逻辑里面写reject()，在调用Login方法的catch方法里面就可以处理后续的逻辑,其中，reject()里面的参数将会传递给调用Login方法的catch方法
        reject(error)
      });
    })
  },
  // 获取用户信息
  GetInfo({ commit }){
    return new Promise((resolve,reject) => {
      getInfo().then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
const user = {
  state,
  mutations,
  actions
}
export default user




