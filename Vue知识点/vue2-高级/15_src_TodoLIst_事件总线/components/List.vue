<template>
  <ul class="todo-main">
   <Item v-for="todoObj in todos" v-bind:key="todoObj.id" v-bind:todo="todoObj"></Item>
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
</style>