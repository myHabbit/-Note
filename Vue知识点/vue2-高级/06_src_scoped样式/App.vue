<template>
  <div>
    <Scop/>
    <Scoped/>
  </div>
</template>

<script>
// 引入School组件
import Scop from './components/Scop.vue'
import Scoped from './components/Scoped.vue'
    export default {
        name:'App',
        components:{
          Scop:Scop,
          Scoped:Scoped
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