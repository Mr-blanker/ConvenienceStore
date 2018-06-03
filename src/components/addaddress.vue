<template>
    <div>
        <backnavbar header="添加新地址" :rightshow="true"></backnavbar>
        <div class="add-content">
            <div>
                <yd-cell-group style="color:##656565;">
                    <yd-cell-item>
                        <span slot="left">姓名：</span>
                        <yd-input slot="right" v-model="addressinfo.receiverName" ref="receiverName" required :showClearIcon="false" placeholder="请输入您的姓名"></yd-input>
                    </yd-cell-item>
                    <yd-cell-item>
                        <span slot="left">手机号：</span>
                        <yd-input slot="right" v-model="addressinfo.mobileNumber" ref="mobileNumber" required :showSuccessIcon="false" :showErrorIcon="false" regex="mobile" placeholder="请输入手机号码"></yd-input>
                    </yd-cell-item>
                    <yd-cell-item>
                        <span slot="left">邮编：</span>
                        <yd-input slot="right" v-model="addressinfo.postCode" max="6" ref="postCode" required :showSuccessIcon="false" :showErrorIcon="false" placeholder="请输入邮编"></yd-input>
                    </yd-cell-item>
                    <yd-cell-item arrow>
                        <span slot="left">所在地区：</span>
                        <input slot="right" type="text" @click.stop="show = true" v-model="addressinfo.country" ref="country" readonly placeholder="请选择收货地址">
                    </yd-cell-item>
                    <yd-cell-item>
                        <yd-textarea slot="right" v-model="addressinfo.addressDetail" required ref="addressDetail" placeholder="请填写详细地址，不少于5字" maxlength="100"></yd-textarea>
                    </yd-cell-item>
                </yd-cell-group>
                <yd-cityselect v-model="show" :done="result" :items="district"></yd-cityselect>
            </div>
        </div>
        <div class="add-address" @click="addaddress">
            <span>保存</span>
        </div>
    </div>
</template>
<script>
    import backnavbar from '../components/backnavbar'
    import District from 'ydui-district/dist/jd_province_city_area_id'
    import {
        mapActions,
        mapMutations
    } from 'vuex'
    export default {
        name: 'addaddress',
        data() {
            return {
                addressinfo: {
                    country: '',
                    addressDetail: '',
                    postCode: '',
                    receiverName: '',
                    mobileNumber: ''
                },
                show: false,
                district: District
            }
        },
        methods: {
            ...mapActions(['getAddress', 'setDefaultAddress', 'AddAddress']),
            ...mapMutations(['SET_FLAG']),
            addaddress() {
                let valid = []
                for (let item of Object.keys(this.addressinfo)) {
                    valid.push(this.$refs[item].valid)
                }
                if (!valid.includes(false)) {
                    this.AddAddress(this.addressinfo).then(d => {
                        if (d.msg === '成功')
                            this.$router.push('/layout/address')
                    })
                }
            },
            result(ret) {
                this.addressinfo.country = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
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
    .add-content {
        margin: 90px 0 0;
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
</style>