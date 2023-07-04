// 导入

const express = require('express')


// 创建对象

const app = express()

// 创建一个路由

app.get('/home', (req, res) => {
    res.end('Hello express')
})

app.post('/login', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');   //支持跨域
    res.end('登录 登录')
})

// 监听端口 启动服务

app.listen(3000, () => {
    console.log('服务启动成功,端口3000,正在监听')
})


