<template>
  <div class="root">
    <div class="todo-container">
      <Header v-bind:addTodo="addTodo"></Header>
      <List
        v-bind:todos="todos"
      ></List>
      <Footer
        v-bind:todos="todos"
        v-bind:checkAllTodo="checkAllTodo"
        v-bind:clearAllTodo="clearAllTodo"
      ></Footer>
    </div>
  </div>
</template>

<script>
// 引入pubsub 库
import pubsub from 'pubsub-js'
// 引入组件
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  // 注册组件
  components: {
    Header: Header,
    List: List,
    Footer: Footer,
  },
  data() {
    return {
      todos: [
        { id: "001", tatle: "抽烟", done: true },
        // { id: "002", tatle: "喝酒", done: false },
        // { id: "003", tatle: "开车", done: true },
      ],
    };
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    // 勾选和取消勾选一个名字
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },
    // 更新一个todo
    updateTodo(id,tatle) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.tatle = tatle
        }
      });
    },
    // 删除一个todo
    deleteTodo(_,id) {
      this.todos = this.todos.filter(function (todo) {
        // 函数体
        return todo.id !== id;
      });

    },

    // 全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    // 清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter(function (todo) {
        return !todo.done;
      });
    },
  },
  watch: {
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem('todo',JSON.stringify(value))
      }
    }
      
    
  },
  mounted(){
    this.$bus.$on('checkTodo',this.checkTodo)
    this.$bus.$on('updateTodo',this.updateTodo)
    // 消息订阅
    this.pubId = pubsub.subscribe('deleteTodo',this.deleteTodo)
  },
  beforeDestroy(){
    this.$bus.$off('checkTodo')
    this.$bus.$off('updateTodo')

    // 消息订阅
    pubsub.unsubscribe(pubId)
  },

};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding-top: 40px;
}
li {
  list-style: none;
}
.root {
  width: 430px;
  border: 1px solid #ccc;
  padding-top: 20px;
}
.todo-container {
  text-align: center;
}
.btn {
  position: absolute;
  left: 360px;
  top: 8px;
  width: 40px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #ccc;
  background-color: red;
  color: #fff;
  cursor: pointer;
  display: none;
}
.btn-bianji{
  position: absolute;
  left: 310px;
  top: 7px;
  width: 40px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #ccc;
  background-color: skyblue;
  color: #fff;
}
</style>