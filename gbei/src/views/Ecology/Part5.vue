<template>
  <div class="full-container bg">
    <Gap :md="100" :xs="24" />
    <div class="center-container rela">
      <a-row type="flex" justify="space-between">
        <a-col :md="8">
          <div class="sm-title inline left">{{$t('ec.tt51')}}</div>
        </a-col>
        <a-col class="rela" :md="10" :xs="24">
          <div class="swiper-container" v-swiper:ecology="options">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="i in $t('ec.items5')" :key="i.id">
                <img class="full" :src="i.img" alt />
              </div>
            </div>

            <div class="swiper-pagination ec-pagination xs-0"></div>
          </div>

          <div class="swiper-container box-container" v-swiper:box="options2">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="i in $t('ec.items5')" :key="i.id">
                <div class="box">
                  <div class="title">{{i.title}}</div>
                  <div class="text">{{i.text}}</div>
                </div>
              </div>
            </div>

            <div class="swiper-pagination ec-pagination sm-up-0"></div>
          </div>
          <Gap :md="150" :xs="20" />
        </a-col>
      </a-row>

      <img class="abso" src="/images/ecology/22.png" alt />
    </div>
    <Gap :md="100" :xs="24" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        speed: 800,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          bulletClass: "co",
          bulletActiveClass: "co-active",
        },
        on: {
          slideChangeTransitionStart: (e) => {
            let current = this.ecology.activeIndex;
            this.box.slideTo(current, 500);
          },
        },
      },
      options2: {
        effect: "flip",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          bulletClass: "co",
          bulletActiveClass: "co-active",
        },
        on: {
          slideChangeTransitionStart: (e) => {
            let current = this.box.activeIndex;
            this.ecology.slideTo(current, 500);
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
}
.bg {
  background: #f7f7f7;
}
.rela {
  position: relative;
}
.abso {
  position: absolute;
  width: 50%;
  height: auto;
  top: 50%;
  left: 10%;
  transform: translate(0, -50%);
}
.box-container {
  width: 280px;
  height: 280px;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate(-50%, 0);
  z-index: 99;
}

.box {
  width: 100%;
  height: 100%;
  background: #222222;
  color: #fff;
  padding: 16px;
  overflow: auto;
  .title {
    font-size: 18px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: #ffffff;
    line-height: 24px;
    margin: 16px 0;
  }
  .text {
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #ffffff;
    line-height: 24px;
  }
}

@media screen and (max-width: 575px) {
  .box-container {
    width: 100%;
    height: 220px;
    margin-top: 0;
    position: relative;
    bottom: auto;
    left: auto;
    transform: translate(0, 0);
    .box {
      .title {
        font-size: 14px;
      }
      .text {
        font-size: 12px;
      }
    }
  }
}
</style>

<style lang="scss">
.ec-pagination {
  display: flex;
  // justify-content: flex-end;
}
.co {
  width: 32px;
  height: 4px;
  background: #e9e9e9;
  position: relative;
  z-index: 99;
  margin: 0 4px;
}
.co-active {
  width: 32px;
  height: 4px;
  background: #f1ba78;
}
</style>