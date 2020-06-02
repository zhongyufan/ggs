<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="content">
      <List></List>
      <List></List>
      <List></List>
      <List></List>
      <List></List>
      <List></List>
      <input type="text" v-model="msg" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import List from "@/components/list.vue";

export default {
  name: "Home",
  data() {
    return {
      msg: "123"
    };
  },
  components: {
    HelloWorld,
    List
  },
  beforeCreate() {
    console.log("----beforeCreate----");
    console.log("访问data：" + this.msg);
    console.log("访问挂载点：" + this.$el);
    console.log("访问根节点：" + this.$root);

    console.log(">>>>>>>>");
  },
  created() {
    console.log("----created----");
    console.log("访问data：" + this.msg);
    console.log("访问挂载点：" + this.$el);
    console.log("访问根节点：" + this.$root);

    console.log(">>>>>>>>");
  },
  beforeMount() {
    console.log("----beforeMount----");
    console.log("访问挂载点：" + this.$el);
    console.log("访问根节点：" + this.$root);
    console.log(">>>>>>>>");
  },
  mounted() {
    console.log("----mounted----");
    console.log("访问挂载点：" + this.$el);
    console.log("访问根节点：" + this.$root);
    console.log(">>>>>>>>");
  },
  beforeUpdate() {
    console.log("----beforeUpdate----");
    console.log(">>>>>>>>");
  },
  updated() {
    console.log("----updated----");
    console.log(">>>>>>>>");
  },
  beforeDestroy() {
    console.log("----beforeDestroy----");
    console.log(">>>>>>>>");
  },
  destroyed() {
    console.log("----destroyed----");
    console.log(">>>>>>>>");
  }
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
