<template>
  <div class="center-container">
    <a-row id="gsap-e2" :gutter="[16,16]">
      <a-col :md="12">
        <div class="box">
          <img class="full" src="/images/ecology/04.jpg" alt />
          <div class="mask justify-end">
            <div class="title">{{$t('ec.tt21')}}</div>
            <div class="ct">
              <p>{{$t('ec.ct21')}}</p>
            </div>
          </div>
        </div>
      </a-col>
      <a-col :md="12">
        <a-row :gutter="[16,16]">
          <a-col :md="24">
            <div class="box">
              <img class="full" src="/images/ecology/05.jpg" alt />
              <div class="mask justify-center">
                <div class="title">{{$t('ec.tt22')}}</div>
                <div class="ct">{{$t('ec.ct22')}}</div>
              </div>
            </div>
          </a-col>
          <a-col :md="12">
            <div class="box">
              <img class="full" src="/images/ecology/06.jpg" alt />
              <div class="mask">
                <div class="title">{{$t('ec.tt23')}}</div>
                <div
                  class="ct"
                >{{$t('ec.ct23')}}</div>
              </div>
            </div>
          </a-col>
          <a-col :md="12">
            <div class="box">
              <img class="full" src="/images/ecology/07.jpg" alt />
              <div class="mask">
                <div class="title">{{$t('ec.tt24')}}</div>
                <div class="ct">{{$t('ec.ct24')}}</div>
              </div>
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>

    <img class="full xs-0" :src="$t('ec.img21')" alt />
  </div>
</template>

<style lang="scss" scoped>
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
    padding: 32px;
    overflow: auto;

    .title {
      font-size: 32px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: #ffffff;
      line-height: 42px;
      margin-bottom: 16px;
    }
    .ct {
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: #ffffff;
      line-height: 24px;
    }

    @media screen and (max-width: 575px) {
      .title {
        font-size: 24px;
      }
    }
  }
}
</style>