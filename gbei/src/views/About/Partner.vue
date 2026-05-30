<template>
  <div id="partner">
    <!-- 地图 -->
    <div class="full-container bg">
      <Gap :md="100" :xs="24" />
      <div id="p8" class="center-container">
        <a-row type="flex" justify="space-around">
          <a-col :md="10">
            <img class="full xs-0" src="/images/ecology/md/ditu.png" alt />
          </a-col>
          <a-col class="pr" :md="8" :xs="24">
            <div class="sm-title inline left white">{{$t('ec.tt81')}}</div>
            <p v-for="i in $t('ec.pt')" :key="i">{{i}}</p>
          </a-col>
        </a-row>
      </div>
      <Gap :md="100" :xs="24" />

      <div style="background:#222222">
        <Gap :md="100" :xs="24" />
        <div class="move"></div>
        <Gap :md="100" :xs="24" />
      </div>
    </div>

    <div class="center-container">
      <Gap :md="100" />
      <a-row :gutter="[64,32]" align="middle">
        <a-col :md="12">
          <a-row id="gsap-e8" type="flex" :gutter="[32,32]">
            <a-col :md="12" :xs="24">
              <div class="sm-title inline left">{{$t('ec.tt82')}}</div>
            </a-col>
            <a-col :md="12" :xs="24" v-for="i in $t('ec.ct82')" :key="i.id">
              <div class="box flipy">
                <div class="title">{{i.title}}</div>
                <div class="ct">{{i.text}}</div>
              </div>
            </a-col>
          </a-row>
        </a-col>
        <a-col :md="12">
          <img class="full" src="/images/ecology/39.jpg" alt />
        </a-col>
      </a-row>
      <Gap :md="100" :xs="24" />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  mounted() {
    gsap.to(".move", {
      repeat: -1,
      duration: 500,
      backgroundPositionX: 2803,
    });
  },
};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url("/images/ecology/md/bg.jpg");
  background-size: cover;
  background-attachment: fixed;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #ffffff;
  line-height: 24px;
  letter-spacing: 1px;
}
@media screen and (max-width: 575px) {
  .bg {
    background-size: cover;
    background-image: url("/images/ecology/xs/bg.jpg");
    p {
      font-size: 12px;
      margin-bottom: 0.5em;
    }
    .pr {
      padding: 0 8px;
      background: url('/images/ecology/xs/ditu.png') no-repeat;
      background-size: 40% auto;
      background-position: right bottom;
    }
  }
}
.white {
  color: #fff;
}
.move {
  height: 188px;
  background: url("/images/ecology/38.jpg");
  background-size: auto 188px;
}
.box {
  border: 1px solid #f1ba78;
  padding: 24px;
  min-height: 120px;
  .title {
    font-size: 18px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: #333333;
    line-height: 24px;
    margin-bottom: 8px;
  }
  .ct {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #333333;
    line-height: 19px;
  }
}
</style>