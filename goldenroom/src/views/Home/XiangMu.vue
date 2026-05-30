<template>
  <div class="xiangmu page">
    <swiper class="swiper-top" :options="swiperTopOptions" ref="swiperTop">
      <swiper-slide
        class="myslide"
        v-for="i in list"
        :key="i.id"
        :style="{
          background: `url('${i.picture}') no-repeat left bottom / 100% auto #fff`,
        }"
        ><div class="content">
          <div class="title">{{ i.title }}</div>
          <div class="text">{{ i.content }}</div>
        </div></swiper-slide
      >
    </swiper>

    <Block>
      <div class="block-title">项目介绍</div>

      <swiper class="swiper-btn" :options="swiperBtnOptions" ref="swiperBtn">
        <swiper-slide class="myslide" v-for="i in list" :key="i.id">
          <div class="btn">
            <div
              class="pic"
              :style="{ backgroundImage: `url(${i.thumbnail})` }"
            ></div>
            <div class="title">{{ i.title }}</div>
          </div>
        </swiper-slide>
      </swiper>
    </Block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      swiperTopOptions: {
        loop: true,
        loopedSlides: 5,
        effect: "fade",
      },
      swiperBtnOptions: {
        autoplay: true,
        loop: true,
        loopedSlides: 5,
        // centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
        breakpoints: {
          320: {
            //当屏幕宽度大于等于320
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            //当屏幕宽度大于等于768
            slidesPerView: 3,
            spaceBetween: 32,
          },
          1280: {
            //当屏幕宽度大于等于1280
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      },
    };
  },
  mounted() {
    this.getList();

    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperBtn = this.$refs.swiperBtn.$swiper;
      swiperTop.controller.control = swiperBtn;
      swiperBtn.controller.control = swiperTop;
    });
  },
  methods: {
    async getList() {
      let res = await this.$http.get("/project");
      this.list = res.data.result.project;
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  position: relative;
}

.swiper-top {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  .myslide {
    width: 100%;
    height: 100%;
  }

  .content {
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    height: 100%;

    --block-title-size: 40px;
    --block-text-size: 22px;
    --common-text-size: 18px;
    --left: 50%;
    --top: 32%;

    @media screen and (max-width: 767px) {
      --block-title-size: 32px;
      --block-text-size: 20px;
      --common-text-size: 14px;
      --left: 0;
      --top: 56vw;
    }

    @media screen and (max-width: 575px) {
      --block-title-size: 24px;
      --block-text-size: 14px;
      --common-text-size: 12px;
      --left: 0;
      --top: 56vw;
    }

    .title {
      padding-top: var(--top);
      padding-left: var(--left);
      font-size: var(--block-title-size);
      color: #000;
      padding-bottom: 20px;
    }

    .text {
      padding-left: var(--left);
      font-size: var(--block-text-size);
      line-height: 1.8em;
      letter-spacing: 1px;
      font-weight: 500;
    }
  }
}

.block-title {
  color: #000;
  z-index: 99;
  position: relative;
  padding-bottom: 20px;
}

.swiper-btn {
  width: 100%;
  position: relative;

  .pic {
    width: 100%;
    padding-top: 59.44%;
    background-size: 101% 101%;
    background-position: center;
    transition: all 0.5s;
    cursor: pointer;

    &:hover {
      background-size: 120% 120%;
    }
  }

  .title {
    padding: 8px 0;
    text-align: center;
    letter-spacing: 2px;
    font-size: 14px;
  }
}
</style>