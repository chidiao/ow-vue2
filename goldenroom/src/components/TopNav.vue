<template>
  <div class="mytopnav">
    <div class="links" :class="{ open: show }">
      <div class="logo">
        <img src="@/assets/images/logo.png" alt />
        <svg
          t="1607672160245"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3153"
          v-show="mobile"
          @click="show = !show"
        >
          <path
            d="M819.2 460.8c15.018667 0 27.306667 5.12 36.864 15.36S870.4 498.346667 870.4 512s-5.12 25.6-15.36 35.84-22.186667 15.36-35.84 15.36H204.8c-13.653333 0-25.6-5.12-35.84-15.36S153.6 525.653333 153.6 512s4.778667-25.6 14.336-35.84S189.781333 460.8 204.8 460.8h614.4zM204.8 358.4c-13.653333 0-25.6-5.12-35.84-15.36S153.6 320.853333 153.6 307.2s4.778667-25.6 14.336-35.84S189.781333 256 204.8 256h614.4c15.018667 0 27.306667 5.12 36.864 15.36S870.4 293.546667 870.4 307.2s-5.12 25.6-15.36 35.84-22.186667 15.36-35.84 15.36H204.8z m614.4 307.2c15.018667 0 27.306667 5.12 36.864 15.36S870.4 703.146667 870.4 716.8s-5.12 25.6-15.36 35.84-22.186667 15.36-35.84 15.36H204.8c-13.653333 0-25.6-5.12-35.84-15.36S153.6 730.453333 153.6 716.8s4.778667-25.6 14.336-35.84S189.781333 665.6 204.8 665.6h614.4z"
            fill="#e6e6e6"
            p-id="3154"
          ></path>
        </svg>
      </div>

      <a
        :href="i.anchor"
        class="link"
        v-for="i in nav"
        :key="i.id"
        v-show="show"
        >{{ i.text }}</a
      >
    </div>
  </div>
</template>

<script>
function isMobile() {
  return "ontouchstart" in window;
}
import { nav } from "@/assets/js/nav.js";
export default {
  data() {
    return {
      nav: nav.filter((item) => item.text),
      show: true,
      mobile: false,
    };
  },
  created() {
    this.mobile = isMobile();
    this.show = !isMobile();
  },
};
</script>

<style lang="scss" scoped>
.block {
  @media screen and (max-width: 575px) {
    padding: 0;
  }
}

.mytopnav {
  color: #fff;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  position: absolute;
  z-index: 99;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: auto;

  --size: 22px;

  @media screen and (max-width: 991px) {
    --size: 18px;
  }

  @media screen and (max-width: 575px) {
    --size: 16px;
    background: #000;
    padding: 12px 20px;
  }

  .links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;

    @media screen and (max-width: 575px) {
      flex-flow: column;
      justify-content: space-around;
      align-items: flex-start;
      height: 40px;
      transition: all 0.3s;
      background: #000;

      &.open {
        height: 240px;
      }
    }
  }

  .link {
    color: #fff;
    font-size: var(--size);
    letter-spacing: 1px;

    @media screen and (max-width: 575px) {
      width: 100%;
      text-align: center;
    }
  }

  .logo {
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 575px) {
      width: 100%;
    }

    img {
      width: 188px;
      height: 34px;
      object-fit: cover;
    }

    svg {
      width: 32px;
      height: 32px;
    }
  }
}
</style>