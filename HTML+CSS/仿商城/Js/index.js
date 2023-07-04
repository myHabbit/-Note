// 获取元素
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const img = document.querySelector('.banner img')
// 控制播放的张数
let i = 1
// 给右边按钮加事件监听
btn2.addEventListener('click', function () {
    i++
    if (i === 6) {
        i = 1
        img.src = `../images/index_banner${i}.png`
    } else {
        img.src = `../images/index_banner${i}.png`
    }

})
//  给左边按钮加事件监听
btn1.addEventListener('click', function () {
    i--
    if (i === 0) {
        i = 5
        img.src = `../images/index_banner${i}.png`
    } else {
        img.src = `../images/index_banner${i}.png`

    }
})

// 小圆点
document.querySelector('.banner .whitedian').classList.remove('whitedian')
document.querySelector(`.banner .dian li:nth-child(${i + 1})`).classList.add('whitedian')


// 自动播放模块

let n = setInterval(function () {
    // 利用js自动调用点击事件  click必须加小括号 调用函数
    btn2.click()
}, 1000)

// 鼠标经过大盒子 停止定时器
const box = document.querySelector('.banner')
box.addEventListener('mouseenter', function () {
    // 停止定时器
    clearInterval(n)
})
// 鼠标离开大盒子 开启定时器
box.addEventListener('mouseleave', function () {
    // 关闭定时器
    clearInterval(n)
    // 开启定时器
    n = setInterval(function () {
        // 利用js自动调用点击事件  click必须加小括号 调用函数
        btn2.click()
    }, 1000)
})

// input添加焦点事件
// 获取元素
const input = document.querySelector('.search input')
input.addEventListener('focus', function () {
    input.classList.add('search2')
})
input.addEventListener('blur', function () {
    input.classList.remove('search2')
})




// 侧边二级菜单显示
const nav = document.querySelector('.box')
const li = document.querySelectorAll('.sidebar>ul>li')
const sidebar = document.querySelector('.sidebar')
for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('mouseenter', function () {
        nav.style.display = 'block'
        nav.style.cursor = 'pointer'
    })
    sidebar.addEventListener('mouseleave', function () {
        nav.style.display = 'none'
    })
}




//    内容部分
const lis = document.querySelectorAll('.content  a')
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseenter', function () {
        document.querySelector('.content .active2').classList.remove('active2')
        this.classList.add('active2')
        document.querySelector('.content .item .active').classList.remove('active')
        document.querySelector(`.content .item .content-box:nth-child(${i + 1})`).classList.add('active')
    })

}