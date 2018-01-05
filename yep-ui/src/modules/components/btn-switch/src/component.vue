<template>
    <div class="Yep-switch-wrapper":class="{open:comCurrentStatus,close:!comCurrentStatus}" @click="handleSwitch">
        <div class="switch-inner" :class="{open:comCurrentStatus,close:!comCurrentStatus}"></div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                switchOn: 0
            }
        },
        props: ['currentStatus'],
        mounted: function () {
        },
        methods: {
            handleSwitch(){
                this.switchOn = !this.switchOn;
                this.$emit('handleSwitch', this.switchOn);
            }
        },
        computed: {
            comCurrentStatus(){
                return this.switchOn=this.currentStatus;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
    @import './../../../assists/css/mixin.scss';

    .Yep-switch-wrapper {
        width: 1rem;
        height: .6rem;
        border-radius: .5rem;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        &.open {
            background-color: #f23030;
            transition: .2s;
        }
        &.close {
            background: rgba(255, 255, 255, 0.4);
            border: .03rem solid #e4e4e4;
            border-left: transparent;
        }
        .switch-inner {
            width: .54rem;
            height: .54rem;
            border-radius: .27rem;
            position: absolute;
            background: #fff;
            box-shadow: 0.04rem 0 0.08rem 0 rgba(0, 0, 0, 0.1);

            &.open {
                /*top: .02rem;*/
                /*right: 01px;*/
                transition: .2s;
                transform: translate(.46rem, .02rem);
            }

            &.close {
                left: 0;
                top: 0;
                border: .02rem solid #e4e4e4;
            }
        }
    }


</style>
