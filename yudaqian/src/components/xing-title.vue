<template>
  <div class="xing-title">
    <div class="left"></div>
    <div class="title" :style="{ color: color }">
      <slot></slot>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.xing-title {
  width: 100%;
  max-width: 1200px;
  padding: 32px 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    padding: 0 36px;
    font-size: 24px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    letter-spacing: 1px;
  }
  .left,
  .right {
    width: 24%;
    height: 4px;
    position: relative;
  }
  .left::after,
  .right::before {
    content: '';
    width: 8px;
    height: 8px;
    background: #13C2C2;
    position: absolute;
  }
  .left {
    background: linear-gradient(
      90deg,
      rgba(43, 227, 227, 0) 0%,
      rgba(19, 194, 194, 1) 100%
    );
  }
  .left::after {
    right: -8px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
  .right {
    background: linear-gradient(
      270deg,
      rgba(43, 227, 227, 0) 0%,
      rgba(19, 194, 194, 1) 100%
    );
  }
  .right::before {
    left: -8px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
}

@media screen and (max-width: 575px) {
  .xing-title {
    padding: 14px 0;
    .title {
      font-size: 14px;
    }
  }
}
</style>