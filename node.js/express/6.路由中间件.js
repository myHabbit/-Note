const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()




app.get('/home', (req, res) => {
    res.send('前台首页')
})

app.get('/admin', (req, res) => {
    res.send('后台首页')
})

app.get('/setting', (req, res) => {
    res.send('设置后台')
})


app.all('*', (req, res) => {
    res.send(`<h1>404 Not Found</h1>`)
})

app.listen(3000, () => {
    console.log('服务器启动成功')
})