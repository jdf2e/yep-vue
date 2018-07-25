<template>
  <div class="container">
    <div class="card" id="card">
      <div class="left">
        <div class="faststart-placeholder" :class="{'block': active === 0, 'none': active === 1}">
          <div class="fast-start" @click="scrollTo(1300)">
            快速开始
          </div>
          <div class="scroll-container">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
          </div>
        </div>
        <div class="left-content" :class="{'card-init': active === 0, 'card-complete': active === 1}">
          <h1>Yep UI Components</h1>
          <p>
            基于京东日常开发业务,我们提供了一套开箱即用的高质量 Vue 组件,
            主要用于快速开发移动端页面.
          </p>
          <div class="fast-start" @click="scrollTo(1300)">
            快速开始
          </div>
        </div>
      </div>
      <div class="right">
        <div class="readmore-placeholder" :class="{'block': active === 0, 'none': active === 1}">
          <div class="read-more" @click="scrollTo(2650)">
            了解更多
          </div>
          <div class="scroll-container">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
          </div>
        </div>
        <div class="right-content" :class="{'card-init': active === 0, 'card-complete': active === 1}">
          <h1>Feature</h1>
          <ul>
            <li>基于 Vue 2.0 开发的 UI 组件</li>
            <li>使用 npm + webpack + babel 的工作流，支持 ES2015</li>
            <li>CSS 样式独立，即使使用不同的框架实现，也都能保持统一的 UI 风格提供友好的 API，可灵活的使用组件</li>
          </ul>
          <div class="read-more" @click="scrollTo(2650)">
            了解更多
          </div>
        </div>
      </div>
      <div class="parallax-animation">
        <div class="rellax circle-ring" data-rellax-speed="1" style="width: 200px; height: 200px; position: absolute; top: 10%; right: 2%; transform:rotate(17deg); z-index: 1"></div>
        <div class="rellax small-circle-ring" data-rellax-speed="4" style="width: 30px; height: 30px; position: absolute; top: 13%; left: 70%; transform:rotate(17deg); opacity: .8;background-color:#46a0fc;"></div>
            <div class="rellax small-circle-ring" data-rellax-speed="10" style="width: 30px; height: 30px; position: absolute; top: 22%; left: 7%; transform:rotate(17deg); opacity: .8;background-color:#46a0fc;">
        </div>
        <div class="rellax circle" data-rellax-speed="10" style="width: 100px; height: 100px; position: absolute; top: 17%; left: 25%;  opacity: .9; z-index: 1">
        </div>
        <div class="rellax react" data-rellax-speed="-2" style="width: 200px; height: 200px; position: absolute; top: 15%; left:83%;transform: rotate(-53deg);  opacity: .9; z-index: 1">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        active: 0,
      };
    },

    created() {
    },
    mounted() {
      document.addEventListener('scroll', this.scrollFunc);
    },
    methods: {
      scrollTo(position) {
        let currentPosition = document.documentElement.scrollTop;
        var step = (position - currentPosition) / 50;
        if (step > 1) {
          currentPosition += step;
          document.body.scrollTop = currentPosition;
          document.documentElement.scrollTop = currentPosition;
          setTimeout(this.scrollTo(position), 10)
        } else {
          document.body.scrollTop = position
          document.documentElement.scrollTop = position
        }
      },
      scrollFunc() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (document.body.clientWidth > 500 ) {//在 PC 端显示缓出动画
          if (scrollTop > 290) {
            this.active = 1
          }else {
            this.active = 0
          }
        }
      }
    },
  };

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .card-init {
    transform: translate(0, 10%);
    opacity: 0;
    transition: all .5s ease-in;
  }
  .card-complete {
    transform: translate(0, 0);
    opacity: 1;
    transition: all .5s ease-in;
  }
  .container {
    width: 100%;
    background-color: #fff;
    padding-top: 1.7rem;
    .card {
      display: flex;
      margin: 0 auto;
      width: 11.6rem;
      height: 5.7rem;
      box-shadow: 0rem 0rem 0.19rem 0.05rem
      rgba(6, 0, 1, 0.2);
      .left {
        z-index: 999;
        position: relative;
        flex: 1;
        background-color: #46a0fc;
        box-sizing: border-box;
        .faststart-placeholder {
          color: #fff;
          font-size: .2rem;
          div.fast-start {
            width: 1.2rem;
            margin: .5rem auto 0.1rem;
            letter-spacing: .1rem;
            cursor: pointer;
          }
          .scroll-container {
            width: 28px;
            margin: 0 auto;
            .chevron {
              position: absolute;
              width: 28px;
              height: 8px;
              opacity: 0;
              transform: scale3d(0.5, 0.5, 0.5);
              animation: move 3s ease-out infinite;
            }
            .chevron:first-child {
              animation: move 3s ease-out 1s infinite;
            }
            .chevron:nth-child(2) {
              animation: move 3s ease-out 2s infinite;
            }
            .chevron:before,
            .chevron:after {
              content: ' ';
              position: absolute;
              top: 0;
              height: 100%;
              width: 51%;
              background: #fff;
            }
            .chevron:before {
              left: 0;
              transform: skew(0deg, 30deg);
            }
            .chevron:after {
              right: 0;
              width: 50%;
              transform: skew(0deg, -30deg);
            }
            @keyframes move {
              25% {
                opacity: 1;
              }
              33% {
                opacity: 1;
                transform: translateY(30px);
              }
              67% {
                opacity: 1;
                transform: translateY(40px);
              }
              100% {
                opacity: 0;
                transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
              }
            }
            @keyframes pulse {
              to {
                opacity: 1;
              }
            }
          }
        }
        .left-content {
          width: 4.53rem;
          height: 3.93rem;
          margin: .56rem .76rem 1.21rem .49rem;
          h1 {
            font-family: STHeiti;
            font-size: 0.24rem;
            letter-spacing: 0.01rem;
            color: #ffffff;
            margin-bottom: .42rem;
          }
          p {
            width: 4.49rem;
            font-family: STXihei;
            font-size: 0.15rem;
            line-height: 0.32rem;
            letter-spacing: 0rem;
            color: #ffffff;
          }
          div.fast-start {
            cursor: pointer;
            position: absolute;
            left: .6rem;
            bottom: 0rem;
            font-family: STHeiti;
            font-size: 0.18rem;
            letter-spacing: 0.01rem;
            color: #ffffff;
            &:after {
              content: '';
              display: inline-block;
              margin-top: 2px;
              margin-left: .2rem;
              width: 15px;
              height: 15px;
              background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAA9klEQVQ4jY2UvQ4BQRSFJyFbiES1GlREI+Ih9EqN56MWGo2fhMJGhEShkWh0vMOn2Cuum9lZU845+e7ZzLnrgAGQALEzBxgBG6BiNWvckp4LUFX3ReAsWhIEARVgLeYbUFdaDJxEO/rSalAJWClQwwxJVNpc0FzMD6BlQDvRrjqtDxQBMwVqB9LmgiZifgJdA1qIdtdpfaACMFagXiBtEBRJ7E/8otLKwEu0w79J7CeFk0iCqTJ1DMBbBQvwTpFnDr+OTFkqU9MAwoULdYC0+rkAO6VmABfRspeQ3y2O1X3Ed4v3mQAx90m32Pc/GZI2tJQJcM69AUq+MiRQlz0VAAAAAElFTkSuQmCC") no-repeat;
              background-size: 15px 15px;
            }
          }
        }
      }
      .right {
        z-index: 998;
        position: relative;
        flex: 1;
        background-color: #fff;
        box-sizing: border-box;
        .readmore-placeholder {
          color: #46a0fc;
          font-size: .2rem;
          div.read-more {
            width: 1.2rem;
            margin: .5rem auto 0.1rem;
            letter-spacing: .1rem;
            cursor: pointer;
          }
          .scroll-container {
            width: 28px;
            margin: 0 auto;
            .chevron {
              position: absolute;
              width: 28px;
              height: 8px;
              opacity: 0;
              transform: scale3d(0.5, 0.5, 0.5);
              animation: move 3s ease-out infinite;
            }
            .chevron:first-child {
              animation: move 3s ease-out 1s infinite;
            }
            .chevron:nth-child(2) {
              animation: move 3s ease-out 2s infinite;
            }
            .chevron:before,
            .chevron:after {
              content: ' ';
              position: absolute;
              top: 0;
              height: 100%;
              width: 51%;
              background: #46a0fc;
            }
            .chevron:before {
              left: 0;
              transform: skew(0deg, 30deg);
            }
            .chevron:after {
              right: 0;
              width: 50%;
              transform: skew(0deg, -30deg);
            }
            @keyframes move {
              25% {
                opacity: 1;
              }
              33% {
                opacity: 1;
                transform: translateY(30px);
              }
              67% {
                opacity: 1;
                transform: translateY(40px);
              }
              100% {
                opacity: 0;
                transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
              }
            }
            @keyframes pulse {
              to {
                opacity: 1;
              }
            }
          }
        }
        .right-content {
          width: 4.53rem;
          height: 3.93rem;
          margin: .56rem .76rem 1.21rem .49rem;
          h1 {
            font-family: STHeiti;
            font-size: 0.24rem;
            letter-spacing: 0.01rem;
            color: #222222;
            margin-bottom: .42rem;
          }
          li {
            font-family: MicrosoftYaHei;
            font-size: 0.14rem;
            line-height: 0.25rem;
            color: #545454;
            margin-bottom: .32rem;
          }
          div.read-more {
            cursor: pointer;
            position: absolute;
            left: .6rem;
            bottom: 0rem;
            font-family: STHeiti;
            font-size: 0.18rem;
            letter-spacing: 0.01rem;
            color: #46a0fc;
            &:after {
              content: '';
              display: inline-block;
              margin-top: 2px;
              margin-left: .2rem;
              width: 15px;
              height: 15px;
              background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABgElEQVQ4jX3UP0hWURjH8Y+vL3docejPkk2GONTS0NqrmAZWIrqkU0PgLk0tTU3ujkKDQhQOvosGGoWJTga12ZRO2vAugVLQcJ4r1+u9nuUMv8P3+T6c55yu2fmTp3iFxzhyfs3gBcbRUbEW5jINvMR9bOBGIW9G9gDr6KmCQCMMPuEOvqI3sr94iL1Cket1kA7GsIm+AN6K/Agt7OJeHagR+58wagdoG7cj62AEW2H7uWB7DpKDJrGKm2HUXwJtYiCy3ioInGIKywHawt2S7VrYfsltu2bnT8otQjfeYhrHGMa3yDK8xxMcolU2ydc/PMdPXMMH6cpz22n8DtvlOkg3FkP7GBPSlcMVLOFqmDxrVgAyvJOm9BCj+FEAtDEYloMLc9mvMuRCv9iPrAcrBUALBwp95lVWMRSHRmPPAevS5H6PM2fvrFkAFDXPqkgT2q4D5JBylUfRSg7YkCZ1Vxq4C6+5eUmVDB8DsBPtVX4HDbyWxriseYo30oQO1QHgP3CPZDB2MHVNAAAAAElFTkSuQmCC") no-repeat;
              background-size: 15px 15px;
            }
          }
        }
      }
    }
  }
</style>


