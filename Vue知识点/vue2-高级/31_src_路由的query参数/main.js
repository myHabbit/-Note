//引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入vue-router
import VueRouter from 'vue-router'
// 引入路由器
import router from './router/index'

// 关闭vue生产提示
Vue.config.productionTip = false

// 应用插件
Vue.use(VueRouter)


// 创建vm
const vm = new Vue({
    el:'#app',
    render: h => h(App),
    router:router
})