<template>
  <div class="page-home" id="page-home">
    <div class="page-home-bgpic"></div>
    <!--<div class="page-home-particles" id="particles-js"></div>-->
    <div class="page-home-content" id="page-home-content">
      <div class="page-home-jumbotron logo-animate">
        <div class="page-home-logo logo-animate">
          <img src="./../assets/img/logo.png" id="logo" alt=""/>
          <p class="page-home-title">YepUI</p>
          <p class="page-home-desc">基于 Vue.js 2.0 的前端 UI 组件库, 主要用于快速开发移动端页面</p>
        </div>
        <div class="page-home-buttons logo-animate">
          <router-link tag="a" to="/cn" class="page-home-button" target="_blank">
            开始使用
          </router-link>
          <a href="//yep.jd.com/demos.html#/index" class="page-home-button" target="_blank">
            查看示例
            <div class="triangle-qrcode" id="triangle-qrcode"  @mouseover="isShow = true" @mouseout="isShow = false">
              <img src="../assets/img/triangleqrcode.png" alt="">
            </div>
            <div class="page-home-qrcode"  :class="{'show': isShow, 'none': !isShow}" id="qrcode-area">
              <i class="arrow"></i>
              <div class="qrcode-container">
                <img src="./../assets/img/qrcode.png" alt="">
              </div>
            </div>
          </a>
        </div>
        <div class="page-home-warehouse logo-animate" id="page-home-warehouse">
          <a href="http://git.jd.com/JDC_FE/JDC_m_UI" class="github" target="_blank">
            <img src="./../assets/img/Git-3.png" alt="">
          </a>
          <i class="circ" id="circ"></i>
          <a href="http://npm.m.jd.com/package/@jdcfe/yepui" class="npm" target="_blank">
            <img src="./../assets/img/npm.png" alt="">
          </a>
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
  .logo-animate {
    animation: enter .5s forwards
  }
  .page-home {
    width: 100%;
    height: 5rem;
    overflow: hidden;
    margin: 0 auto;
    .page-home-bgpic{
      position: absolute;
      background: #46a0fc;
      background-size: cover;
      width: 100%;
      height: 5rem;
      z-index: 2;
    }
    .page-home-content {
      margin: 0 auto;
      .page-home-jumbotron {
        z-index: 100;
        width: 100%;
        padding-top: .5rem;
        position: relative;
        text-align: center;
        .page-home-logo {
          img {
            width: 1.27rem;
          }
          &.logo-animate {
            animation: enter .5s forwards
          }
        }

        .page-home-title {
          font-family: ChalkboardSE-Regular;
          font-size: 0.38rem;
          letter-spacing: 0.02rem;
          color: #ffffff;
        }

        .page-home-desc {
          margin-top: .4rem;
          margin-bottom: .8rem;
          font-family: FZLTZHK--GBK1-0;
          font-size: 0.23rem;
          font-weight: normal;
          font-stretch: normal;
          line-height: 0rem;
          letter-spacing: 0rem;
          color: #ffffff;
        }
        .page-home-buttons {
          .page-home-button {
            display: inline-block;
            width: 2rem;
            height: 0.45rem;
            line-height: 0.45rem;
            background-color: #ffffff;
            box-shadow: 0.01rem 0.02rem 0.02rem 0rem
            rgba(6, 0, 1, 0.5);
            border-radius: 0.05rem;
            letter-spacing: 0.01rem;
            color: #46a0fc;
            font-weight: 500;
            font-size: .18rem;
            &:hover {
              background-color: #efefef;
            }
            .triangle-qrcode {
              position: absolute;
              height: 0.44rem;
              width: 0.44rem;
              top: 0.02rem;
              right: 0rem;
              img {
                height: 0.40rem;
                width: 0.40rem;
              }
            }
          }

          .page-home-button:first-child {
            margin-right: 0.8rem;
          }

          .page-home-button:nth-child(2) {
            position: relative;

            .page-home-qrcode {
              transition: all .5s ease-in;
              i {
                position: absolute;
                display: inline-block;
                right: -0.24rem;
                top: 0.12rem;
                width: 0;
                height: 0;
                border-top: 10px solid transparent;
                border-right: 10px solid rgba(255,255,255,.47);
                border-bottom: 10px solid transparent;
              }
              .qrcode-container {
                position: absolute;
                width: 1.5rem;
                height: 1.5rem;
                right: -0.20-1.5+rem;
                top: -0.5rem;
                padding-top: 0.06rem;
                border-radius: 8px;
                img {
                  width: 1.4rem;
                  height: 1.4rem;
                  border: 5px solid rgba(255,255,255,.47);
                  border-radius: 3px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>


