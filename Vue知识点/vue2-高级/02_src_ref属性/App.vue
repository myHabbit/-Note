<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button v-on:click="showDOM" ref="btn">点我输出上方的dom元素</button>
    <About ref="sch"/>
  </div>
</template>

<script>
// 引入School组件
import About from './components/About.vue'
    export default {
        name:'App',
        components:{
            About:About
        },
        data(){
        return {
            msg:'欢迎学习Vue!'
        }
        },
        methods:{
            showDOM(){
                // 此处的this是vc （vue component）
                console.log(this.$refs.title)   //获取到的是真实DOM元素
                console.log(this.$refs.btn)     //获取到的是真实DOM元素
                console.log(this.$refs.sch)    //School组件的实例对象 (vc)
            }
        }
       
}
</script>

<style>

</style>