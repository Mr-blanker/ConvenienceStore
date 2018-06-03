<template>
        <div class="navbar">
            <i class="zh-icon-left" onclick="window.history.go(-1)"></i>
            <span>{{header}}</span>
            <i :class="classname" v-show="rightshow"></i>
        </div>
</template>
<script>
    export default {
        name: 'backnavbar',
        data() {
            return {}
        },
        props: {
            header: String,
            rightshow: Boolean,
            classname: String
        }
    }
</script>
<style lang="scss" scoped>
    .navbar {
        display: flex;
        width: 100%;
        height: 90px;
        align-items: center;
        background-color: #ffa11b;
        position: fixed;
        top: 0;
        left: 0;
        font-size: 40px;
        color: #fff;
        padding: 20px;
        span {
            display: inline-block;
            margin: 0 auto;
            font-size: 35px;
        }
    }
</style>