function timo() {
    console.log('timo')
}


function niejiao() {
    console.log('捏脚')
}
//暴露数据
// module.exports = [timo,niejiao]

// 第二种方法
exports.timo = timo
exports.niejiao = niejiao