<template>
  <div class="scop">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <h2>{{ StudentName }}</h2>
  </div>
</template>
<script>
export default {
    name:'MyScoped',
    props:['getSchoolName'],
    data(){
        return {
            name:'安鑫',
            address:'陕西西安',
            StudentName:''
        }
    },
    mounted() {
      // console.log('学校',this)
      this.$bus.$on('hello',(data)=>{
        console.log('我是学校 我收到了',data);
        this.StudentName =data
        console.log(this.StudentName);
      })
    },
    // 在组件销毁之前 将hello这个自定义事件销毁
    beforeDestroy(){
      this.$bus.$off('hello')
    },
 

}
</script>


<style scoped>
.scop{
  background-color: orange;
  padding: 5px;
  margin-top: 30px;
}

</style>