// 第一步 使用ES6模块化的语法导入jquery
import $ from 'jquery'
// 实现隔行变色效果
$(function(){
    $('li:odd').css('backgroundColor',"yellow")
    $('li:even').css('backgroundColor',"green")
})