<template>
  <div class="start-content" id="start-content">
    <h1>快速开始</h1>
    <div class="start-main" :class="{'card-init': active === 0, 'card-complete': active === 1}">
      <div class="left" id="card-container">
        <div class="top">
          <h6>安装</h6>
          <div class="page-home-code">
            <code>
              <span class="page-home-comment"># 安装nrm</span>
              <span>
                <span class="pl-smi">npm install -g nrm</span>
              </span>
              <span class="page-home-comment"># 添加jdnpm源</span>
              <span>
                <span class="pl-smi">nrm add jdnpm2 http://registry.m.jd.com/</span>
              </span>
              <span>
                <span class="pl-smi">nrm use jdnpm2</span>
              </span>
              <span class="page-home-comment"># 安装组件</span>
              <span>
                <span class="pl-smi">npm install --save @jdcfe/yepui</span>
              </span>
            </code>
          </div>
        </div>
        <div class="bottom">
          <h6>引入</h6>
          <div class="page-home-code">
            <code> <span class="page-home-comment">// 引入全部组件</span> <span> <span
              class="pl-k">import </span><span class="pl-smi">YepUI </span><span class="pl-k">from </span><span
              class="pl-s">'@jdcfe/YepUI'</span><span class="pl-smi">;</span> </span> <span> <span
              class="pl-smi">Vue.</span><span class="pl-en">use</span><span class="pl-smi">(YepUI);</span> </span>
            </code>
            <code> <span class="page-home-comment">// 按需引入部分组件</span> <span> <span
              class="pl-k">import </span><span class="pl-smi">{yepToast} </span><span
              class="pl-k">from </span><span class="pl-s">'@jdcfe/YepUI'</span><span
              class="pl-smi">;</span> </span> </code>
          </div>
        </div>
      </div>
      <div class="right" id="phone-container">
        <div class="page-home-phone">
          <iframe src="//yep.jd.com/demos.html#/index" frameborder="0"></iframe>
        </div>
      </div>
    </div>
    <div class="parallax-animation">
      <div class="rellax react-ring" data-rellax-speed="-3" style="position: absolute; top: 20%; left: 40%;transform: rotate(-28deg)">
      </div>
      <div class="rellax circle-ring" data-rellax-speed="-3" style="width: 10px; height: 10px; background-color:#e4393c;position: absolute; top: 20%; left: 57%;transform: rotate(-28deg)">
      </div>
      <div class="rellax circle" data-rellax-speed="2" style="width: 10px; height: 10px; background-color:#ffff00;position: absolute; top: 34%; left: 33%;opacity: .5"></div>
        <div class="rellax triangle" data-rellax-speed="7" style="width: 10px; height: 10px;position: absolute; top: 50%; left: 65%;opacity: .5; transform: rotate(20deg)">
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        active: 0
      };
    },
    mounted() {
      document.addEventListener('scroll', this.scrollFunc);
    },
    created() {
    },
    methods: {
      scrollFunc() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let theSwitchTop = document.body.clientWidth > 500 ? 1240 : 124;
          if (scrollTop > theSwitchTop) {
            this.active = 1
          }else {
            this.active = 0
          }
      }
    }
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
  .start-content {
    width: 100%;
    h1 {
      margin: 1.49rem;
      text-align: center;
      font-family: STHeiti;
      font-size: 0.38rem;
      letter-spacing: 0.02rem;
      color: #222222;
    }
    .start-main {
      display: flex;
      flex-direction: row;
      width: 11.6rem;
      margin: 0 auto;
      .left {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .top {
          h6 {
            font-family: STHeiti;
            font-size: 0.24rem;
            letter-spacing: 0.01rem;
            color: #222222;
            margin: .33rem .52rem 0;
          }
          width: 5.8rem;
          height: 3rem;
          box-shadow: 0rem 0rem 0.19rem 0.05rem rgba(6, 0, 1, 0.2);
        }
        .bottom {
          h6 {
            font-family: STHeiti;
            font-size: 0.24rem;
            letter-spacing: 0.01rem;
            color: #222222;
            margin: .33rem .52rem 0;
          }
          width: 5.8rem;
          height: 3rem;
          box-shadow: 0rem 0rem 0.19rem 0.05rem rgba(6, 0, 1, 0.2);
        }
        .page-home-code {
          margin-left: 0.3rem;
          margin-bottom: 0.53rem;
          padding: 15px;
          code {
            display: block;
            margin-top: 25px
          }

          code:first-child {
            margin-top: 0
          }

          code > span {
            display: block;
            line-height: 20px
          }
          code > span.page-home-comment {
            color: #969896
          }

          .pl-smi {
            color: #333
          }

          .pl-k {
            color: #a71d5d
          }

          .pl-s {
            color: #183691
          }

          .pl-en {
            color: #795da3
          }

        }
      }
      .right {
        flex: 1;
        .page-home-phone {
          margin: 0 auto;
          width: 3.8rem;
          height: 7.61rem;
          background: url(./../assets/icon/phone.png) no-repeat;
          background-size: cover;
          padding: 60px 30px;
          iframe {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>


