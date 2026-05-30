<template>
  <div class="team">
    <div class="top">
        <bigtitle info="GROUP PROFILE" title="集团简介" color="black" style="text-align: center"></bigtitle>
        <p class="content">杭州彖天科技集团，简称彖天集团，于2008年12月18日在杭州市拱墅区市场监督管理局注册成立，注册资本为9000万元人民币。历经12年发展，公司目前已形成快消茶叶、咖啡品牌连锁运作、千岛湖四季滑雪场、富阳西岩生态旅游观光农业项目、互联网技术、金融资本运作等多个产业的综合性集团公司，旗下拥有十多家分公司，集团现有员工600余人，高管团队均来自于各行业领域的顶尖人才，公司业务近几年进入高速发展期，致力成为一流的综合企业集团公司。</p>
      </div>
      <div class="grids">
        <div class="box" v-for="(i, k) in list" :key="k">
          <img :src="i.img">
          <p class="title">{{i.title}}</p>
          <p class="text hidden-xs-only">{{i.text}}</p>
          <p class="text hidden-xs-only">{{i.text2}}</p>
        </div>
      </div>
  </div>
</template>

<script>
import bigtitle from '@/components/bigtitle'
export default {
  components: {
    bigtitle
  },
  data() {
    return {
      list: [
        { img: require('@/assets/images/jj1.png'), title: '金融', text: '数字货币', text2: '证券交易' },
        { img: require('@/assets/images/jj4.png'), title: '互联网', text: '线上商城', text2: '线上娱乐' },
        { img: require('@/assets/images/jj3.png'), title: '餐饮', text: '咖啡饮品', text2: '茶饮品' },
        { img: require('@/assets/images/jj2.png'), title: '休闲娱乐', text: '避暑山庄', text2: '滑雪胜地' },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  @maxwd: 1600px;

  .team {
    padding: 60px 0;
    background: url('../../assets/images/jianjiebg.png');
    background-size: cover;
    width: 100%;
    color: black;
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
        max-width: 1000px;
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
      padding: 40px 0;
      justify-content: space-around;
      .box {
        width: 16%;
        display: flex;
        flex-flow: column;
        align-items: center;
        transition: all 0.3s;
        &:hover {
          transform: scale(1.1);
        }
        img {
          width: 100px;
          height: 100px;
        }
        p {
          text-align: center;
          font-size: 14px;
          line-height: 1.5;
          letter-spacing: 1px;
          text-indent: 0;
        }
        p.title {
          font-size: 20px;
          color: #009AE7;
          font-weight: bold;
          letter-spacing: 2px;
          text-indent: 0;
        }
        p.text {
          margin-top: 0;
          margin-bottom: 0;
        }
      }
    }
  }
  
  @media screen and (max-width: 767px) {
    .team {
      padding: 30px 0;
    }
    .team .grids .box {
      img {
        width: 60px;
        height: 60px;
      }
      p {
        font-size: 12px;
      }
      p.title {
        font-size: 12px;
      }
    }
  }
</style>