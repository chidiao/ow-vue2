<template>
  <div class="team">
    <div class="topbg">
      <img class="img" src="@/assets/images/sz/top2.png" alt="">
    </div>

    <div class="shaixuan">
      <xtitle>“7”层筛选</xtitle>
      <div data-aos="zoom-in" class="box">
        <div class="icon">
          <div class="text top">简历筛选</div>
          <img src="@/assets/images/sz/sx1.png" />
        </div>
        <div class="icon">
          <div class="text left">教师评定</div>
          <img src="@/assets/images/sz/sx2.png" />
        </div>
        <div class="icon">
          <div class="text right">电话面试</div>
          <img src="@/assets/images/sz/sx3.png" />
        </div>
        <div class="icon">
          <div class="text left">淘汰机制</div>
          <img src="@/assets/images/sz/sx4.png" />
        </div>
        <div class="icon">
          <div class="text right">授课培训</div>
          <img src="@/assets/images/sz/sx5.png" />
        </div>
        <div class="icon">
          <div class="text left">综合评测</div>
          <img src="@/assets/images/sz/sx6.png" />
        </div>
        <div class="icon">
          <div class="text right">首次试讲</div>
          <img src="@/assets/images/sz/sx7.png" />
        </div>
        <div class="icon">
          <img src="@/assets/images/sz/teacher.png" />
        </div>
        <img class="inner" src="@/assets/images/sz/72.png" />
      </div>
    </div>

    <div class="zeyou">
      <div class="title-ct">
        <xtitle color="#fff">“5”面择优</xtitle>
      </div>
      <div class="cb">
        <div class="row">
          <div data-aos="fade-up" class="mian">
            <img src="@/assets/images/sz/51.png" />
          </div>
          <div data-aos="fade-up" class="mian" style="margin: 0 10%">
            <img src="@/assets/images/sz/52.png" />
          </div>
          <div data-aos="fade-up" class="mian">
            <img src="@/assets/images/sz/53.png" />
          </div>
        </div>
        <div class="row">
          <div data-aos="fade-up" class="mian" style="width: 16%;margin: 0 7%">
            <img src="@/assets/images/sz/54.png" />
          </div>
          <div data-aos="fade-up" class="mian" style="width: 16%;margin: 0 7%">
            <img src="@/assets/images/sz/55.png" />
          </div>
        </div>
      </div>
    </div>

    <div class="title-ct">
      <xtitle>“4 to 1”教研体系</xtitle>
    </div>
    <div class="cb cards">
      <img data-aos="fade-right" class="card card1" src="@/assets/images/sz/no1.png" />
      <div>
        <img data-aos="fade-down" class="card card2" src="@/assets/images/sz/no2.png" />
        <div class="flex">
          <img data-aos="fade-up" class="card card3" src="@/assets/images/sz/no3.png" />
          <img data-aos="fade-left" class="card card4" src="@/assets/images/sz/no4.png" />
        </div>
      </div>
    </div>
    <div class="blank" style="height: 40px"></div>
  </div>
</template>

<style lang="scss" scoped>
.topbg {
  width: 100vw;
  height: 38vw;
  background: url('../assets/images/sz/top1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.shaixuan {
  position: relative;
  background: url("../assets/images/sz/70.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 1000px;
  .box {
    margin-bottom: 100px;
    width: 500px;
    height: 500px;
    position: relative;
    background: url("../assets/images/sz/71.png");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    width: 80px;
    position: absolute;
    .text {
      width: 100%;
      text-align: center;
      font-size: 18px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 26px;
      letter-spacing: 1px;
    }
    img {
      width: 100%;
    }
    &:nth-of-type(1) {
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &:nth-of-type(2) {
      top: 18%;
      left: 14%;
      transform: translate(-50%, -50%);
    }
    &:nth-of-type(3) {
      top: 18%;
      right: 14%;
      transform: translate(50%, -50%);
    }
    &:nth-of-type(4) {
      top: 60%;
      left: 4%;
      transform: translate(-50%, -50%);
    }
    &:nth-of-type(5) {
      top: 60%;
      right: 4%;
      transform: translate(50%, -50%);
    }
    &:nth-of-type(6) {
      bottom: 7%;
      left: 29%;
      transform: translate(-50%, 50%);
    }
    &:nth-of-type(7) {
      bottom: 7%;
      right: 29%;
      transform: translate(50%, 50%);
    }
    &:nth-of-type(8) {
      width: 200px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .inner {
    width: 350px;
  }
}
.zeyou {
  position: relative;
  overflow: hidden;
  background: url("../assets/images/sz/50.png");
  background-size: cover;
  height: 800px;
  .cb {
    position: absolute;
    top: 60%;
    left: 50%;
    padding: 30px;
    transform: translateX(-50%) translateY(-50%);
  }
  .row {
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
  }
  .mian {
    width: 20%;
    position: relative;
    img {
      width: 100%;
    }
    &::after {
      content: "";
      width: 2px;
      height: 1000px;
      background: #fff;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) translateY(100%);
    }
  }
}
.cards {
  display: flex;
  flex-flow: row wrap;
  .card1 {
    width: 450px;
    height: 600px;
  }
  .card2 {
    width: 750px;
    height: 300px;
  }
  .card3,
  .card4 {
    width: 375px;
    height: 300px;
  }
}
.title-ct {
  padding: 60px 0;
}
@media screen and (max-width: 575px) {
  .topbg {
    background-size: cover;
    background-attachment: local;
  }
  .shaixuan {
    height: 600px;
    .box {
      width: 300px;
      height: 300px;
      .icon {
        width: 60px;
        .text {
          font-size: 14px;
        }
        &:nth-of-type(8) {
          width: 100px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .inner {
        width: 200px;
      }
    }
  }
  .zeyou {
    height: 210px;
  }
  .cards {
    .card1 {
      width: 100vw;
      height: 133.33vw;
    }
    .card2 {
      width: 100%;
      height: auto;
    }
    .card3,
    .card4 {
      width: 50%;
      height: auto;
    }
  }
  .title-ct {
    padding: 10px 0;
  }
}
</style>