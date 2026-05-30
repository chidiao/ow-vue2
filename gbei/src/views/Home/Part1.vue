<template>
  <div id="p1" class="center-container">
    <Gap :lg="80" :md="40" :sm="40" :xs="0" />
    <BigTitle zh="京贝尔是什么" en="What is GBEI" />

    <div class="tblock slideup"></div>

    <Gap :lg="80" :md="40" :xs="24" />

    <a-row type="flex" align="middle">
      <a-col :md="12" :xs="24" v-for="i in 4" :key="i">
        <div class="card slideup" :class="'card' + i"></div>
      </a-col>
    </a-row>

    <Gap :lg="80" :md="40" :xs="24" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.tblock {
  width: 100%;
  padding-top: 24.14%;
  background-size: cover;
}
@media screen and (min-width: 992px) {
  .tblock {
    background-image: url("/images/home/lg/t1.jpg");
  }
}
@media screen and (min-width: 576px) and (max-width: 991px) {
  .tblock {
    background-image: url("/images/home/md/t1.jpg");
  }
}
@media screen and (max-width: 575px) {
  .tblock {
    background-image: url("/images/home/xs/t1.jpg");
  }
}

.card {
  width: 100%;
  padding-top: 48.24%;
  background-size: cover;
}
@media screen and (min-width: 992px) {
  @for $i from 1 through 4 {
    .card#{$i} {
      background-image: url("/images/home/lg/p#{$i}.jpg");
    }
  }
}
@media screen and (min-width: 576px) and (max-width: 991px) {
  @for $i from 1 through 4 {
    .card#{$i} {
      background-image: url("/images/home/md/p#{$i}.jpg");
    }
  }
}
@media screen and (max-width: 575px) {
  .card {
    margin: 8px auto;
  }
  @for $i from 1 through 4 {
    .card#{$i} {
      background-image: url("/images/home/xs/p#{$i}.jpg");
    }
  }

  .ant-col:nth-of-type(3) {
    order: 4;
  }
  .ant-col:nth-of-type(4) {
    order: 3;
  }
}
</style>