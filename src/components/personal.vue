<template>
  <div>
    <div class="banner">
      <div class="banner-header">
        <i class="zh-icon-set"  @click="setting"></i>
        <i class="zh-icon-msg" @click="msg"></i>
      </div>
      <div class="user-img">
        <img src="../assets/uimg.png" alt="">
      </div>
      <div class="user-info">
        <div class="user-integral">
          <span>0</span>
          <span>我的积分</span>
        </div>
        <div class="user-recommend">
          <span>12</span>
          <span>为您推荐</span>
        </div>
        <div class="user-order">
          <span>20</span>
          <span>我的订单</span>
        </div>
      </div>
    </div>
    <div class="order-info">
      <div class="my-order" @click="order">
        <span>
                                        <i class="icon-myorder"></i>
                                        <i class="order-text">我的订单</i>
                                        </span>
        <i class="zh-icon-right"></i>
      </div>
      <div class="my-order-info">
        <div class="box">
          <i class="icon-stayReceipt"></i>
          <span>待收货</span>
        </div>
        <div class="box">
          <i class="icon-stayPay"></i>
          <span>待付款</span>
        </div>
        <div class="box">
          <i class="icon-stayDeliver "></i>
          <span>待发货</span>
        </div>
        <div class="box">
          <i class="icon-refund"></i>
          <span>退货单</span>
        </div>
      </div>
      <div class="my-order-goods">
        <span>
                              <i class="icon-ordergoods"></i>
                              <i class="order-text">叫货订单</i>
                        </span>
      </div>
    </div>
    <div class="operations">
      <div class="operation-items">
        <span><i class="icon-myorder"></i><i class="order-text">我的收藏</i></span>
        <i class="zh-icon-right"></i>
      </div>
      <div class="operation-items">
        <span><i class="icon-coupon"></i><i class="order-text">优惠券</i></span>
        <i class="zh-icon-right"></i>
      </div>
      <div class="operation-items" @click="address">
        <span><i class="icon-address"></i><i class="order-text">收货地址</i></span>
        <i class="zh-icon-right"></i>
      </div>
      <div class="operation-items">
        <span><i class="icon-cusservice"></i><i class="order-text">客服中心</i></span>
        <i class="zh-icon-right"></i>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    mapMutations
  } from 'vuex'
  export default {
    name: 'personal',
    data() {
      return {}
    },
    methods: {
      ...mapMutations(['SET_FLAG']),
      setting(){
        this.$router.push('/layout/setting')
      },
      msg(){
         this.$router.push('/layout/message')
      },
      order(){
         this.$router.push('/layout/order')        
      },
      address(){
         this.$router.push('/layout/address')        
      }
    },
    created() {
      this.SET_FLAG({
        navbar: false,
        tabbar: true
      })
    }
  }
</script>
<style lang="scss" scoped>
  .banner {
    background: url('../assets/banner.png');
    width: 100%;
    height: 403px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-size: cover;
    color: #fff;
    .banner-header {
      display: flex;
      justify-content: space-between;
      padding: 30px;
      .zh-icon-msg,
      .zh-icon-set {
        font-size: 50px;
      }
    }
    .user-img {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        display: inline-block;
        width: 154px;
        height: 143px;
      }
    }
    .user-info {
      width: 100%;
      height: 100px;
      display: flex;
      color: #fff;
      justify-content: space-between;
      .user-integral,
      .user-recommend,
      .user-order {
        width: 33%;
        height: 100%;
        display: flex;
        font-size: 24px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #000;
        opacity: .3;
      }
    }
  }
  .order-text {
    display: inline-block;
    font-size: 35px;
    margin: 0 0 0 35px;
  }
  .zh-icon-right {
    color: #ccc;
    font-size: 25px;
  }
  .order-info {
    width: 100%;
    height: 385px;
    background-color: #fff;
    color: #656565;
    margin: 20px 0;
    padding: 0 30px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    .my-order {
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #d2d2d2;
      .icon-myorder {
        display: inline-block;
        width: 36px;
        height: 42px;
        background: url('../assets/order.png') no-repeat;
        vertical-align: middle;
        background-size: cover;
      }
    }
    .my-order-info {
      height: 145px;
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
      border-bottom: 1px solid #d2d2d2;
      .box {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        align-items: center;
        span {
          margin: 8px 0 0 0;
        }
        .icon-stayReceipt {
          display: inline-block;
          width: 52px;
          height: 47px;
          background: url('../assets/stayReceipt.png');
          background-size: cover;
        }
        .icon-stayPay {
          display: inline-block;
          width: 54px;
          height: 48px;
          background: url('../assets/stayPay.png');
          background-size: cover;
        }
        .icon-stayDeliver {
          display: inline-block;
          width: 56px;
          height: 52px;
          background: url('../assets/stayDeliver .png');
          background-size: cover;
        }
        .icon-refund {
          display: inline-block;
          width: 60px;
          height: 55px;
          background: url('../assets/refund.png');
          background-size: cover;
        }
      }
    }
    .my-order-goods {
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .icon-ordergoods {
        display: inline-block;
        width: 36px;
        height: 43px;
        background: url('../assets/orderGoods.png') no-repeat;
        vertical-align: middle;
        background-size: cover;
      }
    }
  }
  .operations {
    width: 100%;
    padding: 0 30px;
    background-color: #fff;
    display: flex;
    color: #656565;
    flex-direction: column;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    .operation-items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 120px;
      border-bottom: 1px solid #d2d2d2;
      .icon-myorder {
        display: inline-block;
        width: 43px;
        height: 37px;
        background: url('../assets/collection.png') no-repeat;
        background-size: cover;
        vertical-align: middle;
      }
      .icon-coupon {
        display: inline-block;
        width: 43px;
        height: 34px;
        background: url('../assets/coupon.png') no-repeat;
        background-size: cover;
        vertical-align: middle;
      }
      .icon-address {
        display: inline-block;
        width: 34px;
        height: 49px;
        background: url('../assets/address.png') no-repeat;
        background-size: cover;
        vertical-align: middle;
      }
      .icon-cusservice {
        display: inline-block;
        width: 37px;
        height: 43px;
        background: url('../assets/cusService.png') no-repeat;
        background-size: cover;
        vertical-align: middle;
      }
    }
  }
</style>