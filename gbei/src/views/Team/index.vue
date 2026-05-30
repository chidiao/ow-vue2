<template>
  <div class="team">
    <div class="ban"></div>

    <Leader />

    <Patent />
  </div>
</template>

<script>
import Leader from "./Leader";
import Patent from "./Patent";
export default {
  components: {
    Leader,
    Patent,
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
    background-image: url("/images/team/lg/ban.jpg");
  }
}
@media screen and (min-width: 576px) and (max-width: 991px) {
  .ban {
    background-image: url("/images/team/md/ban.jpg");
  }
}
@media screen and (max-width: 575px) {
  .ban {
    background-image: url("/images/team/xs/ban.jpg");
  }
}
</style>