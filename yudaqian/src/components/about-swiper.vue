<template>
  <div class="ct">
    <div class="swiper-container" v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="i in list" :key="i.id">
          <div class="box">
            <img :src="i.full_picture" />
            <div class="mask">
              <div class="name">{{i.teacher_name}}</div>
              <div class="info">{{i.educational_bg}}</div>
              <div class="info">{{i.course}}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Add Pagination -->
      <!-- <div class="swiper-pagination"></div> -->
    </div>
    <!-- Add Arrows -->
    <div class="btn lbtn"></div>
    <div class="btn rbtn"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 10,
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".lbtn",
          prevEl: ".rbtn"
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50
          }
        }
      },
      list: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.$http.get("/teacher/list").then(res => {
        this.list = res.data.result.teachers;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.ct {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 80px;
  position: relative;
}
.swiper-container {
  width: 100%;
  height: 320px;
}
.btn {
  opacity: 0.5;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  &:hover {
    opacity: 1;
  }
  &.lbtn {
    background: url('../assets/images/lbtn.png');
    background-size: 100% 100%;
    left: 0;
  }
  &.rbtn {
    background: url('../assets/images/rbtn.png');
    background-size: 100% 100%;
    right: 0;
  }
}
.box {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  &:hover {
    .mask {
      transform: translateY(-100%);
      padding-top: 24%;
    }
  }
  .mask {
    padding: 0 10px;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: -100%;
    transform: translateY(-56px);
    letter-spacing: 2px;
    transition: all 0.4s;
    .name {
      text-align: center;
      font-size: 14px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      padding: 16px 0;
    }
    .info {
      margin-top: 8px;
    }
  }
}
@media screen and (max-width: 575px) {
  .ct {
    padding: 0 10px;
  }
  .btn {
    display: none;
  }
}
</style>