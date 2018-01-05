<template>
    <div id="common-progressbar" class="Yep-common-progressbar">
        <div class="bar">
            <div id="progressbar" class="progress"
                 :style="{
                     background: `linear-gradient(to right, ${this.colorStart} 0%, ${this.colorEnd} 100%)`,
                     width:comPercent
                 }">

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        props: ['percent', 'colorStart', 'colorEnd'],
        created: function () {
        },
        mounted: function () {

        },
        methods: {},
        computed: {
            comPercent() {
                return this.percent ? this.percent + '%' : 0
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
    @import '../../../assists/css/mixin.scss';
.Yep-common-progressbar{
    .bar {
        border-radius: .5rem;
        height: .1rem;
        width: 100%;
        background: #f5f5f5;
        overflow: hidden;
    }

    .progress {
        height: .1rem;
        border-radius: .5rem;
        transition: width 2s;
    }
}

</style>
