<template>
    <common-layer v-if="payPassConfirmShow" :confirmBtns="payPassConfirm"
                  @handleConfirmBtnClick0="handleConfirmBtnClick0"
                  @handleConfirmBtnClick1="handleConfirmBtnClick1">
        <div class="pay-pass-confirm">
            <p class="title" v-if="type==='long' || type==='short' ">请输入支付密码</p>
            <p class="title" v-if="type==='message'">请输入短信验证码</p>

            <div v-if="type==='long'" class="long">
                <p class="detail">收货信息已修改，为了您的资金安全，请输入您的支付密码。</p>
                <div class="inputs">
                    <input type="password" v-model="longPasswordValue" class="pwd-input" v-focus>
                    <i class="delete" v-if="longPasswordValue!==''" @click="handleDeleteClick"></i>
                </div>

                <p class="error-info">{{errorMsg}}</p>
            </div>
            <div v-if="type==='message'" class="long">
                <p class="detail">短信已发送至银行预留手机号：{{messageMobile}}</p>
                <div class="inputs">
                    <input type="text" v-model="messageCode" class="pwd-input" maxlength="6" v-focus>
                    <i class="delete" v-if="messageCode!==''" @click="handleDeleteClick"></i>
                </div>

                <p class="error-info">
                    {{errorMsg}}
                    <span @click="handleResendMessageCode" v-if="errorMsg!==''"
                          class="flr">{{$store.state.messageCountDown}}s后重发</span>
                </p>
            </div>
            <div v-if="type==='short'" class="short">
                <p class="detail">收货信息已修改，为了您的资金安全，请输入您的支付密码。</p>

                <div class="input-wrapper">
                    <div class="tip-input fo-tip-input">
                        <input class="input-area" type="password" maxlength="1" disabled=""
                               v-for="(item,key) in mainInputValue" :value="item">

                    </div>
                    <input class="main-input" type="tel" unselectable="on" maxlength="6" autofocus="autofocus"
                           v-model="tempMainInputValue" @keyup="handleKeyup($event,tempMainInputValue)"
                           v-focus>
                </div>
                <p class="error-info">{{errorMsg}}</p>

            </div>
        </div>
    </common-layer>
