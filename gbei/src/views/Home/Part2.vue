<template>
  <div id="p2" class="full-container home2">
    <div class="center-container" style="overflow: hidden">
      <Gap :md="80" :xs="0" />
      <BigTitle light zh="京贝尔还是什么" en="What is GBEI" />

      <div class="tblock slideup"></div>

      <Gap :md="80" :xs="40" />

      <a-row :gutter="20">
        <a-col
          class="block slideup"
          :md="12"
          :xs="24"
          v-for="i in $t('home.cards2')"
          :key="i.id"
        >
          <img :src="i.icon" style="width: 20%" />
          <div class="title">{{ i.title }}</div>
          <div class="card">{{ i.ct }}</div>
        </a-col>
      </a-row>
    </div>

    <Gap :md="80" :xs="40" />
  </div>
</template>

<style lang="scss" scoped>
.tblock {
  width: 100%;
  padding-top: 24.14%;
  background-size: cover;
}
@media screen and (min-width: 992px) {
  .tblock {
    background-image: url("/images/home/lg/t2.jpg");
  }
}
@media screen and (min-width: 576px) and (max-width: 991px) {
  .tblock {
    background-image: url("/images/home/md/t2.jpg");
  }
}
@media screen and (max-width: 575px) {
  .tblock {
    background-image: url("/images/home/xs/t2.jpg");
  }
}
img {
  margin: 0 auto;
}
.full-container {
  background: #222222;
}
.block {
  padding: 24px 0;
  .title {
    font-size: 20px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    padding: 12px 0;
    margin: 12px 0 24px 0;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 30px;
      height: 4px;
      background: #f1ba78;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
  .card {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 72px;
    min-height: 180px;
    background: rgba(255, 255, 255, 0.1);
    text-align: center;
    position: relative;
  }
}

@media screen and (max-width: 575px) {
  .block {
    padding: 12px 0;
    .card {
      padding: 24px;
    }
  }
}
</style>