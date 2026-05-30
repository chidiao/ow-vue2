<template>
  <div class="jiaru page">
    <Block :mask="0.6">
      <div class="block-title">加入我们</div>

      <div class="main">
        <div class="block-text">
          你需要考虑职业生涯的工作内容及自身定位，在工作中磨砺技能，
        </div>
        <div class="block-text">挥洒好奇心，活出真正的自我。</div>
        <div class="block-text">
          在中培智慧，你可以将自己的聪明才智应用于最新技术，
        </div>
        <div class="block-text">取得惊人成就，让我们共创辉煌。</div>
        <div class="btn inline block-text" @click="onClick">联系我们</div>
      </div>
    </Block>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('btn')
    }
  },
}
</script>

<style lang="scss" scoped>
.page {
  background-image: url("../../assets/images/jrwm.jpg");
  color: #fff;
}

.block-title {
  margin: 64px 0;

  @media screen and (max-width: 575px) {
    margin: 16px 0;
  }
}

.block-text {
  line-height: 2em;
  letter-spacing: 2px;
  text-align: center;
}

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.btn {
  width: 240px;
  height: 64px;
  background: #d5a64c;
  opacity: 1;
  border-radius: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 64px 0;

  @media screen and (max-width: 575px) {
    height: 48px;
  }
}
</style>