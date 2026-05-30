<template>
  <div id="map"></div>
</template>

<script>
export default {
  mounted() {
    this.mapInit();
  },
  methods: {
    mapInit() {
      let map = new AMap.Map("map", {
        zoom: 15,
        center: [120.39942200000002, 36.06355333640582],
        viewMode: "3D",
      });

      let content = [
        "电话 : 0532-81116767",
        "地址 : 山东省青岛市市南区燕儿岛路10号 凯悦中心写字楼6楼",
      ];

      // 创建 infoWindow 实例
      let infoWindow = new AMap.InfoWindow({
        content: content.join("<br>"),
      });

      infoWindow.open(map, [120.39942200000002, 36.06355333640582]);
    },
  },
};
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 50vh;
}
</style>