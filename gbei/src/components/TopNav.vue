<template>
  <div class="topnav" :class="{ active: offset > 300 }">
    <a-row>
      <a-col :xs="0" :md="24">
        <div class="topnav-md">
          <div class="flex-row">
            <router-link class="logo" tag="div" to="/">
              <img v-if="offset > 500" src="/images/logo-red.png" alt />
              <img v-else src="/images/logo.png" alt />
            </router-link>
            <router-link
              class="link"
              tag="div"
              v-for="i in nav"
              :key="i.text"
              :to="i.path"
              >{{ $t(i.text) }}</router-link
            >
          </div>

          <div class="flex-row justify-between right">
            <!-- <div class="lang">
              <div class="btn" :class="{active: lang=='zh'}" @click="setLang('zh')">
                <img src="/images/icon/zh.png" alt />
                <span>中</span>
              </div>
              <div class="btn" :class="{active: lang=='en'}" @click="setLang('en')">
                <img src="/images/icon/en.png" alt />
                <span>En</span>
              </div>
            </div> -->
            <a href="tel:0532-81116767">
              <div class="tel">
                <div class="tel-icon">
                  <img src="/images/icon/phone.png" />
                </div>
                <div class="tel-num">0532-81116767</div>
              </div>
            </a>
          </div>
        </div>
      </a-col>

      <a-col :xs="24" :md="0">
        <div class="topnav-xs">
          <div class="flex-row justify-between align-center">
            <router-link class="logo" tag="div" to="/">
              <img src="/images/logo-red.png" alt />
            </router-link>

            <div class="icons">
              <!-- <div class="icon tel" style="background: rgba(0,0,0,0.4)" @click="toggleLang">
                <img src="/images/icon/ze.png" style="width:18px;" />
              </div> -->
              <a href="tel:0532-81116767">
                <div class="icon tel">
                  <img src="/images/icon/phone.png" style="width: 18px" />
                </div>
              </a>
              <div class="icon" @click="toggleMenu">
                <img src="/images/icon/menu.png" style="width: 18px" />
              </div>
            </div>
          </div>
        </div>
        <div
          id="menu"
          class="links-xs"
          :style="{ height: xsHeight + 'px' }"
          @click="xsHeight = 0"
        >
          <router-link
            class="link"
            tag="div"
            v-for="i in nav"
            :key="i.text"
            :to="i.path"
            >{{ $t(i.text) }}</router-link
          >
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: this.$store.state.lang,
      nav: [
        { text: "nav.home", path: "/home" },
        { text: "nav.ecology", path: "/ecology" },
        { text: "nav.about", path: "/about" },
        { text: "nav.team", path: "/team" },
        { text: "nav.gtb", path: "/gtb" },
      ],
      offset: 0,
      xsHeight: 0,
    };
  },
  mounted() {
    this.init();
  },
  watch: {},
  methods: {
    init() {
      document.addEventListener("scroll", (e) => {
        let { pageXOffset, pageYOffset } = window;
        this.offset = pageYOffset;
      });
    },
    setLang(lang) {
      localStorage.setItem("lang", lang);
      location.reload();
    },
    toggleLang() {
      if (this.lang == "zh") {
        this.setLang("en");
      } else {
        this.setLang("zh");
      }
    },
    toggleMenu() {
      let menu = document.getElementById("menu");
      if (this.xsHeight) {
        this.xsHeight = 0;
      } else {
        this.xsHeight = menu.scrollHeight;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.ant-btn.active {
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
}
.topnav {
  position: fixed;
  width: 100%;
  background: transparent;
  z-index: 999;
  transition: all 0.4s;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.topnav.active {
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .topnav-md {
    .link {
      color: #000;
    }
    .right {
      .lang {
        background: rgba(0, 0, 0, 0.4);
      }
    }
  }
}
.topnav-md {
  height: 85px;
  display: flex;
  justify-content: space-between;
  .logo {
    width: 192px;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      width: 70%;
      height: auto;
    }
  }
  .link {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #fff;
    line-height: 85px;
    height: 85px;
    padding: 0 32px;
    transition: all 0.4s;
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    &.router-link-active {
      font-weight: bold;
    }
    &.router-link-active::after {
      content: "";
      width: 50px;
      height: 3px;
      background: #d3b08c;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .right {
    .lang {
      width: 64px;
      height: 85px;
      transition: all 0.3s;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.2);
      display: flex;
      flex-flow: column wrap;
      &:hover {
        height: 170px;
      }
      .btn {
        width: 64px;
        height: 85px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        cursor: pointer;
        order: 2;
        &.active {
          order: 1;
        }
        img {
          width: 16px;
          height: auto;
          margin-right: 4px;
        }
      }
    }
    .tel {
      height: 85px;
      background: #f1ba78;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 22px;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: 500;
      color: #ffffff;
      line-height: 42px;
      cursor: pointer;

      &:hover .tel-num {
        width: 180px;
      }
    }
    .tel-icon {
      width: 85px;
      height: 85px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f1ba78;
      img {
        width: 28px;
        height: 28px;
      }
    }
    .tel-num {
      width: 0;
      transition: all 0.5s;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
    }

    @media screen and (max-width: 1200px) {
      .tel-icon {
        width: 85px;
      }
      .tel-num {
        display: none;
      }
    }
  }
}
.topnav-xs {
  width: 100%;
  height: 45px;
  background: #fff;

  .logo {
    width: 100px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      width: 70%;
      height: auto;
    }
  }

  .icons {
    display: flex;
  }

  .icon {
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.tel {
      background: rgb(241, 186, 120);
    }
  }
}
.links-xs {
  background: #fff;
  font-family: MicrosoftYaHei;
  color: #333333;
  overflow: hidden;
  transition: all 0.3s;
  .link {
    font-size: 14px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>