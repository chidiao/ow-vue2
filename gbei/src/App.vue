<template>
  <div id="app">
    <!-- 导航栏 -->
    <TopNav />
    <Gap :xs="45" />

    <!-- 路由 -->
    <router-view />

    <!-- 底栏 -->
    <BtmNav />

    <!-- 返回顶部 -->
    <a-back-top />
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
import BtmNav from "@/components/Footer";
export default {
  components: {
    TopNav,
    BtmNav,
  },
};
</script>

<style lang="scss">
@import "utils/flex.css";
@import "utils/text.css";
@import "utils/display.css";
@import "App.scss";
</style>
