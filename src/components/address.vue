<template>
    <div>
        <backnavbar header="管理收货地址" :rightshow="true"></backnavbar>
        <div class="address-content" v-show="addressTip">
            <div class="address-items" v-for="(item,index) in addressItem">
                <div class="address-head">
                    <span>{{item.receiverName}}</span>
                    <span>{{item.mobileNumber}}</span>
                </div>
                <div class="address-details">
                    <span>{{item.country}}</span>{{item.addressDetail}}
                </div>
                <div class="address-post">
                    <span>邮编：{{item.postCode}}</span>
                </div>
                <div class="address-operations">
                    <yd-checkbox v-model="open[index]" color="#ffa11b" @click.native="setDefault(tempIndex=index,tempId=item.id)">
                        <span v-show="item.isDefault==1">默认地址</span>
                        <span v-show="item.isDefault==0">设为默认</span>
                    </yd-checkbox>
                </div>
            </div>
        </div>
        <div class="add-address" @click="addaddress">
            <span>添加新地址</span>
        </div>
    </div>
</template>
<script>
    import backnavbar from '../components/backnavbar'
    import {
        mapMutations,
        mapActions,
        mapGetters
    } from 'vuex'
    export default {
        name: 'address',
        data() {
            return {
                open: '',
                tempIndex: '',
                tempId: '',
                addressTip: true
            }
        },
        methods: {
            ...mapActions(['getAddress', 'setDefaultAddress']),
            ...mapMutations(['SET_FLAG']),
            setDefault() {
                this.setDefaultAddress(this.tempId).then(d => {
                    this.getAllAddress()
                })
            },
            getAllAddress() {
                this.getAddress().then(d => {
                    if (d.msg === '暂未添加收货地址') {
                        this.addressTip = false
                    }
                    let index = this.addressItem.findIndex(comp => {
                        return comp.isDefault == 1
                    })
                    this.open = new Array(this.addressItem.length).fill(false)
                    this.open.splice(index, 1, true)
                })
            },
            addaddress() {
                this.$router.push('/layout/addaddress')
            }
        },
        components: {
            backnavbar
        },
        computed: {
            ...mapGetters(['addressList']),
            addressItem() {
                return this.addressList ? this.addressList.sort(function(a, b) {
                    return b.isDefault - a.isDefault;
                }) : []
            }
        },
        watch: {
            open: {
                handler: function(val, oldval) {
                    console.log('新值：' + val + '旧值:' + oldval)
                },
            }
        },
        created() {
            this.SET_FLAG({
                navbar: false,
                tabbar: false
            })
            this.getAllAddress()
        }
    }
</script>
<style lang="scss" scoped>
    .address-content {
        width: 100%;
        margin: 90px 0 0;
        color: #656565;
        display: flex;
        flex-direction: column;
        .address-items {
            width: 100%;
            padding: 15px 25px;
            height: 270px;
            font-size: 35px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            background-color: #fff;
            margin: 0 0 15px;
            .address-head {
                display: flex;
                font-size: 35px;
                justify-content: space-between;
            }
            .address-details {
                display: flex;
                justify-content: space-between;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
    }
    .address-post {
        display: flex;
        justify-content: flex-end;
    }
    .add-address {
        width: 100%;
        height: 100px;
        background-color: #ffa11b;
        color: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        font-size: 35px;
        line-height: 100px;
        text-align: center;
    }
    .address-operations {
        border-top: 1px solid #c3c3c3;
        padding: 15px 0 0;
    }
</style>