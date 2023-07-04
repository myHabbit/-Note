<template>
    <div>
        <button v-on:click="isshow = !isshow">显示/隐藏</button>
        <transition-group
            appear
            name="animate__animated animate__bounce" 
            enter-active-class="animate__swing"
            leave-active-class="animate__backInUp"
            >
            <h1 v-show="!isshow" key="1">你好啊!</h1>
            <h1 v-show="isshow" key="2">尚硅谷!</h1>
        </transition-group>
    </div>
</template>

<script>
import 'animate.css'
export default {
    name:'Test3',
    data(){
        return {
            isshow:true
        }
    },

}
</script>

<style scoped>
h1{
    background-color: orange;
    /* transition: 2s linear; */
}


</style>