<template>
  <div>
    <Props name="李四" sex="女" v-bind:age="18"/>
  </div>
</template>

<script>
// 引入School组件
import Props from './components/Props.vue'
    export default {
        name:'App',
        components:{
            Props:Props
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