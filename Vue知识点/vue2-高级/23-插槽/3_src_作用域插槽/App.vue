<template>
  <div class="container">
    <Category title="游戏">
      <!-- 要想收到games必须 在外侧包裹一个templat标签 -->
      <template scope="atguigu">
      <ul>
        <li v-for="(g, index) in atguigu.games" v-bind:key="index">{{ g }}</li>
      </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="{games}">
      <ol>
        <li v-for="(g, index) in games" v-bind:key="index">{{ g }}</li>
      </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="{games}">
        <h4 v-for="(g, index) in games" v-bind:key="index">{{ g }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: {
    Category: Category,
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
.foot {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
  height: 140px;
}
h4 {
  text-align: center;
}
</style>

