<template>
  <div class="home-block about">
    <btitle :icon="require('@/assets/images/hb3.png')" title="关于我们" url="/aboutus"></btitle>

    <div class="bg-white main">
      <a-row>
        <a-col :xs="24" :md="12">
          <div class="wrapper">
            <div class="pic">
              <img src="@/assets/images/dq.png" alt />
            </div>
          </div>
        </a-col>

        <a-col :xs="24" :md="12">
          <div class="wrapper">
            <div class="box">
              <div class="title">快乐工作·心中有梦教育活动</div>
              <div
                class="content"
              >豫大千教育团队成立于2015年，豫大千教育信息咨询咨询有限公司成立于2017年底。五年以来，豫大千教育风雨兼程，不断发展壮大， 从最初一所校区发展到今天上百所校区逐渐形成了以河南地区各高校在校大学生为主强强联袂的一家人….</div>
            </div>
            <div class="btn" @click="$goto('/aboutus')">了解我们</div>
          </div>
        </a-col>

        <!-- <a-col :xs="24" :md="12">
          <div class="wrapper">
            <div class="home-swiper" v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="box">
                    <div class="title">快乐工作·心中有梦教育活动</div>
                    <div
                      class="content"
                    >豫大千教育团队成立于2015年，豫大千教育信息咨询咨询有限公司成立于2017年底。五年以来，豫大千教育风雨兼程，不断发展壮大， 从最初一所校区发展到今天上百所校区逐渐形成了以河南地区各高校在校大学生为主强强联袂的一家人….</div>
                  </div>
                </div>
              </div>
              <img class="swiper-button-prev xbtn" src="@/assets/images/x.png" />
              <img class="swiper-button-next xbtn" src="@/assets/images/xx.png" />
            </div>
            <div class="btn" @click="$goto('/aboutus')">了解我们</div>
          </div>
        </a-col>-->
      </a-row>
    </div>
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
  }
};
</script>

<style lang="scss" scoped>
.about {
  .main {
    padding: 12px;
    .wrapper {
      padding: 24px;
      .pic {
        width: 100%;
        padding-bottom: 60%;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          position: absolute;
          object-fit: cover;
        }
      }
      .btn {
        width: 200px;
        margin: 0 auto;
        height: 45px;
        margin-top: -32px;
        background: rgba(250, 140, 22, 1);
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        cursor: pointer;
      }
      .xbtn {
        width: 30px;
        height: 40px;
        outline: none;
      }
      .box {
        width: 100%;
        .title {
          margin-top: 32px;
          font-size: 24px;
          font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
          font-weight: bold;
          color: rgba(19, 194, 194, 1);
          line-height: 31px;
          letter-spacing: 1px;
          text-align: center;
        }
        .content {
          font-size: 14px;
          padding: 32px 64px 64px 64px;
          font-family: MicrosoftYaHei;
          color: rgba(51, 51, 51, 1);
          line-height: 21px;
          letter-spacing: 1px;
          text-indent: 2em;
        }
      }
    }
  }
}
@media screen and (max-width: 575px) {
  .about {
    .main {
      .wrapper {
        padding: 0;
        .box {
          .content {
            padding: 16px 48px 64px;
          }
        }
      }
    }
  }
}
</style>