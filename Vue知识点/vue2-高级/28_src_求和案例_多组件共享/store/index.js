//该文件用于创建vuex中最为核心的store

// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

// 使用vuex
Vue.use(Vuex)
// 定义actions 用于响应组件中的动作
const actions = {
    jia(context,value){
        // console.log(context,value);
        context.commit('jia',value)
    },
    jian(context,value){
        context.commit('jian',value)
    },
    jiaOdd(context,value){
        // console.log(context,value);
        if(context.state.sum %2 !== 0 ){
        context.commit('jia',value)
        }
    },
    jiaWait(context,value){
      setTimeout(() =>{
        context.commit('jia',value)
      },500)
    },
}
// mutations 用于操作数据(state)
const mutations = {
    jia(state,value){
        state.sum = state.sum + value
    },
    jian(state,value){
        state.sum = state.sum  - value
    },
    add_person(state,value){
        state.personList.unshift(value)
    }
}
// state 用于存储数据
const state = {
    sum: 0, //当前的和
    school:'尚硅谷',
    subject:'前端',
    personList:[
        {id:'001',name:'张三'}
    ]
}

// 准备getters  用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}


// 创建并暴露 store
export default new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
    getters:getters,
})

