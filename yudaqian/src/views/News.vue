<template>
  <div class="news-list">
    <xtitle>校园新闻</xtitle>
    <news :title="false"></news>
  </div>
</template>

<script>
import news from "@/components/home/home-news";
export default {
  components: {
    news
  }
}
</script>