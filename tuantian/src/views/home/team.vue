<template>
  <div class="team">
    <div class="top">
        <p style="font-size: 30px;text-align:center">技术驱动 改变世界</p>
        <p class="content"></p>
      </div>
      <div class="grids">
        <div class="box" v-for="(i, k) in list" :key="k">
          <img :src="i.img">
          <p class="title">{{i.title}}</p>
          <p class="text hidden-xs-only">{{i.text}}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { img: require('@/assets/images/t1.png'), title: '全栈自研技术', text: '深耕5G、物联网、人工智能、云计算、区块链等世界前沿技术，深入大数据平台，芯片等底层基础设施建设' },
        { img: require('@/assets/images/t4.png'), title: '深入多行业场景', text: '推动先进科技与快消茶叶、咖啡品牌连锁运作、四季滑雪场、温泉度假村等多行业实体场景应用落地' },
        { img: require('@/assets/images/t3.png'), title: '大规模时间求证', text: '超大规模、复杂环境下亿级规模城市智能化运营管理技术实践' },
        { img: require('@/assets/images/t2.png'), title: '一流技术人才', text: '汇聚全球金融界精英，学术界优秀人才，人工智能、大数据、区块链等科学界团队' },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  @maxwd: 1600px;

  .team {
    padding: 30px 0;
    background: url('../../assets/images/teambg.png');
    background-size: cover;
    width: 100%;
    color: #fff;
    display: flex;
    flex-flow: column;
    align-items: center;
    .top {
      padding-top: 20px;
      .title {
        letter-spacing: 3px;
        text-align: center;
        font-weight: 600;
      }
      .content {
        max-width: 800px;
        padding: 20px;
        text-align: center;
        letter-spacing: 2px;
        line-height: 2;
      }
    }
    .grids {
      display: flex;
      width: 100%;
      max-width: 1200px;
      padding: 20px 0;
      justify-content: space-around;
      .box {
        width: 16%;
        display: flex;
        flex-flow: column;
        align-items: center;
        img {
          width: 60px;
          height: 60px;
        }
        p {
          text-align: center;
          font-size: 14px;
          line-height: 1.5;
          letter-spacing: 1px;
          text-indent: 0;
        }
        p.title {
          font-size: 16px;
          letter-spacing: 2px;
          text-indent: 0;
        }
        p.text {
          margin-top: 0;
        }
      }
    }
  }
  
  @media screen and (max-width: 767px) {
    .team .grids .box {
      img {
        width: 30px;
        height: 30px;
      }
      p {
        font-size: 12px;
      }
    }
  }
</style>