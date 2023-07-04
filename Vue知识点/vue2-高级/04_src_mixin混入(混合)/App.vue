<template>
  <div>
    <Mix/>
    <hr>
    <Min/>
  </div>
</template>

<script>
// 引入School组件
import Mix from './components/Mix.vue'
import Min from './components/Min.vue'
    export default {
        name:'App',
        components:{
            Mix:Mix,
            Min:Min
        },
        data(){
        return {
            msg:'欢迎学习Vue!'
        }
        },

       
}
</script>

<style>

</style>