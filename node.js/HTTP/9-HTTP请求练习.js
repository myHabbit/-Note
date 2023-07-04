const http = require('http')

const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8')
    if (request.method == 'get' || request.url == '/login') {
        response.end('登录')
    } else if (request.method == 'get' || request.url == '/reg') {
        response.end('注册页面')
    } else {
        response.end('Not Find')
    }
})
server.listen(9000, () => {
    console.log('服务器启动成功')
})