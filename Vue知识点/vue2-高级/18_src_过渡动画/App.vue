<template>
  <div>
    <Test></Test>
    <Test2></Test2>
    <Test3></Test3>
  </div>
</template>

<script>
// 引入组件
import Test from "./components/Test.vue";
import Test2 from './components/Test2.vue';
import Test3 from './components/Test3.vue'
export default {
  name: "App",
  // 注册组件
  components: {
    Test: Test,
    Test2:Test2,
    Test3:Test3
  }
  }
</script>

<style>
</style>