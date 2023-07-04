<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <input type="text" v-fbind:value="name">
  </div>
</template>

<script>
export default {
    name:'MyMin',
    data(){
        return {
            name:'安鑫atguigu',
            address:'陕西西安',
        }
    },

}
</script>

<style>

</style>