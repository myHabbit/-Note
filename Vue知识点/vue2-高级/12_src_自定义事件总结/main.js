//引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 关闭vue生产提示
Vue.config.productionTip = false



// 创建vm
const vm = new Vue({
    el:'#app',
    render: h => h(App),
    mounted() {
        setTimeout(function(){
            vm.$destroy()
        },3000)
    },
   
})
