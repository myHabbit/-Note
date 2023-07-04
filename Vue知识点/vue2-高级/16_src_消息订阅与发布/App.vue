<template>
  <div class="msg">
    <h1>{{ msg }}</h1>
    <Scoped></Scoped>
    <Scop></Scop>
  </div>
</template>

<script>
// 引入School组件
import Scop from "./components/Scop.vue";
import Scoped from "./components/Scoped.vue";
export default {
  name: "App",
  components: {
    Scop: Scop,
    Scoped: Scoped,
  },
  data() {
    return {
      msg: "欢迎学习Vue!",
    };
  },
};
</script>

<style>
.msg {
  background-color: gray;
}
</style>