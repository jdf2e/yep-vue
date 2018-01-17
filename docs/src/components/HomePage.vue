<template>
  <div class="page-home">
    <div class="page-home-bgpic"></div>
    <div class="page-home-mask"></div>
    <div class="page-home-particles" id="particles-js"></div>
    <div class="page-home-content">
      <div class="page-home-jumbotron logo-animate">
        <div class="page-home-logo logo-animate">
          <img src="./../assets/img/logo.png" alt=""/>
          <p class="page-home-title">YepUI</p>
          <p class="page-home-desc">YepUI 是一款基于 Vue.js 2.0 的前端 UI 组件库，主要用于快速搭建移动端网站</p>
        </div>
        <div class="page-home-buttons">
          <router-link tag="a" to="/cn" class="page-home-button logo-animate" target="_blank">
            开始使用
          </router-link>
          <a href="//yep.jd.com/demos.html#/index" class="page-home-button logo-animate" target="_blank">
            查看示例
            <div class="tri-angle" @mouseover="isShow = true" @mouseout="isShow = false"></div>
            <div class="page-home-qrcode" :class="{'show': isShow, 'none': !isShow}" id="qrcode-area">
              <i class="arrow"></i>
              <div class="qrcode-container">
                <img src="./../assets/img/qrcode.png" alt="">
              </div>
            </div>
          </a>
        </div>
        <div class="page-home-warehouse">
          <a href="http://npm.m.jd.com/package/@jdcfe/yepui" class="npm" target="_blank">
            <img src="./../assets/img/npm.png" alt="">
          </a>
          <a href="http://git.jd.com/JDC_FE/JDC_m_UI" class="github" target="_blank">
            <img src="./../assets/img/Git-3.png" alt="">
          </a>
        </div>
      </div>
      <div class="page-home-start">
        <div class="page-home-left">
          <!--<h3 class="page-home-tit">介绍</h3>-->
          <!--<div class="page-home-detail">YepUI 是一款基于 Vue.js 2.0 的前端 UI 组件库，主要用于快速搭建移动端H5网站；友好亲和京东App，扩展有京东业务组件可供选择</div>-->
          <h3 class="page-home-tit">特性</h3>
          <div class="page-home-detail">
            <ul class="">
              <li>1. 基于 Vue 开发的 UI 组件</li>
              <li>2. 使用 npm + webpack + babel 的工作流，支持 ES2015</li>
              <li>3. CSS 样式独立，即使使用不同的框架实现，也都能保持统一的 UI 风格提供友好的 API，可灵活的使用组件</li>
            </ul>
          </div>
          <h3 class="page-home-tit">用法</h3>
          <div class="page-home-code">
            <code> <span class="page-home-comment"># 安装nrm</span> <span> <span
              class="pl-smi">npm install -g nrm</span> </span> <span
              class="page-home-comment"># 添加jdnpm源</span> <span> <span class="pl-smi">nrm add jdnpm2 http://registry.m.jd.com/</span> </span>
              <span> <span class="pl-smi">nrm use jdnpm2</span> </span> <span
                class="page-home-comment"># 安装组件</span> <span> <span class="pl-smi">npm install --save @jdcfe/YepUI</span> </span>
            </code>
          </div>
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
        <div class="page-home-phone">
          <iframe src="//yep.jd.com/demos.html#/index" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
        data() {
            return {
              isShow: false
            };
        },

        mounted() {
        },
    };

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "./../assets/style/index";
  .page-home {
    width: 100%;
    margin: 0 auto;
    .page-home-bgpic{
      position: absolute;
      background: url("./../assets/icon/bg.png") no-repeat;
      background-size: cover;
      width: 100%;
      height: 8.76rem;
    }
    .page-home-mask{
      position: absolute;
      background-color: rgba(0, 0, 0, .4);
      width: 100%;
      height: 8.76rem;
    }
    .page-home-content {
      width: 62%;
      margin: 0 auto;
      .page-home-jumbotron {
        width: 100%;
        padding-top: 1rem;
        position: relative;
        text-align: center;
        .page-home-logo {
          img {
            width: 2.29rem;
          }
          &.logo-animate {
            animation: enter .5s forwards
          }
        }

        .page-home-title {
          font-size: 0.8rem;
          color: #fff;
        }

        .page-home-desc {
          margin-top: 0.48rem;
          margin-bottom: 1.23rem;
          font-family: MicrosoftYaHei;
          font-size: 0.27rem;
          text-shadow: 7px 4px 7px #000;
          color: #fff;
        }
        .page-home-buttons {
          .page-home-button {
            display: inline-block;
            color: #fff;
            border-radius: 5px;
            font-size: 0.26rem;
            width: 2.49rem;
            height: 0.64rem;
            line-height: 0.64rem;
            background-color: #0aa461;
          }

          .page-home-button:first-child {
            margin-right: 0.8rem;
            background-color: #fff;
            color: #363c4e;
          }

          .page-home-button:nth-child(2) {
            position: relative;
            .tri-angle {
              position: absolute;
              width: 0.64rem;
              height: 0.64rem;
              right: 0;
              top: 0;
              background: url("./../assets/icon/smallqrcode.png") no-repeat;
              background-size: 0.64rem 0.64rem;
              border-radius: 5px;
            }

            .page-home-qrcode {
              i {
                position: absolute;
                display: inline-block;
                right: -0.24rem;
                top: 0.22rem;
                width: 0;
                height: 0;
                border-top: 10px solid transparent;
                border-right: 10px solid #787878;
                border-bottom: 10px solid transparent;
              }
              .qrcode-container {
                position: absolute;
                width: 1.98rem;
                height: 1.98rem;
                right: -0.24-1.98+rem;
                top: -0.75rem;
                padding-top: 0.06rem;
                background-color: #787878;
                border-radius: 8px;
                img {
                  width: 1.85rem;
                  height: 1.85rem;
                }
              }
            }
          }
        }

      }
      .page-home-start {
        padding-top: 1.5rem;
        &:after {
          content: '';
          display: block;
          clear: both;
        }
        .page-home-left {
          padding-top: 0.5rem;
          float: left;
          .page-home-detail{
            width: 6.15rem;
            height: 0.95rem;
            font-family: MicrosoftYaHei;
            font-size: 0.14rem;
            line-height: 0.25rem;
            color: #545454;
            border-left: 0.06rem solid #4eacdd;
            padding-left: 0.07rem;
          }
          .page-home-code {
            width: 6.21rem;
            margin-left: 0.03rem;
            margin-bottom: 0.53rem;
            background-color: #f8f8f8;
            border-radius: 8px;
            border: 1px solid #ddd;
            padding: 15px;
            code{
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
        .page-home-phone {
          float: right;
          width: 3.8*0.9rem;
          height: 7.61*0.9rem;
          background: url(./../assets/icon/phone.png) no-repeat;
          background-size: cover;
          padding: 60px 30px;

          iframe {
            width: 100%;
            height: 100%;
          }
        }

        .page-home-tit {
          margin: 20px 10px;
          font-size: 20px;
          color: #34485e;
          text-align: left
        }
        .page-home-show {}
      }
    }
  }
</style>


