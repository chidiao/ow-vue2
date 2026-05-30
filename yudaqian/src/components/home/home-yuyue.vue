<template>
  <div class="yuyue">
    <div class="home-block">
      <div class="main">
        <div class="title">
          <img src="@/assets/images/yuyue.png" alt />
          <div>在线预约</div>
        </div>
        <div class="form">
          <a-row :gutter="[16,32]">
            <a-col :xs="24" :md="4">
              <a-select default-value="我想了解" @change="s1">
                <a-select-option :value="i[0].id" v-for="i in nav" :key="i.id">{{i[0].title}}</a-select-option>
              </a-select>
            </a-col>
            <a-col :xs="24" :md="4">
              <a-select default-value="选择城市" @change="cityChange">
                <a-select-option :value="i.name" v-for="i in city" :key="i.code">{{i.name}}</a-select-option>
              </a-select>
            </a-col>
            <a-col :xs="24" :md="4">
              <a-select default-value="选择地区" @change="areaChange">
                <a-select-option :value="i.name" v-for="i in area" :key="i.id">{{i.name}}</a-select-option>
              </a-select>
            </a-col>
            <a-col :xs="24" :md="4">
              <a-input placeholder="姓名" v-model="form.name"></a-input>
            </a-col>
            <a-col :xs="24" :md="4">
              <a-input placeholder="联系方式" v-model="form.tel"></a-input>
            </a-col>
            <a-col :xs="0" :md="1"></a-col>
            <a-col :xs="24" :md="3">
              <a-button block @click="yuyue">提交</a-button>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [],
      form: {
        nav_id: "",
        province: "河南",
        city: "",
        district: "",
        name: "",
        tel: ""
      },
      city: [],
      area: []
    };
  },
  mounted() {
    this.getNav();
    this.getCity();
  },
  methods: {
    s1(val) {
      this.form.nav_id = val;
    },
    cityChange(e, obj) {
      this.form.city = e;
      this.area = [];
      this.getArea(obj.data.key);
    },
    areaChange(e) {
      this.form.district = e;
    },
    getNav() {
      this.$http.get("/course/nav").then(res => {
        this.nav = res.data.result.course_nav;
      });
    },
    yuyue() {
      this.$http.post("/nav/appointment", this.form).then(res => {
        if (res.data.code == 0) {
          this.$msg.success(res.data.msg);
        } else {
          this.$msg.error(res.data.msg);
        }
      });
    },
    getCity() {
      this.$http.get("/province/410000/city").then(res => {
        this.city = res.data.result.city;
      });
    },
    getArea(code) {
      this.$http.get("/province/410000/city/" + code).then(res => {
        this.area = res.data.result.district;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
input::placeholder {
  color: #666666;
}
.yuyue {
  padding: 0;
  background: linear-gradient(
    45deg,
    rgba(250, 140, 22, 1) 0%,
    rgba(253, 192, 49, 1) 100%
  );
  .main {
    max-width: 1200px;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    .title {
      height: 100px;
      justify-content: center;
      display: flex;
      align-items: center;
      font-size: 32px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      letter-spacing: 2px;
      img {
        margin: 4px 8px 0 0;
        width: 32px;
        height: 32px;
      }
    }
    .form {
      width: 1000px;
      .ant-row {
        margin-top: 0 !important;
        margin-left: 64px !important;
      }
      .ant-select {
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 575px) {
  .yuyue {
    .main {
      padding: 32px;
      .title {
        width: 100%;
        height: 50px;
        font-size: 24px;
        img {
          width: 24px;
          height: 24px;
        }
      }
      .form {
        .ant-row {
          margin-top: 0 !important;
          margin-left: 0 !important;
        }
      }
    }
  }
}
</style>