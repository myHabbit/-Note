const express = require('express')

const app = express()

app.get('/response', (req, res) => {
    // 原生响应
    // res.statusCode=200
    // res.statusMessage = 'love'
    // res.setHeader('xxxx','yyyy')
    // res.write('hello')
    // res.end('response')

    // express的响应
    res.status(500)
    res.set('add', 'bbb')
    res.send('你好')
})

app.listen(3000, () => {
    console.log('服务器已经启动');
})
