<template>
  <nav class="nav">
    <ul>
      <li>
        <router-link
          class="nav-link"
          active-class="is-active"
          :to="{ path: '/' + $route.meta.language + '/quickstart' }">Quickstart</router-link>
      </li>

      <template v-for="group in navs">
        <li>
          <a
            href="#"
            @click.prevent="group.visible = !group.visible"
            class="nav-label switch"
            v-text="group.title" :class="{'title-open':group.visible, 'title-close':!group.visible}">
          </a>
        </li>
        <ul v-show="group.visible" transition="slidedown" :style="{
            maxHeight: group.list.length * 36 + 'px'
          }">
          <li v-for="(item, index) in group.list" :key="index">
            <router-link
              class="nav-link"
              :to="{ path: '/' + $route.meta.language + item.path }"
              active-class="is-active"
              v-text="item.name">
            </router-link>
          </li>
        </ul>
      </template>
    </ul>
  </nav>
</template>

<script>
  import NavsConfig from '../nav.config.json';

  NavsConfig.map(item => {
    item.visible = true;
    return item;
  });

  export default {
    data() {
      return {
        navs: NavsConfig,
        isZH: /zh/.test(navigator.language)
      };
    }
  };
</script>

<style lang="css" scoped>
  .edit-doc-btn {
    color: red !important;
  }

  .slidedown-transition {
    transition: all .3s ease-in-out;
    overflow: hidden;
    opacity: 1;
  }

  .slidedown-enter,
  .slidedown-leave {
    max-height: 0 !important;
    opacity: 0.3;
  }

  .nav {
    background-color: #f9fafb;
    color: #4c555a;
    font-size: 14px;
    min-height: 100%;
    min-width: 90%;
    padding: 20px 0px 42px 0px;
  }

  .nav-label {
    color: #9da5b3;
    font-weight: bold;
    padding: 8px;
    padding-left: 15px;
    display: inline-block;
    min-width: 80%;
    /*&.title-close {*/
       /*background: url("data:image/png;base64,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DxDC9YVeuyoxl6dIEGCBSEBTMWWwtH0poHUDAlzV1B5BBSzaku/NPNh0LA9QSoAFohSnf2Mzv753dgHChxHgrPqd4QQRvUxIL062LfzjtT3LD/u3zDNUEGCBqKDINmJLgAUS29RyYCoIsEBUUGQbsSXAAoltajkwFQRYICooso3YEmCBxDa1HJgKAiwQFRTZRmwJsEBim1oOTAUBFogKimwjtgRYILFNLQemggALRAVFthFbAiyQ2KaWA1NBgAWigiLbiC0BFkhsU8uBqSDAAlFBkW3ElgALJLap5cBUEGCBqKDINmJLgAUS29RyYCoIsEBUUGQbsSXAAoltajkwFQRYICooso3YEmCBxDa1HJgKAiwQFRTZRmwJsEBim1oOTAUBFogKimwjtgRYILFNLQemggALRAVFthFbAiyQ2KaWA1NBgAWigiLbiC0BFkhsU8uBqSDAAlFBkW3ElgALJLap5cBUEGCBqKDINmJLgAUS29RyYCoIsEBUUGQbsSXAAoltajkwFQRYICooso3YEmCBxDa1HJgKAiwQFRTZRmwJsEBim1oOTAUBFogKimwjtgRYILFNLQemggALRAVFthFbAv8FBCu1I1R9Bn8AAAAASUVORK5CYII=") no-repeat;*/
       /*background-size: 10px 10px;*/
       /*background-position: right center;*/
     /*}*/
  &.switch:after{
     content: '';
     display: inline-block;
     width: 10px;
     height: 20px;
    float: right;
     background: url("data:image/png;base64,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") no-repeat;
     background-size: 10px 10px;
    background-position: center center;
     transition: transform .3s cubic-bezier(.645,.045,.355,1);
   }
    &.title-close:after{
      transform: rotate(180deg);
     }
    &.title-open:after{
       transform: rotate(0deg);
     }
  }

  .nav-link {
    position: relative;
    padding: 8px 25px;
    display: block;
    text-decoration: none;
    color: inherit;
    transition: all .2s;

    &.is-active {
      color: #4078c0;
      border-right: 2px solid;
    }
  &.is-active:before {
     position: absolute;
     background-color: rgba(107, 171, 255, .1);
     width: 100%;
     height: 100%;
     top: 0;
     left: 0;
     bottom: 0;
     right: 0;
     content: "";
   }
    &:hover {
      color: #4078c0;
       background-color: rgba(107, 171, 255, .1);
    }
  }
</style>
