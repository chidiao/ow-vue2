<template>
  <div class="classification">
    <div class="title">
      <xtitle>课程分类</xtitle>
    </div>
    <div class="cb">
      <div class="box" v-for="i in list" :key="i.id">
        <img data-aos="fade-right" :src="i.left" alt class="left" />
        <img data-aos="fade-left" :src="i.right" alt class="right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          left: require("@/assets/images/kcleft1.png"),
          right: require("@/assets/images/kcright1.png")
        },
        {
          id: 2,
          left: require("@/assets/images/kcleft2.png"),
          right: require("@/assets/images/kcright2.png")
        },
        {
          id: 3,
          left: require("@/assets/images/kcleft3.png"),
          right: require("@/assets/images/kcright3.png")
        },
        {
          id: 4,
          left: require("@/assets/images/kcleft4.png"),
          right: require("@/assets/images/kcright4.png")
        },
        {
          id: 5,
          left: require("@/assets/images/kcleft5.png"),
          right: require("@/assets/images/kcright5.png")
        },
        {
          id: 6,
          left: require("@/assets/images/kcleft6.png"),
          right: require("@/assets/images/kcright6.png")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.title {
  padding: 40px 0 60px;
}
.box {
  margin-bottom: 120px;
  position: relative;
  padding-bottom: 30%;
  .left {
    max-height: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }
  .right {
    max-height: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
  }
  &:nth-of-type(2n) {
    .left {
      left: auto;
      right: 0;
    }
    .right {
      left: 0;
      right: auto;
    }
  }
}
@media screen and (max-width: 767px) {
  .title {
    padding: 10px 0;
  }
  .box {
    margin-bottom: 20px;
    padding-bottom: 50%;
  }
}
</style>