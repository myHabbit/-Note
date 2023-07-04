<template>
    <div class="container">
      <Category title="美食" v-bind:listData="foods">
      <img src="../01_src_分析脚手架/assets/logo.png" alt="">
      </Category>
      <Category title="游戏">
      <ul>
        <li v-for="(g, index) in games" v-bind:key="index">{{ g }}</li>
      </ul>
      </Category>
      <Category title="电影" v-bind:listData="films">
        <img src="../01_src_分析脚手架/assets/logo.png" alt="">
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
  data() {
    return {
      foods: ["火锅", "烧烤", "海底捞", "小龙虾"],
      games: ["超级玛丽", "火影忍者", "永劫无间", "英雄联盟"],
      films: ["《教父》", "《拆弹专家》", "《尚硅谷》", "《黑马》"],
    };
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>

