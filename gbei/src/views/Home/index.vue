<template>
  <div class="home">
    <Banner />
    <Part1 />
    <Part2 />
    <Part3 />
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Banner from "./Banner";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
export default {
  components: {
    Banner,
    Part1,
    Part2,
    Part3,
  },
  mounted() {
    setTimeout(() => {
      this.gsapInit();
    }, 500);
  },
  methods: {
    gsapInit() {
      gsap.from(".home .rel", {
        scrollTrigger: {
          trigger: ".home #p3",
          toggleActions: "restart none none reset",
        },
        y: 100,
        opacity: 0,
        stagger: 0.3,
        duration: 0.8,
      });

      let slideup = gsap.utils.toArray(".home .slideup");

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
@media screen and (max-width: 575px) {
  .home {
    background: #f0f2f5;
  }
}
</style>