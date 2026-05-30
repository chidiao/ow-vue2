<template>
  <div class="topnav">
    <div class="topbar"></div>
    <div class="nav-md hidden-sm-and-down">
      <img src="../assets/logo.png" class="logo">
      <div class="links">
        <router-link v-for="(i, index) in links" :key="index" :to="i.path">
          {{i.text}}
        </router-link>
      </div>
      <el-tag type="info" effect="dark" class="tel">{{company.tel_single}}</el-tag>
    </div>

    <div class="nav-xs hidden-md-and-up">
      <div class="nav-bar">
        <img src="../assets/logo.png" class="logo">
        <img class="switch" v-show="!show" @click="show = !show" src="../assets/svg/menu.svg">
        <img class="switch" v-show="show" @click="show = !show" src="../assets/svg/x.svg">
      </div>

      <div class="dropdown" :class="{ down: show }" @click="show = false">
        <transition
          enter-active-class="animated slideInDown faster"
          leave-active-class="animated slideOutUp faster"
        >
          <div class="links" v-show="show">
            <router-link v-for="(i, index) in links" :key="index" :to="i.path">
              {{i.text}}
            </router-link>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data() {
    return {
      show: false,
      links: [
        { path: '/home', text: '首页' },
        { path: '/group', text: '走进彖天' },
        { path: '/history', text: '发展历程' },
        { path: '/case', text: '合作案例' },
        { path: '/contact', text: '联系我们' },
      ]
    }
  },
  computed: {
    company: () => store.state.company
  },
}
</script>

<style lang="less" scoped>
  a {
    text-decoration: none;
  }

  .topnav {
    width: 100%;
    position: fixed;
    background: #fff;
    top: 0;
    z-index: 1999;
    .topbar {
      height: 30px;
      background: #0B5497;
    }
  }

  .nav-md {
    margin: 0 auto;
    width: 1000px;
    height: 115px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      height: 40px;
    }
    .links {
      a {
        display: inline-block;
        box-sizing: border-box;
        padding: 0 20px;
        line-height: 80px;
        border-bottom: 3px solid transparent;
        color: black;
        transition: all 0.3s;
        &:hover {
          color: #198AB9;
          border-bottom: 3px solid #198AB9;
        }
      }
    }
    .tel {
      font-size: 14px;
    }
  }

  .nav-xs {
    background: #fff;
    .nav-bar {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        height: 24px;
      }
      .switch {
        width: 30px;
      }
    }
    .dropdown {
      overflow: hidden;
      height: 0;
      transition: height 0.5s;
      border-top: 1px solid #e7e7e7;
      &.down {
        height: 240px;
      }
      .links {
        display: flex;
        flex-flow: column;
        padding: 5px 30px;
        a {
          display: block;
          height: 44px;
          line-height: 44px;
          padding-left: 10px;
          color: black;
          border-bottom: 1px solid #e7e7e7;
          &:last-of-type {
            border-bottom: none;
          }
        }
      }
    }
  }
</style>