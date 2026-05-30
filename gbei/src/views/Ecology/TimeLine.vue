<template>
  <div class="full-container bg">
    <div class="center-container">
      <div class="timeline">
        <a-row :gutter="[{md:48,xs:48},{md:48,xs:24}]" type="flex">
          <a-col :md="6" :xs="24" v-for="i in $t('ec.timeline')" :key="i.id">
            <div class="time">
              <div class="dot xs-0"></div>
              <div class="date">{{i.date}}</div>
              <div class="title">{{i.title}}</div>
              <div class="dot sm-up-0"></div>
              <div class="ct">{{i.text}}</div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background: #1e1e1e;
  margin-bottom: 36px;
  padding: 36px 0;
}
.time {
  color: #fff;
  position: relative;
  font-size: 12px;
  .date,
  .title {
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
  }
  .title {
    margin-bottom: 8px;
  }
  .dot {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #4b4033;
    margin: 16px auto;
    position: relative;
    z-index: 99;
    &::after {
      content: "";
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #f1ba78;
      position: absolute;
      z-index: 97;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

.timeline {
  position: relative;
  &::before {
    width: 88%;
    height: 3px;
    content: "";
    position: absolute;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.1)
    );
    left: 50%;
    top: 47px;
    transform: translateX(-50%);
  }
}

@media screen and (max-width: 575px) {
  .time {
    padding-left: 32px;
    .date,
    .title {
      text-align: left;
    }
    .dot {
      margin: 0;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .timeline {
    position: relative;
    &::before {
      width: 3px;
      height: 88%;
      content: "";
      position: absolute;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.7),
        rgba(255, 255, 255, 0.1)
      );
      left: 7px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>