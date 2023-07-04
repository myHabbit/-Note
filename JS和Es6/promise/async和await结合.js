/*
resouece  1.txt  2.txt  3.txt  文件内容

*/

// 使用回调函数实现
const fs = require('fs')
const util = require('util')
const minReadFile = util.promisify(fs.readFile)
// fs.readFile('./resource/1.txt', (err, data1) => {
//     if (err) throw err
//     fs.readFile('./resource/2.txt', (err, data2) => {
//         if (err) throw err
//         fs.readFile('./resource/3.txt', (err, data3) => {
//             if (err) throw err
//             console.log(data1 + data2 + data3)
//         })
//     })
// }) 


//使用async和await实现
async function main() {
    // 读取第一个文件的内容
    let data1 = await minReadFile('./resource/1.txt')
    let data2 = await minReadFile('./resource/2.txt')
    let data3 = await minReadFile('./resource/3.txt')
    try {
        console.log(data1 + data2 + data3)
    } catch (error) {
        console.log(error)
    }
}
main()