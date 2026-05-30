<template>
  <div class="home-block news-detail">
    <div class="title">{{item.title}}</div>
    <div class="info">{{item.created_at}} 作者：{{item.author}}</div>
    <div class="blank"></div>
    <div class="content" v-html="item.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: ""
    };
  },
  mounted() {
    this.getData(this.$route.params.id);
  },
  methods: {
    getData(id) {
      this.$http.get("/article/detail?id=" + id).then(res => {
        this.item = res.data.result.article;
      });
    },
  }
};
</script>

<style lang="scss">
.news-detail {
  max-width: 1000px;
  .title {
    font-size: 20px;
    padding: 16px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    line-height: 26px;
    letter-spacing: 1px;
    text-align: center;
  }
  .info {
    padding: 16px;
    font-size: 12px;
    font-family: MicrosoftYaHei;
    color: rgba(102, 102, 102, 1);
    line-height: 16px;
    text-align: center;
    border-bottom: 1px solid #979797;
  }
  .content {
    background: #fff;
    padding: 16px;
    img {
      max-width: calc(100% - 32px);
    }
  }
  video {
    width: 100%;
    height: 100%;
  }
}
</style>