import { login } from '@/api/login'

const state = {
  token: '',

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
        commit('SET_TOKEN', resA.token)
        // 在成功的逻辑里面写resolve()，在调用Login方法的then里面就可以处理后续的逻辑,其中，resolve()里面的参数将会传递给调用Login方法的then方法
        resolve(resA)
      });
    })

  }
}
const user = {
  state,
  mutations,
  actions
}
export default user