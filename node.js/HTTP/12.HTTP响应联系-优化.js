const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
    // 获取url路径
    let { pathname } = new URL(request.url, 'http://127.0.0.1')
    if (pathname == '/index.html') {
        let html = fs.readFileSync(__dirname + '测试服务器.html')
        response.end(html)
    }
})

server.listen(9000, () => {
    console.log('服务启动成功')
})

