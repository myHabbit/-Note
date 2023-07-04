<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">count组件求和为:{{ sum }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" v-bind:key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState } from "vuex";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      if (personObj.name.trim() === "") {
        return;
      } else {
        this.$store.commit("add_person", personObj);
        this.name = "";
      }
    },
  },
  computed: {
    personList() {
      return this.$store.state.personList;
    },
    sum() {
      return this.$store.state.sum;
    },
    // ...mapState({personList:'personList'})
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>