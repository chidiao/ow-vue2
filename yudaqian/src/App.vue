<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <topnav></topnav>
      <div class="blank-topnav"></div>
      <router-view></router-view>
      <myfooter></myfooter>

      <a-back-top>
        <img src="@/assets/images/top.png" style="width:100%;height:100%" alt />
      </a-back-top>
    </div>
  </a-locale-provider>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import topnav from "@/components/topnav";
import myfooter from "@/components/footer";
import btitle from "@/components/block-title";
import chat from "@/components/chat";
export default {
  components: {
    topnav,
    myfooter,
    btitle,
    chat
  },
  data() {
    return {
      locale: zhCN
    };
  },
  mounted() {
    this.getCompany();
  },
  methods: {
    getCompany() {
      this.$http.get("/company").then(res => {
        let company = res.data.result.company;
        this.$store.commit("setCompany", company);
      });
    }
  }
};
</script>

<style lang="scss">
body {
  background: rgba(245, 245, 245, 1) !important;
}
#app {
  width: 100%;
  overflow: hidden;
}
.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}
.blank {
  height: 20px;
}
.home-block {
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
}
.cb {
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
}
.bg-white {
  background: #fff;
}

.text-cut {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.text-cut2,
.text-cut3,
.text-cut4,
.text-cut5 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.text-cut2 {
  -webkit-line-clamp: 2;
}
.text-cut3 {
  -webkit-line-clamp: 3;
}
.text-cut4 {
  -webkit-line-clamp: 4;
}
.text-cut5 {
  -webkit-line-clamp: 5;
}
.blank-topnav {
  height: 80px;
}
.title-ct {
  padding: 60px 0;
}
@media screen and (max-width: 575px) {
  // .title-ct {
  //   padding: 10px 0;
  // }
}
@media screen and (max-width: 767px) {
  .blank-topnav {
    height: 50px;
  }
  .title-ct {
    padding: 10px 0;
  }
}
</style>
