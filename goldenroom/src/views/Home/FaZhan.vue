<template>
  <div class="fazhuan page">
    <div class="bg">
      <img class="gh" src="@/assets/images/fzgh.png" alt />
      <img class="lc on" src="@/assets/images/fzlc.png" alt />

      <div class="flags">
        <a-tooltip v-for="i in list" :key="i.id">
          <template slot="title">
            {{i.year}}
          </template>
          <img class="flag"  @mouseleave="current = 0" @mouseover="current=i.id" src="@/assets/images/flag.png" alt />
        </a-tooltip>
      </div>
    </div>
    <Block>
      <div class="block-title">发展规划</div>
      <div class="block-text tip" v-for="i in list" :key="i.id" :class="{ on: current == i.id }">{{i.text}}</div>
    </Block>
  </div>
</template>

<script>
export default {
  data() {
    return{
    list: [
      {
        id: 1,
        year: '2012年',
        text: '2012年，中培智慧有限公司成立。'
      },
      {
        id: 2,
        year: '2014年',
        text: '2014年，完成对百乐文化传媒控股。'
      },
      {
        id: 3,
        year: '2015年',
        text: '2015年，成功兼并哲别电子商务。'
      },
      {
        id: 4,
        year: '2017年',
        text: '2017年，乐堃顺璟科技整体并入中培，成为全资子公司。'
      },
      {
        id: 5,
        year: '2018年',
        text: '2018年，加快战略布局，兼并金猎人能源科技，正式涉足房地产领域。'
      },
      {
        id: 6,
        year: '2019年',
        text: '2019年，“中培智慧有限公司”正式更名为“中培智慧集团有限公司”，斥巨资建设富阳温泉度假村。'
      },
      {
        id: 7,
        year: '2020年',
        text: '2020年，创新打造黄金珠宝领域垂直电商平台“黄金屋”。'
      },
      {
        id: 8,
        year: '2021年',
        text: '2021年，在全国内建设黄金屋的服务网点，构建黄金屋的联合工作机制。'
      },
      {
        id: 9,
        year: '2012年',
        text: '2022年，依托企业产业优势及数据流量优势，形成核心信息壁垒，助推企业上市。'
      },
    ],
    current: 0,
  };
  },
}
</script>

<style lang="scss" scoped>
.page {
  color: #fff;
  background: linear-gradient(180deg, #271809 0%, #20140a 100%);
}

.block-title {
  margin: 64px 0 32px 0;

  @media screen and (max-width: 575px) {
    margin: 16px 0;
  }
}

.block-text {
  margin: 8px 0;
  font-size: 18px !important;

  @media screen and (max-width: 767px) {
    font-size: 14px !important;
  }

  @media screen and (max-width: 575px) {
    font-size: 12px !important;
  }
}

.bg {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;

  .gh,
  .lc {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .lc {
    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    transition: all 4s linear;
    z-index: 9;

    &.on {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }

  .flags {
    width: 100%;
    padding-top: 69.94%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 9;
  }

  .flag {
    width: 48px;
    height: auto;
    position: absolute;
    cursor: pointer;
    z-index: 8;
    opacity: 0;

    @media screen and (min-width: 768px) and (max-width: 991px) {
      width: 28px;
    }

    @media screen and (min-width: 576px) and (max-width: 767px) {
      width: 18px;
    }

    @media screen and (max-width: 575px) {
      width: 12px;
    }

    &:nth-of-type(1) {
      left: 12.5%;
      top: 81%;
    }
    &:nth-of-type(2) {
      left: 21%;
      top: 77%;
    }
    &:nth-of-type(3) {
      left: 27%;
      top: 73.5%;
    }
    &:nth-of-type(4) {
      left: 36.5%;
      top: 65.5%;
    }
    &:nth-of-type(5) {
      left: 44%;
      top: 69.5%;
    }
    &:nth-of-type(6) {
      left: 51.5%;
      top: 68%;
    }
    &:nth-of-type(7) {
      left: 58%;
      top: 58.5%;
    }
    &:nth-of-type(8) {
      left: 67.5%;
      top: 53%;
    }
    &:nth-of-type(9) {
      left: 81%;
      top: 40%;
    }
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
}

.active .flag {
  animation: slideUp 0.5s both;
  animation-delay: 0.8s;
}

.active .tip {
  animation: slideUp 0.5s both;
  animation-delay: 0.8s;
}

.tip {
  transition: all 0.3s;
  &.on {
    color: #e88b00;
  }
}

@for $i from 1 through 10 {
  .flag:nth-of-type(#{$i}) {
    animation-delay: 0.6s + $i * 0.2s;
  }

  .tip:nth-of-type(#{$i}) {
    animation-delay: 0.6s + $i * 0.2s;
  }
}
</style>

