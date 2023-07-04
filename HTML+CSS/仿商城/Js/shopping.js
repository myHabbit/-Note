// 获取大复选框
const checkall = document.querySelector('.content .checkall')
// 获取所有的小复选框
const cks = document.querySelectorAll('.content .ck')
// 点击大复选框
checkall.addEventListener('click',function(){
    // 得到当前大复选框的选中状态
    // check属性 返回的是true是选中 false为没选中

    // 遍历所有的小复选框 让小复选框的checked 等于大复选框的checked
    for(let i =0;i<cks.length;i++){
        cks[i].checked = checkall.checked
    }
})

// 小复选框控制大复选框
    // 给所有的小复选框添加点击事件
    for (let i =0 ;i<cks.length;i++){
        cks[i].addEventListener('click',function(){
            // 判断选中的小复选框个数 是不是等于总的小复选框个数
            // console.log(document.querySelectorAll('.ck:checked').length === cks.length)
         checkall.checked = document.querySelectorAll('.ck:checked').length === cks.length


        })
    }