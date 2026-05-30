<template>
  <div class="history">
    <toppic :img="toppic"></toppic>

    <div class="wrapper">
      <bigtitle info="GO FORWARD WITH HONOR" title="载誉前行  同心齐耀" style="text-align: center"></bigtitle>
      <p style="color:#00204B;font-size:13px">创建一流企业，造就一流人才，做出一流贡献</p>

      <div class="timeline">
        <div class="line"></div>
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="#0087D7" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="arrow css-i6dzq1"><polyline points="18 15 12 9 6 15"></polyline></svg>
        <div class="time animated" :id="'time'+k" v-for="(i, k) in line" :key="k">
          <div class="left" v-if="k % 2 == 0">
            <div class="box year">
              {{i.time}}>
            </div>
          </div>
          <div class="right" v-if="k % 2 == 0">
            <div class="box text">
              {{i.progress}}
            </div>
          </div>
          <div class="left" v-if="k % 2 != 0">
            <div class="box text">
              {{i.progress}}
            </div>
          </div>
          <div class="right" v-if="k % 2 != 0">
            <div class="box year">
              <{{i.time}}
            </div>
          </div>
        </div>
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
      line: []
    }
  },
  methods: {
    getData() {
      this.axios.get(this.$myapi + '/progress').then(res => {
        if (res.data.success) {
          this.line = res.data.progress
        }
      })
    },
    scrollHandle () {
      for (let i = 0; i < this.line.length; i++) {
        let elm = document.getElementById('time' + i)
        let offset = elm.getBoundingClientRect();
        let offsetTop = offset.top;
        let offsetBottom = offset.bottom;
        let offsetHeight = offset.height;
        if (offsetTop <= window.innerHeight && offsetBottom >= 0) {
          elm.classList.add('show')
        } else {
          elm.classList.remove('show')
        }
      }
    }
  },
  mounted() {
    this.getData();
    window.addEventListener('scroll', this.scrollHandle);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandle);
  }
}
</script>

<style lang="less" scoped>
  @maxwd: 1600px;

  .wrapper {
    max-width: @maxwd;
    margin: 0 auto;
    padding: 30px 0;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-bottom: 60px;
  }

  .timeline {
    margin-top: 30px;
    position: relative;
    .line {
      width: 4px;
      height: 100%;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background: #0087D7;
      position: absolute;
    }

    .time {
      width: 100%;
      display: flex;
      visibility: hidden;
      justify-content: space-between;

      &.show {
        visibility: inherit;
        animation-name: slideInUp;
      }

      .left,
      .right {
        padding: 25px 40px;
      }
      .left {
        padding-left: 0;
      }
      .right {
        padding-right: 0;
      }

      .left .year {
        text-align: right;
      }

      .left .year::after {
        content: '';
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #0087D7;
        position: absolute;
        top: 20px;
        right: -56px;
      }
      .right .year::before {
        content: '';
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #0087D7;
        position: absolute;
        top: 20px;
        left: -56px;
      }
      .left .text::after {
        content: '';
        width: 10px;
        height: 10px;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        border-right: 1px solid rgba(0, 0, 0, 0.2);
        position: absolute;
        transform: rotate(45deg);
        right: -6px;
        top: 30px;
        background: #fff;
      }
      .right .text::before {
        content: '';
        width: 10px;
        height: 10px;
        border-left: 1px solid rgba(0, 0, 0, 0.2);
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        position: absolute;
        transform: rotate(-45deg);
        left: -6px;
        top: 30px;
        background: #fff;
      }

      .box {
        width: 400px;
        min-height: 100px;
        border-radius: 5px;
        color: #686868;
        border: 1px solid rgba(0, 0, 0, 0.2);
        padding: 10px 20px;
        letter-spacing: 2px;
        line-height: 1.5;
        position: relative;
      }

      .year {
        color: #09468C;
        letter-spacing: 0;
        border: none;
        font-weight: bold;
        padding-top: 22px;
      }
    }
  }

  .arrow {
    position: absolute;
    width: 50px;
    height: 50px;
    top: -27px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 1100px) {
    .timeline .time .box {
      width: 200px;
      font-size: 14px;
      padding: 10px;
      &.year {
        padding-top: 24px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .timeline .time .box {
      width: 110px;
      font-size: 12px;
      padding: 10px;
      &.year {
        padding-top: 26px;
      }
    }
  }

  @media screen and (max-width: 333px) {
    .timeline .time .box {
      width: 80px;
      font-size: 12px;
      padding: 10px;
      &.year {
        padding-top: 30px;
      }
    }
  }
</style>