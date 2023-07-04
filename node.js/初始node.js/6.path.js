const path = require('path')


// 拼接绝对路径

// resolve
// const path1 = path.resolve(__dirname,'./index.html')
// console.log(path1)

// sep 分隔符

// console.log(path.sep)   //window \   linux /

// parse方法
// console.log(__filename)   //文件的绝对路径
let str = 'D:\\nodeJS\\13-path\\代码\\path.js'
console.log(path.parse(str))

// basename 获取文件名
console.log(path.basename(str))

// dirname  获取文件夹名字
console.log(path.dirname(str));