</template>
<script>
    export default {
        name: 'address',
        data () {
            return {
                payPassConfirm: [{
                    text: '取消',
                    red: false,
                    textRed: true
                }, {
                    text: '确定',
                    red: true
                }],

                type: 'short',
                tempMainInputValue: '',
                mainInputValue: [],
                errorMsg: '',
                longPasswordValue: '',
                messageCode: '',
                messageMobile: '',
                countDownIng: false,
                payPassConfirmShow: this.propsPayPassConfirmShow

            }
        },
        props: ['propsPayPassConfirmShow'],
        created () {
        },
        watch: {
            propsPayPassConfirmShow() {
                this.payPassConfirmShow = this.propsPayPassConfirmShow
            }
        },
        computed: {},
        methods: {
            handleConfirmBtnClick0(){
                this.$store.state.confirmShow = false;
                this.initLayerStatus();

            },
            handleConfirmBtnClick1(){
                let _this = this;
// todo 一周两次只支持自动支付 去结算判断用户是否已经签约且签约链接不为空 就跳转到签约页面

                if (this.serviceOrderPayRes.getSignUrl.resultUrl !== '' && this.serviceOrderPayRes.isOpenSign.signCation === 'false') {
                    location.href = this.serviceOrderPayRes.getSignUrl.resultUrl;
                }

                if (this.type === 'short') {

                } else if (this.type === 'message') {
                    _this.setValiataCode();

                } else {
                    _this.handleLongPwd();

                }
                if (_this.autopayDoubleCheckShow) {
                    _this.setSubmitOrder();
                }

                return false;
            },
            handleLongPwd(){
                let _this = this;
                let params = {}
                if (_this.longPasswordValue === '') {
                    _this.errorMsg = '支付密码不能为空'
                    return;
                }
                params = {
                    code: _this.longPasswordValue,
                    channel: 0,
                    token: _this.serviceSubmitOrderRes.useBind.feiToken,
                }
                _this.setVerify(params)
            },
            handleKeyup(e, value){
                let _this = this;
                let params = {}
                if (e.code === 'Backspace') {
                    _this.mainInputValue.splice(-1, 1);
                    _this.errorMsg = '';
                    return;
                }
                if (value === '') {
                    return;
                }

                for (let v of value) {

                    _this.mainInputValue.push(v)
                }
                _this.tempMainInputValue = '';
                if (_this.mainInputValue.length > 5) {

                    params = {
                        code: _this.handlePWDCryp(_this.mainInputValue.toString().replace(/,/g, '')),
                        channel: 0,
                        token: _this.serviceSubmitOrderRes.useBind.feiToken
                    }
                    _this.setVerify(params);
                }

            },
            setVerify(params){
                let _this = this;
                this.$store.dispatch('SET_VERIFY', params).then(function (ret) {
                    console.log(ret);
                    if (ret.code === '200') {
                        _this.$store.state.confirmShow = false;
                        _this.setSubmitOrder();
                    }
                    if (ret.msg !== '') {
                        _this.errorMsg = ret.msg
                    }

                })
            },
            messageCodeTimer(){
                let _this = this;
                if (this.$store.state.messageCountDown === 0) {
                    this.$store.state.messageCountDown = 60;
                    this.countDownIng = false;

                } else {
                    this.countDownIng = true;
                    this.$store.state.messageCountDown--;
                    setTimeout(function () {
                        _this.messageCodeTimer()
                    }, 1000)
                }

            },
            setValiataCode(){
                let _this = this;
                return this.$store.dispatch('SET_VALIDATE_CODE', {
                    code: _this.messageCode,
                    orderId: _this.serviceSubmitOrderRes.orderId
                }).then(function (ret) {
                    if (ret && ret.code === '200') {
                        _this.setSubmitOrder()
                    } else if (ret && ret.msg) {
                        _this.errorMsg = ret.msg;
                        _this.messageCodeTimer();
                    }
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
    $text: #333;
    $border-color: #e3e5e9;
    .common-area-pick {
        .mask {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.35);
            z-index: -1;
        }
        .address-wrap {
            position: fixed;
            height: 6.4rem;
            bottom: -6.4rem;
            left: 0;
            width: 100%;
            background-color: #fff;
            font-size: 0.28rem;
            transition: all 500ms;
            -webkit-transition: all 500ms;
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
            .address-nav {
                height: 0.8rem;
                width: 100%;
                line-height: 0.6rem;
                padding: 0.2rem 0 0 0.2rem;
                position: relative;
                .close {
                    position: absolute;
                    top: 0.2rem;
                    width: 0.4rem;
                    height: 0.4rem;
                    color: $text;
                    font-size: 0.4rem;
                }
                .close {
                    right: 0.2rem;
                }
            }
            .address-title {
                height: 0.8rem;
                line-height: 0.8rem;
                border-bottom: 1px $border-color solid;
                .pctc {
                    float: left;
                    height: 0.8rem;
                    line-height: 0.8rem;
                    vertical-align: middle;
                    color: #333;
                    margin-right: 0.2rem;
                    font-size: 0.24rem;
                    &:first-child {
                        margin-left: 0.2rem;
                    }
                    &.cur-span {
                        border-bottom: 2px #e4393c solid;
                        color: #e4393c;
                    }
                }
            }
            .address-content {
                height: 4.8rem;
                overflow: auto;
                #cityUl, #townUl {
                    display: none;
                }
                li {
                    height: 0.9rem;
                    line-height: 0.9rem;
                    padding: 0 0.2rem;
                    color: #333;
                    font-size: 0.24rem;
                    border-bottom: 1px $border-color solid;
                    text-align: left;
                    span {
                        width: 0.25rem;
                        height: 0.17rem;
                        margin: 0.325rem 0 0 0.3rem;
                    }
                }
                .cur-li {
                    span {
                        display: inline-block;
                        width: 0.25rem;
                        height: 0.17rem;
                        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAARCAYAAAAougcOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxZjExNzdlNC02M2Q5LTRjZDUtOGEyYi1mOTZlYzJkYTY2ZDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEU4NzA4MTYwMUVDMTFFNjhDM0RGNEFERDcxMkVEMzMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEU4NzA4MTUwMUVDMTFFNjhDM0RGNEFERDcxMkVEMzMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwMDczM2VlLWI5NDctNDhhNi04NjI0LTIyMWNiZWE3Yjg5ZSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxZjExNzdlNC02M2Q5LTRjZDUtOGEyYi1mOTZlYzJkYTY2ZDkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5pSQVjAAABQ0lEQVR42rTUzSsEcRzH8V1POXGQhyWJaJNNk/wJSxxIokgOLs6u/h7lIYpyYMtzSlJ72T9Dwh4kUt7f+vxqmprZ2W1m6tW2zbTv/c33N5Otel4m7aMlxd/uwxEqaUX6cYM8frIp3K5BXGMMZcwmvZIhrWAELxbAR1OCgWHcK/CEGQvYiaQiowrYSh4xh0930kXWsIvmBgI23DvN4gHzqPovcIOvoIADbOIvZmBcQ87pcxFfwYvcSra1vHWFWmME7E/dKlAKC/gjblDvWMUh2iICnnZRLy6wFBYIDt62XBFvWMZJSGgKV+jGuQLfUUsO7q6yQq9YwBnafeenFejCKVbsia51X8Oe+IIG2aP7bSubxCU6cYwN/MbZHVGvFf/OsZlNoKOBHZip9e7KKzSg73vYqicQJ+Ke5n08Y6fegB3/AgwAhyNIMz8opOkAAAAASUVORK5CYII=) no-repeat;
                        background-size: cover;
                    }
                }
            }
        }

        .mask-show {
            opacity: 1;
            z-index: 998;
        }
        .mask-hide {
            opacity: 0;
            z-index: -1;
        }
    }
</style>
