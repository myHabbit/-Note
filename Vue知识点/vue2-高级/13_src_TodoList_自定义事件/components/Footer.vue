<template>
  <div class="todo-footer" v-if="todos.length">
    <label>
      <!-- <input type="checkbox" v-bind:checked="IsAll" v-on:click="checkAll" /> -->
      <input type="checkbox" v-model="IsAll" />
    </label>
    <span> <span>已完成{{ doneTatal}}</span>/全部{{ todos.length }} </span>
    <button class="btn-danger" v-on:click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    name: "MyFooter",
    props:['todos'],
    computed:{
      doneTatal(){
        // const x =  this.todos.reduce(function(pre,current){
        //   return pre+ (current.done ? 1 : 0)
        // },0)
        // console.log(x)
        return this.todos.reduce(function(pre,current){
           return pre+ (current.done ? 1 : 0)
        },0)
        // let a = 0
        // console.log(this.todos.length);
        // for (let i =0;i<this.todos.length;i++){
        //   if(this.todos[i].done === true){
        //     a++
        //   }
        // }
        // return a
      },
      // 如果已完成的数量等于 全部的数量 则勾选全选的input框
      IsAll:{
        get(){
          return (this.todos.length === this.doneTatal && this.todos.length >0 )
        },
        set(value){
          // this.checkAllTodo(value)
          this.$emit('checkAllTodo',value)
        }
      },
    },
    methods:{
      checkAll(e){
      //   if(e.target.checked === false){
      //     for(let i =0;i<this.todos.length;i++){
      //     this.todos[i].done = false 
      //     }
      //   }else{
      //     for(let i =0;i<this.todos.length;i++){
      //     this.todos[i].done = true 
      //   }
      // }
      this.checkAllTodo(e.target.checked)
      },
      clearAll(){
        // this.clearAllTodo()
        this.$emit('clearAllTodo')
      }
    }
  }
</script>

<style scoped>
.todo-footer {
  display: inline-block;
  width: 100%;
  height: 60px;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #ccc;
}
.btn-danger {
  width: 100px;
  height: 30px;
  background-color: rgb(192, 50, 50);
  color:#fff;
  border: 1px solid #ccc;
  cursor: pointer;
}
</style>