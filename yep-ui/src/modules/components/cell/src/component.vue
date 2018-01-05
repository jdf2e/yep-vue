<template>
    <a class="Yep-cell" :href="href">
        <span class="Yep-cell-mask" v-if="isLink"></span>
        <div class="Yep-cell-left">
            <slot name="left"></slot>
        </div>
        <div class="Yep-cell-wrapper">
            <div class="Yep-cell-title">
                <slot name="icon">
                    <i v-if="icon" :class="'icon-' + icon"></i>
                </slot>
                <slot name="title">
                    <span class="Yep-cell-text" >{{title}}</span>
                    <span v-if="label" class="Yep-cell-label" >{{label}}</span>
                </slot>
            </div>
            <div class="Yep-cell-value" :class="{ 'is-link' : isLink }">
                <slot>
                    <span >{{value}}</span>
                </slot>
            </div>
            <i v-if="isLink" class="Yep-cell-allow-right"></i>
        </div>
        <div class="Yep-cell-right">
            <slot name="right"></slot>
        </div>
    </a>
</template>
<script>
    export default {
        data () {
            return {}
        },
        props: {
            to: [String, Object],
            icon: String,
            title: String,
            label: String,
            isLink: Boolean,
            value: {}
        },
        computed: {
            href() {
                if (this.to && !this.added && this.$router) {
                    const resolved = this.$router.match(this.to);
                    if (!resolved.matched.length) return this.to;

                    this.$nextTick(() => {
                        this.added = true;
                        this.$el.addEventListener('click', this.handleClick);
                    });
                    return resolved.fullPath || resolved.path;
                }
                return this.to;
            }
        },

        methods: {
            handleClick($event) {
                $event.preventDefault();
                this.$router.push(this.href);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
    @import './../../../assists/css/mixin.scss';
        .Yep-cell {
            background-color: $color-white;
            box-sizing: border-box;
            color: inherit;
            min-height: 48px;
            display: block;
            overflow: hidden;
            position: relative;
            text-decoration: none;

            &:first-child {
                .Yep-cell-wrapper {
                    background-origin: border-box;
                }
            }

            &:last-child {
                background-image: linear-gradient(0deg, $color-grey, $color-grey 50%, transparent 50%);
                background-size: 100% 1px;
                background-repeat: no-repeat;
                background-position: bottom;
            }

            &-wrapper {
                background-image:linear-gradient(180deg, $color-grey, $color-grey 50%, transparent 50%);
                background-size: 120% 1px;
                background-repeat: no-repeat;
                background-position: top left;
                background-origin: content-box;
                align-items: center;
                box-sizing: border-box;
                display: flex;
                font-size: 16px;
                line-height: 1;
                min-height: inherit;
                overflow: hidden;
                padding: 0 10px;
                width: 100%;
            }

            &-mask {
                &::after {
                    background-color: #000;
                    content: " ";
                    opacity: 0;
                    position: absolute 0;
                }

                &:active::after {
                    opacity: .1;
                }
            }

            &-text {
                vertical-align: middle;
            }

            &-label {
                color: #888;
                display: block;
                font-size: 12px;
                margin-top: 6px;
            }

            img {
                vertical-align: middle;
            }

            &-title {
                flex: 1;
            }

            &-value {
                color: $cell-value-color;
                display: flex;
                align-items: center;

                &.is-link {
                    margin-right: 24px;
                }
            }

            &-left {
                position: absolute;
                height: 100%;
                left: 0;
                transform: translate3d(-100%, 0, 0);
            }

            &-right {
                position: absolute;
                height: 100%;
                right: 0;
                top: 0;
                transform: translate3d(100%, 0, 0);
            }

            &-allow-right::after {
                border: solid 2px $border-color;
                border-bottom-width: 0;
                border-left-width: 0;
                content: " ";
                position: absolute;
                top:50%;
                right:20px;
                width: 5px;
                height: 5px;
                transform: translateY(-50%) rotate(45deg);
            }
        }

</style>
