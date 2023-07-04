<template>
  <div class="demo">
    <h2 v-on:click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
// 引入一个hunhunhehe
 import {hunhe,hunhe2} from '../mixin'
export default {
    name:'MyMix',
    data(){
        return {
            name:'我是一个尚硅谷的学生',
            sex:'男',
        }
    },
    mounted() {
        console.log('你好啊!!!!!!!!')
    },
    mixins:[hunhe,hunhe2]
}
</script>

<style>

</style>