<template>
  <div class="Yep-range" :class="{ 'Yep-range--disabled': disabled }">
    <slot name="start"></slot>
    <div class="Yep-range-content" ref="content">
      <div class="Yep-range-runway" :style="{ 'border-top-width': barHeight + 'px' }"></div>
      <div class="Yep-range-progress" :style="{ width: progress + '%', height: barHeight + 'px', 'background-color': barColor }"></div>
      <div class="Yep-range-thumb" ref="thumb" :style="{ left: progress + '%' }"></div>
    </div>
    <slot name="end"></slot>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss">
    @import './../../../assists/css/mixin.scss';
    .Yep-range {
      position: relative;
      display: flex;
      height: 30px;
      line-height: 30px;

      & > * {
        display: flex;
        display: -webkit-box;
      }

      & *[slot=start] {
        margin-right: 5px;
      }

      & *[slot=end] {
        margin-left: 5px;
      }

      &-content {
        position: relative;
        flex: 1;
        margin-right: 30px;
      }

      &-runway {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        right: -30px;
        border-top-color: #a9acb1;
        border-top-style: solid;
      }

      &-thumb {
        background-color: #fff;
        position: absolute;
        left: 0;
        top: 0;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        cursor: move;
        box-shadow: 0 1px 3px rgba(0,0,0,.4);
      }

      &-progress {
        position: absolute;
        display: block;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
      }

      &.disabled {
        opacity: 0.5;
      }
    }
</style>

<script>
  import draggable from './draggable';

  export default {
    name: 'Yep-range',
    data () {
        return {
            valueNum: this.value
        }
    },
    props: {
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      disabled: {
        type: Boolean,
        default: false
      },
      value: {
        type: Number
      },
      barHeight: {
        type: Number,
        default: 1
      },
      barColor: {
        type: String,
        default: '#26a2ff'
      }
    },
    computed: {
      progress() {
        const value = this.valueNum;
        if (typeof value === 'undefined' || value === null) return 0;
        return Math.floor((value - this.min) / (this.max - this.min) * 100);
      }
    },
    mounted: function () {
      const { thumb, content } = this.$refs;

      const getThumbPosition = () => {
        const contentBox = content.getBoundingClientRect();
        const thumbBox = thumb.getBoundingClientRect();

        return {
          left: thumbBox.left - contentBox.left,
          top: thumbBox.top - contentBox.top
        };
      };

      let dragState = {};
      draggable(thumb, {
        start: () => {
          if (this.disabled) return;
          const position = getThumbPosition();
          dragState = {
            thumbStartLeft: position.left,
            thumbStartTop: position.top
          };
        },
        drag: (event) => {
          if (this.disabled) return;
          const contentBox = content.getBoundingClientRect();
          const deltaX = event.pageX - contentBox.left - dragState.thumbStartLeft;
          const stepCount = Math.ceil((this.max - this.min) / this.step);
          const newPosition = (dragState.thumbStartLeft + deltaX) - (dragState.thumbStartLeft + deltaX) % (contentBox.width / stepCount);

          let newProgress = newPosition / contentBox.width;

          if (newProgress < 0) {
            newProgress = 0;
          } else if (newProgress > 1) {
            newProgress = 1;
          }

          this.valueNum = Math.round(this.min + newProgress * (this.max - this.min));
          this.$emit('update:value', this.valueNum);
        },
        end: () => {
          if (this.disabled) return;
          dragState = {};
        }
      });
    }
  };
</script>