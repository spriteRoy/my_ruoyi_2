import { login,getInfo,logout } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  roles: [],
  permissions: []
}
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_PERMISSIONS: (state, permissions) => {
    state.permissions = permissions
  }
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
        const user = res.user
        const avatar = (user.avatar == "" || user.avatar == null) ? require("@/assets/images/profile.jpg") : process.env.VUE_APP_BASE_API + user.avatar;
        if (res.roles && res.roles.length > 0) { // 验证返回的roles是否是一个非空数组
          commit('SET_ROLES', res.roles)
          commit('SET_PERMISSIONS', res.permissions)
        } else {
          commit('SET_ROLES', ['ROLE_DEFAULT'])
        }
        commit('SET_NAME', user.userName)
        commit('SET_AVATAR', avatar)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  Logout({commit,state}){
    return new Promise((resolve,reject) => {
      logout().then(() => {
        commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          commit('SET_PERMISSIONS', [])
          removeToken()
          resolve()
      }).catch((error) => {
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




