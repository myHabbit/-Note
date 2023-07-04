// 1.导入http模块
const http = require('http')

// 2.创建服务对象
const server = http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');   //设置允许跨域
    // response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.end('Hello HTTP Serve')   //设置响应体
})

// 监听端口 启动服务

server.listen(9000, () => {
    console.log('服务启动成功');
})


