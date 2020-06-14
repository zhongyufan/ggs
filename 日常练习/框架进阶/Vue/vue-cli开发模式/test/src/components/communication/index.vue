<template>
  <div class="app">
    <div class="basics">
      <h1>我是祖先</h1>
      <father v-bind="$attrs" v-on="$listeners"></father>
    </div>
  </div>
</template>

<script>
import Father from "@/components/communication/father";
export default {
  components: {
    Father
  }
};
</script>

<style lang="scss" scoped>
@import url("../../scss/basics.scss");
.app {
  height: 100vh;
}
</style>