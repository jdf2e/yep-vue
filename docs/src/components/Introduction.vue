<template>
  <div class="page-home-intro" id="page-home-intro">
    <h1 class="page-home-tit">功能介绍</h1>
    <div class="page-home-show">
      <ul class="page-home-feature">
        <li :class="{'card-complete': active === 1, 'card-init': active === 0}">
          <img src="./../assets/img/1.png" alt="" class="left">
          <div class="right">
            <h6 class="intro-title">流畅的体验</h6>
            <p class="intro-motto">顺滑体验，性能无忧</p>
            <p class="intro-content">考虑到移动端的性能门槛， 于是采用 CSS3处理各种动效，避免浏览器进行不必要的重绘和重排，从而使用户获得流畅顺滑的体验。</p>
          </div>
        </li>
        <li :class="{'card-complete': active === 1, 'card-init': active === 0}">
          <img src="./../assets/img/2.png" alt="" class="right">
          <div class="left">
            <h6 class="intro-title">丰富的组件</h6>
            <p class="intro-motto">多功能组件，敏捷开发</p>
            <p class="intro-content">包含丰富的 CSS 和 JS 组件，能够满足日常的移动端开发需要。通过它，可以快速构建出风格统一的页面，提升开发效率。</p>
          </div>
        </li>
        <li  :class="{'card-complete': active === 1, 'card-init': active === 0}">
          <img src="./../assets/img/3.png" alt="" class="left">
          <div class="right">
            <h6 class="intro-title">轻量化</h6>
            <p class="intro-motto">小体量，大功能</p>
            <p class="intro-content">依托 Vue.js 高效的组件化方案， 做到了轻量化。即使全部引入，压缩后的文件体积也仅有 ~30kb(JS + CSS) gzip。</p>
          </div>
        </li>
        <li  :class="{'card-complete': active === 1, 'card-init': active === 0}">
          <img src="./../assets/img/4.png" alt="" class="right">
          <div class="left">
            <h6 class="intro-title">按需加载</h6>
            <p class="intro-motto">模块化加载，去除冗余</p>
            <p class="intro-content">真正意义上的按需加载组件。可以只加载声明过的组件及其样式文件，无需再纠结文件体积过大。</p></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0
      }
    },
    mounted() {
      document.addEventListener('scroll', this.scrollFunc);
    },
    methods: {
      scrollFunc() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let theSwitchTop = document.body.clientWidth > 500 ? 2400 : 880;
          if (scrollTop > theSwitchTop) {
            this.active = 1
          }else {
            this.active = 0
          }
        }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "./../assets/style/index";
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
  .page-home-intro {
    width: 100%;
    padding-top: 0.8rem;
    .page-home-tit {
      text-align: center;
      font-family: STHeiti;
      font-size: 0.38rem;
      letter-spacing: 0.02rem;
      color: #222222;
      margin-top: 1.59rem;
      margin-bottom: 0.59rem;
    }

    .page-home-show {
      width: 11.6rem;
      margin: 0 auto;
      .page-home-feature {
        display: inline-block;
        width: 100%;
        &:after {
          content: '';
          display: block;
          clear: both;
        }
        li {
          width: 100%;
          height: 4.94rem;
          img {
            display: inline-block;
            width: 5.78rem;
            height: 5.38rem;
          }
          div {
            padding-top: 1rem;

            .intro-title {
              font-family: STXihei;
              font-size: 0.57rem;
              letter-spacing: 0.03rem;
              color: #726c79;
            }
            .intro-motto {
              font-family: STXihei;
              font-size: 0.35rem;
              margin-bottom: .2rem;
              letter-spacing: 0.02rem;
              color: #8d6fa9;
            }
            .intro-content {
              width: 4.67rem;
              font-family: STXihei;
              font-size: 0.18rem;
              line-height: 0.26rem;
              color: #726c79;
              text-align: justify;
            }

          }
        }
      }
    }
  }

</style>
