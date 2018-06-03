<template>
    <div class="bg-base">
        <router-link to="/login" slot="left">
            <i class="back-login"></i>
        </router-link>
        <div class="logo-base">
            <span class="logo-icon"></span>
        </div>
        <div class="register-form">
            <yd-cell-group class="set-border-radius">
                <yd-cell-item class="set-bottom-border">
                    <span slot="left"><i class="user"></i></span>
                    <yd-input slot="right" required v-model="registerform.username" max="20" :showSuccessIcon="false" placeholder="请输入用户名"></yd-input>
                </yd-cell-item>
                <yd-cell-item class="set-bottom-border">
                    <span slot="left"><i class="lock"></i></span>
                    <yd-input slot="right" required type="password" v-model="registerform.password" :showSuccessIcon="false" placeholder="请输入密码"></yd-input>
                </yd-cell-item>
                <yd-cell-item class="set-bottom-border">
                    <span slot="left"><i class="email"></i></span>
                    <yd-input slot="right" required type="email" v-model="registerform.email" :showSuccessIcon="false" placeholder="请输入邮箱"></yd-input>
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left"><i class="tel"></i></span>
                    <yd-input slot="right" required type="tel" v-model="registerform.tel" :showSuccessIcon="false" placeholder="请输入手机号码"></yd-input>
                </yd-cell-item>
            </yd-cell-group>
            <yd-button size="large" type="warning" class="re-btn" @click.native="_register">注册</yd-button>
            <span class="user-agree">注册即视为同意便利宝App用户协议</span>
        </div>
    </div>
</template>
<script>
    import { mapActions} from 'vuex'
    export default {
        name: 'register',
        data() {
            return {
                registerform: {
                    username: '',
                    password: '',
                    email: '',
                    tel: ''
                }
            }
        },
        methods: {
            ...mapActions(['register']),
            _register() {
                this.register(this.registerform).then(d => {
                    this.$dialog.toast({
                        mes: '恭喜你！注册成功啦！',
                        timeout: 2000,
                        icon: 'success',
                        callback: () => {
                            this.$router.push('/login')
                        }
                    })
                }, d => {
                    this.$dialog.toast({
                        mes: '对不起！注册失败啦！',
                        timeout: 2000,
                        icon: 'error'
                    })
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../scss/public.scss';
    .back-login {
        display: inline-block;
        width: 20px;
        height: 35px;
        background: url(../assets/back.png) no-repeat;
        background-size: 100%;
        position: absolute;
        top: 60px;
        left: 30px;
    }
    .register-form {
        text-align: center;
        .user-agree {
            display: inline-block;
            color: #fff;
            margin: 10px 0 0 0;
            text-align: center;
        }
    }
</style>