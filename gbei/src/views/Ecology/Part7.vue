<template>
  <div class="center-container">
    <Gap :md="100" />
    <BigTitle  id="youshi" zh="京贝尔生态优势" en="GBEI Ecological advantages" />
    <Gap :md="40" />
    <a-row>
      <a-col :md="14">
        <img
          class="full slideup xs-0"
          src="/images/ecology/md/hongli.jpg"
          alt
        />
      </a-col>
      <a-col :md="10">
        <div class="bg">
          <div class="sm-title inline light left">{{ $t("ec.tt71") }}</div>
          <div class="timeline">
            <div class="time" v-for="i in $t('ec.times7')" :key="i.id">
              <div class="dot"></div>
              <div class="date">{{ i.date }}</div>
              <div class="text">{{ i.text }}</div>
            </div>
          </div>
        </div>
      </a-col>
    </a-row>

    <Gap :md="100" />
    <div class="sm-title inline left">{{ $t("ec.tt72") }}</div>
    <a-row
      id="p7"
      :gutter="[
        { xl: 32, md: 32, xs: 16 },
        { xl: 32, md: 32, xs: 16 },
      ]"
      type="flex"
    >
      <a-col :xl="8" :md="12" v-for="i in $t('ec.cards7')" :key="i.id">
        <div class="box flipy">
          <img class="full" :src="i.img" alt />
          <div class="mask">
            <div class="title">{{ i.title }}</div>
            <div class="ct">{{ i.content }}</div>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background: #f7f7f7;
  padding: 24px 40px;
}

.timeline {
  position: relative;
  &::before {
    content: "";
    height: 100%;
    width: 2px;
    background: linear-gradient(180deg, #f9deb0 0%, #f4c68a 50%, #ffffff 100%);
    position: absolute;
    top: 4px;
    left: 6px;
  }
}
@media screen and (max-width: 575px) {
  .timeline::before {
    display: none;
  }
}

.time {
  margin-top: 32px;
  margin-left: 32px;
  position: relative;

  .dot {
    content: "";
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: #ffefdc;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-200%, 4px);

    &::after {
      content: "";
      width: 9px;
      height: 9px;
      background: #f1ba78;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .date {
    font-size: 18px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: #333333;
  }
  .text {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #999999;
  }
}

.box {
  position: relative;
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.1);
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 40px;

    .title {
      font-size: 20px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: #ffffff;
      line-height: 26px;
      margin-bottom: 16px;
    }
    .ct {
      font-size: 14px;
      font-family: MicrosoftYaHei;
      color: #ffffff;
      line-height: 19px;
    }
  }
  @media screen and (max-width: 900px) {
    .mask {
      padding: 16px;
      overflow-y: auto;
    }
  }
}
#p7 {
  padding: 32px 0;
}
@media screen and (max-width: 575px) {
  #p7 {
    padding: 16px 0;
  }
  .bg {
    padding: 24px;
    background: url("/images/ecology/29.jpg");
    background-size: cover;
  }
  .light {
    color: #fff;
  }
  .time {
    .dot {
      background: rgba(255, 255, 255, 0.1);
    }
    .date {
      color: #fff;
    }
    .text {
      color: #fff;
    }
  }
}
</style>