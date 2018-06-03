<template>
    <div class="layout">
        <navbar v-show="showflag.navbar"></navbar>
        <div class="home">
            <router-view></router-view>
        </div>
        <yd-tabbar :fixed="fix" v-show="showflag.tabbar">
            <yd-tabbar-item title="主页" link="/layout/index">
                <img slot="icon" src="../assets/home.png">
            </yd-tabbar-item>
            <yd-tabbar-item title="分类" link="/layout/classify">
                <img slot="icon" src="../assets/divide.png">
            </yd-tabbar-item>
            <yd-tabbar-item title="发现" link="/layout/discovery">
                <img slot="icon" src="../assets/find.png">
            </yd-tabbar-item>
            <yd-tabbar-item title="购物车" link="/layout/cart">
                <img slot="icon" src="../assets/shopcar.png">
            </yd-tabbar-item>
            <yd-tabbar-item title="我的" link="/layout/personal">
                <img slot="icon" src="../assets/person.png">
            </yd-tabbar-item>
        </yd-tabbar>
    </div>
</template>
<script>
    import navbar from '../components/navbar.vue'
    import {
        mapGetters,
        mapMutations
    } from 'vuex'
    export default {
        name: 'layout',
        data() {
            return {
                fix:true
            }
        },
        computed: {
            ...mapGetters(['flag']),
            showflag() {
                console.log(JSON.stringify(this.flag)+"aass")
                return this.flag
            }
        },
        components: {
            navbar
        }
    }
</script>
<style lang="scss" scoped>
    .home {
        overflow: scroll;
        padding: 0 0 120px 0;
    }
</style>