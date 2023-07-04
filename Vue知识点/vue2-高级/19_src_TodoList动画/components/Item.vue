<template>
    <li>
      <label>
        <input type="checkbox" v-bind:checked="todo.done" v-on:change="handleCheck(todo.id)"/>
        <!-- <input type="checkbox" v-model="todo.done"/> -->
        <span v-show="!todo.isEdit">{{todo.tatle}}</span>
        <input v-show="todo.isEdit" 
        v-on:blur="handlebBlur(todo,$event)"
         type="text" v-bind:value="todo.tatle"
         ref="inputTatle"
          style="width: 160px; height: 25px;">
      </label>
      <button v-show="!todo.isEdit " class="btn  btn-bianji" v-on:click="handleEdit(todo)">编辑</button>
      <button class="btn btn-danger" v-on:click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
// 引入pubsub库
import pubsub from 'pubsub-js';
export default {
    name:'Item',
    // 声明接收todo
    props:['todo'],
    methods:{
        handleCheck(id){
        // 通知App组件将对应的todo对象的done取反
        // this.checkTodo(id)
        this.$bus.$emit('checkTodo',id)
        },
        // 删除
        handleDelete(id){
          if(confirm('确认删除吗')){
            // 通知App    
          // this.deleteTodo(id)
          // this.$bus.$emit('deleteTodo',id)

          // 消息订阅
          pubsub.publish('deleteTodo',id)
          }
        },
        // 编辑
        handleEdit(todo){
          // 判断todo身上是否有isEdit
          if(todo.isEdit === false || todo.isEdit === true){
          // if(todo.hasOwnProperty('isEditd')){
            todo.isEdit = true
          }else{
            this.$set(todo,'isEdit',true)
          }

         this.$nextTick(function(){
          this.$refs.inputTatle.focus()
         }) 
        },
        // 失去焦点回调（真正执行修改逻辑）
        handlebBlur(todo,e){
          todo.isEdit = false
          if(e.target.value.trim() === ''){
            alert('任务名称不能为空 请重新输入')
            return
          }else{
            this.$bus.$emit('updateTodo',todo.id,e.target.value)
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