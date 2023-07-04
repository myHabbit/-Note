// 1.导入模块
const { log } = require('console')
const fs = require('fs')

const p1 = new Promise((resolve, reject) => {
    fs.readFile('./resource/1.txt', (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
    }).then(value => {
        return new Promise((resolve, reject) => {
        fs.readFile('./resource/2.txt', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve([data,value])
            }
        })
    })
}).then(value=>{
    return new Promise((resolve, reject) => {
        fs.readFile('./resource/3.txt', (err, data) => {
            if (err) {
                reject(err)
            } else {
               value.push(data)
               resolve(value)
            }
        })
    })
}).then(value =>{
    console.log(value.toString())
})