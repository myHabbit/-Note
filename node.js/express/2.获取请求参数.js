const express = require('express')

const app = express()

app.get('/home', (req, res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    console.log(req.headers);

    // express 操作
    console.log(req.path);
    console.log(req.query);

    
    res.end('hello ')
})

app.listen(3000, () => {
    console.log('服务器已经启动');
})