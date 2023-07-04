<template>
  <div class="demo">
    <h2 v-on:click="showName">学校名称：{{ name | slice }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import {hunhe} from '../mixin'
export default {
    name:'MyMin',
    data(){
        return {
            name:'安鑫atguigu',
            address:'陕西西安',
        }
    },
    mixins:[hunhe]

}
</script>

<style>

</style>