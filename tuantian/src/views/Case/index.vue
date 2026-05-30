<template>
  <div class="case">
    <toppic :img="toppic"></toppic>

    <div class="wrapper">
      <bigtitle info="COOPERATION CASES" title="合作案例" style="text-align: center"></bigtitle>

      <div class="grids">
        <el-row :gutter="16">
          <el-col :xs="12" :sm="8" v-for="(i, k) in list" :key="k">
            <div class="card" @click="goto(`/case/${i.id}`)">
              <div class="pic">
                <img :src="i.full_thumbnail_small">
              </div>
              <div class="info">
                <div class="title">{{i.title}}</div>
                <div class="text hidden-xs-only">{{i.description}}</div>
              </div>
            </div>
          </el-col>
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
      list: []
    }
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    getData() {
      this.axios.get(this.$myapi + '/list?type=case').then(res => {
        if (res.data.success) {
          this.list = res.data.list
        }
      })
    }
  },
  mounted() {
    this.getData();
  }
}
</script>

<style lang="less" scoped>
  @maxwd: 1400px;

  .wrapper {
    max-width: @maxwd;
    margin: 0 auto;
    padding: 30px 0;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-bottom: 60px;
    padding: 16px;
    padding-top: 50px;
  }

  .grids {
    width: 100%;
    margin: 80px 0 30px 0;
  }
  .card {
    margin-top: 16px;
    width: 100%;
    cursor: pointer;
    transition: transform 0.5s;
    &:hover {
      transform: translateY(-6px);
    }
    .pic {
      width: 100%;
      padding-bottom: 70%;
      background: #B46A6B;
      position: relative;
      z-index: -1;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
      }
    }
    .info {
      width: 70%;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2), -1px -1px 5px rgba(0, 0, 0, 0.2);
      padding: 16px;
      margin: 0 auto;
      transform: translateY(-50%);
      text-align: center;
      line-height: 1.5;
      letter-spacing: 2;
      background: #fff;
      font-size: 15px;
      .title {
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 1.2;
      }
      .text {
        margin-top: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .card .info {
      padding: 8px;
      font-size: 12px;
    }
  }
</style>