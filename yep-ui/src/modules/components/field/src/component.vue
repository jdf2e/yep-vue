<template>
    <div class="Yep-common-btns">
        <ul class="">
            <li v-for="(input,key) in inputs" >
                <label for="">{{input.label}}</label>
                <div class="input-wrapper">

                    <input type="tel"
                           v-if="key==='phone'"
                           :placeholder="input.placeholder"
                           maxlength="11"
                           v-model="input.text"
                    >
                    <input type="text"
                           :placeholder="input.placeholder"
                           v-model="input.text"
                           v-if="key !='phone' && key !='pwd' && key !='link'"
                    >
                    <input type="password"
                           :placeholder="input.placeholder"
                           v-model="input.text"
                           v-if="key==='pwd'"
                    >
                    <i class="icon-clear"
                       @click="handleClear(input)"
                       v-if="input.text!=='' && key !=='link'">
                    </i>
                    <i class="icon-link" v-if="key==='link'" @click="handleLinkClick">
                    </i>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
        props: ['inputs'],
        mounted: function () {
        },
        methods: {
            handleClear(input){
                input.text = '';
            },
            handleLinkClick(){
              this.$emit('handleLinkClick')
            },
        },watch: {
            inputs: {
                handler: function (inputs) {
                },
                deep: true
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
    @import './../../../assists/css/mixin.scss';
    .icon-clear {
        @include _icon(.3rem, .32rem, .3rem .3rem, '../../../assists/image/icon-clear.png');
    }
    .cont-inputs {
        .lightGrayPlaceholder::-webkit-input-placeholder {
            color: #cbcbcb;
        }

        ul {
            margin-bottom: 0;
            width: 100%;
            li {
                @include box;
                @include vertical-center;
                height: 1.06rem;
                line-height: 1.06rem;
                &:last-of-type {
                    border-bottom: none;
                }
                label {
                    display: block;
                    width: 1.6rem;
                    margin-right: .3rem;
                    text-indent: .2rem;
                }
                .input-wrapper {
                    position: relative;
                    @include flex(1);
                    @include box;
                    @include vertical-center;
                    @include both-side;
                    span {
                        display: block;
                        text-indent: .2rem;
                    }
                    input {
                        display: inline-block;
                        height: .87rem;
                        text-indent: .2rem;
                        width: 100%;
                        padding-right: .6rem;

                    }
                    .icon-clear {
                        position: absolute;
                        right: .3rem;
                        top: .3rem;
                    }
                    .icon-link {
                        @include _icon(.19rem, .3rem, .19rem .3rem, '../../../assists/image/icon-link.png');
                    }
                    .icon-link {
                        position: absolute;
                        right: 0;
                        margin-right: .3rem;
                        display: block;
                    }
                    .area {
                        width: 5rem;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }

                }

            }

        }
    }

</style>
