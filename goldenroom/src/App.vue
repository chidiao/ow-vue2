<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/utils/scss/index.scss";

.page {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  --block-title-size: 40px;
  --block-text-size: 20px;

  --common-text-size: 18px;

  @media screen and (max-width: 575px) {
    --block-title-size: 24px;
    --block-text-size: 12px;
    --common-text-size: 12px;
  }
}
</style>