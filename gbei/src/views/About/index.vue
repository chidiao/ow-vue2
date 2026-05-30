<template>
  <div class="about">
    <div class="ban"></div>

    <Company />

    <Partner />

    <Outlook />
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Company from "./Company";
import Outlook from "./Outlook";
import Partner from "./Partner";
export default {
  components: {
    Company,
    Partner,
    Outlook,
  },
  mounted() {
    setTimeout(() => {
      this.gsapInit();
    }, 300);
  },
  methods: {
    gsapInit() {
      let slideup = gsap.utils.toArray(".about .slideup");

      // slideup
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

      // outlook
      gsap.from(".outlook .time", {
        scrollTrigger: {
          trigger: ".outlook .timeline",
          toggleActions: "restart none none reset",
        },
        stagger: 0.2,
        opacity: 0,
        y: 100,
      });

      // partner
      gsap.from("#gsap-e8 .flipy", {
        scrollTrigger: {
          trigger: "#gsap-e8",
          toggleActions: "restart none none reset",
          start: "top bottom",
        },
        stagger: 0.3,
        duration: 1,
        scale: 0.1,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.ban {
  width: 100%;
  padding-top: 37.03%;
  background-size: cover;
}
@media screen and (min-width: 992px) {
  .ban {
    background-image: url("/images/about/lg/ban.jpg");
  }
}
@media screen and (min-width: 576px) and (max-width: 991px) {
  .ban {
    background-image: url("/images/about/md/ban.jpg");
  }
}
@media screen and (max-width: 575px) {
  .ban {
    background-image: url("/images/about/xs/ban.jpg");
  }
}
</style>