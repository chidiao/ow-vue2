<template>
  <div class="block" :style="maskStyle">
    <div class="center">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mask: {
      type: Number,
    },
  },
  data() {
    return {
      maskStyle: `backgroundColor: rgba(0, 0, 0, ${this.mask})`,
    };
  },
};
</script>

<style lang="scss" scoped>
.block {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;

  --block-title-size: 40px;
  --block-text-size: 24px;
  --common-text-size: 18px;

  @media screen and (max-width: 767px) {
    --block-title-size: 32px;
    --block-text-size: 20px;
    --common-text-size: 14px;
  }

  @media screen and (max-width: 575px) {
    --block-title-size: 24px;
    --block-text-size: 14px;
    --common-text-size: 12px;
  }

  .block-title {
    font-size: var(--block-title-size);
  }

  .block-text {
    font-size: var(--block-text-size);
  }
}

.center {
  width: 100%;
  max-width: 1200px;
  position: relative;
}
</style>