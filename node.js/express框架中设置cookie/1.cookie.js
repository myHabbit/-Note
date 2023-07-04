const express = require('express')

const app = express()

// 创建路由规则
app.get('/set-cookie', (req, res) => {
    // res.cookie('name','zhangsan')  //会在浏览器关闭的时候被销毁
    res.cookie('name', 'lisi', { maxAge: 60 * 1000 })    //maxAge的生命周期
    res.end('home')
})

// 删除cookie
app.get('remove-cookie', (req, res) => {
    // 调用方法
    res.clearCookie('name')
})


app.listen(3000, () => {
    console.log('服务器启动成功');
})