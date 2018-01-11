<template>
  <div>
    <main
    class="row main"
    :class="{'slide-in-left': navbarShow}">
    <section
      class="col-2 is-scrollable navbar">
      <a class="nav-bar" href="http://yep.jd.com/">
        <div class="logo">
          <span>YepUI</span>
        </div>
      </a>
      <navbar></navbar>
    </section>
    <section class="col-6 is-scrollable content" ref="main" @click="navbarShow = false">
      <div class="navbar-toggle-container">
        <button class="navbar-toggle" @click="toggleNavbar">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <router-view></router-view>
    </section>
    <section class="col-4 demo">
      <phone class="phone"></phone>
    </section>
  </main>
  </div>
</template>

<script type="text/babel">
  import Navbar from './components/navbar';
  import Phone from './components/phone';

  export default {
    watch: {
      '$route.path'() {
        this.$refs.main.scrollTop = 0;
        setTimeout(() => {
          this.navbarShow = false;
        }, 200);
      }
    },

    data() {
      return {
        navbarShow: false
      };
    },

    components: {
      Navbar,
      Phone
    },

    methods: {
      toggleNavbar(event) {
        event.stopPropagation();
        this.navbarShow = !this.navbarShow;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .nav-bar {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 55px;
    background-color: #26a2ff;
  .logo {
    min-width: 35px;
    min-height: 35px;
    margin-left: 25px;
    padding-top: 15px;
    vertical-align: middle;
    background: url("data:image/png;base64,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") no-repeat;
    background-size: 35px 35px;
    background-position: center left;
    span {
      padding-left: 50px;
      font-size: 20px;
      font-weight: 800;
      color: #fff;

    }
  }
  }
  .main {
    height: 100%;
    padding: 0 10px;
    min-width: 960px;
    transition: transform .3s ease-in-out;

    > section {
      height: inherit;
      overflow-y: scroll;
      overflow-x: hidden;

      &.is-scrollable {
        overflow: auto;
      }
    }
  }

  .content {
    padding-bottom: 2em;
  }

  .navbar {
    min-width: 140px;
    padding-left: 0;
  }

  .navbar-toggle-container {
    display: none;
  }

  .phone {
    position: absolute;
    top: 10px;
    right: 30px;
  }

  @media screen and (max-width: 768px) {
    .main {
      min-width: 0;
      box-sizing: border-box;
      width: 100%;
      margin: 0;
      padding: 0;
    }

    .demo {
      display: none;
    }

    .content {
      width: 100%;
      padding: 45px 10px 0;
    }

    .navbar {
      left: 0;
      margin-left: -60%;
      margin-right: 0;
      opacity: 1;
      position: absolute;
      top: 0;
      transition: opacity .3s;
      width: 60%;
      z-index: 10;
      min-width: auto;
      padding: 0;
    }

    .slide-in-left {
      transform: translate3d(60%, 0, 0);

      .navbar {
        opacity: 1;
      }
    }

    .navbar-toggle-container {
      box-sizing: border-box;
      display: block;
      position: fixed;
      padding-left: 10px;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #26a2ff;
      z-index: 10;
    }

    .navbar-toggle {
      display: block;
      background-color: #26a2ff;
      border-radius: 4px;
      border: 1px solid #fff;
      height: 35px;
      margin: 10px 0;
      padding: 2px 6px;
      outline: none;
      width: 35px;
      z-index: 10;
      span {
        display: block;
        width: 100%;
        height: 2px;
        margin: 4px auto;
        background-color: #fff;
      }
    }
  }
</style>
