<template>
  <div>
    <div @click="me">Me</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Nova extends Vue {
  me() {
    this.$router.push({
      name: "me",
    });
  }
}
</script>

<style lang="scss">
</style>
