<template>
  <div>
    <xtitle>校园环境</xtitle>
    <huanjing :title="false"></huanjing>
  </div>
</template>

<script>
import huanjing from "@/components/home/home-huanjing";
export default {
  components: {
    huanjing
  }
};
</script>