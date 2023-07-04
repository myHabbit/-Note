// 1.alloc(分配)

let buf = Buffer.alloc(10)
console.log(buf)

// 2.allocUnsafe(不安全，可能会存在旧数据)
let buf_2 = Buffer.allocUnsafe(10)
console.log(buf_2);

// 3.from
let buf_3 = Buffer.from('hello')
console.log(buf_3);