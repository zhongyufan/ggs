<template>
  <div class="app">
    <div class="basics">
      <h1>我是儿子/孙子</h1>
      {{$attrs.loading}}
      <button @click="change">点我获取baby</button>
      <baby class="baby" ref="top"></baby>
      <baby class="baby"></baby>
    </div>
  </div>
</template>

<script>
import Baby from "@/components/communication/baby";

export default {
  mounted() {
    console.log("mounted了");
    // this.change();
  },
  beforeUpdate() {
    console.log("数据更新前");
    this.change();
    // this.$refs.top.loading = this.$attrs.loading;
  },
  data() {
    return {
      msg: this.$attrs.loading
    };
  },
  methods: {
    change(event) {
      this.$refs.top.loading = this.$attrs.loading;
      this.$emit("talk");
      console.log(event);
    }
  },
  components: {
    Baby
  }
};
</script>

<style lang="scss" scoped>
@import url("../../scss/basics.scss");
.app {
  height: 100vh;
  .baby {
    height: 300px;
  }
}
</style>