<template>
  <div class="home-block huanjing">
    <btitle v-show="title" :icon="require('@/assets/images/hb5.png')" title="校园环境" url="/huanjing"></btitle>

    <div class="bg-white" style="padding:0 8px">
      <a-row>
        <a-col :xs="12" :md="4" v-for="i in list" :key="i.id">
          <div class="item">
            <div class="pic">
              <img :src="i.full_thumbnail" />
            </div>
            <div class="title text-cut">{{i.title}}</div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Boolean,
      default: true
    },
    limit: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.$http.get('/school/environment?limit='+this.limit).then(res => {
        this.list = res.data.result.environment
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.huanjing {
  .item {
    padding: 16px 8px 8px;
    display: flex;
    flex-flow: column;
    align-items: center;
    .pic {
      width: 100%;
      padding-bottom: 100%;
      overflow: hidden;
      position: relative;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .title {
      text-align: center;
      width: 100%;
      margin: 8px 0;
      font-size: 14px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 19px;
      letter-spacing: 1px;
    }
    .content {
      width: 90%;
      font-size: 12px;
      font-family: MicrosoftYaHei;
      color: rgba(102, 102, 102, 1);
      line-height: 18px;
    }
  }
}
@media screen and (max-width: 575px) {
  .huanjing {
    .item {
      padding: 16px 8px;
    }
  }
}
</style>