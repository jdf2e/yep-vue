<template>
    <div>
        <div class="Yep-address-list">
            <ul v-if="addressList">
                <li v-for="(item,key) in addressList"
                    v-touch:swipeleft="handleSwipeleft"
                    v-touch:swiperight="handleSwiperight"
                    :class="{'swipe-left':swipeleftKey===key}"
                    :dataKey="key"
                    :dataId="item.id"
                >

                <div class="box">
                    <div class="icon-check" v-if="item.id==propsAddressId || (propsAddressId==0 && key ==0)"
                         @click="handleAddressSelect(item,key)">
                        <i></i>
                    </div>
                    <div class="detail" :class="{disabled:item.skuSupportShip===false}"
                         @click="handleAddressSelect(item,key)">
                        <dt :style="{'margin-top':item.addressDefault||item.bindFreePay?'-.1rem':0}">
                                <span class="name"
                                      :class="{red:item.id==propsAddressId || (propsAddressId==0 && key ==0)}">{{item.name}}</span>
                            <span class="mobile"
                                  :class="{red:item.id==propsAddressId || (propsAddressId==0 && key ==0)}">{{item.mobileShow}}</span>
                        <p :style="{'padding-top':item.addressDefault||item.bindFreePay?'.1rem':0}">
                            <span class="red-rect-text" v-if="item.addressDefault">默认</span>
                            <span class="blue-rect-text" v-if="item.bindFreePay">已免密验证</span>
                        </p>

                        <!--<i class="icon-bind-free-pay" v-if="item.bindFreePay"></i>-->
                        </dt>
                        <dd>
                            <p>{{item.fullAddress}}</p>
                        </dd>
                    </div>
                    <a href="javascript:void(0)"
                       class="edit-address"
                       @click="handleEditAddress(item,key)"
                       :class="{'swipe-left':swipeleftKey===key}"
                    ><i class="icon-edit-address"></i>
                    </a>

                </div>
                <div class="extra-btn" :class="{show:swipeleftKey===key}">
                    <div class="set-default" @click="handleSetDefaultAddress(item.id)">
                        <a href="javascript:void(0)">设为默认</a>
                    </div>
                    <div class="set-delete" @click="handleDeleteAddress(item.id,key)">

                        <a href="javascript:void(0)">删除</a>
                    </div>

                </div>
                </li>
            </ul>
            <Yep-submit btnText="+ 新建地址" @handleSubmitClick="handleSubmitClick"></Yep-submit>

        </div>

    </div>
