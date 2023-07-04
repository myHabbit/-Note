<template>
  <div>
    <h1>当前求和为: {{ sum }}</h1>
    <h1>当前求和方法十倍为: {{ bigSum }}</h1>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
// 引入mapState
import { mapState, mapGetters } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的
    };
  },
  // 计算属性
  computed: {
    // 靠程序员亲自去写计算属性
    // sum() {
    //   return this.$store.state.sum;
    // },
    // subject() {
    //   return this.$store.state.school;
    // },
    // school() {
    //   return this.$store.state.subject;
    // },

    // ...意思是 将mapState里的每个key value放入computed这个对象里面
    // 借助mapState生成计算属性 从state中读取数据 （对象写法）
    // ...mapState({ he: "sum", school: "school", xueke: "subject" }),

    // 借助mapState生成计算属性 从state中读取数据 （数组写法）
    ...mapState(['sum', 'school', 'subject']),

    /**************************************/

    // 借助mapGetters生成计算属性 从state中读取数据 （对象写法）
    // ...mapGetters({'bigSum':'bigSum'})
    // 借助mapGetters生成计算属性 从state中读取数据 （数组写法）
    ...mapGetters(['bigSum'])
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
  },
  methods: {
    increment() {
      this.$store.dispatch("jia", this.n);
      // this.$store.commit('jia',this.n)
    },
    decrement() {
      this.$store.dispatch("jian", this.n);
      // this.$store.commit('jian',this.n)
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },

    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
  mounted() {
    // 这里mapState函数调用时候的得到的参数是个对象 结构为{'he':'sum'}, 前一项可以加括号也可以不加
    // const x = mapState({ he: "sum", school: "school", xueke: "subject" });
    // console.log(x);
  },
};
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>