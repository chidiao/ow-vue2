<template>
  <div class="yuyue">
    <img src="@/assets/images/yue.jpg" alt class="bg" />
    <div class="box" v-show="success">
      <a-result status="success" title="预约报名成功" sub-title="请留意来电近期会有工作人员对您进行电话核对"></a-result>
    </div>
    <div class="box" v-show="!success">
      <div class="page-title">您选择了：{{title.main}} {{title.child}} > 信息填写</div>

      <div class="main"></div>

      <div class="main">
        <a-row :gutter="[24,24]">
          <a-col :xs="24" :md="12">
            <div class="page-title">课程信息</div>
            <div class="ipt">
              <div class="line">
                <span class="w4">课程时间 |</span>
                <span class="rt">{{cs.open_at}}~{{cs.end_at}}</span>
              </div>
              <div class="line">
                <span class="w4">上课形式 |</span>
                <span class="rt">{{cs.type}}</span>
              </div>
              <div class="line">
                <span class="w4">上课时间 |</span>
                <span class="rt">{{cs.course_weekday}} {{cs.course_start_at}}~{{cs.course_end_at}}</span>
              </div>
              <div class="line">
                <span class="w4">上课地点 |</span>
                <span class="rt">{{cs.class_position}}</span>
              </div>
              <div class="line">
                <span class="w4">课程费用 |</span>
                <span class="rt">¥{{cs.class_fee}}</span>
              </div>
            </div>
          </a-col>
          <a-col :xs="24" :md="12">
            <div class="page-title">学员姓名</div>
            <input type="text" class="ipt" v-model="form.name" />
            <div class="page-title">联系方式</div>
            <input type="text" class="ipt" v-model="form.tel" />
            <div class="page-title">学员邮箱</div>
            <input type="text" class="ipt" v-model="form.email" />
          </a-col>
        </a-row>
      </div>

      <div class="btn" @click="yuyue">立即预约</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cs: "",
      title: "",
      success: false,
      form: {
        course_id: "",
        name: "",
        tel: "",
        email: ""
      }
    };
  },
  mounted() {
    let id = this.$route.params.id;
    this.form.course_id = id;
    this.getData(id);
  },
  methods: {
    getData(id) {
      this.$http.get("/course/detail/" + id).then(res => {
        this.cs = res.data.result.course;
        this.title = res.data.result.course_nav;
      });
    },
    yuyue() {
      this.$http.post("/course/appointment", this.form).then(res => {
        if (res.data.code == 0) {
          this.$msg.success(res.data.msg);
          this.success = true;
        } else {
          this.$msg.error(res.data.msg);
        }
      });
    }
  }
};
</script>

<style lang="scss">
.yuyue {
  position: relative;
  padding: 100px 0;

  .bg {
    width: 100%;
    height: 100%;
    top: 0;
    object-fit: cover;
    position: absolute;
  }
  .box {
    position: relative;
    z-index: 99;
    margin: 0 auto;
    padding: 16px;
    background: rgba(0, 0, 0, 0.5);
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: rgba(255, 255, 255, 0.9);
    line-height: 19px;
    width: 100%;
    max-width: 800px;
    .ant-result-title {
      color: #fff !important;
    }
    .ant-result-subtitle {
      color: #fff !important;
    }
    .main {
      margin: 32px;
      .ipt {
        margin: 8px 0;
        width: 100%;
        background: transparent;
        outline: none;
        padding: 8px;
        border: 1px solid rgba(255, 255, 255, 0.9);
        .line {
          margin: 12px;
          letter-spacing: 2px;
          display: flex;
          .w4 {
            display: inline-block;
            width: 100px;
            text-align: center;
          }
          .rt {
            display: inline-block;
            white-space: pre-wrap;
          }
        }
      }
    }
    .btn {
      margin: 32px auto;
      width: 300px;
      height: 42px;
      display: flex;
      justify-content: center;
      align-items: center;
      letter-spacing: 4px;
      font-size: 16px;
      font-weight: bold;
      background: rgba(250, 140, 22, 1);
      border-radius: 4px;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 575px) {
  .yuyue {
    padding: 0;
    .box {
      .main {
        margin: 16px;
        .line {
          .rt {
            width: 170px;
          }
        }
      }
    }
  }
}
</style>