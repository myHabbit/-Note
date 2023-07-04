import React, { useState } from 'react'
import Card from '../Components/UI/Card/Card'
import './logsForm.css'
export default function LogsForm() {

    /* 
      当表单项发生变化时候获取用户输入的内容
      
    */

    // 创建三个变量 存储表单数据



    // const [inputDate, setInputDate] = useState('')
    // const [inputDesc, setInputDesc] = useState('')
    // const [inputTime, setInputTime] = useState('')

    // 将表单数据统一到一个state中
    const [formDate, setFormDate] = useState({
        inputDate: '',
        inputDesc: '',
        inputTime: ''
    })



    //   创建一个响应函数，监听日期的变化
    const dateChangeHandler = (e) => {
        // 获取到当前触发事件的对象
        // 事件对象中 保存了当前事件触发时的所有信息
        // e.target 指向的是触发事件的对象
        // console.log(e.target.value)
        // setInputDate(e.target.value)
        setFormDate({
            ...formDate,
            inputDate: e.target.value
        })
    }
    //   创建一个响应函数，监听时长的变化
    const timeChangeHandler = (e) => {
        // 获取到当前触发事件的对象
        // 事件对象中 保存了当前事件触发时的所有信息
        // e.target 指向的是触发事件的对象
        // console.log(e.target.value)
        // setInputTime(e.target.value)
        setFormDate({
            ...formDate,
            inputTime: e.target.value
        })
    }


    //   创建一个响应函数，监听表单的变化
    /* 
       在react 中  表单不需要自行提交
           而是要通过react提交
    */

    const descChangeHandler = (e) => {
        // 获取到当前触发事件的对象
        // 事件对象中 保存了当前事件触发时的所有信息
        // e.target 指向的是触发事件的对象
        // console.log(e.target.value)
        // setInputDesc(e.target.value)
        setFormDate({
            ...formDate,
            inputDesc: e.target.value
        })

    }

    // 当表单提交时候 我们要汇总表单数据
    const formSubmitHandler = (e) => {
        e.preventDefault();    //阻止表单的默认行为

        // 获取表单内容
        // 将数据拼装成一个对象
        const newLog = {
            date: new Date(formDate.inputDate),
            desc: formDate.inputDesc,
            time: +formDate.inputTime
        }
        console.log(newLog)
        // 清空表单项
        // setInputDate('')
        // setInputDesc('')
        // setInputTime('')

        setFormDate({
            inputDate: '',
            inputDesc: '',
            inputTime: ''
        })
        /* 
           提交表单后 如何清空表单中的旧数据
                -- 现在这种表单 在react我们称为非受控组件
                我们可以将表单中的数据存储在state中 将state设置为表单项的value值
                这样表单项发生变化 state随之发生变化
                反之 state发生变化 表单项也会跟着改变  这种操作叫做双向绑定
                这样一来 表单就成为了一个受控组件
            
        
        */

    }


    return (
        <Card className='logs-form'>
            <form onSubmit={formSubmitHandler}>
                <div className='form-item' >
                    <label htmlFor='date'>日期</label>
                    <input onChange={dateChangeHandler} value={formDate.inputDate} id='date' type='date' />
                </div>
                <div className='form-item'>
                    <label htmlFor='desc'>内容</label>
                    <input id='desc' onChange={descChangeHandler} value={formDate.inputDesc} type='text' />
                </div>
                <div className='form-item'>
                    <label htmlFor='time'>时长</label>
                    <input onChange={timeChangeHandler} value={formDate.inputTime} id='time' type='number' />
                </div>
                <div className='form-btn'>
                    <button>添加</button>
                </div>
            </form>
        </Card>
    )
}
