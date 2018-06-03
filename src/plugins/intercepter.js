import axios from 'axios'
import _ from 'lodash'
import router from '@/router'
// import store from '@/store'
import Vue from 'vue'
import { Toast, Loading } from 'vue-ydui/dist/lib.rem/dialog'
import config from '@/config'

/**
 * 全局axios配置
 */

const vm = new Vue({})

const requests = []

export default (Vue) => {
  Object.defineProperties(Vue.prototype, {
    $http: {
      value: axios
    }
  })
  // axios配置
  axios.defaults.baseURL = config[process.env.NODE_ENV].host
  axios.defaults.timeout = 10000
  // 添加拦截器
  axios.interceptors.request.use(function (config) {
    console.log(`${config.url}--begin`)
    requests.push(config)
    console.log(config)

    vm.$dialog.loading.open('很快加载好了')

    config.headers['Authorization'] = Cookies.get('Token')
    return config
  }, function (error) {
    return Promise.reject(error)
  })
  axios.interceptors.response.use(function (response) {
    console.log(`${response.config.url}--end`)
    _.remove(requests, r => {
      return r === response.config
    })
    if (!requests.length) {
      setTimeout(() => {
        vm.$dialog.loading.close()
      }, 300)
    }
    switch (response.data.code) {
      case 100:
        vm.$dialog.toast({
          mes: response.data ? response.data.msg : 'error',
          timeout: 1500,
          icon: 'error',
          callback: () => {
            router.push({path: '/login',query: {redirect: router.currentRoute.fullPath}})
          }
        })
        break
      default:
        response.data && response.data.msg && vm.$dialog.toast({
          mes: response.data && response.data.msg,
          timeout: 1500,
          icon: 'none'
        })
    }

    return response.data
  }, function (error) {
    alert(error)
    vm.$dialog.loading.close()
    if (error.response) {
      switch (error.response.status) {
        case 401:
          vm.$dialog.toast({
            mes: '糟糕啦！您未授权！',
            timeout: 1500,
            icon: 'error'
          })
          break
        case 500:
          vm.$dialog.toast({
            mes: '糟糕啦！服务器出错啦！',
            timeout: 1500,
            icon: 'error'
          })
          break
        default:
          vm.$dialog.toast({
            mes: error.message,
            timeout: 1500,
            icon: 'error'
          })
      }
    }
    return Promise.reject(error)
  })
}
