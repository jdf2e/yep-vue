<template>
    <div>
        <div class="Yep-submit">
            <p v-if="showCont" class="cont">
                <slot></slot>

            </p>
            <div class="submit-btn" @click="handleSubmitClick">{{btnText}}</div>
        </div>
    </div>

</template>
<script>
    export default {
        data () {
            return {}
        },
        props: ['showCont', 'btnText'],
        created: function () {
        },
        methods: {
            handleSubmitClick(){
                this.$emit('handleSubmitClick');
            }
        },
        computed: {
            totalPrice(){

            }

        },
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
    @import './../../../assists/css/mixin.scss';

    .Yep-submit {
        @include box;
        position: fixed;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        color: #f23030;
        text-align: right;
        font-size: .28rem;
        background: #fff;
        z-index: 5;
        border-top: 1px solid #e3e5e9;
        .cont {
            margin-right: .3rem;
            width: 4.8rem;
            font-size: 0;
            .black {
                margin-left: .05rem;
                color: #232326;
            }
        }
        .submit-btn {

            display: block;
            @include flex(1);

            font-size: .36rem;
            width: auto;
            background: #f23030;
            text-align: center;
            color: #fff;
            z-index: 10;
        }
    }


</style>
