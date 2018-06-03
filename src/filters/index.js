import Vue from 'vue'
// 格式化价格数字
Vue.filter('formatMoney', (value) => {
  return '￥' + value.toFixed(2)
})

// 格式化个数数字
Vue.filter('formatCount', (value) => {
  return '×' + value
})
