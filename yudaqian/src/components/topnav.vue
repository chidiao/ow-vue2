<template>
  <div class="topnav">
    <a-row>
      <a-col :xs="0" :lg="24">
        <div class="nav-pc">
          <div class="wrapper">
            <div class="logo">
              <img src="@/assets/images/logo.png" alt />
            </div>
            <div class="links">
              <router-link class="link" v-for="i in list" :key="i.id" :to="i.url">{{i.text}}</router-link>
            </div>
            <div class="phone">
              <img src="@/assets/images/tel.png" alt="">
              {{cp.tel}}
            </div>
          </div>
        </div>
      </a-col>

      <a-col :lg="0">
        <div class="nav-mb">
          <div class="main">
            <img src="@/assets/images/logo.png" alt class="logo" />
            <a-button icon="menu" size="large" @click.native="down=!down"></a-button>
          </div>
          <div class="dropdown" :class="{ down: down }">
            <router-link class="link" v-for="i in list" :key="i.id" :to="i.url">{{i.text}}</router-link>
            <a :href="'tel:'+cp.tel_single" class="link phone">{{cp.tel}}</a>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import store from '@/store'
export default {
  computed: {
    cp: () => store.state.company
  },
  data() {
    return {
      down: false,
      list: [
        {
          id: 0,
          text: "首页",
          url: "/"
        },
        {
          id: 1,
          text: "办学体系",
          url: "/course"
        },
        {
          id: 2,
          text: "校区分布",
          url: "/school"
        },
        {
          id: 3,
          text: "师资团队",
          url: "/team"
        },
        {
          id: 5,
          text: "走进我们",
          url: "/aboutus"
        }
      ]
    };
  },
  watch: {
    $route(to, from) {
      this.down = false
    }
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
}
.nav-pc {
  height: 80px;
  background: #fff;
  display: flex;
  justify-content: center;
  .wrapper {
    height: 100%;
    width: 100%;
    max-width: 1200px;
    padding: 0 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      img {
        height: 36px;
        object-fit: cover;
        margin-right: 32px;
      }
    }
    .links {
      height: 100%;
      display: flex;
      align-items: center;
      .link {
        font-size: 18px;
        display: inline-flex;
        align-items: center;
        color: #5d5d5d;
        font-weight: 500;
        margin: 0 20px;
        padding: 0 8px;
        height: 70%;
        &.router-link-exact-active {
          color: #26babb;
          font-weight: bold;
          border-bottom: 4px solid #26babb;
        }
      }
    }
    .phone {
      margin-left: 32px;
      font-size: 20px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: rgba(250, 140, 22, 1);
      line-height: 32px;
      letter-spacing: 1px;
      cursor: pointer;
    }
  }
}

.nav-mb {
  .main {
    padding: 0 10px;
    height: 50px;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 100;
    background: #fff;
    justify-content: space-between;
    .logo {
      height: 24px;
      object-fit: cover;
    }
  }
  .dropdown {
    height: 0;
    transition: all 0.5s ease;
    background: #efecec;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    overflow: hidden;
    &.down {
      height: 270px;
    }
    .link {
      width: 100%;
      height: 50px;
      padding-left: 24px;
      background: #fff;
      display: flex;
      align-items: center;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: rgba(51, 51, 51, 1);
      line-height: 31px;
      letter-spacing: 1px;
      &.router-link-exact-active {
        color: #fff;
        background: #13c2c2;
      }
      &.phone {
        font-size: 16px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: rgba(250, 140, 22, 1);
        line-height: 21px;
        letter-spacing: 1px;
      }
    }
  }
}
</style>