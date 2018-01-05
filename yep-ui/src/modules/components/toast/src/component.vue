<template>
    <section class="Yep-dialog anim-scale" v-show="visible" :class="{'bottom': isBottom}">
        <img src="./../../../assists/image/tips.png" v-if="isImage">
        <div>{{message}}</div>
    </section>
</template>

<style lang="scss" rel="stylesheet/scss">
    .Yep-dialog {
        position: fixed;
        top: 40%;
        left: 1.7rem;
        right: 1.7rem;
        z-index: 100;
        padding: .4rem .2rem;
        border-radius: 3px;
        font-size: .26rem;
        text-align: center;
        color: #fff;
        background: rgba(0, 0, 0, .6);
        -webkit-animation-duration: .2s;
        animation-duration: 0.2s;
        animation-name: anim-scale;
        -webkit-animation-name: anim-scale;
        img {
            width: .76rem;
            margin-bottom: .3rem;
        }
        div {
            padding: .1rem .3rem;
        }

        &.bottom {
            top: 86%;
            padding: .1rem .3rem;
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
    }
</style>

<script>
    export default {
        data() {
            return {
                visible: false,
                isImage: true,
                isBottom: false,
                message: '',
                duration: 3000
            }
        }
    }
</script>