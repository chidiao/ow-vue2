<template>
  <div class="home-swiper" v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="i in list" :key="i.id">
        <img class="pic" :src="i.picture" />
      </div>
    </div>
    <img class="swiper-button-prev btn" src="@/assets/images/prev.png">
    <img class="swiper-button-next btn" src="@/assets/images/next.png">

    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        loop: true,
        autoplay: true
      }
    };
  },
  computed: {},
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let parser = new UAParser();
      let dev = parser.getDevice()
      console.log(dev)
      if (dev.type == 'mobile') {
        this.$http.get("/index/carousel?device=wap").then(res => {
          this.list = res.data.result.carousel;
        });
      } else {
        this.$http.get("/index/carousel").then(res => {
          this.list = res.data.result.carousel;
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.home-swiper {
  .pic {
    width: 100%;
    height: 500px;
  }
  .btn {
    width: 40px;
    height: 40px;
    outline: none;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
}
@media screen and (max-width: 575px) {
  .home-swiper {
    .swiper-slide {
      display: flex;
      justify-content: center;
    }
    .pic {
      margin: 16px 0 32px 0;
      width: 95%;
      height: 160px;
      border-radius: 8px;
    }
    .btn {
      display: none;
    }
  }
}
</style>