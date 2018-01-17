<template>
  <div class="outer-container">
  <home-page></home-page>
  <introduction></introduction>
    <div class="toTop" :class="{'show': toTop, 'none': !toTop}" id="toTop" ref="toTop" @click="ScrollToTop">
     <svg class="icon" width="40px" height="40.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M570.201 721.872h-116.4v-116.4h116.4v116.4z" fill="#ffffff" /><path d="M337.401 489.073h-116.4v-116.4h116.4v116.4z" fill="#ffffff" /><path d="M686.599 605.472h-116.4v-116.4h116.4v116.4z" fill="#ffffff" /><path d="M802.999 489.073h-116.4v-116.4h116.4v116.4z" fill="#ffffff" /><path d="M453.8 605.472h-116.4v-116.4h116.4v116.4z" fill="#ffffff" /></svg>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import HomePage from './../components/HomePage.vue'
  import Introduction from './../components/Introduction.vue'
  import PageFooter from '../components/PageFooter.vue'
    export default {
    data () {
      return {
        toTop: false,
        scrollTop: 0
      }
    },
    components: {
      HomePage, Introduction, PageFooter
    },
      mounted(){
        var deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth > 750) {
          var json = {
            "particles": {
              "number": {
                "value": 30,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "triangle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.3,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 10,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 3,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 300,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
              },
              "move": {
                "enable": true,
                "speed": 12,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": false,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 800,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 800,
                  "size": 80,
                  "duration": 2,
                  "opacity": 0.8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 400,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          };
          particlesJS.load('particles-js', JSON.stringify(json), function () {
            console.log('callback - particles.js config loaded');
          });
        }
        document.body.onmousewheel = document.body.onmousewheel = this.scrollFunc;
        document.body.ontouchmove = document.body.ontouchmove = this.scrollFunc;
        document.body.onscroll = this.scrollFunc;
      },
      methods: {
        ScrollToTop () {
          this.toTop = false;
          var step = this.scrollTop / 50;
          if (this.scrollTop > 0) {
            this.scrollTop -= step;
            document.body.scrollTop = this.scrollTop
            document.documentElement.scrollTop = this.scrollTop
            setTimeout(this.ScrollToTop, 10)
          } else {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
          }
        },
  scrollFunc () {
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          this.scrollTop = scrollTop;
    var firstPageHeight = document.body.clientWidth > 500 ? 876 : 425;
    if (scrollTop > firstPageHeight) {
      this.toTop = true;
    } else {
      this.toTop = false;
    }
    console.log(scrollTop)
    if ( document.body.clientWidth < 500 && scrollTop > 2123) {
      this.$refs.toTop.style.bottom = (scrollTop - 2123) + 50+'px';
    }
  }
      }
    };

</script>

<style lang="scss" rel="stylesheet/scss">
  .outer-container{
    width: 100%;
  }
</style>


