<template>
  <div id="certify">
    <btitle v-show="true" :icon="require('@/assets/images/hb6.png')" title="走向辉煌"></btitle>
    <div v-swiper:pcSwiper="swiperOption" class="pc">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="i in swiperList" :key="i.id">
          <img :src="i.img" />
        </div>
      </div>

      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <div class="mb"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        watchSlidesProgress: true,
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        loopedSlides: 5,
        autoplay: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination"
          //clickable :true,
        },
        on: {
          progress: function(progress) {
            for (let i = 0; i < this.slides.length; i++) {
              let slide = this.slides.eq(i);
              let slideProgress = this.slides[i].progress;
              let modify = 1;
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
              }
              let translate = slideProgress * modify * 260 + "px";
              let scale = 1 - Math.abs(slideProgress) / 5;
              let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
              slide.transform(
                "translateX(" + translate + ") scale(" + scale + ")"
              );
              slide.css("zIndex", zIndex);
              slide.css("opacity", 1);
              if (Math.abs(slideProgress) > 3) {
                slide.css("opacity", 0);
              }
            }
          },
          setTransition: function(transition) {
            for (let i = 0; i < this.slides.length; i++) {
              let slide = this.slides.eq(i);
              slide.transition(transition);
            }
          }
        }
      },
      swiperList: [
        { id: 0, img: require("@/assets/images/1.png") },
        { id: 1, img: require("@/assets/images/2.png") },
        { id: 2, img: require("@/assets/images/3.png") },
        { id: 3, img: require("@/assets/images/4.png") },
        { id: 4, img: require("@/assets/images/5.png") },
        { id: 5, img: require("@/assets/images/6.png") }
      ]
    };
  }
};
</script>

<style scoped>
#certify {
  position: relative;
  width: 1200px;
  margin: 0 auto;
}

#certify .swiper-container {
  padding-bottom: 60px;
}

#certify .swiper-slide {
  width: 520px;
  height: 390px;
}
#certify .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#certify .swiper-slide p {
  line-height: 98px;
  padding-top: 0;
  text-align: center;
  color: #636363;
  font-size: 1.1em;
  margin: 0;
}

#certify .swiper-pagination {
  width: 100%;
  bottom: 20px;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 5px;
  border: 3px solid #fff;
  background-color: #d5d5d5;
  width: 10px;
  height: 10px;
  opacity: 1;
}

.swiper-button-prev, .swiper-button-next {
  top: 40%;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
  border: 3px solid #00aadc;
  background-color: #fff;
}

#certify .swiper-button-prev {
  left: 30px;
  width: 45px;
  height: 45px;
  background: url("../../assets/images/awardbtn.png") no-repeat;
  background-position: 0 0;
  background-size: 100%;
}

#certify .swiper-button-prev:hover {
  background-position: 0 -46px;
  background-size: 100%;
}

#certify .swiper-button-next {
  right: 30px;
  width: 45px;
  height: 45px;
  background: url("../../assets/images/awardbtn.png") no-repeat;
  background-position: 0 -93px;
  background-size: 100%;
}

#certify .swiper-button-next:hover {
  background-position: 0 -139px;
  background-size: 100%;
}

#certify .swiper-button-prev::after,
#certify .swiper-button-next::after {
  display: none;
}

@media screen and (max-width: 575px) {
  #certify {
    width: 100%;
  }
  #certify .swiper-slide {
    width: 90vw;
    height: 68vw;
  }
  #certify .swiper-button-prev,
  #certify .swiper-button-next {
    display: none;
  }
}
</style>