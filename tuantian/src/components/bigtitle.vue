<template>
  <div class="bigtitle" :style="{ color: color }">
    <div class="info">{{info}}</div>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  props: {
    info: String,
    title: String,
    color: {
      type: String,
      default: '#00204B'
    }
  }
}
</script>

<style scoped>
  .bigtitle {
    padding: 10px;
  }
  .info {
    font-size: 20px;
    letter-spacing: 1px;
  }
  .title {
    font-size: 30px;
    letter-spacing: 4px;
    margin-top: 10px;
  }
</style>