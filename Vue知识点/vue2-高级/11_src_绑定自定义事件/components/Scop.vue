<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button v-on:click="sendStudentName">点我把学生名给App</button>
  </div>
</template>

<script>
export default {
    name:'MyScop',  
    data(){
        return {
            name:'李四',
            sex:'男',
        }
    }, 
    methods:{
      sendStudentName(){
        // 触发Scop的组件实例身上的atguigu事件
        this.$emit('atguigu',this.name)
      }
    }
}
</script>

<style lang="css" scoped>     
.demo{
  background-color: skyblue;
  padding: 5px;
  margin-top: 30px;
}

</style>