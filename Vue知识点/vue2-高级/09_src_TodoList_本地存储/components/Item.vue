<template>
   <li>
      <label>
        <input type="checkbox" v-bind:checked="todo.done" v-on:change="handleCheck(todo.id)"/>
        <!-- <input type="checkbox" v-model="todo.done"/> -->
        <span>{{todo.tatle}}</span>
      </label>
      <button class="btn btn-danger" v-on:click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
export default {
    name:'Item',
    // 声明接收
    props:['todo','checkTodo','deleteTodo'],
    methods:{
        handleCheck(id){
        // 通知App组件将对应的todo对象的done取反
        this.checkTodo(id)
        },
        // 删除
        handleDelete(id){
          if(confirm('确认删除吗')){
            // 通知App    
          this.deleteTodo(id)
          }
        }
        
    }
}
</script>

<style scoped>
.todo-main li {
  position: relative;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: left;
  padding-left: 20px;
  border: 1px solid #ccc;
}
.todo-main li  input{
    width: 20px;
    height: 15px;
}
.todo-main li  label span{
    margin-left: 10px;
}
li:hover{
  background-color: #ddd;
}
li:hover button{
  display:block;
}
</style>