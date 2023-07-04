<template>
  <div class="demo">
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age+1}}</h2>
  </div>
</template>

<script>
export default {
    name:'MyProps',
    data(){
        return {
            msg:'我是一个尚硅谷的学生',
        }
    },
     //简单声明接收
    // props:['name','sex','age']  

    // 接受的同时对数据进行类型限制
    // props:{
    //   name:String,
    //   age:Number,
    //   sex:String
    // }

    props:{
      name:{
        type:String,  //name的类型是字符串
        required:true  //名字必须得传
      },
      age:{
        type:Number,
        default:99  //默认值
      },
      sex:{
        type:String,
        required:true   //必须得传
      }
    },



}
</script>

<style>

</style>