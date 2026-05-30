<template>
  <div class="partner">
    <div class="title">
      合作伙伴
    </div>
    <scroll :data="list" :class-option="option" class="scwrapper hidden-xs-only">
      <ul class="item">
        <li v-for="(i, k) in list" :key="k">
          <img :src="i.full_link_pic" class="pic">
        </li>
      </ul>
    </scroll>
    <div class="phone hidden-sm-and-up">
      <img v-for="(i, k) in list" :key="k" :src="i.full_link_pic" class="phone-pic">
    </div>
  </div>
</template>

<script>
import scroll from 'vue-seamless-scroll'
export default {
  components: {
    scroll
  },
  data() {
    return {
      list: [],
      option: {
        limitMoveNum: 3,
        direction: 2
      }
    }
  },
  methods: {
    getData() {
      this.axios.get(this.$myapi + '/link').then(res => {
        if (res.data.success) {
          this.list = res.data.link
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

  .partner {
    background: #F5F6FA;
    padding: 80px;
  }

  .title {
    text-align: center;
    font-size: 30px;
    margin-bottom: 50px;
  }

  .list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }

  .pic {
    width: 200px;
    height: 90px;
    object-fit: cover;
    margin-top: 20px;
    margin-left: 20px;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }

  .phone {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
  .phone-pic {
    margin-top: 20px;
    width: 100px;
    height: 40px;
    padding: 0;
    object-fit: cover;
  }
  
  @media screen and (max-width: 767px) {
    .partner {
      padding: 40px 20px;
    }
    .list {
      width: 100%;
    }
  }

  .scwrapper {
    width: 100%;
    overflow: hidden;
    .item {
      height: 130px;
      display: flex;
      flex-flow: wrap nowrap;
      width: 100%;
      overflow: hidden;
      li {
        text-decoration: none;
        display: inline-block;
        margin-left: 20px;

        .pic {
          width: 200px;
          height: 90px;
          object-fit: cover;
          margin-top: 20px;
          margin-left: 20px;
          transition: all 0.3s;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }
</style>