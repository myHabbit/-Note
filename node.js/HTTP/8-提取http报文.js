const http = require('http')

const url = require('url')

const server = http.createServer((request, response) => {
    // 获取请求方法
    //    console.log(request.method)


    // 获取url部分内容提取
    // console.log(request.url)

    response.end('http')
})

server.listen(9000, () => {
    console.log('服务器启动成功');
})