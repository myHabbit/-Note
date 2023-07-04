<template>
    <div>
        <button v-on:click="isshow = !isshow">显示/隐藏</button>
        <transition-group name="hello" appear>
            <h1 v-show="!isshow" key="1">你好啊!</h1>
            <h1 v-show="isshow" key="2">尚硅谷!</h1>
        </transition-group>
    </div>
    
  
</template>

<script>
export default {
    name:'Test2',
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

/* 进入的起点 */
.hello-enter,.hello-leave-to{
    transform: translateX(-100%)

}
/* 进入的终点 */
.hello-enter-to,.hello-leave{
    transform: translateX(0)
}
.hello-enter-active,.hello-leave-active{
    transition: 2s linear;
}
/* 离开的起点 */
/* .hello-leave{
    transform: translateX(0)

} */
/* 离开的终点 */
/* .hello-leave-to{
    transform: translateX(-100%)
} */

/* 过渡 */


</style>