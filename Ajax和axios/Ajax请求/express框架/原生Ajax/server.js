// 1.引入 express
const express = require('express')


// 2.创建应用对象
const App = express()

// 3.创建路由规则
// get请求
App.get('/server',(request,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')

    // 设置响应
    response.send('Hello Ajax')
})
// post请求
// all为可以接收任意类型的请求
App.all('/server',(request,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 响应头
    response.setHeader('Access-Control-Allow-Headers','*')
    // 设置响应
    response.send('Hello Ajax POST')
})


App.all('/json-server',(request,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 响应头
    response.setHeader('Access-Control-Allow-Headers','*')
    // 响应一个数据
    const data={
        name:'atguigu',
        // address:'陕西西安'
    }
    // 设置响应体
    // 对对象进行字符串转换
    response.send(JSON.stringify(data))
})

// 真的就IE缓存的规则
App.get('/ie',(request,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')

    // 设置响应
    response.send('Hello IE - 5')
})
// 延时响应
App.get('/delay',(request,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(function(){
        response.send('延时响应')
    },3000)
    // 设置响应
    
})
// 4.监听端口启动服务
App.listen(8000,()=>{
    console.log("服务已经启动 8080端口监听中");
})
