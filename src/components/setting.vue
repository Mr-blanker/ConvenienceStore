<template>
    <div>
        <backnavbar header="设置中心" :rightshow="true"></backnavbar>
        <div class="user-info">
            <div class="user-img">
                <img src="../assets/uimg.png" alt="">
                <span>会飞的猪</span>
            </div>
            <i class="zh-icon-right"></i>
        </div>
        <div class="user-setting">
            <div class="setting-items">
                <span>会员俱乐部</span>
                <i class="zh-icon-right"></i>
            </div>
            <div class="setting-items" @click="address">
                <span>地址管理</span>
                <i class="zh-icon-right"></i>
            </div>
            <div class="setting-items">
                <span>地区设置</span>
                <i class="zh-icon-right"></i>
            </div>
            <div class="setting-items">
                <span>通用</span>
                <i class="zh-icon-right"></i>
            </div>
            <div class="setting-items">
                <span>音效与通知</span>
                <i class="zh-icon-right"></i>
            </div>
        </div>
        <div class="user-setting">
            <div class="setting-items">
                <span>实名认证</span>
                <i class="zh-icon-right"></i>
            </div>
            <div class="setting-items">
                <span>账户安全</span>
                <i class="zh-icon-right"></i>
            </div>
        </div>
        <div class="user-setting">
            <div class="setting-items">
                <span>我的便利宝</span>
                <i class="zh-icon-right"></i>
            </div>
            <div class="setting-items">
                <span>关于手机便利宝</span>
                <i class="zh-icon-right"></i>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
    import backnavbar from '../components/backnavbar'
    import {
        mapMutations,
        mapActions
    } from 'vuex'
    export default {
        name: 'setting',
        data() {
            return {}
        },
        methods: {
            ...mapMutations(['SET_FLAG']),
            address() {
                this.$router.push('/layout/address')
            }
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
    .user-info {
        display: flex;
        width: 100%;
        height: 180px;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        color: #656565;
        margin: 90px 0 0;
        padding: 0 20px;
        border-bottom: 1px solid #ccc;
        .user-img {
            img {
                display: inline-block;
                width: 154px;
                height: 143px;
                vertical-align: middle;
            }
            span {
                display: inline-block;
                font-size: 40px;
                margin: 0 0 0 10px;
            }
        }
        .zh-icon-right {
            color: #b4b4b4;
            font-size: 45px;
        }
    }
    .user-setting {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 20px;
        margin: 20px 0;
        color: #656565;
        background-color: #fff;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        .setting-items {
            display: flex;
            height: 100px;
            font-size: 35px;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ccc;
        }
        .setting-items:last-child {
            border: none;
        }
    }
</style>