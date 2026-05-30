<template>
  <div class="myfooter">
    <div class="nav-md">
      <div class="links">
        <router-link v-for="(i, index) in links" :key="index" :to="i.path">
          {{i.text}}
        </router-link>
      </div>
      <div class="info">
        <p>{{company.copyright}} All Rights Reserved</p>
        <p><a style="color:#fff;text-decoration:none;" href="http://www.beian.miit.gov.cn">{{company.icp}}</a>{{company.company_name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data() {
    return {
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
  .myfooter {
    background: #363636;
    padding: 10px;
    color: #fff;
    display: flex;
    flex-flow: column;
    align-items: center;
    .nav-md {
      display: flex;
      flex-flow: column;
      align-items: center;
      .links {
        display: flex;
        justify-content: center;
        padding: 10px 0;
        a {
          color: #fff;
          text-decoration: none;
          display: inline-block;
          padding: 10px;
          margin: 0 10px;
        }
      }
      .info {
        display: inline-block;
        margin: 0 auto;
        font-size: 12px;
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .nav-md .links {
      flex-flow: column;
      a {
        text-align: center;
      }
    }
  }
</style>