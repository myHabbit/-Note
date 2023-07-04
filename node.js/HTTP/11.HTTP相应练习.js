const http = require('http')

const server = http.createServer((request, resposne) => {
    resposne.setHeader('content-type', 'text/html;charset=utf-8')
    resposne.end(`
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">  
            <title>Document</title> 
            <style>
            td{
                padding:20px 40px
            }
            table tr:nth-child(odd){
                background:pink
            }
            table tr:nth-child(even){
                background:skyblue
            }
            table,td{
                border-collape:collape
            }
            </style>
        </head>

        <body>
        <table border='1px solid #ccc'>
         <tr><td></td> <td></td> <td></td></tr>
         <tr><td></td> <td></td> <td></td></tr>
         <tr><td></td> <td></td> <td></td></tr>
         <tr><td></td> <td></td> <td></td></tr>
        </table>
        </body>

        </html>
    `)
})

server.listen(9000, () => {
    console.log('服务启动成功')
})