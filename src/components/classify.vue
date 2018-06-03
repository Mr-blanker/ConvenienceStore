<template>
  <div>
    <div class="goodstab">
      <div class="goodsnav">
        <div v-for="(item,index) in goodslist" @click="getGoodsAssign(tempCid=item.cid)">
          <a href="javascript:;" class="goodsnav-items">{{item.cat_name}}</a>
        </div>
      </div>
      <div class="goodscontent">
        <div class="content-header">
          <span>{{assignlist.cat_name}}</span>
        </div>
        <div class="content">
          <div class="content-items" v-for="(item,index) in assignlist.goods_list" @click="getGoodsAppoint(tempId=item.id)">
            <div>
              <img :src="item.show_img" alt="">
              <span>{{item.goods_name}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    mapActions,
    mapGetters,
    mapMutations
  } from 'vuex'
  export default {
    name: 'classify',
    data() {
      return {
        tempCid: '',
        tempId: ''
      }
    },
    methods: {
      ...mapActions(['getGoodsList', 'getAssignGoods', 'getAppointGoods']),
      ...mapMutations(['SET_FLAG']),
      getGoodsAssign() {
        this.getAssignGoods(this.tempCid)
      },
      getGoodsAppoint() {
        console.log(this.tempId)
        this.getAppointGoods(this.tempId)
        this.SET_FLAG(false)
        this.$router.push('/layout/details')
      }
    },
    computed: {
      ...mapGetters(['goodsList', 'assignGoods', 'appointGoods']),
      goodslist() {
        console.log(this.goodsList)
        return this.goodsList
      },
      assignlist() {
        console.log(this.assignGoods)
        return this.assignGoods
      },
      appointlist() {
        console.log(this.appointGoods)
        return this.appointGoods
      }
    },
    created() {
      this.getGoodsList()
      this.getAssignGoods(6)
    }
  }
</script>
<style lang="scss" scoped>
  @import '../scss/reset.scss';
  .goodstab {
    width: 100%;
    margin: 100px 0 0 0;
    display: flex;
    .goodsnav {
      width: 20%;
      min-width: 20%;
      display: flex;
      flex-direction: column;
      .goodsnav-items {
        display: block;
        width: 100%;
        min-height: 100px;
        line-height: 100px;
        text-align: center;
        font-size: 32px;
        background-color: #fff;
        margin: 1px 0;

        &:active {
          border-left:2px solid #ffa11b;
          color:#ffa11b;
          background:#f5f5f5;
        }
      }

    }
    .goodscontent {
      background-color: #fff;
      width: 80%;
      font-size: 32px;
      display: flex;
      margin: 0 0 0 4px;
      flex-wrap: wrap;
      .content {
        max-width: 100%;
        display: flex;
        flex-wrap: wrap;
        max-height: 1017px;
        overflow: scroll;
      }
      .content-header {
        width: 100%;
        display: flex;
        background-color: #f5f5f5;
        justify-content: center;
        span {
          height: 100px;
          line-height: 100px;
          text-align: center;
          font-weight: bold;
          &:before,
          &:after {
            content: "---------";
          }
        }
      }
      .content-items {
        width: 100%;
        flex: 1;
        display: flex;
        margin: 30px;
        img {
          display: block;
          width: 140px;
          height: 140px;
        }
        span {
          display: block;
          margin: 40px 0 0 0;
          text-align: center;
        }
      }
    }
  }
</style>