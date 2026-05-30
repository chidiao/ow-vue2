<template>
  <div class="full-container">
    <div class="center-container" id="p1">
      <div class="sm-title inline left">{{ $t("ec.tt41") }}</div>
      <!-- <a-row
        class="row"
        :gutter="[
          { sm: 32, xs: 16 },
          { sm: 32, xs: 16 },
        ]"
        style="padding: 24px"
        type="flex"
      >
        <a-col :lg="4" :md="8" :sm="8" :xs="12">
          <div class="sm-title inline left">{{ $t("ec.tt41") }}</div>
        </a-col>
        <a-col
          :lg="5"
          :md="8"
          :sm="8"
          :xs="12"
          v-for="i in $t('ec.leader')"
          :key="i.id"
        >
          <div
            class="card"
            :class="{ open: current == i.id }"
            @click="check(i.id)"
          >
            <img class="full" :src="i.img" alt />
            <div class="name">{{ i.name }}</div>
            <div class="job">{{ i.job }}</div>
            <div
              class="intro text-cut4"
              :style="{ height: current == i.id ? height + 'px' : '80px' }"
            >
              {{ i.intro }}
            </div>
          </div>
        </a-col>
      </a-row> -->
    </div>

    <div class="cards" id="scrollLeaders">
      <div class="card" v-for="i in leaders" :key="i.id">
        <img class="avatar" :src="i.img" alt />
        <div class="name">{{ i.name }}</div>
        <div class="job">{{ i.job }}</div>
        <div class="intro text-cut4">
          {{ i.intro }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      current: 0,
      height: 80,
      leaders: [
        {
          id: 1,
          img: "/images/team/ld1.jpg",
          name: "James Bo",
          job: "联合创始人 首席战略官",
          intro:
            "美国华盛金融科技总裁 清华大学和美国辛辛那提大学双硕士 清华数字研究院《大数据智能系列丛书》编委 中国科协海智专家大学教授 英国国际应用科技研究院院长",
        },
        {
          id: 2,
          img: "/images/team/ld2.png",
          name: "Dr.Zhang",
          job: "安全专家",
          intro:
            "北京大学计算机科学学士学位 美国马里兰大学获计算机科学博士学位 领航集团（Vanguard)负责系统架构信息安全工作 世界集团信息首席信息安全架构师 创建区块链实验室多次在区块链国际论坛上发言",
        },
        {
          id: 3,
          img: "/images/team/ld3.jpg",
          name: "王悦衡",
          job: "生态运营总监",
          intro:
            "金桥国际董事局主席 著名投资家，投资PE、VC、天使等多个阶段 辅导企业国内主板、海外上市，曾操作顺丰并购等项目 北大政府管理学院特约资本导师 环球青年创业联盟中华区主曾任人民日报财富杂志出品人",
        },
        {
          id: 4,
          img: "/images/team/ld4.png",
          name: "Jin Cheng",
          job: "金融专家",
          intro:
            "国际著名的职业经理人 高级综合金融理财规划师 美国AAA国际集团亚太地区首席执行官 美国AAA国际集团XIOS中国投资服饰有限公司 大中华区执行总裁",
        },
        {
          id: 5,
          img: "/images/team/ld5.jpg",
          name: "Jin Kecheng",
          job: "营销总监",
          intro:
            "中国十大培训名师 前沿讲座主讲嘉夹 深圳电视台创客风云汇创客导师 中国现场演说成交第一人 中国创客第一人 中国存在智慧系列课程创始人",
        },
        {
          id: 6,
          img: "/images/team/ld6.jpg",
          name: "罗洪堂",
          job: "执行总裁",
          intro:
            "曾经是一名职业军人，做过老师，开过医院 师从国际顶级营销培训大师赵永甲，安东尼罗宾 曾任某国际集团公司执行总裁 著名的国家级讲师，国际营销培训师 国内多家知名企业教育部长和执行总裁 现任京贝尔国际集团大中华区总裁",
        },
        {
          id: 7,
          img: "/images/team/ld7.png",
          name: "柴立兴",
          job: "集团总裁/副董事长",
          intro:
            "毕业天津大学，续修清华 EMBA总裁班，并兼任大学生创业优秀导师 2020年新投资SOD产业链与生态养生度假园 目前集团人数2100余人，年营业额达5亿元",
        },
        {
          id: 8,
          img: "/images/team/ld8.png",
          name: "牛毅",
          job: "董事兼顶层设计师",
          intro:
            "青岛丽港酒店有限公司董事长 美国国际应用技术研究院副院长 国家级“众创空间”及国内多家孵化基地“创业导师” 曾担任多家科技组织的高级顾问 曾策划运营团队取得年百亿多元的销售规模",
        },
        {
          id: 10,
          img: "/images/team/ld10.png",
          name: "王磊",
          job: "董事兼品牌策划师",
          intro:
            "中国十大品牌策划专家2013品牌中国年度人物 资深媒体人 山东省大型历史文献文集《创新山东》执行主编 中央党校《领导科学》（内参）驻山东调研员 2019年引领推广华夏神菊种植并成功提取植物  SOD,与中国SOD之父，国际著名酶专家袁勤生教 授签订战略合作，2019年在山东济宁合作设立大 乘合丰（邹城）华夏神菊示范基地，计划种植20000亩，植物加工厂列入筹备建设阶段。",
        },
      ],
    };
  },
  mounted() {
    this.gsapInit();
  },
  methods: {
    check(id) {
      if (this.current == id) {
        this.current = 0;
      } else {
        this.current = id;
        setTimeout(() => {
          this.height = document.querySelector(
            ".card.open .intro"
          ).scrollHeight;
        }, 100);
      }
    },
    gsapInit() {
      let leaders = document.getElementById("scrollLeaders");
      let width = leaders.scrollWidth - document.documentElement.clientWidth;
      let time = width / 24;

      gsap.to(leaders, {
        duration: time,
        scrollLeft: width,
        yoyo: true,
        repeat: -1,
        ease: "none",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.center-container {
  padding: 32px 16px;
}
.cards {
  margin-bottom: 64px;
  padding: 0 24px;
  display: flex;
  width: 100%;
  overflow: hidden;

  .card {
    flex-shrink: 0;
    width: 240px;
    box-sizing: border-box;
    margin: 16px;
    padding: 24px;
    background: #ffffff;
    box-shadow: 0px 2px 39px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    .avatar {
      width: 140px;
      height: auto;
    }

    .name {
      font-size: 18px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: #333333;
      line-height: 24px;
      margin-top: 16px;
    }
    .job {
      font-size: 12px;
      font-family: MicrosoftYaHei;
      color: #333333;
      line-height: 20px;
      margin-top: 8px;
    }
    .intro {
      font-size: 12px;
      font-family: MicrosoftYaHei;
      color: #999999;
      line-height: 20px;
      margin: 8px 0;
      height: 80px;
      overflow: hidden;
      transition: all 0.3s;
    }
  }
}
.row .card {
  padding: 24px;
  background: #ffffff;
  box-shadow: 0px 2px 39px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    margin-top: -16px;
    .intro {
      -webkit-line-clamp: 100 !important;
    }
  }
  .full {
    width: 150px;
    height: 150px;
  }
  .name {
    font-size: 18px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: #333333;
    line-height: 24px;
    margin-top: 16px;
  }
  .job {
    font-size: 12px;
    font-family: MicrosoftYaHei;
    color: #333333;
    line-height: 20px;
    margin-top: 8px;
  }
  .intro {
    font-size: 12px;
    font-family: MicrosoftYaHei;
    color: #999999;
    line-height: 20px;
    margin: 8px 0;
    height: 80px;
    transition: all 0.3s;
  }
}
@media screen and (max-width: 575px) {
  .center-container {
    padding: 24px 16px;
  }
  .ant-col:nth-of-type(3),
  .ant-col:nth-of-type(5) {
    margin-top: -30vw;
  }
  .card {
    &:hover {
      margin-top: 0;
    }
    .full {
      width: 50%;
      height: auto;
    }
    .intro {
      min-height: auto;
    }
  }
}
</style>