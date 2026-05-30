<template>
  <div class="home-block news">
    <btitle v-show="title" :icon="require('@/assets/images/hb1.png')" title="校园新闻" url="/news"></btitle>

    <card-list v-model="list" url="/news/"></card-list>
  </div>
</template>

<script>
import cardList from '@/components/card-list'
export default {
  components: {
    cardList
  },
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
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      if (this.limit) {
        this.$http.get("/article/list?limit="+this.limit).then(res => {
          this.list = res.data.result.article;
        });
      } else {
        this.$http.get("/article/list").then(res => {
          this.list = res.data.result.article;
        });
      }
    }
  }
};
</script>