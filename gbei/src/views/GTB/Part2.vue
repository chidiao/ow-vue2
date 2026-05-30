<template>
  <a-row :gutter="[{md:64,xs:16}, {md:64,xs:16}]" type="flex">
    <a-col :md="12">
      <div class="block">
        <div class="q">{{$t('gtb.q1')}}</div>
        <div class="a">
          <p>{{$t('gtb.a1')}}</p>
        </div>
      </div>
    </a-col>
    <a-col :md="12">
      <div class="block">
        <img class="full slideup" src="/images/gtb/02.jpg" alt />
      </div>
    </a-col>
    <a-col :md="12">
      <div class="block">
        <img class="full slideup" src="/images/gtb/03.jpg" alt />
      </div>
    </a-col>
    <a-col :md="12">
      <div class="block">
        <div class="q">{{$t('gtb.q2')}}</div>
        <div class="a">
          <p>{{$t('gtb.a2')}}</p>
        </div>
      </div>
    </a-col>
    <a-col :md="12">
      <div class="block">
        <div class="q">{{$t('gtb.q3')}}</div>
        <div class="a">
          <p>{{$t('gtb.a3')}}</p>
        </div>
      </div>
    </a-col>
    <a-col :md="12">
      <div class="block">
        <img class="full slideup" src="/images/gtb/04.jpg" alt />
      </div>
    </a-col>
  </a-row>
</template>

<style lang="scss" scoped>
.block {
  .q {
    width: 100%;
    height: 65px;
    font-size: 20px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: #ffffff;
    display: flex;
    align-items: center;
    padding-left: 30px;
    background: linear-gradient(
      270deg,
      rgba(241, 186, 120, 0) 0%,
      #f1ba78 100%
    );
  }

  .a {
    padding: 30px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #666666;
    line-height: 50px;
    p {
      margin-bottom: 0.3em;
    }
  }
}

@media screen and (max-width: 575px) {
  .block {
    .q {
      height: 50px;
      font-size: 16px;
      padding-left: 15px;
      letter-spacing: 1px;
      margin-top: 24px;
    }

    .a {
      padding: 15px;
      letter-spacing: 1px;
      line-height: 32px;
    }
  }

  .ant-col:nth-of-type(3) {
    order: 4;
  }
  .ant-col:nth-of-type(4) {
    order: 3;
  }
  .ant-col:nth-of-type(5) {
    order: 5;
  }
  .ant-col:nth-of-type(6) {
    order: 6;
  }
}
</style>