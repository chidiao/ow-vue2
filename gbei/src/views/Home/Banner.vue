<template>
  <div class="banner">
    <div class="swiper-container" v-swiper:banner="options">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="ban ban1"></div>
        </div>
        <div class="swiper-slide">
          <div class="ban ban2"></div>
        </div>
        <div class="swiper-slide">
          <div class="ban ban3"></div>
        </div>
      </div>

      <div class="swiper-pagination"></div>
    </div>

    <div class="btns md-down-0">
      <a class="btn">
        <div class="no">No.1</div>
        <div>
          <div class="zh">京贝尔是什么</div>
          <div class="en">What is GBEI</div>
        </div>
      </a>
      <a class="btn mid">
        <div class="no">No.2</div>
        <div>
          <div class="zh">京贝尔还是什么</div>
          <div class="en">GBEI or what</div>
        </div>
      </a>
      <a class="btn">
        <div class="no">No.3</div>
        <div>
          <div class="zh">我们是谁</div>
          <div class="en">Who we are</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        speed: 1000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        // loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          bulletElement: "div",
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
}
.ban {
  width: 100%;
  padding-top: 43%;
  background-size: cover;
}

@media screen and (min-width: 992px) {
  @for $i from 1 through 3 {
    .ban#{$i} {
      background-image: url("/images/home/lg/ban#{$i}.jpg");
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 991px) {
  @for $i from 1 through 3 {
    .ban#{$i} {
      background-image: url("/images/home/md/ban#{$i}.jpg");
    }
  }
}

@media screen and (max-width: 575px) {
  @for $i from 1 through 3 {
    .ban#{$i} {
      background-image: url("/images/home/xs/ban#{$i}.jpg");
    }
  }
}

.swiper-pagination {
  bottom: 140px !important;
}

@media screen and (max-width: 991px) {
  .swiper-pagination {
    bottom: 10px !important;
  }
}

.btns {
  margin-top: -120px;
  position: relative;
  z-index: 199;
  display: flex;
  justify-content: center;

  .btn {
    width: 480px;
    height: 120px;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  .mid::before,
  .mid::after {
    content: "";
    width: 1px;
    height: 40%;
    background: #fff;
    position: absolute;
  }

  .mid::before {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  .mid::after {
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  .no {
    font-size: 53px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.4);
  }

  .zh {
    font-size: 18px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: #f1ba78;
    margin-left: 16px;
  }

  .en {
    font-size: 12px;
    font-family: MicrosoftYaHei;
    color: #ffffff;
    margin-left: 16px;
  }
}
</style>

<style lang="scss">
.swiper-pagination {
  display: flex;
  justify-content: center;
}
.my-bullet {
  width: 60px;
  height: 4px;
  background: #fff;
  opacity: 0.2;
  cursor: pointer;
}
.my-bullet-active {
  opacity: 1;
}
</style>