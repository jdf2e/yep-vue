<template>
  <div class="page-home-intro">
    <h3 class="page-home-tit">功能介绍</h3>
    <div class="page-home-show">
      <ul class="page-home-feature">
        <li>
          <img src="./../assets/img/1.png" alt="" class="left">
          <div class="right">
            <h6 class="intro-title">流畅的体验</h6>
            <p class="intro-content">考虑到移动端的性能门槛， 于是采用 CSS3处理各种动效，避免浏览器进行不必要的重绘和重排，从而使用户获得流畅顺滑的体验。</p>
          </div>
        </li>
        <li>
          <img src="./../assets/img/2.png" alt="" class="right">
          <div class="left">
            <h6 class="intro-title">丰富的组件</h6>
            <p class="intro-content">包含丰富的 CSS 和 JS 组件，能够满足日常的移动端开发需要。通过它，可以快速构建出风格统一的页面，提升开发效率。</p>
          </div>
        </li>
        <li>
          <img src="./../assets/img/3.png" alt="" class="left">
          <div class="right"><h6 class="intro-title">轻量化</h6>
            <p class="intro-content">依托 Vue.js 高效的组件化方案， 做到了轻量化。即使全部引入，压缩后的文件体积也仅有 ~30kb(JS + CSS) gzip。</p>
          </div>
        </li>
        <li>
          <img src="./../assets/img/4.png" alt="" class="right">
          <div class="left">
            <h6 class="intro-title">按需加载</h6>
            <p class="intro-content">真正意义上的按需加载组件。可以只加载声明过的组件及其样式文件，无需再纠结文件体积过大。</p></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "./../assets/style/index";
  .page-home-intro {
    width: 100%;
    padding-top: 0.8rem;
    .page-home-tit {
      text-align: center;
      font-family: MicrosoftYaHei;
      font-size: 0.4rem;
      line-height: 0.25rem;
      letter-spacing: 0.01rem;
      color: #000;
    }

    .page-home-show {
      width: 70%;
      margin: 0.1rem auto;
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
            padding-top: 1.90rem;
            .intro-title {
              font-family: HiraginoSansGB-W3;
              font-size: 0.3rem;
              line-height: 0.25rem;
              letter-spacing: 0.01rem;
              color: #000000;
            }
            .intro-content {
              margin-top: 0.34rem;
              width: 4.6rem;
              font-family: AdobeHeitiStd-Regular;
              font-size: 0.20rem;
              line-height: 0.33rem;
              letter-spacing: 0.01rem;
              color: #000000;
              text-align: justify;
            }

          }
        }
      }
    }
  }

</style>
