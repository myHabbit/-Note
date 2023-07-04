<template>
    <div>
        <h2>学生姓名: {{ name }}</h2>
        <h2>学生年龄: {{ age }}</h2>
        <button v-on:click="showAge">点我显示年龄</button>
    </div>
</template>

<script>
    export default {
        name:'尚硅谷',
        data(){
            return {
                name:'苟剑楠',
                age:18
            }
        },
        methods: {
            showAge(){
                alert(this.age)
            }
        },
    }

</script>

<style>

</style>