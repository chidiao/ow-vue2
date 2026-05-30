<template>
  <div class="aboutus">
    <img src="@/assets/images/about.png" style="width: 100%" alt />

    <div class="title-ct">
      <xtitle>企业简介</xtitle>
    </div>
    <div class="cb">
      <a-row class="culture" :gutter="[0,16]" type="flex" justify="space-between">
        <a-col :xs="24" :md="10">
          <img
            data-aos="fade-right"
            src="@/assets/images/gongsi.png"
            style="max-width: 100%;margin-left:-2em"
            alt
          />
        </a-col>
        <a-col :xs="24" :md="10">
          <div data-aos="fade-left" class="right">{{jianjie}}</div>
        </a-col>
      </a-row>
    </div>

    <!-- <div class="title-ct">
      <xtitle>创始人简介</xtitle>
    </div>
    <div class="cb">
      <a-row class="culture no-line" :gutter="[0,16]" type="flex" justify="space-between">
        <a-col :xs="0" :md="24">
          <img
            data-aos="fade-right"
            src="@/assets/images/us/csr.png"
            style="max-width: 100%;margin-left:-2em"
            alt
          />
        </a-col>
        <a-col :xs="24" :md="0">
          <img
            data-aos="fade-right"
            src="@/assets/images/us/csr-mb.png"
            style="max-width: 100%;margin-left:-2em"
            alt
          />
        </a-col>
      </a-row>
    </div>

    <div class="title-ct">
      <xtitle>团队简介</xtitle>
    </div>
    <swiper></swiper> -->

    <div class="title-ct">
      <xtitle>LOGO释义</xtitle>
    </div>
    <div data-aos="fade-up" class="cb shiyi">
      <img src="@/assets/images/logo2.png" alt class="logo" />
      <div
        class="content"
      >释义：整体采用书籍的样式紧扣教育主题，中间的负形为豫的首字母“Y” ，大千的首字母则在书的封面上 ，寓意着书中的大千世界，整体采用青绿二色，代表着生机，顶部的绿色有“希望”意思，也有青出于蓝而胜于蓝的隐晦含义</div>
    </div>

    <div id="licheng"></div>
    <div class="title-ct">
      <xtitle>发展历程</xtitle>
    </div>
    <div class="timeline" style="max-width: 1000px;margin: 0 auto;padding: 0 20px">
      <a-timeline mode="alternate">
        <a-timeline-item data-aos="fade-up" v-for="i in times" :key="i.id">
          <div class="title">{{i.time}}</div>
          <div class="content">{{i.progress}}</div>
        </a-timeline-item>
      </a-timeline>
    </div>

    <div class="title-ct">
      <xtitle id="linian">企业理念</xtitle>
    </div>
    <div class="cb linian">
      <img data-aos="fade-up" :src="i.img" v-for="i in linian" :key="i.id" />
    </div>

    <div class="title-ct">
      <xtitle>豫大千特色</xtitle>
    </div>
    <div class="cb" style="display: flex;justify-content: center;padding:40px 0">
      <div class="circle-ct">
        <div class="circle">
          <div class="content">
            <div class="out">
              <div class="in"></div>
            </div>
            <div class="cc cc1">
              <img data-aos="fade-down" src="@/assets/images/us/cc1.png" />
              <div class="text">领先的教学理念</div>
            </div>
            <div class="cc cc2">
              <img data-aos="fade-right" src="@/assets/images/us/cc2.png" />
              <div class="text">高效的管理模式</div>
            </div>
            <div class="cc cc3">
              <img data-aos="fade-left" src="@/assets/images/us/cc3.png" />
              <div class="text">创新的教学模式</div>
            </div>
            <div class="cc cc4">
              <img data-aos="fade-right" src="@/assets/images/us/cc4.png" />
              <div class="text">雄厚的师资力量</div>
            </div>
            <div class="cc cc5">
              <img data-aos="fade-left" src="@/assets/images/us/cc5.png" />
              <div class="text">全程个性化服务</div>
            </div>
            <div class="cc cc6">
              <img data-aos="fade-up" src="@/assets/images/us/cc6.png" />
              <div class="text">丰富的辅导内容</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="@/assets/images/us.png" style="width: 100%" />
  </div>
</template>

