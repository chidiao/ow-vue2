<template>
  <div class="myfooter">
    <div class="home-block main">
      <a-row>
        <a-col :xs="12" :md="5" class="links">
          <div class="title">关于我们</div>
          <div class="link" @click="$goto('/aboutus')">企业简介</div>
          <div class="link" @click="$goto('/aboutus#licheng')">发展历程</div>
          <div class="link" @click="$goto('/aboutus#linian')">企业理念</div>
        </a-col>
        <a-col :xs="12" :md="5" class="links">
          <div class="title">新闻动态</div>
          <div class="link" @click="$goto('/news')">校园新闻</div>
        </a-col>
        <a-col :xs="24" :md="10">
          <div class="title row2">联系我们</div>
          <div class="link">总部地址：{{cp.address}}</div>
          <div class="link">咨询热线：{{cp.tel}}</div>
          <div class="link">企业邮箱：{{cp.email}}</div>
          <div class="link">企业官网：{{cp.website_url}}</div>
        </a-col>
        <a-col :xs="0" :md="1"></a-col>
        <a-col :xs="10" :md="3">
          <img :src="cp.wechat_qrcode_full" style="width:100%;margin-top:16px" alt />
          <div class="link" style="text-align:center">豫大千公众号</div>
        </a-col>
      </a-row>
    </div>
    <div class="icp">
      <div>{{cp.copyright}} All Rights Reserved</div>
      <a href="http://www.beian.miit.gov.cn/" target="_blank">{{cp.icp}}</a>
      <div style="padding:10px 0;">
      <a
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41010702002754"
        style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"
      >
        <img src="@/assets/images/beian.png" style="float:left;" />
        <p
          style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;"
        >豫公网安备 41010702002754号</p>
      </a>
    </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  computed: {
    cp: () => store.state.company
  }
};
</script>

<style lang="scss" scoped>
.myfooter {
  background: #e9e9e9;
  .main {
    padding: 32px 0;
    margin-top: 0;
  }
  .title {
    margin-top: 16px;
    font-size: 20px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: rgba(102, 102, 102, 1);
    letter-spacing: 1px;
  }
  .link {
    margin: 16px 0;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(102, 102, 102, 1);
    letter-spacing: 1px;
  }
  .links .link {
    cursor: pointer;
  }
  .icp {
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-bottom: 16px;
    a {
      color: #666666;
    }
  }
}

@media screen and (max-width: 575px) {
  .myfooter {
    .main {
      padding: 24px;
    }
    .title {
      font-size: 16px;
      margin-top: 0;
      &.row2 {
        margin-top: 16px;
      }
    }
    .link {
      margin: 8px 0;
      font-size: 12px;
    }
  }
}
</style>