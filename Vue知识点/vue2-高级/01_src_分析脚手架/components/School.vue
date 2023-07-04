<template>
  <!-- 组建的结构 -->
    <div class="demo">
      <h2>学校名称: {{ name }}</h2>
      <h2>学校地址: {{ address }}</h2>
      <button v-on:click="showName">点我提示学校名称</button>
    </div>
</template>



<!-- <script>
//组件交互相关代码（数据 方法等）

    // const Schllo = Vue.extend({
    //   name:'School',
    //   data() {
    //     return {
    //       name: "安鑫",
    //       address: "陕西西安",
    //     }
    //   },
    //   methods: {
    //     showName() {
    //       alert(this.name);
    //     }
    //   }
    // })
    // 默认暴露
    // export default schllo
</script> -->

<script>
//组件交互相关代码（数据 方法等）

    export default{
      name:'MySchool',
      data() {
        return {
          name: "安鑫",
          address: "陕西西安",
        }
      },
      methods: {
        showName() {
          alert(this.name);
        }
      },
    
    }
    // 默认暴露
</script>


<style>
/* 组件的样式 */
  .demo {
    background-color: orange;
  }
</style>

