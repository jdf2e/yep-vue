<style lang="scss" rel="stylesheet/scss">
    @import './../../../assists/css/mixin.scss';

    .Yep-check-num {
        @include box();
        max-width: 6.14rem;
        align-items: center;
        height: 100%;
        text-align: center;

        span {
            display: block;

            height: .9rem;

            line-height: .9rem;

        }

        input {
            width: 100%;
            height: 100%;
            text-align: center;
        }

        &__msg {
            padding-right: .21rem;
            color: $l-red;
        }

        &__calc {
            width: 1rem;
            padding: 0 .14rem;
            @include bd-all-1px(#bfbfbf);


        }

        &__minus {
            width: 1rem;
            position: relative;
            .minus,.plus{

                &:before{
                    content: '';
                    height: .04rem;
                    width: .3rem;
                    display: block;
                    background: #848689;
                    position: absolute;
                    top: .43rem;
                    left: .36rem;
                }
            }


            &.unused {
                i {
                    background-position-x: 66.66%;
                }
            }
            &:after {
                border-bottom-right-radius: 0;
                border-top-right-radius: 0;
            }
        }

        &__add {
            .plus{
                &:before,&:after{
                    content: '';
                    height: .04rem;
                    width: .3rem;
                    display: block;
                    background: #848689;
                    position: absolute;
                    top: .43rem;
                    left: .36rem;
                }
                &:after{
                    height: .3rem;
                    width: .04rem;
                    top: .3rem;
                    left: .5rem;
                }

            }
            &.unused {
                i {
                    background-position-x: 0;
                }
            }
            &:after {
                border-bottom-left-radius: 0;
                border-top-left-radius: 0;
            }
        }
        &__value {
            @include flex(1);
            line-height: .3rem !important;
            @include border-top-1px(#bfbfbf);
            @include border-bottom-1px(#bfbfbf);
            .tips{
                display: inline-block ;
            }
            &:after {
                border-radius: 0;
            }

        }
    }
</style>

<template>
    <section class="Yep-check-num">
        <span class="Yep-check-num__msg" v-if="msg">{{msg}}</span>
        <span class="Yep-check-num__calc Yep-check-num__minus" :class="{unused: isMin}" @click="minus()">
      <span class="minus"></span>
        </span>
        <span class="Yep-check-num__value">
      <input
              :class="{long: !unit}"
              type="text"
              v-model="currentValue "
              @focus="inputFocus"
              style="color:#f52f30"
              @blur="inputBlur"/>
      {{unit}}
    </span>
        <span
                class="Yep-check-num__calc Yep-check-num__add"
                :class="{unused: isMax}"
                @click="plus()">
      <span class="plus"></span>
     </span>
    </section>
</template>

<script>

  export default {
    data() {
      return {
        currentValue: 0,
        msg: '',
        inputWidth: 0.2,
        showTip: false,
      };
    },
    props: {
      min: Number,
      max: Number,
      unit: {
        default: '',
      },
      offset: Number,
      current: String || Number,
    },
    created() {
      this.currentValue = this.current;
    },
    computed: {
      isMin() {
        return this.currentValue <= this.min;
      },
      isMax() {
        return this.currentValue >= this.max;
      },
    },
    watch: {
      currentValue(newVal, oldVal) {
        this.parseNum(newVal, oldVal);
        if (this.currentValue.toString().split('.')[0].replace(/[,¥]/g, '').length > 12 || (+(this.currentValue.toString().split('.')[0].replace(/[,¥]/g, ''))) < (+(this.current.toString().split('.')[0].replace(/[,¥]/g, '')))) {
          this.currentValue = oldVal.replace(/[,¥]/g, '');
        }
        if (newVal.replace(/[,¥]/g, '').split('.')[1] !== undefined) {
          let decimal;
          if (newVal.replace(/[,¥]/g, '').split('.')[1] !== '' && /^\d+$/.test(newVal.replace(/[,¥]/g, '').toString().split('.')[1]) === false) {
            decimal = oldVal.replace(/[,¥]/g, '').split('.')[1].substr(0, 2);
          } else {
            decimal = newVal.replace(/[,¥]/g, '').split('.')[1].substr(0, 2);
          }
          this.currentValue = `¥${this.formatNumberKB(+this.currentValue.toString().split('.')[0])}.${decimal}`;
        } else {
          this.currentValue = `¥${this.formatNumberKB(+this.currentValue.toString().split('.')[0])}`;
        }
        this.$emit('numUpdated', this.currentValue);
      },
      unit() {
        this.msg = '';
      },
      current() {
        this.currentValue = this.current;
      },
    },
    methods: {
      formatNumberKB(numStr) {
        if (numStr) {
          let num = numStr;
          num = num.toString().replace(/[$,]/g, '');
          if (isNaN(num)) {
            num = '0';
          }
          const sign = (Number(num) === (num = Math.abs(num)));
          num = Math.floor((num * 100) + 0.50000000001);
          const cents = num % 100;
          num = Math.floor(num / 100).toString();
          let float = '';

          if (cents === 0) {
            float = '';
          } else if (cents > 0 && cents < 10) {
            float = `.0${cents}`;
          } else {
            float = `.${cents}`;
          }

          for (let i = 0; i < Math.floor((num.length - (1 + i)) / 3); i += 1) {
            num = `${num.substring(0, num.length - ((4 * i) + 3))},${num.substring(num.length - ((4 * i) + 3))}`;
          }
          return `${((sign) ? '' : '-')}${num}${float}`;
        }
        return '';
      },
      parseNum(param1, param2) {
        if (param1 && param2) {
          let newValue = param1;
          const newValArr = newValue.split('.');
          const oldValArr = param2.split('.');
          if ((newValue.indexOf('.') > 0 && newValArr[1] === '' && oldValArr && oldValArr[1] === '') || (newValArr[1] && newValArr[1] === '00')) {
            newValue = `${newValArr[0]}.00`;
          }
          if (newValArr[1] && newValArr[1].length > 2) {
            newValue = `${newValArr[0]}.${oldValArr[1]}`;
          }
          this.currentValue = newValue;
        }
        this.currentValue = parseFloat(this.currentValue.replace(/[,¥]/g, ''));
      },
      minus() {
        this.parseNum();
        if (this.isMin) {
          this.msg = `最少${this.min}${this.unit}`;
        } else {
          this.currentValue -= this.offset || 1;
          this.currentValue = this.formatNumberKB(this.currentValue);
          this.msg = '';
        }
      },
      plus() {
        this.parseNum();
        if (this.isMax) {
          this.msg = `最多${this.max}${this.unit}`;
        } else {
          this.currentValue += this.offset || 1;
          this.currentValue = this.formatNumberKB(this.currentValue);
          this.msg = '';
        }
      },
      inputFocus() {
        this.showTip = true;
        this.$emit('inputChange', true);
      },
      inputBlur() {
        this.showTip = false;
        this.$emit('inputChange', false);
      },
    },
  };

</script>
