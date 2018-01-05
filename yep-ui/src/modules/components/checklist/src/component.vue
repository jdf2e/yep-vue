<template>
    <div class="Yep-radios">
        <ul class="">
            <li
                    v-for="(radio,index) in radios"
                    @click="handleRadioSelect(radio,radios,index)">
                <i class="icon-radio"
                   :class="{'checked':radio.selected,'disabled':radio.disabled}">
                </i>
                <span :class="{'checked':radio.selected,'disabled':radio.disabled}">
                    {{radio.text}}
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                radios: {
                }
            }
        },
        props: ['propsRadios'],
        created () {
            this.radios = this.propsRadios;
        },
        mounted: function () {
        },
        methods: {
            handleRadioSelect(radio, radios, index){
                if (radio.selected || radio.disabled) {
                    return;
                }
                for (let key in radios) {
                    radios[key].selected = false;
                }

                radio.selected = true;
                this.$emit('handleRadioSelect',index);
            }
        },
        computed: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
    @import './../../../assists/css/mixin.scss';

    .Yep-radios {
        padding-bottom: .1rem;

        li {
            margin-top: .3rem;
            i {
                margin-right: .2rem;
            }
            &:last-of-type {
                padding-bottom: 1px;
            }
        }
        span.disabled{
            color:$gray;
        }
        .icon-radio {
            @include _icon(.36rem, .36rem, .72rem .36rem, '../../../assists/image/icon-radio.png');
            margin: 0 .1rem .02rem 0;
            &.checked {
                background-position: -.36rem 0px;
            }

        }
    }

</style>
