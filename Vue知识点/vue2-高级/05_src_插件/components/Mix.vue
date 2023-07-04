<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button v-on:click="test">点我测试一下hello方法</button>
  </div>
</template>

<script>
// 引入一个hunhunhehe
export default {
    name:'MyMix',
    data(){
        return {
            name:'我是一个尚硅谷的学生',
            sex:'男',
        }
    },
    methods:{
      test(){
        this.hello()
      }
    }
}
</script>

<style>

</style>