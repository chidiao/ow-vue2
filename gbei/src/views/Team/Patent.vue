<template>
  <div class="full-container bg" id="p2">
    <Gap :md="100" :xs="32" />
    <div class="center-container rela">
      <a-row type="flex">
        <a-col :md="16" style="overflow-x: hidden">
          <img class="full" src="/images/ecology/24.jpg" alt />
        </a-col>
        <a-col :md="8">
          <div class="sm-title right xs-0">{{ $t("ec.tt61") }}</div>
          <div class="sm-title inline left sm-up-0" style="color: #fff">
            {{ $t("ec.tt61") }}
          </div>
        </a-col>
      </a-row>

      <img class="abso" src="/images/ecology/23.png" alt />
    </div>
    <Gap :md="100" :xs="24" />
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background: url("/images/team/md/zhuanlibg.jpg") no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
@media screen and (max-width: 575px) {
  .bg {
    background: url("/images/team/xs/zhuanlibg.jpg") no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
}
.right {
  color: #fff;
  text-align: right;
}
.rela {
  position: relative;
}
.abso {
  position: absolute;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media screen and (max-width: 575px) {
  .ant-col:nth-of-type(1) {
    order: 2;
  }
  .full {
    width: 200%;
    animation: move 24s linear infinite;
  }
}

@keyframes move {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-50%);
  }
}
</style>