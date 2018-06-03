import Vuex from 'vuex'
import Vue from 'vue'
import md5 from 'js-md5'
import user from './modules/user'
import goods from './modules/goods'
import * as types from './constant'
import * as api from '@/api'
Vue.use(Vuex)

let state = {
  userInfo: null
}
let actions = {
  // getUserinfo({ commit }, id) {
  //   api.getUserById(id).then(d => {
  //     commit(types.SET_USER, d)
  //   })
  // },
  onLogin({ commit }, user) {
    let tempUser = Object.assign({}, user)
    tempUser.password = md5(md5(user.password) + user.username)
    return api.login(tempUser).then(d => {
      console.log(d)
      Cookies.set('Token', d.data._token)
      Cookies.set('UI', JSON.stringify(d.data))
      commit(types.SET_USER, d)
      return d
    })
  }
// onLogout({ commit }) {
//   api.userLogout().then(d => {
//     Cookies.set('Token', null)
//     Cookies.set('UI', null)
//   })
// }
}
let mutations = {
  [types.SET_USER](state, user) {
    state.userInfo = user
  }
}
let getters = {
  userInfo(state) {
    return state.userInfo
  }
}
let modules = {
  user,
goods}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
modules})
