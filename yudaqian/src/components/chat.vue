<template>
  <div class="chat-ct">
    <div class="top">
      <div class="title">豫大千教育官方网站</div>
      <div class="icons">

      </div>
    </div>

    <textarea class="ipt" name="" id="" cols="30" rows="10"></textarea>
  </div>
</template>

<style lang="scss" scoped>
.chat-ct {
  width: 450px;
  height: 550px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  position: fixed;
  bottom: 32px;
  right: 32px;
  .top {
    background: #fa8c16;
    height: 50px;
    color: #fff;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 16px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      line-height: 21px;
      letter-spacing: 1px;
    }
  }
  .ipt {
    width: 100%;
    height: 64px;
    background: #fff;
  }
}
</style>