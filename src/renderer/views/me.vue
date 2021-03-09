<template>
  <div>
    <div @click="home">Home</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Me extends Vue {
  home() {
    this.$router.push({ name: "home" });
  }
}
</script>

<style lang="scss">
</style>
