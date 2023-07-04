// 该文件专门用于创建整个应用的路由器

import VueRouter from 'vue-router'

// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'


// 创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        // 1级路由
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: '关于' }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                // 2级路由
                {
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    beforeEnter: (to, from, next) => {
                        console.log(to,from,next);
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('school') === 'atguigu') {
                                next()
                            } else {
                                alert('学校名不对 无权限查看!')
                            }
                            } else {
                            next()
                        }
                    }
                },
                {
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        // 3级路由
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title',
                            component: Detail,
                            meta: { isAuth: true, title: '详情' },

                            // props第一种写法 值为对象,该对象中的所有keyvalue都会以props形式传给Detail
                            // props:{
                            //     a:1,
                            //     b:'hello'
                            // }    

                            // props第二种写法 值为布尔值，若布尔值为真 就会把该路由组件收到的所有params参数 以props形式传给detail组件
                            // props:true


                            // props第三种写法 值为函数，
                            props($router) {
                                return {
                                    id: $router.query.id,
                                    title: $router.query.title
                                }
                            }

                        }
                    ]
                },
            ]
        },
    ]
})






export default router
