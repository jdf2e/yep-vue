<template>
    <div class="Yep-order-eidt-address" @click="handlePageClick">

        <section>
            <div class="extra-info">

                <div class="cont-inputs">
                    <ul class="">
                        <li v-for="(input,key) in comAddressInfo.inputs"
                            @click="areaPickClick(key)"
                        >
                            <label for="">{{input.label}}</label>
                            <div class="input-wrapper">
                                <input type="tel"
                                       v-if="key==='phone'"
                                       :placeholder="input.placeholder"
                                       maxlength="11"
                                       v-model="input.text"
                                >
                                <input type="text"
                                       :placeholder="input.placeholder"
                                       v-model="input.text"
                                       v-if="key==='name'"
                                >
                                <input type="text"
                                       :placeholder="input.placeholder"
                                       v-model="keyWord"
                                       v-if="key==='address'"
                                       @focus="handleAddressFocus"
                                       class="li-address"
                                >
                                <span
                                        v-if="key==='area'" class="area">{{input.text}}</span>
                                <i class="icon-clear"
                                   @click="handleClear(input)"
                                   v-if="input.text!=='' && key !=='area'">

                                </i>
                                <i class="icon-link" v-if="key==='area'"
                                   @click="areaPickClick(key)"
                                ></i>
                            </div>
                        </li>
                        <li v-show="suggestionlistShow"
                            v-for="(item,key) in suggestionlist"
                            @click="handleSuggestionlistClick(item.title)"
                            class="li-suggest"
                        >
                            <div>
                                <div class="result-item">
                                    <div class=""><span class="icon-loc"></span>
                                        <span class="search-result-item">
                                           {{item.title}}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>

                <div class="cont-switchs">
                    <div>
                        <p>设置默认地址</p>
                        <p>注：每次下单时会使用该地址（轻松购下单除外）</p>
                    </div>

                    <Yep-btn-switch
                            :currentStatus="updateAddressParams.addressParam.addressDefault"
                            @handleSwitch="handleSwitch">
                    </Yep-btn-switch>
                </div>
            </div>

        </section>
        <Yep-submit btnText="保存并使用" @handleSubmitClick="handleSubmitClick"></Yep-submit>

        <!--<common-layer :confirmBtns="tipsBtns"-->
        <!--@handleConfirmBtnClick0="handleConfirmBtnClick0">-->
        <!--<div class="taxpayer-tips">-->
        <!--<p class="title">删除</p>-->

        <!--</div>-->
        <!--</common-layer>-->
        <Yep-areaPick @closeAreaPick="closeAreaPick" :isShow="isShow"></Yep-areaPick>
    </div>
