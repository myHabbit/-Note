// 新建一个文件  写入内容 三人行 必有我师焉


// 导入fs模块
const fs = require('fs')

// 写入文件

fs.writeFile('./小魏.txt', '三人行,必有我师焉', err => {
    //如果写入失败  err就是个错误对象  写入成功err就是null
    if (err) {
        console.log('写入失败')
        return
    }else{
        console.log('写入成功');
    }
})