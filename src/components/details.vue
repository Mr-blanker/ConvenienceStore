<template>
    <div class="details-wrap">
        <yd-navbar :fixed="fix">
            <router-link to="/layout/classify" slot="left">
                <yd-navbar-back-icon color="#ffa11b"></yd-navbar-back-icon>
            </router-link>
            <router-link to="#" slot="right">
                <i class="zh-icon-msg"></i>
            </router-link>
        </yd-navbar>
        <div class="detail-content">
            <img :src="item.show_img" alt="">
            <div class="detail-header">
                <yd-badge type="danger">自营</yd-badge>
                <span>{{item.goods_name}}</span>
                <div class="price">{{item.price|formatMoney}}</div>
                <div class="detail">{{item.details}}</div>
            </div>
        </div>
        <yd-tabbar :fixed="fix">
            <yd-tabbar-item link="/layout/cart">
                <yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
                <yd-badge slot="badge" type="danger">{{count}}</yd-badge>
            </yd-tabbar-item>
            <div>
                <yd-spinner v-model="goodsInfo.itemAmount">
                    <yd-spinner></yd-spinner>
                </yd-spinner>
            </div>
            <button class="add-cart" @click="addGoods(goodsInfo.cid=item.cid,goodsInfo.gid=item.id)">加入购物车</button>
        </yd-tabbar>
    </div>
</template>
<script>
    import {
        mapGetters,
        mapMutations,
        mapActions
    } from 'vuex'
    export default {
        name: 'details',
        data() {
            return {
                fix: true,
                goodsInfo: {
                    cid: '',
                    gid: '',
                    itemAmount: 1
                }
            }
        },
        methods: {
            ...mapMutations(['SET_FLAG', ]),
            ...mapActions(['getCart', 'addCart']),
            addGoods() {
                // console.log(this.goodsInfo)
                this.addCart(this.goodsInfo).then(d => {
                    this.getCart()
                })
            }
        },
        computed: {
            ...mapGetters(['appointGoods', 'cartGoods']),
            item() {
                return this.appointGoods
            },
            count() {
                return this.cartGoods?this.cartGoods.length:0
            }
        },
        created() {
            this.SET_FLAG({
                    navbar: false,
                    tabbar: false
                }),
                this.getCart()
        }
    }
</script>
<style lang="scss" scoped>
    @import '../scss/reset.scss';
    .zh-icon-msg {
        color: #ffa11b;
        font-size: 50px;
    }
    .details-wrap {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        .detail-content {
            width: 100%;
            img {
                width: 100%;
                height: 670px;
            }
            .detail-header {
                width: 100%;
                background-color: #fff;
                min-height: 240px;
                font-size: 32px;
                span {
                    text-align: center;
                }
                .price {
                    color: red;
                    font-size: 55px;
                    padding: 20px;
                }
                ,
                .detail {
                    padding: 20px;
                }
            }
        }
        .add-cart {
            width: 287px;
            height: 96px;
            border: none;
            color: #fff;
            font-size: 30px;
            background-color: #ff3c25;
            margin: 0 0 0 80px;
        }
    }
</style>