<template>
  <div class="app">
    <div class="basics">
      <h1>我是baby</h1>
      {{loading}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: "我是loading"
    };
  }
};
</script>

<style lang="scss" scoped>
@import url("../../scss/basics.scss");
.app {
  height: 100vh;
}
</style>