// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '@/store'
import plugin from '@/plugins'
import directives from './directives'
import filters from './filters'
import router from './router'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
import 'vue-ydui/dist/lib.rem/cityselect'
import * as api from '@/api/index'
import cookies from 'cookies-js'
import './scss/reset.scss'
// import './scss/style.scss'

Vue.config.productionTip = false
// 关闭生产模式下给出的提示
Vue.use(plugin, {})
Vue.use(YDUI)

window.Cookies = cookies

// 注册指令
for (let directive of directives) {
  Vue.directive(directive.name, directive)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App}
})
