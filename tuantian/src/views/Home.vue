<template>
  <div class="home">
    <swiper></swiper>

    <jianjie></jianjie>

    <div class="blank hidden-xs-only" style="height:30px"></div>
    <grids></grids>

    <div class="home-group">
      <div class="wrapper">
        <div class="blank hidden-xs-only" style="height:100px"></div>
        <el-row>
          <el-col :md="12">
            <p class="title" style="font-size: 16px;margin-top:30px">COMPANY TEAM</p>
            <p class="title">公司团队</p>
            <p class="text">
              公司拥有高素质、高效能的职业经理人团队和领先的人才培养理念。“德才兼备，以德为先；人尽其才，才尽其用；共同发展，共享成功”，公司通过建立公平的竞争机制和良好的企业文化环境，为每一位员工提供施展才华和能力的舞台，为每一位员工创造个人发展的机会和空间，充分调动每一位员工的积极性、主动性、创造性，让员工爱其职而尽其能 ，发挥出最大潜能，从而实现员工和企业的共同发展！
            </p>
            <p class="text">无论你是高科技的弄潮儿，还是资深的高管、技术人才、计算机高手...，甚至是刚出校园的应届生。我们都邀请您加入彖天集团、加入全球一体化的进程，开阔视野，参与挑战，成就一个远大的梦想、一段快乐的旅程，一份受益终生的收获！</p>
            <!-- <p style="margin: 30px 0">
              <el-button size="medium" round style="color:#CCD1DD;">查看更多</el-button>
            </p> -->
          </el-col>
          <el-col :md="12">
            <img src="../assets/images/group.png" style="border-radius: 10px">
          </el-col>
        </el-row>
      </div>
    </div>

    <team></team>

    <partner></partner>

    <contact></contact>

  </div>
</template>

<script>
import swiper from '@/views/home/swiper'
import jianjie from '@/views/home/jianjie'
import cards from '@/views/home/cards'
import partner from '@/views/home/partner'
import grids from '@/views/home/grids'
import team from '@/views/home/team'
import contact from '@/views/Contact/map'
export default {
  components: {
    swiper,
    jianjie,
    cards,
    partner,
    team,
    grids,
    contact
  },
  data() {
    return {
      
    }
  },
}
</script>

<style lang="less">
  @md-bh: 950px;
  @sm-bh: 500px;
  @xs-bh: 300px;

  @maxwd: 1600px;

  .home-business {
    position: relative;
    margin-top: -80px;
    .top {
      max-width: @maxwd;
      background: #fff;
      background-image: url('../assets/images/bggg.png');
      background-position: 95% top;
      background-repeat: no-repeat;
      margin: 0 auto;
      border-radius: 10px 10px 0 0;
      display: flex;
      flex-flow: row wrap;
      padding-bottom: 200px;
      p {
        margin: 0;
        line-height: 1.8;
      }
      .title {
        font-size: 50px;
      }
      .left {
        color: #00204B;
        font-size: 30px;
        font-weight: bold;
        display: flex;
        flex-flow: column;
        padding-top: 50px;
        line-height: 1.5;
        padding-left: 20px;
      }
      .right {
        padding-top: 50px;
        line-height: 1.5;
        letter-spacing: 1px;
        color: #00204B;
        padding-left: 20px;
        padding-right: 50px;
        text-indent: 2em;
      }
    }
  }

  .home-group {
    background: url('../assets/images/groupbg.png');
    padding: 50px 0;
    color: #00204B;
    .wrapper {
      max-width: @maxwd;
      margin: 0 auto;
      img {
        width: 100%;
      }
      .title {
        font-size: 32px;
        font-weight: bold;
        margin-top: 10px;
      }
      p {
        line-height: 1.5;
        letter-spacing: 1px;
        padding: 0 20px;
      }
      .text {
        text-indent: 2em;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .home-business {
      margin-top: 0;
    }
    .home-business .top {
      padding-bottom: 0;
      background-position: 99% top;
      .left {
        padding-top: 20px;
        padding-bottom: 0;
        p {
          padding-top: 10px;
          padding-left: 10px;
        }
        .title {
          font-size: 24px;
        }
      } 
      .right {
        padding: 20px;
      }
    }
  }

  .zoom-control {
    display: none;
  }
</style>
