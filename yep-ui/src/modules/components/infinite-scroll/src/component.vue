<template>
    <div class="Yep-infinite-scroll" ref="scroller">
        <div class="inner" ref="inner">
            <slot></slot>
            <slot name="bottom">
                <div class="loading" v-show="loadingShow">{{loadingText}}</div>
            </slot>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loadingText: '加载中...',
                loadingShow: false,
                innerHeight: this.$refs.inner ? this.$refs.inner.clientHeight : 0,
                fetch: true,
            }
        },
        watch: {
            innerHeight() {
                this.fetch = true;
            },
        },
        methods: {
            init() {
                if (this.$refs.inner.clientHeight < this.$refs.scroller.clientHeight) {
                    this.loadingShow = false;
                } else {
                    this.loadingShow = true;
                }
                this.$refs.scroller.addEventListener('scroll', this.scrollEvt);
                setInterval(() => {
                    this.innerHeight = this.$refs.inner ? this.$refs.inner.clientHeight : 0;
                }, 1000);
            },
            scrollEvt() {
                if (this.$refs.scroller.scrollTop + this.$refs.scroller.clientHeight > this.$refs.inner.clientHeight / 2 ) {
                    if (this.fetch) {
                        this.loadingShow = true;
                        this.$emit('loadMore');
                        this.fetch = false;
                    }
                }
            }
        },
        mounted() {
            this.init();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
    @import './../../../assists/css/mixin.scss';
    .Yep-infinite-scroll{
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: scroll;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
        .loading{
            text-align: center;
            font-size: 0.28rem;
            color: #666;
            padding: 0.21rem 0;
            background-color: #fff;
        }
    }
</style>
