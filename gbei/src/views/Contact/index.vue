<template>
  <div class="contact">
    <Gap :md="32" :xs="16" />

    <div class="center-container">
      <div style="max-width:700px">
        <Map />
      </div>
    </div>
    <Gap :md="32" :xs="16" />
  </div>
</template>

<script>
import Map from "./Map";
export default {
  components: {
    Map,
  },
};
</script>