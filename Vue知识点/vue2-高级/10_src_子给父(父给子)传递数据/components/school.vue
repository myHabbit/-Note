<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ address }}</h2>
    <button v-on:click="getSchoolName">点我输出名字</button>
  </div>
</template>

<script>
export default {
  name: 'MyStudent',
  props:['getName'],
  data() {
    return {
      name: "尚硅谷",
      address: "陕西西安",
    };
  },
methods:{
  getSchoolName(){
    this.getName(this.name)
  }
}
};
</script>

<style>
</style>