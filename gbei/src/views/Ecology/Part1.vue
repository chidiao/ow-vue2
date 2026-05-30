<template>
  <div>
    <div class="gap">
      <div class="center-container top-block">
        <BigTitle
          zh="新经济的舞台-京贝尔通证商业循环系统"
          en="The stage of new economy - GBEI card commercial circulation system"
        />

        <div class="text-center text">{{ $t("ec.p1") }}</div>
      </div>
    </div>

    <div class="center-container">
      <Gap :md="80" :xs="24" />
      <a-row
        :gutter="[
          { md: 32, xs: 24 },
          { md: 64, xs: 24 },
        ]"
        type="flex"
        align="top"
      >
        <a-col :md="12">
          <div class="card slideup">
            <div class="sm-title inline left sm-up-0">{{ $t("ec.tt11") }}</div>
            <img class="full" src="/images/ecology/02.jpg" alt />
          </div>
        </a-col>
        <a-col :md="12">
          <div class="card slideup">
            <div class="sm-title inline left xs-0">{{ $t("ec.tt11") }}</div>
            <div class="ct">{{ $t("ec.ct11") }}</div>
          </div>
        </a-col>
        <a-col :md="12">
          <div class="card slideup">
            <div class="sm-title inline left xs-0">{{ $t("ec.tt12") }}</div>
            <div class="ct">
              <p>{{ $t("ec.ct12") }}</p>
            </div>
          </div>
        </a-col>
        <a-col :md="12">
          <div class="card slideup">
            <div class="sm-title inline left sm-up-0">{{ $t("ec.tt12") }}</div>
            <img class="full" src="/images/ecology/03.jpg" alt />
          </div>
        </a-col>
      </a-row>
      <Gap :md="80" :xs="40" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-block {
  background: #ffffff;
  box-shadow: 0px 2px 39px 0px rgba(0, 0, 0, 0.1);
  margin-top: -80px;
  position: relative;
  z-index: 99;
  .text {
    padding: 60px 80px 80px 80px;
    font-size: 18px;
    font-family: MicrosoftYaHei;
    color: #999999;
    line-height: 30px;
  }
}
@media screen and (min-width: 576px) and (max-width: 991px) {
  .gap {
    padding: 0 16px;
    margin-top: -16px;
  }
  .top-block {
    margin-top: 0;
  }
}
@media screen and (max-width: 575px) {
  .gap {
    padding: 0 16px;
    margin-top: -16px;
  }
  .top-block {
    margin-top: 0;
    .text {
      padding: 0;
      text-align: left;
      font-size: 14px;
    }
  }
}
.card {
  .sm-title {
    margin-left: 20px;
  }
  .ct {
    font-size: 18px;
    padding: 0 20px;
    font-family: MicrosoftYaHei;
    color: #333333;
    line-height: 42px;
    p {
      margin-bottom: 0.5em;
    }
  }
}
@media screen and (max-width: 575px) {
  .card {
    .sm-title {
      margin-left: 0;
    }
    .ct {
      font-size: 16px;
      line-height: 32px;
      padding: 0;
    }
  }
  .ant-col:nth-of-type(1) {
    order: 1;
  }
  .ant-col:nth-of-type(2) {
    order: 2;
  }
  .ant-col:nth-of-type(3) {
    order: 4;
  }
  .ant-col:nth-of-type(4) {
    order: 3;
  }
}
</style>