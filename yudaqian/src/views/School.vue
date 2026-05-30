<template>
  <div class="school">
    <div class="top"></div>

    <div class="huanjing">
      <div class="title-ct">
        <xtitle>个性化教学环境</xtitle>
      </div>
      <div class="list">
        <img data-aos="fade-up" class="hj hj1" src="@/assets/images/xq/hj1.png" />
        <img data-aos="fade-right" class="hj hj2" src="@/assets/images/xq/hj2.png" />
        <img data-aos="fade-up" class="hj hj3" src="@/assets/images/xq/hj3.png" />
        <img data-aos="fade-up" class="hj hj4" src="@/assets/images/xq/hj4.png" />
        <img data-aos="fade-right" class="hj hj5" src="@/assets/images/xq/hj5.png" />
        <img data-aos="fade-left" class="hj hj6" src="@/assets/images/xq/hj6.png" />
      </div>
    </div>

    <div class="xiaoqu">
      <div class="title-ct">
        <xtitle>上百所分校</xtitle>
      </div>
      <div class="cb">
        <img data-aos="fade-up" class="xq" src="@/assets/images/xq/xq1.png" />
        <img data-aos="fade-up" class="xq" src="@/assets/images/xq/xq2.png" />
        <img data-aos="fade-up" class="xq" src="@/assets/images/xq/xq3.png" />
        <img data-aos="fade-up" class="xq" src="@/assets/images/xq/xq4.png" />
        <img data-aos="fade-up" class="xq" src="@/assets/images/xq/xq5.png" />
        <img data-aos="fade-up" class="xq" src="@/assets/images/xq/xq6.png" />
        <img data-aos="fade-up" class="xq" src="@/assets/images/xq/xq7.png" />
        <img data-aos="fade-up" class="xq" src="@/assets/images/xq/xq8.png" />
      </div>
    </div>

    <div class="schools">
      <div id="henan" class="echarts"></div>

      <div class="cb" style="display: flex;margin-bottom: -20px;color: #fff;justify-content: center; align-items: center; font-size: 14px;">
        <img src="@/assets/images/click.png" style="width:24px;margin-right:6px" alt="">
        <div>点击查看校区详情</div>
      </div>
      <div class="list">
        <template v-for="i in school">
          <a-popover :title="j.school_name" trigger="click" v-for="j in i.school" :key="j.id">
            <template slot="content">
              <p>地址：{{j.address}}</p>
              <p>电话：{{j.tel}}</p>
            </template>
            <div class="item">{{j.school_name}}</div>
          </a-popover>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
let echarts = require("echarts");
import henanjson from "@/henan.json";
export default {
  data() {
    return {
      school: [],
      city: []
    };
  },
  mounted() {
    this.getCity();
  },
  methods: {
    getCity() {
      this.$http.get("/province/410000/city").then(res => {
        let city = res.data.result.city;
        city.forEach(item => (item.value = 0));
        this.city = city;
        this.initMap();
      });
    },
    getSchool(id) {
      this.$http.get("/school/list/" + id).then(res => {
        this.school = res.data.result.school;
      });
    },
    initMap() {
      echarts.registerMap("河南", henanjson);
      let henan = echarts.init(document.getElementById("henan"));
      let data = this.city;
      let opt = {
        dataRange: {
          show: false,
          x: "left",
          y: "bottom",
          splitList: [
            { start: 0, end: 0, color: "#54CBCF" },
            { start: 1, end: 1, color: "#8FD645" }
          ]
        },
        series: [
          {
            type: "map",
            map: "河南",
            data: data,
            label: {
              normal: {
                show: true
              },
              emphasis: {
                textStyle: {
                  color: "#fff"
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: "#389BB7",
                areaColor: "#fff"
              },
              emphasis: {
                areaColor: "#389BB7",
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      this.chooseCity("411400");
      henan.setOption(opt);
      henan.on("click", e => {
        this.chooseCity(e.data.code);
        henan.setOption(opt);
      });
    },
    chooseCity(code) {
      this.getSchool(code);
      this.city.forEach(item => {
        item.code == code ? (item.value = 1) : (item.value = 0);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  width: 100vw;
  height: 33vw;
  background: url('../assets/images/xq/top.png');
  background-size: cover;
}
.xiaoqu {
  padding-bottom: 40px;
  background: url("../assets/images/xq/xq0.png");
  background-size: cover;
  background-position-y: center;
  .cb {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
  .xq {
    width: 275px;
    height: 128px;
    margin-bottom: 24px;
  }
}
.huanjing {
  .list {
    width: 1240px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
  }
  .hj1 {
    width: 100%;
    margin-bottom: 20px;
  }
  .hj2 {
    width: 380px;
    height: 300px;
    margin-right: 20px;
  }
  .hj3 {
    width: 300px;
    height: 300px;
    margin-right: 20px;
  }
  .hj4 {
    width: 520px;
    height: 447px;
  }
  .hj5 {
    width: 700px;
    height: 398px;
    margin-top: -127px;
    margin-right: 20px;
  }
  .hj6 {
    margin-top: 20px;
    width: 520px;
    height: 251px;
  }
}
.schools {
  background: url("../assets/images/xq/henan.png");
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  .list {
    margin: 40px 0;
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
  }
  .item {
    margin: 6px;
    width: 284px;
    height: 42px;
    padding: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(19, 194, 194, 1);
    border-radius: 4px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
#henan {
  width: 600px;
  height: 600px;
  margin: 0 auto;
}

@media screen and (max-width: 575px) {
  .huanjing {
    .list {
      width: 100%;
      padding: 0 5px;
    }
    .hj {
      width: 100%;
      // height: auto;
      object-fit: cover;
      margin: 5px 0 !important;
    }
  }
  .schools {
    .list {
      justify-content: center;
    }
  }
  #henan {
    width: 360px;
    height: 360px;
    margin: 0 auto;
  }
}
</style>