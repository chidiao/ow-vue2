<template>
  <div class="big-title" :class="{ light: light, en: lang=='en' }">
    <div class="line"></div>
    <div class="zh">{{lang=='zh'?zh:en}}</div>
    <div class="en">{{en}}</div>
  </div>
</template>

<script>
export default {
  props: {
    zh: {
      type: String,
      default: "",
    },
    en: {
      type: String,
      default: "",
    },
    light: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      lang: this.$store.state.lang,
    };
  },
};
</script>

<style lang="scss" scoped>
.big-title {
  margin: 0 auto;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.en {
    .en {
      display: none;
    }
  }
}
.line {
  width: 60px;
  height: 7px;
  background: #f1ba78;
}
.zh {
  font-size: 36px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: bold;
  color: #333333;
  margin: 8px auto;
  text-align: center;
}
.en {
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #999999;
  margin: 8px auto;
  text-align: center;
}
.light {
  .zh {
    color: #ffffff;
  }
  .en {
    color: #ffffff;
  }
}
@media screen and (max-width: 575px) {
  .line {
    width: 30px;
    height: 4px;
  }
  .zh {
    font-size: 18px;
    margin: 4px auto;
  }
  .en {
    font-size: 12px;
    margin: 0 auto;
  }
  .en .en {
    display: none;
  }
}
</style>