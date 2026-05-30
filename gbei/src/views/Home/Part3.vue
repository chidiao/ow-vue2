<template>
  <div id="p3" class="center-container home3">
    <Gap :md="100" :sm="50" :xs="20" />
    <BigTitle zh="我们是谁" en="Who we are" />

    <a-row
      type="flex"
      :gutter="[
        { md: 24, sm: 12, xs: 12 },
        { md: 24, sm: 12, xs: 12 },
      ]"
      style="padding: 12px 0"
    >
      <a-col
        :lg="4"
        :md="8"
        :sm="8"
        :xs="12"
        v-for="i in $t('home.cards3')"
        :key="i.id"
      >
        <div class="rel">
          <img :src="i.bg" alt />
          <div class="title">{{ i.title }}</div>
          <div class="mask">
            <img class="ct" :src="i.ct" alt />
          </div>
        </div>
      </a-col>
    </a-row>

    <Gap :lg="200" :md="100" :sm="100" :xs="50" />
  </div>
</template>

<style lang="scss" scoped>
.rel {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    .mask {
      top: 0;
    }
    .title {
      opacity: 0;
    }
  }

  .title {
    width: 100%;
    height: 40px;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    text-align: center;
    line-height: 40px;
    transition: all 0.4s;
    letter-spacing: 1px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
  }

  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    z-index: 9;
    top: 100%;
    left: 0;
    transition: all 0.4s;

    .ct {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
img {
  width: 100%;
  height: auto;
}
</style>