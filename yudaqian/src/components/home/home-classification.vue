<template>
  <div class="cb classification">
    <btitle :icon="require('@/assets/images/hb2.png')" title="课程分类" url="/kecheng"></btitle>

    <div style="padding: 16px 0">
      <a-row :gutter="[64, 32]" class="row">
        <a-col :xs="24" :md="8" v-for="i in list" :key="i.id">
          <div class="item" @click="$goto('/kecheng')">
            <img :src="i.img" />
            <div class="title">{{i.title}}</div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          img: require("@/assets/images/kcleft2.png"),
          title: '考前辅导'
        },
        {
          id: 2,
          img: require("@/assets/images/kcleft4.png"),
          title: '研学旅行'
        },
        {
          id: 3,
          img: require("@/assets/images/kcleft1.png"),
          title: '文化课辅导'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  padding-bottom: 60%;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
  .title {
    position: absolute;
    z-index: 99;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
  }
}
@media screen and (max-width: 575px) {
  .row {
    padding: 0 32px;
  }
}
</style>