<template>
  <el-carousel trigger="click" class="home-banner" loop autoplay :interval="3000" arrow="always">
    <el-carousel-item class="item" v-for="(i, k) in list" :key="k">
      <img class="bg" :src="i.picture">
      <div class="wrapper">
        <div class="box animated slideInDown">
          <p class="title">{{i.title}}</p>
          <p class="text">{{i.subtitle}}</p>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {
    getCarousel() {
      this.axios.get(this.$myapi + '/carousel').then(res => {
        if (res.status == 200) {
          this.list = res.data.carousel
        }
      })
    }
  },
  mounted() {
    this.getCarousel();
  }
}
</script>

<style lang="less">
  @md-bh: 950px;
  @sm-bh: 500px;
  @xs-bh: 300px;

  @maxwd: 1600px;

  .home-banner {
    height: @md-bh;
    z-index: 0;
    .el-carousel__container {
      height: 100%;
    }
    @keyframes spread {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
    .item {
      height: 100%;
      &.is-active {
        .bg {
          animation: spread 10s linear infinite;
        }
        .wrapper {
          .box {
            display: flex;
          }
        }
      }
      .bg {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
      }
      .wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
        display: flex;
        justify-content: center;
        align-items: center;
        .box {
          color: #fff;
          display: none;
          max-width: 600px;
          padding: 0 20px;
          flex-flow: column;
          align-items: center;
          margin-top: -80px;
          p {
            font-size: 30px;
          }
          .title {
            font-size: 60px;
            font-weight: bold;
          }
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    .home-banner {
      height: @sm-bh;
      .item .wrapper .box p {
        font-size: 16px;
      }
      .item .wrapper .box .title {
        font-size: 30px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .home-banner {
      height: @xs-bh;
      .item .wrapper .box p {
        font-size: 12px;
      }
      .item .wrapper .box .title {
        font-size: 18px;
      }
    }
  }
</style>