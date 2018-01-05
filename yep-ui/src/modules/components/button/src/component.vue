<template>
    <div class="Yep-common-btns">
        <div v-for="(item,key) in btns"
             class="btn"
             @click="handleClick(item)"
             :class="[item.extraClass,{'text-red':item.textRed,'bg-red':item.bgRed}]"
        >
            {{item.text}}
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
        props: ['btns'],
        mounted: function () {
        },
        methods: {
            handleClick (item) {
                this.$emit('handleClick',item);
            },

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
    @import './../../../assists/css/mixin.scss';
    .Yep-common-btns{
        @include box;
        @include both-side;
        .btn {
            display: block;
            width: 100%;
            height: 68px;
            line-height: 68px;
            text-align: center;
            border-radius: 5px;
            color: #6f6f6f;
            font-size: 26px;
            border:1px solid #6f6f6f;
            margin-right:20px;
            &:last-of-type{
                margin-right:0;
            }
            &.disabled {
                background-color: #eeeeee;
                color: #cecece;
            }
            &.btn-fixed {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                margin: 0;
                border-radius: 0;
                z-index: 8;
            }
        }
        .text-red {
            border-color: #ec3838;
            color: #ec3838;
        }

        .bg-red {
            border-color: #ec3838;
            background-color: #ec3838;
            color: #fff;
        }
        .fixed {
            position: fixed;
            bottom: 50px;
            left: 0;
            right: 0;
            margin-top: 0;
            margin-bottom: 0;
        }
    }

</style>