</template>
<script>
  //        import { parseURL } from '@jdcfe/jdc_m_lib_common'
  //    const parseURL = r => require.ensure([], () => r(require('@jdcfe/jdc_m_lib_common')), 'parseURL');

  //    import orderSubmit from '../components/order-submit.vue';
  //    import btnSwitch from '../components/btn-switch.vue'
  //    import commonLayer from '../components/common-layer.vue'
  import addressService from './../../../assists/js/addressService'
  import Vue from 'vue'

  export default {
    data() {
      return {
        areaName: "",
        areaId: "",
        name: "",
        mobile: "",
        keyWord: '',
        suggestionlistShow: true,
        addressInfo: {},
        suggestionlist: [],
        tipsBtns: [{
          text: '我知道了',
          textRed: true

        }],
        isShow: false,
        updateAddressParams: {
//                    "pin": "",
//                    "checkLevel": 0,
//                    "addressClientInfo": {
//                        "serverName": "",
//                        "userIP": "",
//                        "countKey": 0,
//                        "authId": "",
//                        "license": "",
//                        "privacy": "",
//                        "wirteReturn": ""
//                    },
          "addressParam": {
            "id": 0,
            "easyBuy": true,
            "defaultFirst": true,
            "addressDefault": true,
            "addressName": "",
            "name": "",
            "countyName": "",
            "provinceId": 0,
            "provinceName": '',
            "cityId": 0,
            "cityName": '',
            "countyId": 0,
            "townId": 0,
            "townName": '',
            "fullAddress": "",
            "addressDetail": "",
            "postCode": "",
            "mobile": "",
            "idCard": "",
            "phone": "",
            "email": "",
            "paymentId": 0,
            "pickId": 0,
            "pickName": "",
            "coord_type": 0,
            "longitude": 0,
            "latitude": 0,
//                        "selfPickAddressParam": {
//                            "pickSite": 0,
//                            "selfPickSiteName": "",
//                            "selfPickSiteAddress": "",
//                            "name": "",
//                            "selfPickMobile": "",
//                            "selfPickPhone": "",
//                            "siteProvinceId": 0,
//                            "siteCityId": 0,
//                            "siteCountyId": 0,
//                            "siteTownId": 0
//                        },
//                        "retTag": 0,
//                        "tagSource": 0,
//                        "userDefinedTag": "",
//                        "deleteId": 0,
//                        "overseas": 0,
//                        "areaCode": "",
//                        "nameCode": ""
          }
        }

      }
    },

    created: function () {
      let parseQueryFilter = Vue.filter('parseQuery')
      if (window.sessionStorage.addressParam && parseQueryFilter(location.href).type === 'edit') {
        Object.assign(this.updateAddressParams.addressParam, JSON.parse(window.sessionStorage.addressParam))
        if (this.updateAddressParams.addressParam.countyId) {
          this.areaId = this.updateAddressParams.addressParam.countyId + ''
        } else {
          this.areaId = this.updateAddressParams.addressParam.townId + ''

        }

        this.keyWord = this.updateAddressParams.addressParam.addressDetail
        this.updateAddressParams.addressParam.keyword = this.keyWord
      } else {
        window.sessionStorage.removeItem('addressParam')
      }

      console.log(this.updateAddressParams.addressParam)

    },
    props: ['emitAreaPickClick'],

    methods: {
      handlePageClick(e) {
        if (e.target.className === 'li-suggest' || e.target.className === 'li-address') {
          this.suggestionlistShow = true;

        } else {
          this.suggestionlistShow = false;

        }
      },
      handleAddressFocus() {
        this.suggestionlistShow = true;

      },
      handleSuggestionlistClick(keyWord) {
        this.keyWord = keyWord

      },
      handleSubmitClick() {
        this.updateAddressParams.addressParam = Object.assign({}, this.updateAddressParams.addressParam, {
          addressDetail: this.keyWord,
          name: this.addressInfo.inputs.name.text,
          addressName: this.addressInfo.inputs.name.text,
          areaId: this.addressInfo.inputs.area.text,
          mobile: this.addressInfo.inputs.phone.text,
          fullAddress: this.addressInfo.inputs.area.text + this.keyWord,
        })
        addressService.updateAddress(this.updateAddressParams.addressParam)
      },
      handleConfirmBtnClick0() {

      },
      closeAreaPick(areaId, areaName) {

        this.isShow = false;

        this.updateAddressParams.addressParam = Object.assign({}, this.updateAddressParams.addressParam, {
          addressDetail: this.keyWord,
          name: this.addressInfo.inputs.name.text,
          addressName: this.addressInfo.inputs.name.text,
          areaId: this.addressInfo.inputs.area.text,
          mobile: this.addressInfo.inputs.phone.text,
          fullAddress: this.addressInfo.inputs.area.text + this.keyWord,
        })

        this.updateAddressParams.addressParam.provinceName = areaName.split(',')[0]
        this.updateAddressParams.addressParam.cityName = areaName.split(',')[1]
        this.updateAddressParams.addressParam.countyName = areaName.split(',')[2]
//                this.areaName = areaName.replace(/,/g, '')
        this.areaId = areaId.split(',')[this.areaId.split(',').length - 1]
      },
      handleClear(input) {
        input.text = '';
        console.log(input)
        if (input.type === 'detailAddress') {
          this.keyWord = '';
        }
      },
      areaPickClick(key) {
        if (key === 'area') {
          this.isShow = true;

        }
      },
      handleSwitch(status) {
        this.updateAddressParams.addressParam.addressDefault = status;
      },

    }
    ,
    computed: {
      comAddressInfo() {
        let addressInfo = {

          inputs: {
            name: {
              label: '收 货 人 ：',
              placeholder: '姓名',
              text: this.updateAddressParams.addressParam.name || '',
              type: 'name'
            },
            phone: {
              label: '联系方式：',
              placeholder: '手机号',
              text: this.updateAddressParams.addressParam.mobile || '',
              type: 'phone'
            },

            area: {
              label: '所在地区：',
              placeholder: '所在地区',
              text: this.updateAddressParams.addressParam.provinceName + this.updateAddressParams.addressParam.cityName + this.updateAddressParams.addressParam.countyName,
              type: 'area'
            },
            address: {
              label: '详细地址：',
              placeholder: '街道、楼牌号等',
              text: this.updateAddressParams.addressParam.keyword,
              type: 'detailAddress'
            }
          },
          switchs: {

            isDefault: true,
          }
        }

        return this.addressInfo = addressInfo
      },

    },
    watch: {
      keyWord: {
        handler: function (val, oldVal) {
          if (oldVal === '' && val === this.updateAddressParams.addressParam.addressDetail) {
            return
          }
          if (val === '') {
            this.suggestionlist = [];
            return;
          }
          let params = {
            getMapSuggestionParams: {
              keyWord: val,
              region: this.areaId.split(',')[this.areaId.split(',').length - 1]
            }
          }
          this.updateAddressParams.addressParam.keyword = val;
          addressService.getMapSuggestion(params).then(res => {

            if (res.data && res.data.suggestionlist) {
              debugger;
              if (res.data.suggestionlist.length === 1 && res.data.suggestionlist[0].title === this.keyWord) {
                this.suggestionlist = [];
              } else {
                this.suggestionlist = res.data.suggestionlist

              }
            }
          })
        },
        deep: true
      }
    },
    components: {
//            orderSubmit,
//            commonLayer,
//            commonAreaPick,
//            btnSwitch

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
    @import './../../../assists/css/mixin';

    .Yep-order-eidt-address {
        padding-bottom: 1rem;
        .icon-link {
            @include _icon(.19rem, .3rem, .19rem .3rem, './../../../assists/image/icon-link.png');
        }
        .icon-clear {
            @include _icon(.3rem, .32rem, .3rem .3rem, './../../../assists/image/icon-clear.png');

        }
        .icon-loc {
            @include _icon(.18rem, .26rem, .18rem .26rem, './../../../assists/image/icon-loc.png');

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
        .extra-info {

            padding: 0;
            .title {
                height: .9rem;
                line-height: .9rem;
                @include border-bottom-1px();
                /*border-bottom: 1px solid #e3e5e9;*/
                margin-bottom: 0;
            }

            .cont-inputs {
                .lightGrayPlaceholder::-webkit-input-placeholder {
                    color: #cbcbcb;
                }

                ul {
                    margin-bottom: 0;

                    li {
                        @include box;
                        @include vertical-center;
                        @include border-bottom-1px();
                        /*border-bottom: 1px solid #e3e5e9;*/
                        height: 1.06rem;
                        line-height: 1.06rem;
                        &:last-of-type {
                            border-bottom: none;
                        }
                        label {
                            display: block;
                            width: 1.65rem;
                            margin-right: .3rem;
                            text-indent: .2rem;
                        }
                        .input-wrapper {
                            position: relative;
                            @include flex(1);
                            @include box;
                            @include vertical-center;
                            @include both-side;
                            span {
                                display: block;
                                text-indent: .2rem;
                            }
                            input {
                                display: inline-block;
                                height: .87rem;
                                text-indent: .2rem;
                                width: 100%;
                                padding-right: .6rem;

                            }
                            .icon-clear {
                                position: absolute;
                                right: .3rem;
                                top: .3rem;
                            }
                            .icon-link {
                                /*float: right;*/
                                margin-right: .3rem;
                                display: block;
                            }
                            .area {
                                width: 5rem;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                overflow: hidden;
                            }

                        }
                        .result-item {
                            padding-left: .2rem;
                        }

                    }

                }
            }
            .cont-switchs {
                @include box;
                @include both-side;
                padding: .38rem .21rem .44rem .2rem;
                font-size: .24rem;
                color: #999;
                p:first-of-type {
                    font-size: .28rem;
                    margin-bottom: .17rem;
                    color: #232326;
                }
            }
        }

        /*.extra-info {*/
        /*!*border-bottom: none;*!*/
        /*padding: 0;*/
        /*margin-left: .3rem;*/
        /*.title {*/
        /*height: .9rem;*/
        /*line-height: .9rem;*/
        /*margin-bottom: 0;*/
        /*}*/
        /*}*/
    }
</style>