<script>
import swiper from '@/components/about-swiper'
export default {
  components: {
    swiper,
  },
  data() {
    return {
      jianjie: `河南大千教育科技有限公司，简称豫大千教育，是一家专门为小初高学生提供文化课辅导、线上1对1教学辅导、考前辅导、研学旅行、夏令营及营地教育等多方位的专业教育机构。
      豫大千教育的使命是“让每个孩子都能获得量身定制的教育服务，成就更好的自己，收获美好的未来”。
      目前，豫大千教育已开设共计200余所校区，教职员工近3000人、辅导学生已超50000人次，辐射郑州、周口、洛阳、商丘、新乡、驻马店、许昌及信阳等地。
      豫大千教育坚持“兼容中西，知行合一，为学生、家长、老师、社会负责”的教学理念，以父母之情爱学生、以虔诚之心办教育，孜孜矻矻，开拓进取，
      已帮助近万名学生实现素质和成绩的显著突破，考上理想学校，赢得了学生、家长、社会的高度赞扬和社会各界的大力支持。
      未来，豫大千教育将持续深耕于教育领域，与时俱进，不断优化课程体系，提升团队素质，帮助更多孩子成就梦想、更多家庭实现希望！ `,
      csrjianjie: `陈前程毕业于郑州大学，获得工商管理学士学位。 先后在新动方教育、大山外语、昂立教育等知名公司工作。 
      2016年组建教育团队，2020年正式成立河南大千教育科技有限公司，并创立品牌“豫大千”。 
      发展至今，豫大千教育在河南有近三百所校区，依托专业的师资团队和完善的教育服务体系，是河南颇具规模的小初高文化课教育、研学旅行、夏令营及营地教育的辅导机构。 `,
      choose: [],
      linian: [
        { id: 1, img: require("@/assets/images/ln1.png") },
        { id: 2, img: require("@/assets/images/ln2.png") },
        { id: 3, img: require("@/assets/images/ln3.png") },
        { id: 4, img: require("@/assets/images/ln4.png") },
        { id: 5, img: require("@/assets/images/ln5.png") }
      ],
      times: [],
      firsttime: ""
    };
  },
  watch: {
    $route(to, from) {
      if (to.hash) {
        this.goAnchor();
      }
    }
  },
  mounted() {
    this.getChoose();
    this.getTimes();
  },
  methods: {
    goAnchor() {
      if (this.$route.hash) {
        let id = this.$route.hash.slice(1);
        let el = document.getElementById(id);
        window.scrollTo(0, el.offsetTop);
      }
    },
    getChoose() {
      this.$http.get("/choose").then(res => {
        this.choose = res.data.result.choose;
      });
    },
    getTimes() {
      this.$http.get("/progress").then(res => {
        let data = res.data.result.progress;
        this.times = data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.jianjie {
  padding: 0 32px;
  text-indent: 2em;
}
.culture {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: rgba(102, 102, 102, 1);
  line-height: 21px;
  letter-spacing: 1px;
  padding: 0 32px;
  text-indent: 2em;
  position: relative;

  &::after {
    content: "";
    width: 2px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(20, 193, 193, 1);
  }

  &.no-line::after {
    display: none;
  }
}

.shiyi {
  padding: 0 32px;
  max-width: 800px;
  display: flex;
  align-items: center;
  .logo {
    width: 80px;
    margin-right: 64px;
  }
  .content {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: rgba(102, 102, 102, 1);
    line-height: 21px;
    letter-spacing: 1px;
  }
}

.linian {
  max-width: 1000px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  img {
    margin: 10px;
  }
}

.reason {
  padding: 0 16px;
  .item {
    width: 100%;
    padding-bottom: 100%;
    position: relative;
    .mask {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 98;
      background: rgba(253, 184, 184, 0);
      color: #fff;
      text-align: center;
      padding: 32px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      font-size: 16px;
      .title {
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        letter-spacing: 1px;
        margin-bottom: 16px;
      }
      .content {
        font-family: MicrosoftYaHei;
        color: rgba(255, 255, 255, 1);
        letter-spacing: 1px;
        overflow-y: auto;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      z-index: 97;
    }
  }
}

.timeline {
  .title {
    font-size: 16px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    line-height: 21px;
    letter-spacing: 1px;
    text-align: left;
    padding: 0 32px 16px;
  }
  .content {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: rgba(153, 153, 153, 1);
    line-height: 21px;
    letter-spacing: 1px;
    text-align: left;
    padding: 0 32px 16px;
  }
}

.circle-ct {
  width: 100%;
  max-width: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle {
  width: 80%;
  height: 0;
  padding-bottom: 80%;
  border-radius: 50%;
  border: 1px solid rgba(19, 194, 194, 1);
  position: relative;
  box-sizing: border-box;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .out {
    background: url("../assets/images/us/c2.png");
    background-size: 100% 100%;
    width: 70%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .in {
    background: url("../assets/images/us/c1.png");
    background-size: 100% 100%;
    width: 70%;
    height: 70%;
  }
  .cc {
    position: absolute;
    width: 16%;
    height: 16%;
    &.cc1 {
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &.cc2 {
      top: 24%;
      left: 8%;
      transform: translate(-50%, -50%);
    }
    &.cc3 {
      top: 24%;
      right: 8%;
      transform: translate(50%, -50%);
    }
    &.cc4 {
      bottom: 24%;
      left: 8%;
      transform: translate(-50%, 50%);
    }
    &.cc5 {
      bottom: 24%;
      right: 8%;
      transform: translate(50%, 50%);
    }
    &.cc6 {
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
    }
    img {
      width: 100%;
      height: 100%;
    }
    .text {
      font-size: 12px;
      white-space: nowrap;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 21px;
      letter-spacing: 1px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 100%);
    }
  }
}

@media screen and (max-width: 575px) {
  .reason {
    .item {
      .mask {
        font-size: 14px;
        padding: 16px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .linian {
    padding: 0 16px;
  }
  .culture {
    &::after {
      display: none;
    }
  }
  .timeline {
    .title,
    .content {
      padding: 0 4px 4px;
    }
  }
}
</style>