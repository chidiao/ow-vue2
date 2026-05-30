<template>
  <div class="block-title">
    <div class="left">
      <img :src="icon" alt class="icon" />
      <div class="title">{{title}}</div>
    </div>
    <div class="right">
      <router-link :to="url" class="more" v-if="url">
        <div class="text">更多</div>
        <img src="@/assets/images/btmore.png" class="icon" />
      </router-link>

      <div class="more" v-if="!url" @click="nomore">
        <div class="text">{{ url ? '更多' : '' }}</div>
        <img v-show="url" src="@/assets/images/btmore.png" class="icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    }
  },
  methods: {
    nomore() {
      this.$msg.info('没有更多了~')
    }
  }
};
</script>

<style lang="scss" scoped>
.block-title {
  margin-top: 64px;
  padding: 16px 8px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    .icon {
      width: 22px;
      height: 22px;
    }
    .title {
      margin-left: 10px;
      font-size: 20px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 26px;
      letter-spacing: 1px;
    }
  }
  .right {
    .more {
      display: flex;
      align-items: center;
      .text {
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: rgba(153, 153, 153, 1);
        line-height: 21px;
        letter-spacing: 1px;
      }
      .icon {
        width: 16px;
        height: 16px;
      }
    }
  }
}
@media screen and (max-width: 575px) {
  .block-title {
    margin-top: 0;
    padding: 16px;
    .left {
      .icon {
        width: 15px;
        height: 15px;
      }
      .title {
        margin-left: 8px;
        font-size: 15px;
      }
    }
    .right {
      .more {
        .icon {
          width: 12px;
          height: 12px;
        }
        .text {
          font-size: 12px;
        }
      }
    }
  }
}
</style>