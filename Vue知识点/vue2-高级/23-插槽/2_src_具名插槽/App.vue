<template>
    <div class="container">
      <Category title="美食" v-bind:listData="foods">
      <img slot="center" src="../01_src_分析脚手架/assets/logo.png" alt="">
      <a slot="footer" href="http://www.baidu.com">更多美食</a>
      </Category>
      <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" v-bind:key="index">{{ g }}</li>
      </ul>
       <div class="foot" slot="footer">
        <a href="http://www.baidu.com">单机游戏</a>
        <a  href="http://www.baidu.com">网络游戏</a>
       </div>
      </Category>

      <Category title="电影" v-bind:listData="films">
        <img slot="center" src="../01_src_分析脚手架/assets/logo.png" alt="">
        <template  slot="footer">
        <!-- <template  v-slot:footer> -->
          <div class="foot">
              <a href="http://www.baidu.com">经典</a>
              <a  href="http://www.baidu.com">热门</a>
              <a  href="http://www.baidu.com">推荐</a>
          </div>
       <h4>欢迎前来观影</h4>
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
.foot {
 display: flex;
 justify-content: space-around;
  
}
img{
  width: 100%;
  height: 140px;
}
h4{
  text-align: center;
}
</style>

