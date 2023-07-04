<template>
  <div>
    <!-- <h2>{{ name }}</h2>
    <h2>{{ age }}</h2> -->
    <!-- <h2 v-for="person in persons" v-bind:key="person.id">{{ person.name }}</h2> -->
    <button v-on:click="getStudentName">点我获取学生姓名</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  props: ["persons"],
  data() {
    return {
      name: "安鑫",
      age: 80,
    };
  },
  methods: {
    getStudentName() {
      this.$emit('Atguigu',this.name);
    },
  },
};
</script>

<style>
</style>