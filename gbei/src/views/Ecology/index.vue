<template>
  <div class="ecology">
    <div class="ban"></div>
    <Part1 />
    <TimeLine />
    <Part2 />
    <Part5 />
    <Part7 />
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Part1 from "./Part1";
import TimeLine from "./TimeLine";
import Part2 from "./Part2";
import Part5 from "./Part5";
import Part7 from "./Part7";
export default {
  components: {
    Part1,
    TimeLine,
    Part2,
    Part5,
    Part7,
  },
  mounted() {
    setTimeout(() => {
      this.gsapInit();
    }, 300);
  },
  methods: {
    gsapInit() {
      let slideup = gsap.utils.toArray(".ecology .slideup");

      slideup.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            toggleActions: "restart none none reset",
          },
          opacity: 0,
          y: 100,
          duration: 1,
        });
      });

      // p2
      gsap.from("#gsap-e2 .mask", {
        scrollTrigger: {
          trigger: "#gsap-e2",
          toggleActions: "restart none none reset",
          start: "top bottom",
        },
        stagger: 0.5,
        duration: 2,
        opacity: 0,
      });

      // p7
      gsap.from(".ecology #p7 .flipy", {
        scrollTrigger: {
          trigger: ".ecology #p7",
          toggleActions: "restart none none reset",
          start: "top bottom",
        },
        stagger: 0.3,
        duration: 1,
        rotationY: 90,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.ban {
  width: 100%;
  padding-top: 28.86%;
  background-size: cover;
}
@media screen and (min-width: 992px) {
  .ban {
    background-image: url("/images/ecology/lg/ban.jpg");
  }
}
@media screen and (min-width: 576px) and (max-width: 991px) {
  .ban {
    background-image: url("/images/ecology/md/ban.jpg");
  }
}
@media screen and (max-width: 575px) {
  .ban {
    background-image: url("/images/ecology/xs/ban.jpg");
  }
}
</style>