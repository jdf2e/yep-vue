<template>
    <div class="Yep-order-remind">
        <div class="box" v-if="show">
            <em class="icon-remind"></em>
            <slot></slot>
            <i class="triangle" v-if="triangle.show"
               :class="triangle.pos"
            ></i>
            <span class="remind-text">
                {{text}}
            </span>
            <em class="cross" @click="handleCrossClick(tipId)"></em>
        </div>
    </div>
</template>
<script>

    export default {
        data () {
            return {}
        },
        created: function () {
        },
        props: ['show',"text",'tipId',"triangle"],
        methods: {
            handleCrossClick(id){
                this.$emit('handleCrossClick',id)
            }
        },
        computed: {},
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
    @import './../../../assists/css/mixin.scss';

    .Yep-order-remind {
        overflow: visible;
        background-color: rgba(232, 76, 76, .7);
        padding-left: .2rem;
        padding-right: .2rem;
        width: 100%;
        position: fixed;
        z-index: 5;
        .icon-remind {

            @include _icon(.24rem, .28rem, .24rem .28rem, '../../../assists/image/icon-remind.png', 0 0, block)
        }
        .triangle {
            display: inline-block;
            position: absolute;

            width: .36rem;
            height: .18rem;
            border-left: .18rem solid transparent;
            border-right: .18rem solid transparent;
            border-bottom: .18rem solid rgba(232, 76, 76, .7);
            &.top{
                top: -.18rem;
                left: .6rem;
            }
            &.bottom{
                transform: rotate(180deg);
                bottom:-.18rem;
                left: .6rem;
            }
        }
        &.top{
            top: 0;
        }
        &.middle{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        &.bottom{
            bottom: 0;
        }
        .box {
            @include box;
            @include vertical-center;
            padding-top: .12rem;
            padding-bottom: .12rem;
        }

        .remind-text {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            @include flex(1);
            color: #fff;
            margin-right: .14rem;
            margin-left: .14rem;
            font-size: .24rem;
            overflow: hidden;
            word-break: break-word;
            line-height: .28rem;
        }

        .cross {
            @include cross(.2rem, .02rem, #fff);
        }
    }


</style>
