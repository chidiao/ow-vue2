<template>
  <div>
    <div class="center-container" id="p1">
      <Gap :md="40" />
      <BigTitle id="p3" zh="京贝尔公司概况" en="GBEI Company profile" />

      <a-row :gutter="64" class="row" type="flex">
        <a-col :md="12">
          <div class="sm-title inline left">{{ $t("ec.tt31") }}</div>
          <div class="ct">{{ $t("ec.ct31") }}</div>
        </a-col>
        <a-col :md="12">
          <img class="full slideup" :src="$t('ec.img2')" alt />
          <img class="full slideup" :src="$t('ec.img3')" alt />
          <img class="full slideup" :src="$t('ec.img4')" alt />
        </a-col>
      </a-row>
    </div>

    <div class="full-container zizhi">
      <div class="center-container">
        <a-row :gutter="64">
          <a-col :md="12">
            <img class="full slideup" src="/images/ecology/15.jpg" alt />
          </a-col>
          <a-col :md="12">
            <div class="sm-title inline left">{{ $t("ec.tt32") }}</div>
            <div class="ct">{{ $t("ec.ct32") }}</div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.row {
  padding: 32px 0;
}
@media screen and (max-width: 575px) {
  .row {
    padding: 0;
  }
}
.ct {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #333333;
  line-height: 40px;
}
@media screen and (max-width: 575px) {
  .ct {
    line-height: 24px;
  }
  .ant-col:nth-of-type(1) {
    order: 2;
  }
  .ant-col:nth-of-type(2) {
    order: 1;
  }
}
img {
  margin: 24px 0;
}
.zizhi {
  background: #f7f7f7;
  padding: 40px 0;
}
</style>