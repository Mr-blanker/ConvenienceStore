<template>
  <div>
    <div class="search-navbar">
      <i class="zh-icon-left" onclick="window.history.go(-1)"></i>
      <input type="text" placeholder="百味草零食">
      <i class="btn-search">搜索</i>
    </div>
    <div class="hot-search">
      <div class="hotsearch-header">热搜</div>
      <div class="set-padding">
        <yd-badge>电蚊香</yd-badge>
        <yd-badge>花露水</yd-badge>
        <yd-badge>三只松鼠</yd-badge>
        <yd-badge>百草味</yd-badge>
        <yd-badge>抽纸</yd-badge>
        <yd-badge>电蚊香</yd-badge>
        <yd-badge>花露水</yd-badge>
        <yd-badge>三只松鼠</yd-badge>
        <yd-badge>百草味</yd-badge>
        <yd-badge>抽纸</yd-badge>
      </div>
    </div>
    <div class="history-wrap">
      <div class="history-search">
        <div class="historysearch-header">历史搜索</div>
        <div class="historysearch-items">羊奶粉</div>
        <div class="historysearch-items">猫砂</div>
      </div>
      <div class="empty-history">
        <div class="history-btn">
          <span class="delete-history"></span>
          <span class="btn-delete-history">清空历史搜索</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    mapMutations,
    mapActions
  } from 'vuex'
  export default {
    name: 'search',
    data() {
      return {
        hotsearch: []
      }
    },
    methods: {
      ...mapMutations(['SET_FLAG'])
    },
    created() {
      this.SET_FLAG({
        navbar: false,
        tabbar: false
      })
    }
  }
</script>
<style lang="scss" scoped>
  body {
    background-color: #fff !important;
  }
  .search-navbar {
    display: flex;
    width: 100%;
    height: 90px;
    align-items: center;
    justify-content: center;
    background-color: #ffa11b;
    position: fixed;
    text-align: center;
    top: 0;
    left: 0;
    z-index: 200;
    input {
      flex: 1;
      border: none;
      height: 46px;
      width: 565px;
      border-radius: 40px;
      background: url(../assets/big.png) no-repeat #fff;
      background-size: 38px 38px;
      background-position: 30px 5px;
      padding: 0 0 0 80px;
      margin: 0 20px;
    }
    .zh-icon-left,
    .btn-search {
      font-size: 35px;
      color: #fff;
      vertical-align: middle;
      margin: 0 20px;
    }
  }
  .hot-search {
    width: 100%;
    min-height: 170px;
    background-color: #fff;
    margin: 90px 0 20px 0;
    padding: 10px;
    .hotsearch-header {
      width: 100%;
      height: 40px;
      line-height: 40px;
      display: block;
      font-size: 30px;
      margin: 0 0 10px;
    }
    .set-padding {
      padding: 20px;
      .badge {
        margin: 10px 0 0;
      }
    }
  }
  .history-wrap {
    width: 100%;
    height: 78%;
    position: absolute;
    bottom: 0;
    padding: 0 0 30px 0;
    background-color: #fff;
    .history-search {
      width: 100%;
      background-color: #fff !important;
      &>div {
        min-height: 90px;
        line-height: 90px;
        padding: 0 20px;
        color: #5e6060;
        border-bottom: 2px solid #e1e3e7;
      }
      .historysearch-header {
        color: #000;
        border-bottom: 2px solid #e1e3e7;
        font-size: 30px;
        font-weight: bold;
      }
    }
    .empty-history {
      width: 40%;
      height: 66px;
      background-color: #fff;
      margin: 115px auto 0;
      color: #5e6060;
      padding: 0 30px;
      font-size: 33px;
      display: flex;
      border: 1px solid #5e6060;
      border-radius: 10px;
      justify-content: center;
      align-items: center;
      .delete-history {
        width: 43px;
        height: 47px;
        display: inline-block;
        background: url(../assets/delete.png) no-repeat;
        background-size: cover;
        vertical-align: middle;
      }
    }
  }
</style>