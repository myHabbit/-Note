export default{
    install(Vue) {
        //    全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })

        // 定义全局指令
        Vue.directive('fbind', {
            // 1.指令与元素成功绑定时调用
            bind(element, binding) {
                console.log('bind', this);  //此处的this为window
                element.value = binding.value
            },
            // 指令所在元素被插入页面时调用
            inserted(element, binding) {
                element.focus()
            },
            // 指令所在的模板被重新解析时
            update(element, binding) {
                element.value = binding.value
            }
        })

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200,
                }
            },
        })
        // 给vue原型上添加一个方法  vm和vc就都能用了
        Vue.prototype.hello = () => {
            alert('你好啊')
        }

    }
}

// export default obj   //默认暴露  