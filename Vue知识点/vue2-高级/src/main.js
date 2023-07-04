//引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'


// 完整引入
// 引入ElementUI
// import ElementUI from 'element-ui';

// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 应用ElementUI
// Vue.use(ElementUI)



// 按需引入
import { Button, Row, DatePicker } from 'element-ui';
Vue.component('el-button', Button)
Vue.component('el-row', Row)
Vue.component('el-date-picker', DatePicker)


// 创建vm
const vm = new Vue({
    el: '#app',
    render: h => h(App),
})