import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import login from '@/views/Login'
import register from '@/views/Register'
import layout from '@/views/Layout'
import index from '@/components/index'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register

    },
    {
      path: '/layout',
      name: 'layout',
      component: layout,
      meta: {
        auth: true
      },
      children: [{
        path: 'index',
        component: require('../components/index.vue')
      },
        {
          path: 'classify',
          component: require('../components/classify.vue')
        },
        {
          path: 'search',
          component: require('../components/search.vue')
        },
        {
          path: 'details',
          component: require('../components/details.vue')
        },
        {
          path: 'cart',
          component: require('../components/cart.vue')
        },
        {
          path: 'personal',
          component: require('../components/personal.vue')
        },
        {
          path: 'setting',
          component: require('../components/setting.vue')
        },
        {
          path: 'message',
          component: require('../components/message.vue')
        },
        {
          path: 'order',
          component: require('../components/order.vue')
        },
        {
          path: 'address',
          component: resolve => require(['../components/address.vue'], resolve)
        },
        {
          path: 'addaddress',
          component: require('../components/addaddress.vue')
        },
         {
          path: 'discovery',
          component: require('../components/discovery.vue')
        }]
    },
    // {
    //   path: '/admin',
    //   name: 'Admin',

    //   children: [{
    //     path: 'index',
    //     component: Index
    //   },]
    // },
    {
      path: '*',
      redirect: to => {
        return '/login'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  let ui = Cookies('UI')
  let userInfo = null
  console.log(router.resolve(to.path).resolved)
  let _path = router.resolve(to.path).resolved.path
  if (_path.match(/^\/layout\/classify$/)) {
    store.commit('SET_FLAG', {navbar: true,tabbar: true})
  }
  let _index = router.resolve(to.path).resolved.matched.findIndex(comp => {
    return comp.meta.auth
  })
  if (ui) {
    userInfo = JSON.parse(Cookies('UI'))
    if (!store.state.userInfo) {
      store.commit('SET_USER', userInfo)
    }
  }
  if (_index > -1 && !userInfo) {
    next({ path: '/login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})
export default router
