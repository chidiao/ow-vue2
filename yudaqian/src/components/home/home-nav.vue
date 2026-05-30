<template>
  <div class="home-block nav-ct" v-show="list.length">
    <div class="nav nav-pc">
      <div class="top">办学体系</div>
      <div class="main">
        <div v-for="i in list" :key="i.id">
          <div class="title">{{i[0].title}}</div>
          <div class="list">
            <template v-for="j in i[0].child">
              <div v-if="j.click" :key="j.id">
                <div
                  class="link"
                  :class="{ noclick: !j.click }"
                  :key="j.id"
                  @click="$goto('/course/'+j.id)"
                >{{j.title}}</div>
              </div>
              <div v-else :key="j.id" class="list clear">
                <div
                  class="link"
                  :class="{ noclick: !j.click }"
                  :key="j.id"
                  @click="$goto('/course/'+j.id)"
                >{{j.title}}</div>
                <div
                  class="link click"
                  v-for="k in j.child"
                  :key="k.id"
                  @click="$goto('/course/'+k.id)"
                >{{k.title}}</div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-mb">
      <a-row :gutter="[8,8]">
        <a-col :xs="12" v-for="i in list" :key="i.id">
          <a-select :default-value="i[0].title" @change="handleChange">
            <template v-for="j in i[0].child">
              <a-select-option :key="j.id" :disabled="!j.click">{{j.title}}</a-select-option>
              <a-select-option v-for="k in j.child" :key="k.id">{{k.title}}</a-select-option>
            </template>
          </a-select>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get("/course/nav").then(res => {
        this.list = res.data.result.course_nav;
      });
    },
    handleChange(e) {
      this.$goto("/course/" + e);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-ct {
  position: relative;
  margin-top: 0;
  transition: all 0.5s ease;
  .nav {
    width: 370px;
    height: 500px;
    background: #fff;
    position: absolute;
    transform: translateY(-100%);
    z-index: 99;
    overflow-x: auto;
    .top {
      width: 100%;
      height: 50px;
      background: rgba(19, 194, 194, 1);
      display: flex;
      align-items: center;
      padding: 16px;
      font-size: 24px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      letter-spacing: 1px;
    }

    .main {
      padding: 16px;
      display: flex;
      flex-flow: column;
      .title {
        width: 100%;
        font-size: 16px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: rgba(19, 194, 194, 1);
        line-height: 24px;
        letter-spacing: 1px;
        cursor: default;
      }
      .list {
        margin: 8px 0;
        width: 100%;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: rgba(102, 102, 102, 1);
        line-height: 21px;
        letter-spacing: 1px;
        display: flex;
        flex-flow: row wrap;
        &.clear {
          margin: 0;
        }
        .link {
          margin-right: 8px;
          margin-bottom: 5px;
          cursor: pointer;
          &.noclick {
            font-weight: bold;
            cursor: default;
          }
        }
      }
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
}
@media screen and (max-width: 575px) {
  .nav-ct {
    .nav {
      width: 100%;
      transform: translateY(0);
      position: relative;
    }
    .nav-pc {
      display: none;
    }
    .nav-mb {
      display: block;
    }
  }
}
</style>