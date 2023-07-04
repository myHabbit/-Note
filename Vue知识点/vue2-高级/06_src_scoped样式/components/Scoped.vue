<template>
  <div class="scop">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
    name:'MyScoped',
    data(){
        return {
            name:'安鑫atguigu',
            address:'陕西西安',
        }
    },

}
</script>


<style scoped>
.scop{
  background-color: orange;
}

</style>