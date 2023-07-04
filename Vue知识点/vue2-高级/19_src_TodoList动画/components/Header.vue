<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称 按回车键确认" v-on:keyup.enter="add" />
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: "MyHeader",
  props:['addTodo'],
  methods:{
    add(e){
      // 校验数据
      if(e.target.value.trim() === ''){
        alert('输入不能为空')
        return
      }
      // 将用户的输入包装成为一个todo对象
      const todoObj = {id:nanoid(),tatle:e.target.value,done:false,isEdit:false}
      // 通知App组件去添加一个todo对象
      this.addTodo(todoObj)
      // 清空输入
      e.target.value = ''
    }
  }
}
</script>

<style scoped>
.todo-header {
  height: 30px;
  line-height: 30px;
}
.todo-header input {
  width: 100%;
  height: 40px;
}
.todo-header input::placeholder {
  font-size: 10px;
  font-size: 14px;
}
</style>