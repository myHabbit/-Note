const http = require('http')

const server = http.createServer((request, response) => {
    // 设置响应状态码
    // response.statusCode = 200
    // 设置响应状态的描述
    // response.statusMessage = 'loveyou'

    // 设置响应头
    response.setHeader('content-type','text/html,charset=utf-8')

    response.end('reponse')    //设置响应体
})


server.listen(9000, () => {
    console.log('服务已经启动')
})