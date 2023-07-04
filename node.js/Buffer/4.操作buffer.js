// 3.from
// let buf_3 = Buffer.from([108,111,118,101,121,111,117])
// console.log(buf_3.toString());  

//[]

// let buf = Buffer.from('hello')
// // console.log(buf[0].toString())
// buf[0] = 96
// console.log(buf)
// console.log(buf.toString())


// 溢出
// let buf = Buffer.from('hello')
// buf[0]  = 361    //最高255  然后内部会舍弃高位的数字
// console.log(buf)


// 中文
let buf = Buffer.from('你好')
console.log(buf)
