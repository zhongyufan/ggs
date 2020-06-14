<template>
  <div class="app">
    <div class="basics">
      <h1>我是儿子/父亲</h1>
      <son v-bind="$attrs" v-on="$listeners"></son>
    </div>
  </div>
</template>

<script>
import Son from "@/components/communication/son";
export default {
  components: {
    Son
  }
};
</script>

<style lang="scss" scoped>
@import url("../../scss/basics.scss");
.app {
  height: 100vh;
}
</style>