</template>
<script>
    import addressService from './../../../assists/js/addressService'
    //        import orderSubmit from './../../submit'

    export default {
        data () {
            return {
                url: window.location.href,
                swipeleftKey: false,
                addressList: [],
                propsAddressId: (location.href.match(/id=(\d+).*/) && location.href.match(/id=(\d+).*/).length !== 0) ? location.href.match(/id=(\d+).*/)[1] : 0

            }
        },
        created: function () {

            this.getAddressList()
        },
        methods: {
//            handlePress(vnode){
//
//                this.$confirm({
//                    title: '是否删除地址?',
//                    message: '',
//                    submit: () => {
//
//                        this.handleDeleteAddress(vnode.data.attrs.dataId);
//                    }
//                });
//            },
            compare(property){
                return function (a, b) {
                    var value2 = a[property];
                    var value1 = b[property];
                    if (value1 < value2) {
                        return -1;
                    } else if (value1 > value2) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            },
            getAddressList(type, id){
                addressService.getAddressList().then(ret => {

                    console.log(ret);
                    if (ret.code === 0 && ret.data.addressVOList) {
                        this.addressList = ret.data.addressVOList;
                        this.swipeleftKey = false;
                    }
                    console.log(this);
                })
            },
            handleDeleteAddress(id, key){
                addressService.deleteAddress({id: id}).then(ret => {

                    if (ret.data && ret.data.resultCode === 0) {
                        this.$toast({
                            isImage: true,
                            message: '删除地址成功',
                            duration: 1500,
                        })
                        return ret;
                    }

                }).then(ret => {
                    if (ret) {
                        this.getAddressList('delete', id);
                    }
                })

            },
            handleSetDefaultAddress(id){
                addressService.setAddressAllDefault({id: id}).then(ret => {

                    if (ret.data && ret.data.resultCode === 0) {
                        this.$toast({
                            isImage: true,
                            message: '设置默认成功',
                            duration: 1500,
                        })
                        return ret;
                    }

                }).then(ret => {
                    if (ret) {
                        this.getAddressList();
                    }
                })
            },
            handleAddressSelect(item, key, noBack) {

                if (item.skuSupportShip === false) {
                    this.$toast({
                        isImage: true,
                        message: '您选择的地址不可用，请重新选择',
                        duration: 1500,
                    })
                    return;
                }

//                this.receiveIndex = key;
                this.$store.state.currentSelectedReceiveIndex = item.id

                window.sessionStorage.currentSelectedReceiveIndex = item.id;
                this.$store.dispatch('SET_CURRENT_ADDRESS', item)

                if (!noBack) {
                    this.$router.go(-1)
                }

            },
            handleSwipeleft(vnode){

                this.swipeleftKey = vnode.data.attrs.dataKey;
            },
            handleSwiperight(){
                this.swipeleftKey = false;
            },
            handleEditAddress(item, key){

                window.sessionStorage.addressParam = JSON.stringify(item);
//                Object.assign(this.tempServiceEditAddressParams, item);
//                console.log(this.tempServiceEditAddressParams);
                this.$router.push({path: '/address/edit', query: {type: 'edit'}});

//                this.handleAddressSelect(item, key, true)

//                location.href = '//wq.jd.com/mlogin/mpage/Login?rurl=https%3a%2f%2fwqs.jd.com%2fmy%2fmy_address.shtml%23type%3dedit%26adid%3d' + item.id
            },
            handleSubmitClick(){
                this.$router.push({path: '/address/edit'});
//                this.$router.push('/order-edit-address');

            }

        },
        computed: {},
        components: {
//            orderSubmit
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
    @import './../../../assists/css/mixin';



    .Yep-address-list {
        background: #fff;
        margin-bottom: 1rem;
        .icon-edit-address {
            @include _icon(0.36rem, 0.36rem, 0.36rem 0.36rem, './../../../assists/image/icon-edit-address.png');

        }

        .red-rect-text {
            font-size: .22rem;
            padding: .04rem .12rem;
            line-height: 1;
            text-align: center;
            color: #f23131;
            border-radius: .04rem;
            @include bd-all-1px(#f23030)
        }
        .order-submit {
            width: 7.5rem;
            height: 1.16rem;
            line-height: .76rem;
            padding: .2rem;
            background: #e3e5e9;
            .submit-btn {
                border-radius: .05rem;
            }
        }
        ul {
            .swipe-left {
                margin-left: -3rem;
                transform: translate3d(0, 0, 0);
                transition: .3s;
            }

            li {
                display: block;
                padding: .33rem .19rem .35rem .19rem;
                @include border-bottom-1px();
                /*border-bottom: 1px solid #e3e5e9;*/
                overflow: hidden;
            }

        }
        .box {
            @include box;
            @include vertical-center;
            //            @include both-side;

        }
        .icon-check {
            margin-right: .22rem;
            i {
                @include _icon(.39rem, .29rem, .39rem .29rem, './../../../assists/image/icon-check.png');
                display: block;
            }

        }
        .detail {
            @include flex(1)
            font-size: .32rem;
            margin-right: .3rem;
            &.disabled {
                span, p {
                    color: #bfbfbf;

                }
            }
            dt {
                width: 5.35rem;

                color: #232326;
                //                @include box;
                //                @include vertical-center;
                margin-bottom: .19rem;
                font-size: 0;
                p {
                    display: inline-block;
                }
                .name {
                    margin-right: .15rem;
                    font-size: .32rem;
                }
                .mobile {
                    margin-right: .15rem;
                    font-size: .32rem;
                }
                .red-rect-text {
                    margin-right: .1rem
                }

            }
            .red {
                color: #f23030;
            }
            dd {
                font-size: .26rem;
                color: #686868;
                p {
                    width: 5.35rem;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    max-height: .64rem;
                    line-height: .32rem;
                    word-break: break-all;
                }
            }

        }
        .edit-address {
            display: block;
            width: .72rem;
            height: .8rem;
            line-height: .8rem;

            text-align: right;

            @include border-left-1px(#e3e5e9);
            &.swipe-left {
                margin-right: 3rem;
            }
        }

    }

    .extra-btn {
        width: 3rem;
        position: absolute;
        transform: translate3D(3rem, 0, 0);
        top: 0;
        right: 0;
        height: 100%;
        @include box;
        @include vertical-center;
        a {
            display: block;

        }
        .set-default {
            @include box;
            @include vertical-center;
            @include horizontal-center;
            width: 50%;
            height: 100%;

            color: #81838e;
            background: #f8f8f8;

        }
        .set-delete {
            @include box;
            @include vertical-center;
            @include horizontal-center;

            height: 100%;
            width: 50%;

            background: #f23030;
            a {
                color: #fff;

            }
        }
        &.show {
            transform: translate3D(0, 0, 0);

            transition: all .3s;
        }
    }

    .pay-btn {
        background-color: #f8f8f8;
        height: 1rem;
        text-align: center;
        position: fixed;
        bottom: 0;
        width: 100%;
        max-width: 7.5rem;
        z-index: 6;
        line-height: 1rem;
    }

    .btn1 {
        width: 47.81%;
        background: #f23030;
        color: #fff;
        display: inline-block;
        border-radius: 2px;
        height: .66rem;
        line-height: .66rem;
        text-align: center;
        font-size: 15px;
        .plus {
            margin-right: .06rem;
            font-style: normal;
        }
    }

    /*.tip-btn {*/
    /*font-size: 16px;*/
    /*color: #fff;*/
    /*width: 180px;*/
    /*height: 44px;*/
    /*line-height: 44px;*/
    /*margin-top: 15px;*/
    /*margin-bottom: 15px;*/
    /*}*/
</style>
