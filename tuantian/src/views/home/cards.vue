<template>
  <div class="cards-wrapper">
    <div class="blank" style="height: 10px"></div>
    <el-row class="cards">
      <el-col :xs="12" :sm="6" v-for="(i, k) in list" :key="k">
        <div class="card">
          <img class="pic" :src="i.img">
          <div class="text">
            <div class="title">{{i.title}}</div>
            <div class="text" v-for="(j, l) in i.tages" :key="l">{{j}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="blank hidden-xs-only" style="height:100px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { img: require('@/assets/images/bs4.png'), title: '金融', tages: [ '数字货币', '证券交易' ]  },
        { img: require('@/assets/images/bs3.png'), title: '互联网', tages: [ '线上商城', '线上娱乐' ]  },
        { img: require('@/assets/images/bs2.png'), title: '餐饮', tages: [ '咖啡饮品', '茶饮品' ]  },
        { img: require('@/assets/images/bs1.png'), title: '休闲娱乐', tages: [ '避暑山庄', '滑雪胜地' ]  },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  @maxwd: 1600px;

  .cards-wrapper {
    max-width: @maxwd;
    margin: 0 auto;
    background: #024289;
    border-radius: 0 0 10px 10px;
    position: relative;
    padding-bottom: 30px;
  }

  .cards {
    margin-top: -150px;
  }

  .el-col {
    display: flex;
    justify-content: center;
  }

  .card {
    background: #fff;
    background: url('../../assets/images/cdbg.png');
    background-size: 100% 100%;
    width: 250px;
    height: 300px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2), -1px -1px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 20px;
  }

  .pic {
    width: 25%;
    margin: 20% 0;
  }

  .text {
    font-size: 16px;
    color: #9C9C9C;
    text-align: center;
    line-height: 1.5;
  }

  .title {
    font-size: 1.2em;
    font-weight: bold;
    color: #05244D;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 767px) {
    .cards {
      margin-top: 0;
    }
    .card {
      width: 150px;
      height: 180px;
      background: #fff;
    }
    .pic {
      margin: 15% 0;
    }
    .text {
      font-size: 14px;
    }
  }
</style>