<template>
  <div class="home-block course">
    <img src="@/assets/images/shujia.png" style="width: 100%;margin:30px 0" alt />

    <div class="filter">
      <template v-for="(i,idx) in nav">
        <div class="row" v-if="i[0].child[0].click" :key="i.id">
          <div class="title t1">{{i[0].title}}</div>
          <div class="list" :class="{ dark: idx%2!=0 }">
            <div
              class="link"
              :class="{ on: active==j.id }"
              v-for="j in i[0].child"
              :key="j.id"
              @click="getList(j.id),active=j.id"
            >{{j.title}}</div>
          </div>
        </div>

        <div class="row" v-else :key="i.id">
          <div class="title t1">{{i[0].title}}</div>
          <div class="list col">
            <div class="right" v-for="(j,jdx) in i[0].child" :key="j.id">
              <div class="title t2" :class="{ dark: jdx%2!=0 }">{{j.title}}</div>
              <div class="list" :class="{ dark: jdx%2==0 }">
                <div
                  class="link"
                  :class="{ on: active==k.id }"
                  v-for="k in j.child"
                  :key="k.id"
                  @click="getList(k.id),active=k.id"
                >{{k.title}}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="nav-mb">
      <a-row :gutter="[8,8]">
        <a-col :xs="12" v-for="i in nav" :key="i.id">
          <a-select :default-value="i[0].title" @change="handleChange">
            <template v-for="j in i[0].child">
              <a-select-option :key="j.id" :disabled="!j.click">{{j.title}}</a-select-option>
              <a-select-option v-for="k in j.child" :key="k.id">{{k.title}}</a-select-option>
            </template>
          </a-select>
        </a-col>
      </a-row>
    </div>

    <xtitle>课程选择</xtitle>

    <a-table
      :columns="columns"
      :data-source="list"
      :scroll="{ x: 1100, y: 600 }"
      :pagination="false"
    >
      <a slot="action" slot-scope="record" @click="yuyue(record)">预约</a>
    </a-table>

    <div class="blank" style="height:100px"></div>
  </div>
</template>

<script>
const columns = [
  {
    title: "班级名称",
    width: 120,
    align: "center",
    dataIndex: "course_name",
    key: "course_name",
    ellipsis: true,
    fixed: "left"
  },
  {
    title: "开班时间",
    dataIndex: "open_at",
    key: "1",
    width: 100,
    align: "center"
  },
  {
    title: "结束时间",
    dataIndex: "end_at",
    key: "2",
    width: 100,
    align: "center"
  },
  {
    title: "开班类型",
    dataIndex: "type",
    key: "3",
    width: 100,
    align: "center"
  },
  {
    title: "上课时间",
    dataIndex: "class_at",
    key: "4",
    width: 100,
    align: "center"
  },
  {
    title: "学时",
    dataIndex: "class_hours",
    key: "5",
    width: 100,
    align: "center"
  },
  // {
  //   title: "地点",
  //   dataIndex: "class_position",
  //   key: "6",
  //   width: 100,
  //   align: "center"
  // },
  {
    title: "费用",
    dataIndex: "class_fee",
    key: "7",
    width: 100,
    align: "center"
  },
  // {
  //   title: "优惠",
  //   dataIndex: "discount",
  //   key: "8",
  //   width: 80,
  //   align: "center"
  // },
  {
    title: "报名",
    key: "id",
    fixed: "right",
    width: 80,
    scopedSlots: { customRender: "action" }
  }
];

export default {
  data() {
    return {
      columns,
      list: [],
      nav: [],
      active: ""
    };
  },
  mounted() {
    this.getNav();
    let navId = this.$route.params.id || "";
    this.active = navId;
    this.getList(navId);
  },
  methods: {
    yuyue(e) {
      console.log(e);
      this.$goto("/yuyue/" + e.id);
    },
    getList(id) {
      this.$http.get("/course/list?nav_id=" + id).then(res => {
        let course = res.data.result.course;
        course = course.map(item => {
          item.discount += "折";
          item.class_fee = "￥" + item.class_fee;
          item.key = item.id;
          return item;
        });
        this.list = course;
      });
    },
    getNav() {
      this.$http.get("/course/nav").then(res => {
        this.nav = res.data.result.course_nav;
      });
    },
    handleChange(e) {
      this.getList(e);
    }
  }
};
</script>

<style lang="scss" scoped>
.filter {
  cursor: default;
  .row {
    display: flex;
  }
  .right {
    display: flex;
  }
  .list {
    display: flex;
    margin: 4px;
    width: 100%;
    min-height: 50px;
    background: rgba(233, 233, 233, 1);
    text-align: center;
    line-height: 50px;
    &.col {
      display: flex;
      flex-direction: column;
      background: transparent;
    }

    .link {
      min-width: 120px;
      font-family: MicrosoftYaHei;
      color: rgba(51, 51, 51, 1);
      line-height: 50px;
      letter-spacing: 1px;
      cursor: pointer;
      &.on {
        color: #fa8c16;
      }
    }
  }
  .title {
    margin: 4px;
    width: 120px;
    min-height: 50px;
    background: rgba(233, 233, 233, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    &.t1 {
      color: #fa8c16;
      font-weight: bold;
    }
    &.t2 {
      color: #333333;
      font-weight: bold;
    }
  }
  .dark {
    background: rgba(217, 217, 217, 1) !important;
  }
}
.nav-mb {
  padding: 8px;
  display: none;
  .ant-select {
    width: 100%;
  }
  .ant-select-selection {
    border: none;
  }
}
@media screen and (max-width: 575px) {
  .filter {
    display: none;
  }
  .nav-mb {
    display: block;
  }
}
</style>