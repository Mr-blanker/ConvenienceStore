<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
let count = 1
export default {
  name: 'app',
  methods: {
    onClick() {
      alert(count++)
    }
  }
}
</script>
<style lang="scss">
@import  './scss/style.scss';
</style>



