<template>
  <div class="page">
    <div class="nav">
      <img class="logo xs-0" src="@/assets/images/logo.png" alt />
      <div class="links">
        <p class="link" v-for="i in nav" :key="i.id">
          <a :href="i.anchor">{{ i.text }}</a>
        </p>
      </div>
    </div>
    <video
      ref="video"
      muted=""
      class="video"
      src="http://gdr.qidka.com/storage/video/12101.mp4"
      __idm_id__="1046841345"
      autoplay loop controls
    ></video>
    <!-- <video src="http://gdr.qidka.com/storage/video/12101.mp4" loop="loop" autoplay="autoplay"></video> -->
  </div>
</template>

<script>
import { nav } from "@/assets/js/nav.js";
export default {
  props: {
    active: {
      type: Boolean
    }
  },
  data() {
    return {
      nav: nav,
    };
  },
  watch: {
    active(val) {
      if (val) {
        console.log(123)
        this.$refs['video'].play()
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  background-color: #000;
}

.video {
  width: auto;
  height: 100%;
  object-fit: cover;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: auto;
  }
}

.logo {
  width: 96px;
  height: 88px;
  margin-right: 64px;

  @media screen and (max-width: 767px) {
    width: 48px;
    height: 44px;
    margin: 32px;
  }
}

.nav {
  background: transparent;
  padding: 40px 40px;
  font-size: 18px;
  font-family: SourceHanSansCN-Light;
  position: relative;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    font-size: 12px;
    padding: 20px 20px;
  }

  .links {
    display: flex;
    max-width: 100%;
    justify-content: space-between;
    width: 700px;
  }

  .link {
    a {
      color: #ffffff;
      opacity: 1;
    }
  }

  .copy {
    color: #ffffff;
    opacity: 0.53;
  }
}
</style>