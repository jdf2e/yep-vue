<template>
    <div class="Yep-layer-confirm-wrapper" v-if="$store.state.confirmShow">
        <div id="layer.confirm" class="layer-confirm"
             @click.self="$store.state.confirmShow = !$store.state.confirmShow">


            <div class="wrapper layui-m-anim-scale">
                <slot></slot>
                <div class="btns" v-if="confirmBtns">
                    <ul>
                        <li v-for="(item,key) in confirmBtns" @click="handleConfirmBtnClick(key)"
                            :class="{'red':item.red,'textRed':item.textRed}">
                            {{item.text}}
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        <div class="mask"></div>

    </div>
</template>
<script>

    export default {

        data () {
            return {}
        },
        props: ['confirmBtns'],
        //animType:layui-m-anim-scale layui-m-anim-up layui-m-anim-loading
        components: {},
        methods: {
            handleConfirmBtnClick(key){

                this.$emit('handleConfirmBtnClick' + key);
            }
        },
        mounted: function () {

        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
    @import './../../../assists/css/mixin.scss';

    .Yep-layer-confirm-wrapper {
        .layer-confirm {
            @include box;
            @include vertical-center;
            @include horizontal-center;
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            padding: 0 .6rem;
            z-index: 1000;
            color: #232326;
            .wrapper {
                -webkit-animation-duration: .2s;
                animation-duration: 0.2s;
                /*width: 6.28rem;*/
                background: #fff;
                z-index: 1000;
                border-radius: 0.1rem;
                /*overflow: hidden;*/
                .operate {
                    border-bottom-left-radius: .1rem;
                    border-bottom-right-radius: .1rem;
                    overflow: hidden;
                }
                .btns {
                    font-size: .32rem;
                    border-bottom-left-radius: .1rem;
                    border-bottom-right-radius: .1rem;
                    overflow: hidden;
                    ul {
                        @include box;
                        @include vertical-center;
                        text-align: center;
                        height: .86rem;
                        line-height: .86rem;
                        li {
                            @include flex(1);
                            display: block;
                            border-top: 1px solid #e3e5e9;
                        }
                    }
                }
                .red {
                    color: #fff;
                    background: #f23030;
                }
                .textRed {
                    color: #f23030;
                }

            }

            .layui-m-anim-up {
                -webkit-animation-name: layui-m-anim-up;
                animation-name: layui-m-anim-up;
            }
            .layui-m-anim-scale {
                animation-name: layui-m-anim-scale;
                -webkit-animation-name: layui-m-anim-scale;
            }

        }
        .mask {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            pointer-events: auto;
            z-index: 100;
        }
    }

    @-webkit-keyframes layui-m-anim-scale {
        0% {
            opacity: 0;
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
        }

        100% {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    @keyframes layui-m-anim-scale {
        0% {
            opacity: 0;
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
        }

        100% {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    @-webkit-keyframes layui-m-anim-up {
        0% {
            opacity: 0;
            -webkit-transform: translateY(800px);
            transform: translateY(800px);
        }

        100% {
            opacity: 1;
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
    }

    @keyframes layui-m-anim-up {
        0% {
            opacity: 0;
            -webkit-transform: translateY(800px);
            transform: translateY(800px);
        }

        100% {
            opacity: 1;
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
    }


</style>
