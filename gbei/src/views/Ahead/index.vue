<template>
  <div class="ahead">
    <img class="full" :src="$t('ou.img1')" alt />

    <div class="center-container">
      <a-row :gutter="[{md:64,xs:16},{md:64,xs:16}]">
        <a-col :md="10" :xs="0">
          <img class="full" src="/images/ahead/02.jpg" style="margin-top: -16%" />
        </a-col>
        <a-col class="bg" :md="14" :xs="24">
          <div class="gap">
            <div class="sm-title inline left xs-0">{{$t('ou.tt1')}}</div>
            <div class="sm-title inline left sm-up-0" style="color: #fff">{{$t('ou.tt1')}}</div>
            <div class="timeline">
              <div
                class="time"
                v-for="i in $t(times)"
                :key="i.id"
                @mouseover="active=i.id"
                @mouseout="active=0"
              >
                <div class="dot"></div>
                <div
                  class="date animate__animated"
                  :class="{'animate__pulse': active==i.id}"
                >{{i.date}}</div>
                <div
                  class="text animate__animated"
                  :class="{'animate__pulse': active==i.id}"
                >{{i.text}}</div>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>

      <Gap :md="64" :xs="32" />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  data() {
    return {
      active: 0,
      times: "ou.times",
    };
  },
  mounted() {
    gsap.from(".ahead .time", {
      scrollTrigger: {
        trigger: ".ahead .timeline",
        toggleActions: "restart none none reset",
      },
      stagger: 0.2,
      opacity: 0,
      y: 100,
    });
  },
};
</script>

<style lang="scss" scoped>
.center-container {
  overflow: visible;
  padding: 0 24px;
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

.time {
  margin-top: 32px;
  margin-left: 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    .dot::after {
      width: 17px;
      height: 17px;
    }
  }

  .dot {
    content: "";
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: #ffefdc;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s;
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
      transition: all 0.3s;
      transform: translate(-50%, -50%);
    }
  }
  .date {
    font-size: 18px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: #333333;
    transition: all 0.3s;
  }
  .text {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #999999;
    transition: all 0.3s;
  }
}

@media screen and (max-width: 575px) {
  .bg {
    margin-top: 24px;
    background: url("/images/ahead/03.jpg") no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
  .timeline {
    position: relative;
    &::before {
      content: "";
      height: 100%;
      width: 2px;
      background: linear-gradient(
        180deg,
        #f9deb0 0%,
        #f4c68a 50%,
        #887c6b 100%
      );
      position: absolute;
      top: 4px;
      left: 6px;
    }
  }
  .time {
    .date {
      color: #fff;
    }
    .text {
      color: #fff;
    }
  }
  .gap {
    padding: 16px;
  }
}
</style>