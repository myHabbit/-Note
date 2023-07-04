<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>当前求和为: {{ number }}</h2>
    <button v-on:click="add">点我number++</button>
    <button v-on:click="sendStudentName">点我把学生名给App</button>
    <button v-on:click="unbind">解绑atguigu事件</button>
    <button v-on:click="death">销毁当前student组件的实例对象</button>
  </div>
</template>

<script>
export default {
    name:'MyScop',  
    data(){
        return {
            name:'李四',
            sex:'男',
            number:0
        }
    }, 
    methods:{
      sendStudentName(){
        // 触发Scop的组件实例身上的atguigu事件
        this.$emit('atguigu',this.name)
        // this.$emit('click')
      },
      unbind(){
        this.$off('atguigu')  //解绑一个自定义事件
        // this.$off(['atguigu','demo'])  //解绑多个自定义事件
        // this.$off()  //解绑所有的自定义事件
      },
      death(){
        this.$destroy()  //销毁了当前的student组件实例 销毁后所有student实例的自定义事件全都不奏效
      },
      add(){
        console.log('add回调被调用了')
        this.number++
      },

    }
}
</script>

<style lang="css" scoped>     
.demo{
  background-color: skyblue;
  padding: 5px;
  margin-top: 30px;
}

</style>