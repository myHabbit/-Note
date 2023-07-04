// 1.引入express
const express = require('express');
// const express = require('express');

// 2.创建应用对象
const App = express();

// 3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
App.get('/',(request,response)=>{
// 设置响应
response.send('Hello Express');
})

// 4.监听端口 启动服务
App.listen(8000,()=>{
    console.log('服务已经启动,8000端口监听中')
})