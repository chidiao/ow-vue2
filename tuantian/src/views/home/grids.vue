<template>
  <div class="grids">
    <el-col :xs="12" :sm="8" v-for="(i, index) in grids" :key="index" :class="{ hide: (hide && index == 0) }">
      <div class="box">
        <img :src="i.full_thumbnail_small">
        <div class="mask">
          <h3>{{i.title}}</h3>
          <div class="content hidden-xs-only">
            {{i.description}}
          </div>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grids: [],
      hide: false
    }
  },
  methods: {
    getData() {
      this.axios.get(this.$myapi + '/list?type=index').then(res => {
        if (res.data.success) {
          this.grids = res.data.list
          this.hide = (res.data.list.length % 2) != 0
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
  @maxwd: 1600px;

  .grids {
    margin: 0 auto;
    display: flex;
    max-width: @maxwd;
    flex-flow: row wrap;
    justify-content: flex-start;
    .box {
      width: 100%;
      border-top: 1px solid #fff;
      border-left: 1px solid #fff;
      padding-bottom: 100%;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      &:hover {
        .mask {
          top: 0;
        }
      }
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
      }
      .mask {
        position: absolute;
        z-index: 9;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        color: #fff;
        top: 100%;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        flex-flow: column;
        justify-content: flex-end;
        transition: all 0.5s;
        padding: 30px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .grids {
      .box {
        border-right: 1px solid #fff;
      }
    }
    .hide {
      display: none;
    }
  }
</style>