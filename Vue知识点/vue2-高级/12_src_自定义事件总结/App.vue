<template>
  <div  class="msg">
    <h1>{{ msg }} 学生姓名是:{{ studentName }}</h1>
    <!-- 通过父组件给子组件绑定一个自定义事件实现 实现子给父传递数据(第一种方法 使用@或者v-on)-->
    <!-- <Scop v-on:atguigu="getStudentName" v-on:demo="m1"/> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现 实现子给父传递数据(第二种方法 使用ref)-->
    <Scop ref="student"   v-on:click.native="show"/>
    
    <!-- 通过父组件给子组件传递函数类型的props 实现子给父传递数据-->
    <Scoped v-bind:getSchoolName="getSchoolName"/>
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
            msg:'欢迎学习Vue!',
            studentName:''
        }
        },
        methods:{
          getSchoolName(name,x,y){
            console.log('App收到了学校名',name,x,y);
          },
          getStudentName(name){
            console.log('App收到了学生名',name)
            this.studentName = name
          },
          m1(){
            console.log('demo事件被触发了')
          },
          show(){
            alert(123)
          }
        },
        
        mounted(){
            this.$refs.student.$on('atguigu',this.getStudentName)
              // this.$refs.student.$once('atguigu',this.getStudentName)
            
        }
       
}
</script>

<style>
.msg{
  background-color: gray;
}
</style>