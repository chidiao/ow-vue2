<template>
  <div class="top">
    <img :src="img" class="top-pic">
  </div>
</template>

<script>
export default {
  props: {
    img: String
  }
}
</script>

<style lang="less" scoped>
  .top {
    width: 100%;
    height: 650px;
    position: relative;
    .top-pic {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      z-index: -1;
    }
  }

  @media screen and (max-width: 767px) {
    .top {
      height: 400px;
    }
  }

  @media screen and (max-width: 333px) {
    .top {
      height: 400px;
    }
  }
</style>