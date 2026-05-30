<template>
  <div class="home">
    <swiper></swiper>
    <home-nav></home-nav>

    <articles></articles>

    <kecheng></kecheng>

    <about></about>

    <huanjing limit="6"></huanjing>

    <award></award>

    <div class="blank" style="height:60px"></div>
    <yuyue></yuyue>

    <div class="mask" v-show="adShow"></div>
  </div>
</template>

<script>
import swiper from "@/components/home/home-swiper";
import homeNav from "@/components/home/home-nav";
import articles from "@/components/home/home-articles"
import about from "@/components/home/home-about";
import huanjing from "@/components/home/home-huanjing";
import yuyue from "@/components/home/home-yuyue";
import kecheng from "@/components/home/home-classification";
import award from "@/components/home/home-award";

export default {
  components: {
    swiper,
    homeNav,
    articles,
    about,
    huanjing,
    yuyue,
    kecheng,
    award
  },
  data() {
    return {
      adShow: false
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
</style>

