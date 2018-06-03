<template>
    <div>
     <backnavbar header="消息" :rightshow="true" classname="zh-icon-add"></backnavbar>
    </div>
</template>
<script>
    import backnavbar from '../components/backnavbar'
    import {
        mapMutations
    } from 'vuex'
    export default {
        name: 'message',
        data() {
            return {}
        },
        methods:{
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

</style>