<template>
  <router-view
    style="
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      overflow: auto;
    "
  />
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Nova extends Vue {
  mounted() {
    (document.querySelector(".splash")! as HTMLElement).remove();

    // (document.querySelector(".splash")! as HTMLElement).style.display = "none";
  }
}
</script>

<style lang="scss">
</style>
