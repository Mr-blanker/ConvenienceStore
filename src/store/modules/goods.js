import * as types from '../constant'
import * as api from '@/api'
export default {
  state: {
    goodsList: [],
    assignGoods: '',
    appointGoods: [],
    cartGoods: [],
    flag: { navbar: true,
    tabbar: true }
  },
  actions: {
    getGoodsList({ commit }) {
      return api.getGoodsList().then((d) => {
        commit(types.SET_GOODS_LIST, d.data)
      })
    },
    getAssignGoods({commit}, cid) {
      return api.getAssignGoods(cid).then(d => {
        console.log(d)
        commit(types.SET_ASSIGN_LIST, d.data)
      })
    },
    getAppointGoods({commit}, id) {
      return api.getAppointGoods(id).then(d => {
        console.log(d)
        commit(types.SET_APPOINT_LIST, d.data.goods_data)
      })
    },
    addCart({commit}, addGoods) {
      return api.addCart(addGoods)
    },
    getCart({commit}) {
      return api.getCart().then(d => {
        commit(types.SET_CART_LIST, d.data)
      })
    },
    delCart({commit}, id) {
      return api.delCart(id)
    }
  },
  mutations: {
    [types.SET_GOODS_LIST](state, list) {
      state.goodsList = list
    },
    [types.SET_ASSIGN_LIST](state, list) {
      state.assignGoods = list
    },
    [types.SET_APPOINT_LIST](state, list) {
      state.appointGoods = list
    },
    [types.SET_FLAG](state, setting) {
      state.flag = setting
    },
    [types.SET_CART_LIST](state, list) {
      state.cartGoods = list
    }
  },
  getters: {
    goodsList(state) {
      return state.goodsList
    },
    assignGoods(state) {
      return state.assignGoods
    },
    appointGoods(state) {
      return state.appointGoods
    },
    flag(state) {
      return state.flag
    },
    cartGoods(state) {
      return state.cartGoods
    }
  }
}
