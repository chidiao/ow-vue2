<template>
  <div class="gtb">
    <div class="ban"></div>

    <div class="center-container">
      <Gap :md="64" :sm="32" :xs="16" />
      <BigTitle id="jianjie" zh="GTB简介" en="GTB profile" />
      <Part1 />
      <Gap :md="64" :sm="32" :xs="16" />

      <div id="dayi" class="sm-title">{{ $t("gtb.tt1") }}</div>
      <Gap :md="64" :sm="32" :xs="0" />
      <Part2 />
      <Gap :md="64" :sm="32" :xs="16" />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Part1 from "./Part1";
import Part2 from "./Part2";
export default {
  components: {
    Part1,
    Part2,
  },
  mounted() {
    setTimeout(() => {
      this.gsapInit();
    }, 100);
  },
  methods: {
    gsapInit() {
      gsap.from(".gtb .flipy", {
        scrollTrigger: {
          trigger: ".gtb .p1",
          toggleActions: "restart none none reset",
          start: "top bottom",
        },
        stagger: 0.3,
        duration: 1,
        rotationY: 90,
      });

      let slideup = gsap.utils.toArray(".gtb .slideup");

      slideup.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            toggleActions: "restart none none reset",
          },
          opacity: 0,
          y: 100,
          scale: 0.9,
          duration: 1,
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.ban {
  width: 100%;
  padding-top: 28.93%;
  background-size: cover;
  @media screen {
    @media (min-width: 992px) {
      background-image: url("/images/gtb/lg/ban.jpg");
    }
    @media (min-width: 576px) and (max-width: 991px) {
      background-image: url("/images/gtb/md/ban.jpg");
    }
    @media (max-width: 575px) {
      background-image: url("/images/gtb/xs/ban.jpg");
    }
  }
}
</style>