<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    // 引入组件
    import School from './Schllo'
    import Student from './Student'

    export default{
        name:'App',
        components:{
            School:School,
            Student:Student
        }
    }
</script>


