<template>
    <main>
        <!-- lazy-load -->
        <div>
            <div class="page">
                <h1 class="page-title">
                    <span>lazy-load</span>
                    <router-link class="page-back router-link-active" to="/">
                        返回
                        <i class="Yepui Yepui-back"></i>
                    </router-link>
                </h1>
                <div>
                    <Yep-lazy-load>
                        <!-- real component-->
                      <template>
                        <div class="module-box">
                          <div class="module-main">
                            <div class="tv-list">
                              <ul>
                                <li class="big">
                                  <a target="_blank" href="http://tv.sohu.com/20161222/n476690521.shtml" class="pic"><img src="http://photocdn.sohu.com/20161221/vrsa_hor9271114.jpg" alt="隔离死城第1季第13集">
                                    <span class="ico-player"></span>
                                  </a>
                                </li>
                                <li class="">
                                  <a target="_blank" href="http://tv.sohu.com/20161109/n472747423.shtml" class="pic"><img src="http://photocdn.sohu.com/20161111/vrsa_hor_1478837546216_9229258.jpg" alt="破产姐妹第5季第22集">
                                    <span class="ico-player"></span>
                                  </a>
                                </li>
                                <li class="">
                                  <a target="_blank" href="http://tv.sohu.com/20170319/n483857612.shtml" class="pic"><img src="http://photocdn.sohu.com/20170310/vrsa_hor_1489115711827_9281609.jpg" alt="胡迪尼与道尔第1季第10集">
                                    <span class="ico-player"></span>
                                  </a>
                                </li>
                                <li class="">
                                  <a target="_blank" href="http://tv.sohu.com/20170317/n483733204.shtml" class="pic"><img src="http://photocdn.sohu.com/20170310/vrsa_hor9313039.jpg" alt="盘中兽第1季第10集">
                                    <span class="ico-player"></span>
                                  </a>
                                </li>
                                <li class="">
                                  <a target="_blank" href="http://tv.sohu.com/20170121/n479313300.shtml" class="pic"><img src="http://photocdn.sohu.com/20170117/vrsa_hor9291436.jpg" alt="亿万富翁第1季第12集">
                                    <span class="ico-player"></span>
                                  </a>
                                </li>
                                <li class="">
                                  <a target="_blank" href="http://tv.sohu.com/20170131/n479749763.shtml" class="pic"><img src="http://photocdn.sohu.com/20161226/vrsa_hor_1482745708059_8388904.jpg" alt="美国罪恶第1季第11集">
                                    <span class="ico-player"></span>
                                  </a>
                                </li>
                                <li class="">
                                  <a target="_blank" href="http://tv.sohu.com/20170321/n484142953.shtml" class="pic"><img src="http://photocdn.sohu.com/20170310/vrsa_hor9313037.jpg" alt="罪第1季第10集">
                                    <span class="ico-player"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </template>
                        <!-- skeleton component -->
                      <template slot="skeleton">
                        <div class="module-box">
                          <div class="tv-list">
                            <ul class="load-list">
                              <li class="big">
                                <div class="load-list-con"></div>
                              </li>
                              <li>
                                <div class="load-list-con"></div>
                              </li>
                              <li>
                                <div class="load-list-con"></div>
                              </li>
                              <li>
                                <div class="load-list-con"></div>
                              </li>
                              <li>
                                <div class="load-list-con"></div>
                              </li>
                              <li>
                                <div class="load-list-con"></div>
                              </li>
                              <li>
                                <div class="load-list-con"></div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </template>
                    </Yep-lazy-load>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" rel="stylesheet/scss">
</style>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
        },
        mounted() {
        },
        components: {
        }
    }
</script>

