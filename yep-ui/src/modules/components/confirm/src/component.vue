<template>
    <section class="Yep-confirm" v-if="visible" @click.self="visible = false">
        <div class="Yep-confirm__content">
            <div class="Yep-confirm__title">{{title}}</div>
            <div class="Yep-confirm__body">{{message}}</div>
            <div class="Yep-confirm__footer">
                <ul>
                    <li v-if="leftTxt" @click="cancelHook">{{leftTxt}}</li>
                    <li v-if="rightTxt" class="red" @click="submitHook">{{rightTxt}}</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" rel="stylesheet/scss">
    @import './../../../assists/css/mixin.scss';
    .Yep-confirm {
        @include box;
        @include vertical-center;
        @include horizontal-center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0 .6rem;
        background: rgba(0, 0, 0, .6);
        text-align: center;
        z-index: 10;
        &__content {
            width: 100%;
            border-radius: .1rem;
            color: #232326;
            background: #fff;
            overflow: hidden;

            -webkit-animation-duration: .2s;
            animation-duration: 0.2s;
            animation-name: anim-scale;
            -webkit-animation-name: anim-scale;
        }

        &__title {
            padding-top: .1rem;
            font-size: .36rem;
            line-height: 1.06rem;
        }

        &__body {
            text-align: left;
            font-size: .32rem;
            line-height: .36rem;
            padding: 0 .5rem .5rem;
        }

        &__footer {
            font-size: .32rem;

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
            .red {
                background: #f23030;
                color: #fff;
            }
        }


        @-webkit-keyframes anim-scale {
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

        @keyframes anim-scale {
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

        @-webkit-keyframes anim-up {
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

        @keyframes anim-up {
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
    }
</style>

<script>
    export default {
        data() {
            return {
                visible: false,
                message: '',
                title: '',
                leftTxt: '',
                rightTxt: ''
            }
        },
        methods: {
            cancel() {
            },
            submit() {
            },
            cancelHook() {
                this.cancel();
                this.visible = false;
            },
            submitHook() {
                this.submit();
                this.visible = false;
            }
        }
    }
</script>
