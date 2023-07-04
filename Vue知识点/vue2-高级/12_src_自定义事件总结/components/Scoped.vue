<template>
  <div class="scop">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button v-on:click="sendSchoolName">把学校名给App</button>
  </div>
</template>
<script>
export default {
    name:'MyScoped',
    props:['getSchoolName'],
    data(){
        return {
            name:'尚硅谷',
            address:'陕西西安',
            x:666,
            y:888
        }
    },
    methods:{
      sendSchoolName(){
        this.getSchoolName(this.name,this.x,this.y)
      }
    }
   


}
</script>


<style scoped>
.scop{
  background-color: orange;
  padding: 5px;
  margin-top: 30px;
}

</style>