<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2 class="atguigu">学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
export default {
    name:'MyScop',  
    data(){
        return {
            name:'我是一个尚硅谷的学生',
            sex:'男',
        }
    },
}
</script>

<style lang="css" scoped>     
.demo{
  background-color: skyblue;
}
</style>