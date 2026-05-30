<template>
  <div class="card-list">
    <a-row :gutter="[24,8]">
      <a-col :xs="24" :md="6" v-for="i in value" :key="i.id">
        <div class="card" @click="$goto(url+i.id)">
          <div class="pic">
            <img :src="i.full_thumbnail" />
          </div>
          <div class="info">
            <div class="title text-cut">{{i.title}}</div>
            <div
              class="content text-cut3"
            >{{i.content|htmlfilter}}</div>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: []
    },
    url: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  },
  filters: {
    htmlfilter: function(val) {
      return val.replace(/<[^>]*>/g, '');
    }
  }
}
</script>

<style lang="scss" scoped>
.card-list {
  background: #fff;
  padding: 16px 8px;
}
.card {
  display: flex;
  flex-flow: column;
  background: #fff;
  padding: 8px;
  cursor: pointer;
  .pic {
    position: relative;
    width: 100%;
    padding-bottom: 80%;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
    }
  }
  .info {
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
    .title {
      font-size: 14px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 19px;
      letter-spacing: 1px;
      margin: 4px 0 6px;
    }
    .content {
      font-size: 12px;
      font-family: MicrosoftYaHei;
      color: #999999;
      line-height: 18px;
    }
  }
}
@media screen and (max-width: 575px) {
  .card-list {
    background: transparent;
    padding: 0 8px;
  }
  .card {
    flex-flow: row;
    .pic {
      width: 30%;
      padding-bottom: 24%;
    }
    .info {
      width: 70%;
    }
  }
}
</style>