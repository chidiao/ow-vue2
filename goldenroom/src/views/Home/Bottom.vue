<template>
  <div class="bottom page">
    <div class="contact flex">
      <div class="block half">
        <BottomIntro :info="info" />
      </div>
      <div class="block half">
        <BottomForm />
      </div>
    </div>

    <div class="nav flex">
      <div class="block">
        <div class="links">
          <p class="link" v-for="i in nav" :key="i.id">
            <a :href="i.anchor">{{ i.text }}</a>
          </p>
        </div>
        <a href="http://www.beian.miit.gov.cn/"
          ><p class="copy">
            {{ info.icp }}
          </p></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { nav } from "@/assets/js/nav.js";
import BottomIntro from "./BottomIntro";
import BottomForm from "./BottomForm";
export default {
  components: {
    BottomIntro,
    BottomForm,
  },
  data() {
    return {
      nav: nav,
      info: {},
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      let res = await this.$http.get("/info");
      this.info = res.data.result.info;
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom {
  letter-spacing: 1px;
}

.flex {
  display: flex;
  justify-content: center;
}

.block {
  width: 100%;
  max-width: 1200px;

  &.half {
    width: 44%;
    max-width: 600px;

    @media screen and (max-width: 575px) {
      width: 100%;
    }
  }
}

.contact {
  background: #373737;
  padding: 40px 40px;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  flex-flow: row wrap;
  justify-content: space-around;

  @media screen and (max-width: 575px) {
    padding: 20px 20px;
  }
}

.nav {
  background: #000000;
  padding: 40px 40px;
  font-size: 18px;
  font-family: SourceHanSansCN-Light;

  @media screen and (max-width: 575px) {
    font-size: 12px;
    padding: 20px 20px;
  }

  .links {
    display: flex;
    max-width: 100%;
    justify-content: space-between;
    width: 700px;
  }

  .link {
    a {
      color: #ffffff;
      opacity: 1;
    }
  }

  .copy {
    color: #ffffff;
    opacity: 0.53;
  }
}
</style>