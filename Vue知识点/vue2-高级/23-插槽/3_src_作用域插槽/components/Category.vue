<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
      <slot v-bind:games="games">我是默认的一些内容</slot>
  </div>
</template>


<script>
export default {
  name: "Category",
  props: [ "title"],
    data() {
    return {
      // foods: ["火锅", "烧烤", "海底捞", "小龙虾"],
      games: ["超级玛丽", "火影忍者", "永劫无间", "英雄联盟"],
      // films: ["《教父》", "《拆弹专家》", "《尚硅谷》", "《黑马》"],
    };
  },
};
</script>
<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>