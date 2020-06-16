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
  data() {
    return {
      msg: "我是msg"
    };
  },
  components: {
    Father
  },
  beforeCreate() {
    console.log("祖先--beforeCreate");
  },
  created() {
    console.log("祖先--created");
  },
  beforeMount() {
    console.log("祖先--beforeMount");
  },
  mounted() {
    console.log("祖先--mounted");
  },
  beforeUpdate() {
    console.log("祖先--beforeUpdate");
  },
  updated() {
    console.log("祖先--updated");
  },
  beforeDestroy() {
    console.log("祖先--beforeDestroy");
  },
  destroyed() {
    console.log("祖先--destroyed");
  }
};
</script>

<style lang="scss" scoped>
@import url("../../scss/basics.scss");
.app {
  height: 100vh;
}
</style>