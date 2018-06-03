import * as types from '../constant'
import * as api from '@/api'
export default {
  state: {
    userList: [],
    resultList: [],
    addressList: []
  },
  actions: {
    register({ commit }, userInfo) {
      return api.register(userInfo)
    },
    getAddress({commit}) {
      return api.getAddress().then(d => {
        commit(types.SET_ADDRESS_LIST, d.data)
        return d
      })
    },
    setDefaultAddress({commit}, id) {
      return api.setDefaultAddress(id)
    },
    AddAddress({commit}, addressinfo) {
      return api.AddAddress(addressinfo)
    }
  },
  mutations: {
    [types.SET_USER_LIST](state, list) {
      state.userList = list
    },
    [types.SET_USER_RESULTLIST](state, list) {
      state.resultList = list
    },
    [types.SET_ADDRESS_LIST](state, list) {
      state.addressList = list
    }
  },
  getters: {
    userList(state) {
      return state.userList
    },
    resultList(state) {
      return state.resultList
    },
    addressList(state) {
      return state.addressList
    }
  }
}
