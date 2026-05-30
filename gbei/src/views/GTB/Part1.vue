<template>
  <a-row :gutter="[{md:64,sm:32,xs:16},{md:64,sm:32,xs:16}]" type="flex" align="top" class="row">
    <a-col :xs="24" :sm="24" :md="8" v-for="i in cards" :key="i.id">
      <div class="box flipy">
        <img class="full" :src="i.img" alt />
        <div class="ct">{{$t(i.text)}}</div>
      </div>
    </a-col>
    <a-col :xs="24" :sm="24" :md="16">
      <div class="box flipy">
        <img class="full" src="/images/gtb/09.jpg" alt />
        <div class="ct">{{$t('gtb.cd5')}}</div>
      </div>
    </a-col>
  </a-row>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          text: "gtb.cd1",
          img: "/images/gtb/05.jpg",
        },
        {
          id: 2,
          text: "gtb.cd2",
          img: "/images/gtb/06.jpg",
        },
        {
          id: 3,
          text: "gtb.cd3",
          img: "/images/gtb/07.jpg",
        },
        {
          id: 4,
          text: "gtb.cd4",
          img: "/images/gtb/08.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  padding: 0 24px;
}

.full {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

@media screen and (max-width: 575px) {
  .row {
    padding: 0 8px;
  }
}

.box {
  height: 240px;
  position: relative;
  box-shadow: 0px 2px 39px 0px rgba(0, 0, 0, 0.1);

  .ct {
    font-size: 16px;
    font-family: MicrosoftYaHei;
    height: 100%;
    overflow: auto;
    color: #fff;
    line-height: 32px;
    padding: 24px;
    position: relative;

    &::before {
      position: absolute;
      content: "";
      width: 5px;
      height: 16px;
      background: #f1ba78;
      left: -12px;
      top: 8px;
    }
  }
}

@media screen and (max-width: 575px) {
  .box {
    min-height: auto;

    .ct {
      font-size: 14px;
      line-height: 30px;
      letter-spacing: 1px;
      height: auto;

      &::before {
        top: 6px;
      }
    }
  }
}
</style>