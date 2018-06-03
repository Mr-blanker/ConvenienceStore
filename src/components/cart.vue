<template>
    <div>
        <div class="cart-navbar">
            <yd-navbar title="购物车" bgcolor="#ffa11b" color="#fff" :fixed="true">
                <router-link to="#" slot="left" color="#fff">
                    <i class="zh-icon-left" onclick="window.history.go(-1)"></i>
                </router-link>
                <router-link to="#" slot="right">
                    <div @click.natvie="editing">
                        <span class="complete" v-show="!edit">完成</span>
                        <span class="complete" v-show="edit">编辑</span>
                    </div>
                </router-link>
                <router-link to="/layout/message" slot="right">
                    <i class="zh-icon-msg"></i>
                </router-link>
            </yd-navbar>
        </div>
        <div class="goods-list" v-for="(item,index) in cartGood" :key="index">
            <div :class="{'set-bgcolor':index%2==0,'cart-items':true}">
                <yd-checkbox :val="index+1" color="#ffa11b" v-model="toggleSum[index]" class="check-goods" @click.native="selectAdd(tempIndex=index,tempPrice=item.price)">
                </yd-checkbox>
                <img :src="item.show_img" alt="">
                <div class="cart-content">
                    {{item.goods_name}}
                </div>
                <div class="goods-count">
                    <yd-spinner min="1" max="100" unit="1" v-model="spinner[index]=item.itemAmount" v-show="!edit"></yd-spinner>
                    <span v-show="edit">{{item.itemAmount|formatCount}}</span>
                    <span class="goods-prices">{{item.price*item.itemAmount|formatMoney}}</span>
                    <button v-show="delflag" @click="delGood(tempGoodId=item.id)">删除</button>
                </div>
            </div>
        </div>
        <div class="check-out">
            <yd-checkbox val="全选" v-model="toggle" @click.native="selectAll" color="#ffa11b"></yd-checkbox>
            <div class="goods-price">
                {{totalPrice|formatMoney}}
                <span>商品</span>
            </div>
            <button class="settlement">去结算({{totalCount/2}})</button>
        </div>
    </div>
</template>
<script>
    import {
        mapMutations,
        mapActions,
        mapGetters
    } from 'vuex'
    export default {
        name: 'cart',
        data() {
            return {
                spinner: [],
                toggleSum: '',
                tempData: [],
                tempIndex: '',
                selectCount: [],
                selFlag: '',
                delflag: false,
                edit: true,
                count: [],
                priceSum: [],
                toggle: false,
                tempGoodId: '',
                tempPrice: ''
            }
        },
        methods: {
            ...mapActions(['getCart', 'delCart']),
            ...mapGetters(['cartGoods']),
            ...mapMutations(['SET_FLAG']),
            editing() {
                this.delflag = !this.delflag
                this.edit = !this.edit
            },
            selectAdd() {
                if (!this.toggleSum[this.tempIndex]) {
                    this.count.push(...(this.spinner[this.tempIndex]))
                    this.priceSum.push(this.tempPrice)
                } else if (this.toggleSum[this.tempIndex]) {
                    this.count.splice(this.tempIndex, 1)
                }
            },
            selectAll() {
                if (this.toggle) {
                    this.toggleSum.fill(false)
                    this.count.splice(0)
                    this.priceSum.splice(0)
                }
                if (!this.toggle) {
                    if (this.cartGood.length < this.count.length)
                        this.count.splice(0)
                    this.count.push(...(this.spinner))
                    this.toggleSum.fill(true)
                }
            },
            delGood() {
                this.delCart(this.tempGoodId).then(d => {
                    if (d.msg === '删除成功！') {
                        this.getCart()
                    }
                })
            }
        },
        computed: {
            totalPrice() {
                let priceSum = 0
                for (let items of this.priceSum) {
                    priceSum += Number(items)
                }
                return priceSum
            },
            totalCount() {
                let sum = 0
                for (let items of this.count) {
                    sum += Number(items)
                }
                return sum
            },
            cartGood() {
                return this.cartGoods()
            }
        },
        created() {
            this.SET_FLAG({
                navbar: false,
                tabbar: true
            })
            this.getCart()
            let len = this.cartGood.length
            this.toggleSum = new Array(len).fill(false)
            this.selFlag = new Array(len).fill(false)
            console.log(this.toggleSum)
        }
    }
</script>
<style lang="scss" scoped>
    .zh-icon-left {
        color: #fff;
        font-size: 38px;
    }
    .cart-navbar {
        margin: 100px 0 0;
    }
    .complete {
        color: #fff;
    }
    .back-icon {
        color: #fff !important;
    }
    .zh-icon-msg {
        color: #fff;
        font-size: 50px;
    }
    .cart-items {
        background-color: #f2f2f2;
        width: 100%;
        height: 160px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border-bottom: 1px solid #e0e0e0;
    }
    .check-goods {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .goods-list img {
        display: inline-block;
        border: 1px solid #dedede;
        width: 104px;
        height: 98px;
        margin: 0 0 0 20px;
        vertical-align: middle;
    }
    .set-bgcolor {
        background-color: #fff !important;
    }
    .cart-content {
        width: 300px;
        height: 160px;
        line-height: 160px;
        text-overflow: ellipsis;
        overflow: hidden;
        margin: 0 0 0 30px;
    }
    .goods-count {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .goods-prices {
            display: block;
            text-align: center;
            color: #fe3232;
        }
        button {
            border: none;
            background-color: #ff3c25;
            color: #fff;
            height: 100%;
            width: 80%;
            font-size: 32px;
            display: inline-block;
            text-align: center;
        }
    }
    .check-out {
        width: 100%;
        height: 95px;
        background-color: #fff;
        position: fixed;
        bottom: 115px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0 0 30px;
        .goods-price {
            display: flex;
            color: #ff3c25;
            font-size: 24px;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            margin: 0 0 0 220px;
            span {
                color: #676767;
                text-align: center;
            }
        }
        .settlement {
            width: 195px;
            height: 96px;
            border: none;
            background-color: #ff3c25;
            font-size: 28px;
            color: #fff;
        }
    }
</style>