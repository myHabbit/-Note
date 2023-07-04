<template>
  <ul class="todo-main" >
    <transition-group name="todo" appear>
      <Item v-for="todoObj in todos" 
      v-bind:key="todoObj.id" 
      v-bind:todo="todoObj">
    </Item>
    </transition-group>
  </ul>
</template>

<script>
import Item from "./Item.vue";

export default {
  name: "MyList",
  components: {
    Item: Item,
  },
  props:['todos'],
  
 
}
</script>

<style scoped>
.todo-main {
  width: 100%;
  margin-top: 20px;
}

.todo-enter-active{
    animation: atguigu 0.5s linear;
}
.todo-leave-active{
    animation: atguigu 0.5s reverse;
}

@keyframes atguigu {
    from{
        transform: translateX(100%);
    }
    to{
        transform: translateX(0px);
    }
  }
</style>