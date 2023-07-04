<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button v-on:click="sendStudentName">把学生名给学校组件</button>
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
    mounted() {
      // console.log('学生',this.x)
    },
    methods:{
      sendStudentName(){
        this.$bus.$emit('hello',this.name)
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