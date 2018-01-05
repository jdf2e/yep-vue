<template>
    <div class="Yep-cell-swipe">
        <ul>
            <li v-for="(item,key) in params"
                v-touch:swipeleft="handleSwipeleft"
                v-touch:swiperight="handleSwiperight"
                :dataKey="key"
                :class="{'swipe-left':swipeleftKey === key}"
            >
                <div class="box left-cont">
                    <p>{{item.text}}</p>
                </div>

                <div class="extra-btn" :class="{show:swipeleftKey===key}">
                    <div class="set-default" @click="handleConfirmClick(item)"><a href="javascript:void(0)">设为默认</a></div>
                    <div class="set-delete" @click="handleCancelClick(item)"><a href="javascript:void(0)">删除</a></div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                swipeleftKey: -1
            }
        },
        props: ['params'],
        created: function () {
        },
        methods: {
            handleSwipeleft(vnode){
                this.swipeleftKey = vnode.data.attrs.dataKey;
            },
            handleSwiperight(){
                this.swipeleftKey = false;
            },
            handleConfirmClick(item){
                this.$emit('handleConfirmClick',item)
            },
            handleCancelClick(item){
                this.$emit('handleCancelClick',item)
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
    @import './../../../assists/css/mixin.scss';

    .Yep-cell-swipe {
        .swipe-left {
            margin-left: -3rem;
            transform: translate3d(0, 0, 0);
            transition: .3s;
        }
        ul {
            .swipe-left {
                margin-left: -3rem;
                transform: translate3d(0, 0, 0);
                transition: .3s;
            }

            li {
                display: block;
                padding: .33rem .19rem .35rem;
                position: relative;
                overflow: hidden;
            }

        }

        .edit-address {
            display: block;
            width: .72rem;
            height: .8rem;
            line-height: .8rem;

            text-align: right;

            &.swipe-left {
                margin-right: 3rem;
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
    }
</style>
