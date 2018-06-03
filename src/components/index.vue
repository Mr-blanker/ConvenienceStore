<template>
    <div>
        <div class="re-slider">
            <yd-slider autoplay="3000" class="set-height">
                <yd-slider-item>
                    <a href="http://www.ydcss.com">
                        <img src="../assets/img1.jpg">
                    </a>
                </yd-slider-item>
                <yd-slider-item>
                    <a href="http://www.ydcss.com">
                        <img src="../assets/img1.jpg">
                    </a>
                </yd-slider-item>
                <yd-slider-item>
                    <a href="http://www.ydcss.com">
                        <img src="../assets/img1.jpg">
                    </a>
                </yd-slider-item>
            </yd-slider>
        </div>
        <div class="divide-item">
            <yd-grids-group :rows="4">
                <yd-grids-item>
                    <img slot="icon" src="../assets/limit.png">
                    <span slot="text">限时抢购</span>
                </yd-grids-item>
                <yd-grids-item>
                    <img slot="icon" src="../assets/today.png">
                    <span slot="text">今日上新</span>
                </yd-grids-item>
                <yd-grids-item>
                    <img slot="icon" src="../assets/good.png">
                    <span slot="text">好货排行</span>
                </yd-grids-item>
                <yd-grids-item>
                    <img slot="icon" src="../assets/nec.png">
                    <span slot="text">出行必备</span>
                </yd-grids-item>
            </yd-grids-group>
            <yd-grids-group :rows="4">
                <yd-grids-item>
                    <img slot="icon" src="../assets/furniture.png">
                    <span slot="text">家具护理</span>
                </yd-grids-item>
                <yd-grids-item>
                    <img slot="icon" src="../assets/home-ele.png">
                    <span slot="text">五金家电</span>
                </yd-grids-item>
                <yd-grids-item>
                    <img slot="icon" src="../assets/clean.png">
                    <span slot="text">清洁洗护</span>
                </yd-grids-item>
                <yd-grids-item>
                    <img slot="icon" src="../assets/drink.png">
                    <span slot="text">酒水饮料</span>
                </yd-grids-item>
            </yd-grids-group>
            <div class="notice">
                <div class="notice-block">
                    <img src="../assets/horn.png">
                    <em>最新</em>
                    <span>公告</span>
                </div>
                <yd-rollnotice autoplay="2000" class="flex-one">
                    <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>荣耀V9 3月超级钜惠！</yd-rollnotice-item>
                    <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>3.23京东超级品牌日格力盛典</yd-rollnotice-item>
                    <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>京东服饰 早春新品低至7折</yd-rollnotice-item>
                </yd-rollnotice>
                <span class="more">更多</span>
            </div>
        </div>
        <div class="recommend">
            <div class="snacks">
                <div class="snacks-header">
                    <i class="lf"></i>
                    <h2>花样美食</h2>
                    <i class="rt"></i>
                </div>
                <div class="snacks-img">
                    <img src="../assets/bwc1.jpg" alt="">
                    <img src="../assets/bwc2.jpg" alt="">
                </div>
            </div>
            <div class="clean">
                <div class="clean-header">
                    <i class="lf"></i>
                    <h2>个人清洁</h2>
                    <i class="rt"></i>
                </div>
                <div class="clean-img">
                    <img src="../assets/pt1.jpg" alt="">
                    <img src="../assets/pt2.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="hot-recommend">
            <img src="../assets/img2.jpg" alt="">
            <img src="../assets/img3.jpg" alt="">
            <img src="../assets/img2.jpg" alt="">
            <img src="../assets/img3.jpg" alt="">
        </div>
    </div>
</template>
<script>
    import {
        mapMutations
    } from 'vuex'
    export default {
        name: 'index',
        data() {
            return {}
        },
        methods: {
            ...mapMutations(['SET_FLAG'])
        },
        created() {
            this.SET_FLAG({
                navbar: true,
                tabbar: true
            })
        }
    }
</script>
<style lang="scss" scoped>
    .re-slider {
        width: 100%;
        height: 335px;
        padding: 90px 0 0 0;
    }
    .set-height {
        height: 245px;
    }
    .divide-item img {
        height: 100%;
    }
    .flex-one {
        flex: 1;
    }
    .notice {
        display: flex;
        background-color: #fff;
        justify-content: center;
        align-items: center;
        color: #212827;
        .more {
            margin: 0 30px 0 0;
        }
        .more:before {
            content: "|";
            margin: 0 30px 0 0;
        }
        .notice-block {
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                display: inline-block;
                width: 55px;
                height: 50px;
                margin: 0 0 0 30px;
            }
            span {
                display: block;
                font-size: 26.56px;
                font-style: italic;
                font-weight: bold;
                padding: 0 50px 0 0;
            }
            em {
                display: block;
                font-style: italic;
                font-weight: bold;
                display: block;
                color: #db383c;
            }
        }
    }
    .recommend {
        width: 100%;
        height: 270px;
        background-color: #fff;
        margin: 22px 0 0 0;
        padding: 0 40px 20px;
        display: flex;
        justify-content: space-between;
        color: #005678;
        font-size: 35px;
        align-items: flex-end;
        img {
            width: 50%;
            height: 171px;
        }
        img:nth-child(2n) {
            margin: 0 -30px 0 0;
        }
        .snacks,
        .clean {
            width: 40%;
            height: 220px;
            border: 1px solid #005678;
            /*no*/
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            .clean-img,
            .snacks-img {
                align-self: flex-end;
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 180px;
                background-color: #fff;
                justify-content: space-between;
                align-items: flex-end;
                margin: 0 0 -5px -20px;
            }
            .snacks-header,
            .clean-header {
                height: 40px;
                line-height: 40px;
                background-color: #fff;
                margin: -20px 0 0 0;
                display: flex;
                h2 {
                    display: block;
                }
                .lf,
                .rt {
                    align-self: center;
                    display: block;
                    width: 10px;
                    height: 10px;
                    background-color: #005678;
                    border-radius: 10px;
                    margin: 0 20px;
                }
            }
        }
    }
    .hot-recommend {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        img {
            width: 49%;
            height: 136px;
            margin: 25px 0 0 0;
        }
        img:nth-child(2n) {
            align-self: flex-end;
        }
    }
</style>