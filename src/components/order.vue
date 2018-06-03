<template>
    <div>
        <backnavbar header="我的订单" :rightshow="true" classname="zh-icon-msg"></backnavbar>
        <div class="state-box">
            <span class="active">全部</span>
            <span>待提交</span>
            <span>待确认</span>
            <span>代收货</span>
            <span>待评价</span>
        </div>
        <div class="order-content">
            <div class="order-items">
                <div class="order-items-header">
                    <span>长城干红葡萄酒</span>
                    <span :class="classname">待提交</span>
                </div>
                <div class="order-items-content">
                    <img src="../assets/bwc1.jpg" alt="">
                    <div class="order-items-details">
                        生产许可证编号: SC11333011005479厂名: 杭州顶莱食品有限公司厂址: 浙江省杭州市余杭区良渚街道运河村厂家联系方式: 0571-88761891配料表: 白砂糖、（部分氢化）植物油、麦片、可可粉、可可脂、可可液块、全脂奶粉。储藏方法: 低于25度通风处保质期: 180食品添加剂: 乳化剂（磷脂）、香兰素、食用香精净含量: 500g包装方式: 包装包装种类: 礼盒装品牌: 诺梵系列: 燕麦巧克力巧克力品类: 其他/other是否含糖: 含糖产地: 中国大陆省份: 浙江省
                    </div>
                    <div class="goods-price">
                        <span>{{139|formatMoney}}</span>
                        <span>{{139|formatMoney}}</span>
                    </div>
                </div>
                <div class="order-items-footer">
                    <div class="total-prices">
                        <span>共9件商品</span>
                        <span>合计：{{139|formatMoney}}</span>
                    </div>
                    <div class="order-btn">
                        <button>修改</button>
                        <button>删除</button>
                        <button>提交</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import backnavbar from '../components/backnavbar'
    import {
        mapMutations
    } from 'vuex'
    export default {
        name: 'order',
        data() {
            return {
                classname: 'stay-submit'
            }
        },
        methods: {
            ...mapMutations(['SET_FLAG'])
        },
        components: {
            backnavbar
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
    .active {
        color: #ffa11b;
        border-bottom: 3px solid #ffa11b;
    }
    .stay-submit {
        color: #ffad85;
    }
    .state-box {
        margin: 90px 0 0;
        display: grid;
        color: #8c8c8c;
        background-color: #fff;
        font-size: 35px;
        grid-template-columns: 20% 20% 20% 20% 20%;
        grid-template-rows: 80px;
        span {
            line-height: 80px;
            text-align: center;
        }
    }
    .order-content {
        margin: 5px 0 0;
        color: #8c8c8c;
        .order-items {
            display: flex;
            flex-direction: column;
            .order-items-header {
                width: 100%;
                height: 100px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 20px;
                background-color: #fff;
                font-size: 32px;
                span:first-child:before {
                    content: "|";
                    color: #ffa11b;
                }
            }
            .order-items-content {
                width: 100%;
                height: 180px;
                display: flex;
                padding: 0 20px;
                justify-content: space-between;
                align-items: center;
                img {
                    display: inline-block;
                    width: 120px;
                    height: 120px;
                }
                .order-items-details {
                    height: 80px;
                    width: 70%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin: 0 100px;
                }
                .goods-price {
                    text-align: center;
                }
            }
            .order-items-footer {
                display: flex;
                flex-direction: column;
                background-color:#fff;
                padding:0 20px;
                .total-prices,.order-btn {
                    text-align:right;
                     padding:20px 0;
                }
                .order-btn {
                    border-top:1px solid #c3c3c3;
                }
                .order-btn button{
                    border:1px solid #9c9c9c;
                    width:150px;
                    height:50px;
                    border-radius:25px;
                }

            }
        }
    }
</style>