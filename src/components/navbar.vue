<template>
    <div class="navbar">
        <i class="zh-icon-scan" ></i>
        <input type="text" :placeholder="ph" @click="search">
        <i class="zh-icon-msg" @click="msg"></i>
    </div>
</template>
<script>
    export default {
        name: 'navbar',
        data() {
            return {
                ph:'百味草零食'
            }
        },
        methods: {
            search() {
                this.$router.push('/layout/search')
            },
            msg(){
                this.$router.push('/layout/message')
            }
        }
    }
</script>
<style lang="scss" scoped>
    .navbar {
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
        .zh-icon-scan,
        .zh-icon-msg {
            font-size: 45px;
            color: #fff;
            vertical-align: middle;
            margin: 0 20px;
        }
    }
</style>