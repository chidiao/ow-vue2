<template>
  <div class="hezuo page">
    <Block :mask="0.3">
      <div class="block-title">合作伙伴</div>

      <div class="pts">
        <div class="pt" v-for="i in list" :key="i.id">
          <img :src="i.src" alt="" />
        </div>
      </div>
    </Block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          src: require("../../assets/images/pt1.png"),
        },
        {
          id: 2,
          src: require("../../assets/images/pt2.png"),
        },
        // {
        //   id: 3,
        //   src: require('../../assets/images/pt3.png'),
        // },
        {
          id: 4,
          src: require("../../assets/images/pt4.png"),
        },
        {
          id: 5,
          src: require("../../assets/images/pt5.png"),
        },
        {
          id: 6,
          src: require("../../assets/images/pt6.png"),
        },
        {
          id: 7,
          src: require("../../assets/images/pt7.png"),
        },
        {
          id: 8,
          src: require("../../assets/images/pt8.png"),
        },
        {
          id: 9,
          src: require("../../assets/images/pt9.png"),
        },
        {
          id: 10,
          src: require("../../assets/images/pt10.png"),
        },
        // {
        //   id: 11,
        //   src: require('../../assets/images/pt11.png'),
        // },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.page {
  background-image: url("../../assets/images/hzhb.jpg");
  color: #000;
}

.block-title {
  margin: 64px 0;

  @media screen and (max-width: 575px) {
    margin: 16px 0;
  }
}

.pts {
  width: 100%;
  max-width: 1200px;
  max-height: 80%;
  overflow: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .pt {
    margin: 16px;
    width: 200px;
    height: 72px;
    // background: rgba(255, 255, 255, 0.2);

    @media screen and (max-width: 575px) {
      width: 100px;
      height: 40px;
      margin: 8px 5px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>