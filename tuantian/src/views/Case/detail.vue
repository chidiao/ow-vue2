<template>
  <div class="case-detail">
    <toppic :img="toppic"></toppic>

    <div class="bar">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/case' }">合作案例</el-breadcrumb-item>
        <el-breadcrumb-item>案例详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="bg">
      <div class="wrapper">
        <el-row :gutter="16">
          <el-col :xs="24" :sm="12">
            <div class="pic">
              <img class="box" :src="article.full_thumbnail">
            </div>
          </el-col>
          <el-col :xs="24" :sm="12">
            <div class="pic">
              <div class="box text">
                <div class="title">
                  {{article.title}}
                </div>
                <div class="line">
                  <div class="left">项目名称：</div>
                  <div class="right">{{article.title}}</div>
                </div>
                <div class="line">
                  <div class="left">所属行业：</div>
                  <div class="right">{{article.subtitle}}</div>
                </div>
                <div class="line">
                  <div class="left">项目背景：</div>
                  <div class="right">{{article.description}}</div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <div class="more" v-html="article.content">

          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import toppic from '@/views/History/toppic'
import bigtitle from '@/components/bigtitle'
export default {
  components: {
    toppic,
    bigtitle
  },
  data() {
    return {
      toppic: require('../../assets/images/bg1.png'),
      article: {
        content: ''
      }
    }
  },
  methods: {
    getData() {
      this.axios.get(this.$myapi + '/detail/' + this.$route.params.id).then(res => {
        if (res.data.success) {
          this.article = res.data.article
        }
      })
    }
  },
  mounted() {
    this.getData();
  }
}
</script>

<style lang="less">
  @maxwd: 1400px;

  .case-detail {
    .wrapper {
      max-width: @maxwd;
      margin: 0 auto;
      padding: 30px 0;
      display: flex;
      flex-flow: column;
      align-items: center;
      margin-bottom: 60px;
      padding: 16px 0;
      padding-top: 50px;
    }

    .bar {
      max-width: @maxwd;
      margin: 0 auto;
      height: 50px;
      display: flex;
      align-items: center;
      padding-left: 20px;
    }

    .bg {
      background: url('../../assets/images/bg3.png') no-repeat;
      padding-top: 100px;
      background-position: center top;
    }


    .el-row {
      width: 100%;
    }
    .el-col {
      margin-top: 16px;
    }
    .pic {
      width: 100%;
      padding-bottom: 70%;
      position: relative;
      .box {
        width: 100%;
        height: 100%;
        background: #fff;
        position: absolute;
        object-fit: cover;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2), -1px -1px 5px rgba(0, 0, 0, 0.2);
        line-height: 1.5;
        letter-spacing: 2px;

        &.text {
          overflow: hidden;
          box-sizing: border-box;
          padding: 40px;
          overflow-y: auto;
        }

        .title {
          font-size: 1.2em;
        }
        .line {
          display: flex;
          margin-top: 16px;
          .left {
            white-space: nowrap;
          }
        }
      }
    }

    .more {
      margin-top: 10px;
      padding: 20px;
      background: #fff;
    }
    .more p {
      margin: 40px 0;
      line-height: 1.5;
      letter-spacing: 2px;
    }
    .more img {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 767px) {
    .case-detail {
      .bg {
        padding-top: 0;
      }

      .pic .box.text {
        padding: 20px;
        font-size: 14px;
      }

      .more p {
        font-size: 14px;
      }
    }
  }
</style>