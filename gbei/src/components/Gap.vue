<template>
  <div class="gap">
    <a-row>
      <a-col :xs="0" :sm="0" :md="24" :style="{height: md+'px'}"></a-col>
      <a-col :xs="0" :sm="24" :md="0" :style="{height: sm+'px'}"></a-col>
      <a-col :xs="24" :sm="0" :md="0" :style="{height: xs+'px'}"></a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  props: {
    md: {
      type: [String, Number],
      default: 0,
    },
    sm: {
      type: [String, Number],
      default: 0,
    },
    xs: {
      type: [String, Number],
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>