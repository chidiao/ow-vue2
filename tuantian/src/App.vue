<template>
  <div id="app">
    <topnav></topnav>
    <div class="topnav-blank"></div>
    <el-backtop>
      <div class="my-backtop">
        <img src="./assets/svg/chevron-up.svg">
      </div>
    </el-backtop>
    <router-view></router-view>
    <myfooter></myfooter>
  </div>
</template>

<script>
import topnav from '@/components/topnav'
import myfooter from '@/components/myfooter'
import store from '@/store'
export default {
  components: {
    topnav,
    myfooter
  },
  methods: {
    getCompany() {
      this.axios.get(this.$myapi + '/company').then(res => {
        if (res.status == 200) {
          store.state.company = res.data.company
        }
      })
    }
  },
  mounted() {
    this.getCompany();
  }
}
</script>

<style lang="less">
  #app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .el-backtop {
    z-index: 9999 !important;
  }
  .my-backtop {
    width: 40px;
    height: 40px;
    background: #006BEA;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 30px;
    }
  }
  .topnav-blank {
    height: 110px;
  }
  @media screen and (max-width: 991px) {
    .topnav-blank {
      height: 80px;
    }
  }
</style>
