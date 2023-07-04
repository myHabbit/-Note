<template>
  <div>
    <School  v-bind:getName="getName"></School>
    <!-- <Student  v-bind:persons="persons"></Student> -->
    <Student v-on:Atguigu="getStudentName"></Student>
  </div>
</template>

<script>
// 引入School组件
import School from "./components/school.vue";
import Student from "./components/student.vue";
export default {
  name: "Vue",
  components: {
    School: School,
    Student: Student,
  },
  data(){
   return {
   persons:[
      {id:'1',name:'高启强'},
      {id:'2',name:'高启盛'},
      {id:'3',name:'高启兰'}
    ]
   }
 },
  methods:{
    getName(name){
      console.log('已成功获取到name:',name)
    },
    getStudentName(name){
      console.log('拿到了学生姓名:',name)
    }
  },

};
</script>

<style>
</style>