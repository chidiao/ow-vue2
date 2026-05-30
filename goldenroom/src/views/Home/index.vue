<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section" :class="{ 'fp-auto-height': mobile }">
        <Banner />
        <!-- <HuangJinWu :active="current == 'hjw'" /> -->
      </div>
      <div class="section">
        <GuanYu />
      </div>
      <div class="section">
        <XiangMu />
      </div>
      <div class="section">
        <FaZhan />
      </div>
      <div class="section">
        <HeZuo />
      </div>
      <div class="section">
        <JiaRu @btn="$refs.fullpage.api.moveSectionDown()" />
      </div>
      <div class="section fp-auto-height">
        <Bottom />
      </div>
    </full-page>
  </div>
</template>

<script>
import Banner from "./Banner";
import GuanYu from "./GuanYu";
import XiangMu from "./XiangMu";
import FaZhan from "./FaZhan";
import HeZuo from "./HeZuo";
import JiaRu from "./JiaRu";
import Bottom from "./Bottom";
import { list, tips } from "@/assets/js/nav.js";

function isMobile() {
  return "ontouchstart" in window;
}

export default {
  components: {
    Banner,
    GuanYu,
    XiangMu,
    FaZhan,
    HeZuo,
    JiaRu,
    Bottom,
  },
  data() {
    return {
      options: {
        anchors: list,
        navigation: !isMobile(),
        navigationPosition: "right",
        navigationTooltips: tips,
        navigationColor: "pink",
        afterLoad: (origin, destination, direction) => {
          let { anchor, index } = destination;
          this.current = anchor;
          this.direction = direction;
        },
      },
      current: 0,
      direction: null,
      mobile: isMobile(),
    };
  },
};
</script>

<style lang="scss">
#fp-nav ul li a span,
.fp-slidesNav ul li a span {
  background: #6c4b24 !important;
}

#fp-nav ul li .fp-tooltip {
  color: gray;
}

.vd {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;

  @media screen and (max-width: 575px) {
    padding: 32px 0;
  }
}
</style>