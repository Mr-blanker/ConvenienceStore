<template>
    <div class="bg-base">
        <div class="logo-base">
            <span class="logo-icon"></span>
        </div>
        <div class="user-login fixed-clear">
            <yd-cell-group class="set-border-radius">
                <yd-cell-item class="set-bottom-border">
                    <span slot="left"><i class="user"></i></span>
                    <yd-input slot="right" v-model="user.username" max="20" placeholder="请输入用户名" :showSuccessIcon="false"></yd-input>
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left"><i class="lock"></i></span>
                    <yd-input slot="right" type="password" v-model="user.password" placeholder="请输入密码" :showSuccessIcon="false"></yd-input>
                </yd-cell-item>
            </yd-cell-group>
            <yd-button size="large" type="warning" class="re-btn" @click.native="login">登录</yd-button>
            <div class="account-operation">
                <span class="forget-password"><router-link to="">忘记密码？</router-link></span>
                <span class="go-register"><router-link to="/register">还没有帐号？注册</router-link></span>
            </div>
        </div>
        <div class="footer fixed-clear">
            <span class="line"></span>
            <h5>第三方登录</h5>
            <div class="third-party">
                <span class="qq-icon">QQ</span>
                <span class="wechat-icon">wechat</span>
                <span class="weibo-icon">weibo</span>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapActions} from 'vuex'
    export default {
        name: 'login',
        data() {
            return {
                user: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions(['onLogin']),
            login() {
                this.onLogin(this.user).then(d => {
                    if(!this.$route.query.redirect){
                    this.$router.push('/layout/index')}
                    else{
                         this.$router.push(this.$route.query.redirect)
                    }
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../scss/public.scss';
    .user-login {
        margin: 0 auto;
        .account-operation {
            margin: 18px 0 0 0;
            .forget-password,
            .go-register {
                font-size: 24px;
                color: #fff;
            }
            .go-register {
                float: right;
            }
        }
    }
    .footer {
        color: #fff;
        position: relative;
        text-align: center;
        padding: 90px 0 0 0;
        .line {
            display: block;
            height: 1px;
            /*no*/
            background-color: #fff;
            width: 350px;
            margin: 0 auto;
        }
        h5 {
            display: block;
            background-color: #ffa11b;
            width: 150px;
            height: 50px;
            line-height: 50px;
            margin: -25px auto 0;
        }
        .third-party {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .qq-icon,
            .wechat-icon,
            .weibo-icon {
                width: 92px;
                height: 92px;
                border-radius: 46px;
                border: 1px solid #fff;
                text-indent: -9999px;
                margin: 80px 0 0 0;
            }
            .qq-icon {
                background: url('../assets/qq.png') no-repeat;
                background-position: center center;
                background-size: 50%;
            }
            .wechat-icon {
                background: url('../assets/weixin.png') no-repeat;
                background-position: center center;
                background-size: 50%;
            }
            .weibo-icon {
                background: url('../assets/weibo.png') no-repeat;
                background-position: center center;
                background-size: 50%;
            }
        }
    }
</style>