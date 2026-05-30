<template>
  <div class="page banner">
    <TopNav />

    <swiper class="swiper" :options="swiperOption">
      <swiper-slide><img src="@/assets/images/ban1.jpg" alt /></swiper-slide>
      <swiper-slide><img src="@/assets/images/ban2.jpg" alt /></swiper-slide>
      <swiper-slide><img src="@/assets/images/ban3.jpg" alt /></swiper-slide>
      <swiper-slide><img src="@/assets/images/ban4.jpg" alt /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
export default {
  components: {
    TopNav,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        effect: "fade",
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.page {
  background: #000;
  position: relative;

  @media screen and (max-width: 575px) {
    width: 100vw;
    height: calc(56.25vw + 80px);
  }
}

.swiper {
  width: 100%;
  height: 100%;
  --swiper-theme-color: #fff;
  position: absolute;
  z-index: 88;
  top: 0;
  left: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 575px) {
      object-fit: contain;
    }
  }
}
</style>

<style lang="scss">
.banner {
  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.4);
  }
}
</style>