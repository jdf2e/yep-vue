<template>
  <transition :name="currentTransition">
    <div v-show="currentValue" class="Yep-popup-external" :class="[position ? 'Yep-popup-external-' + position : '']">
      <slot></slot>
    </div>
  </transition>
</template>

<style lang="scss" rel="stylesheet/scss">
    .Yep-popup-external {


      &-top {
        top: 0;
        right: auto;
        bottom: auto;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
      }

    &-right {
        top: 50%;
        right: 0;
        bottom: auto;
        left: auto;
        transform: translate3d(0, -50%, 0);
      }

    &-bottom {
        top: auto;
        right: auto;
        bottom: 0;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
      }

    &-left {
        top: 50%;
        right: auto;
        bottom: auto;
        left: 0;
        transform: translate3d(0, -50%, 0);
      }
    }

  .popup-slide-top-enter,
  .popup-slide-top-leave-active {
    transform: translate3d(-50%, -100%, 0);
  }

  .popup-slide-right-enter,
  .popup-slide-right-leave-active {
    transform: translate3d(100%, -50%, 0);
  }

  .popup-slide-bottom-enter,
  .popup-slide-bottom-leave-active {
    transform: translate3d(-50%, 100%, 0);
  }

  .popup-slide-left-enter,
  .popup-slide-left-leave-active {
    transform: translate3d(-100%, -50%, 0);
  }

  .popup-fade-enter,
  .popup-fade-leave-active {
    opacity: 0;
  }

  .v-modal-enter {
    animation: v-modal-in .2s ease;
  }

  .v-modal-leave {
    animation: v-modal-out .2s ease forwards;
  }

  @keyframes v-modal-in {
    0% {
      opacity: 0;
    }
    100% {
    }
  }

  @keyframes v-modal-out {
    0% {
    }
    100% {
      opacity: 0;
    }
  }

  .v-modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: #000;
  }

</style>

<script type="text/babel">
    import MixinPopup from './popup';
    import Vue from 'vue';

    export default {
        name: 'popupExternal',

        mixins: [MixinPopup],

        props: {
            modal: {
                default: true
            },

            modalFade: {
                default: false
            },

            lockScroll: {
                default: false
            },

            closeOnClickModal: {
                default: true
            },

            popupTransition: {
                type: String,
                default: 'popup-slide'
            },

            position: {
                type: String,
                default: ''
            }
        },

        data() {
            return {
                currentValue: false,
                currentTransition: this.popupTransition
            };
        },

        watch: {
            currentValue(val) {
                this.$emit('input', val);
            },

            value(val) {
                this.currentValue = val;
            }
        },

        beforeMount() {
            if (this.popupTransition !== 'popup-fade') {
                this.currentTransition = `popup-slide-${ this.position }`;
            }
        },

        mounted() {
            if (this.value) {
                this.rendered = true;
                this.currentValue = true;
                this.open();
            }
        }
    };
</script>