//引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入vue-resource
import vueResource from 'vue-resource'
// 引入vuex
import Vuex from 'vuex'
// 关闭vue生产提示
Vue.config.productionTip = false

// 引入store
import store  from './store/index'

// 使用vue-resource
Vue.use(vueResource)

// 创建vm
const vm = new Vue({
    el:'#app',
    render: h => h(App),
    store:store,
    beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线
    },
   
})