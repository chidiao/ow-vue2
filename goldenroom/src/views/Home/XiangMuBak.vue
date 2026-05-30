<template>
  <div class="xiangmu page" id="xiangmu" :style="{ backgroundImage: `url(${currentItem.bg})` }">
    <Block>
      <div class="block-title">项目介绍</div>

      <div class="swiper">
        <swiper class="home-swiper" ref="homeSwiper" :options="options">
          <swiper-slide v-for="(i, k) in list" :key="i.id">
            <div class="card" :class="{ on: k == current }" :data-v-index="k" @click="onClick(k)">
              <img :src="i.src" alt="" />
            </div>
            <div class="title">{{ i.title }}</div>
          </swiper-slide>
        </swiper>

        <div class="btns xs-0">
          <div class="swiper-button-prev btn"></div>
          <div class="swiper-button-next btn"></div>
        </div>
      </div>

      <div class="main flex-row justify-end">
        <div class="btm">
          <div class="block-title text-red">{{ currentItem.title }}</div>
          <div class="text">
            {{ currentItem.text }}
          </div>
        </div>
      </div>
    </Block>
  </div>
</template>

<script>
let vm = null

export default {
  data() {
    return {
      list: [
        {
          id: 5,
          title: "黄金屋",
          src: require("@/assets/images/sw5.jpg"),
          bg: require("@/assets/images/swbg3.jpg"),
          text: '致力于打造黄金珠宝领域的垂直电商平台，成就中国黄金珠宝线上第一品牌。2019年，中培集团凭借领先的互联网技术研发实力和丰富的运营经验，以全新的商家联盟合作方式，利用社交经济学和市场倍增学原理，创新打造黄金珠宝领域垂直电商平台“黄金屋”，运用订单福利经济模式，将线上线下业务无缝链接，整合消费者、商家、创业者、平台等所有参与者，以公平、公正的方式，获得平台奖励，最终打造成为一个链接超10亿人流量池的联合创富平台！'
        },
        {
          id: 1,
          title: "网络传媒",
          src: require("@/assets/images/sw1.jpg"),
          bg: require("@/assets/images/swbg1.jpg"),
          text:
            "集团旗下百乐文化传媒，是一家集文化活动策划、展示推广、文艺演出、演艺经纪、演出工程、影视制作、文化产品开发于一体的综合性文化企业。2018年公司巨资打造影视投资平台、网络直播平台，并配置了一大批先进的专业设备，为各级政府、企业提供全方位优质的文化服务，成功策划、承办数百场各类大中型的文艺演出和商业文化活动，并得到广大客户的好评和业界认可。",
        },
        {
          id: 2,
          title: "房地产",
          src: require("@/assets/images/sw2.jpg"),
          bg: require("@/assets/images/swbg2.jpg"),
          text:
            "集团在海南省内拥有数百万平方米的充足土地储备，在建项目为三亚大数据产业园区康养旅游地产项目，与大型央企合作，项目前景广阔。公司始终坚持为普通人提供好产品、好服务，通过自身努力，为满足人民对美好生活的各方面需求，做出力所能及的贡献。目前，公司所搭建的生态体系已初具规模。",
        },
        {
          id: 3,
          title: "新能源",
          src: require("@/assets/images/sw3.jpg"),
          bg: require("@/assets/images/swbg4.jpg"),
          text: '集团下属金猎人能源科技，是专业从事润滑油研发、生产、销售的专业能源类企业。公司以“人、车、生活”为元素，以大数据为基础，以百姓的“医、食、住、行”为裂变形态，将生产链、信息链、物流链、分销链、分享链击穿打通，使之互为依存，互为转换，从而创造一个跨界的混业的交易平台。'
        },
        {
          id: 4,
          title: "康养产业",
          src: require("@/assets/images/sw4.jpg"),
          bg: require("@/assets/images/swbg5.jpg"),
          text: '富阳西岩生态旅游观光农业项目总面积1065亩，一期项目总面积345亩，二期项目总面积720亩。项目内设有植物迷宫，连栋大棚，水果采摘园，亲子水果采摘园，果园亲子露营，垂钓水景区，垂钓水景区，田园烧烤，“跑道”养鱼，水稻田养鱼，花海精品园，杜鹃花海，托管果蔬乐园，木屋管理用房，乡村元素等多项功能分区。依托自然优美的乡野风景、舒适怡人的清新气候等，结合周围的田园景观和民俗文化，兴建一些休闲、娱乐设施，为游客提供休憩、度假、娱乐、餐饮、健身等服务。'
        },
      ],
      options: {
        loop: false,
        // autoplay: {
        //   delay: 8000,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          320: {
            //当屏幕宽度大于等于320
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            //当屏幕宽度大于等于768
            slidesPerView: 3,
            spaceBetween: 32,
          },
          1280: {
            //当屏幕宽度大于等于1280
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
        on: {
          click: function(sw, e) {
            // console.log(e)
          }
        }
      },
      index: 0,
      current: 0,
    };
  },
  created() {
    vm = this
  },
  computed: {
    swiper() {
      return this.$refs.homeSwiper.$swiper;
    },
    currentItem() {
      return this.list[this.current];
    },
  },
  methods: {
    onClick(e) {
      this.current = e
      console.log(e)
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center bottom;
  transition: all 0.6s;
}

.block-title {
  margin: 24px 0;

  @media screen and (max-width: 575px) {
    margin: 16px 0;
  }
}

.swiper {
  width: 100%;
  position: relative;
  padding: 24px 0;

  @media screen and (max-width: 575px) {
    padding: 8px 0;
  }
}

.card {
  width: 100%;
  padding-top: 59.44%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 2px;
  border: 2px solid transparent;
  transition: all 0.3s;

  &.on {
    border: 2px solid blueviolet;
  }


  &:hover {
    img {
      transform: scale(1.1);
    }
  }

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    transition: all 0.6s;
  }
}

.title {
    width: 100%;
    padding: 8px;
    font-size: 20px;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 575px) {
      font-size: 16px;
    }
  }

.btns {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  .btn {
    --swiper-navigation-color: #aaaaaa;
    --swiper-navigation-size: 40px;

    @media screen and (max-width: 575px) {
      --swiper-navigation-size: 16px;
    }
    outline: none;
  }

  .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    left: -50px;
  }

  .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    right: -50px;
  }
}

.btm {
  --width: 500px;

  @media screen and (max-width: 575px) {
    --width: 100%;
  }

  .block-title {
    width: var(--width);
    padding: 0;

    @media screen and (max-width: 575px) {
      padding: 0;
    }
  }

  .text {
    width: var(--width);
    margin: 0 auto;
    position: relative;
    padding: 24px 0;
    font-size: var(--common-text-size);
    line-height: 40px;
    letter-spacing: 1px;
    font-weight: bold;

    @media screen and (max-width: 575px) {
      padding: 0;
      line-height: 20px;
    }
  }
}
</style>