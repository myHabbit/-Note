import React, { useState } from 'react'
import Card from '../Components/UI/Card/Card'
import './logsForm.css'
export default function LogsForm(props) {




    const [inputDate, setInputDate] = useState('')
    const [inputDesc, setInputDesc] = useState('')
    const [inputTime, setInputTime] = useState('')



    const dateChangeHandler = (e) => {

        setInputDate(e.target.value)

    }
    const timeChangeHandler = (e) => {

        setInputTime(e.target.value)

    }
    const descChangeHandler = (e) => {

        setInputDesc(e.target.value)


    }

    // 当表单提交时候 我们要汇总表单数据
    const formSubmitHandler = (e) => {
        e.preventDefault();    //阻止表单的默认行为

        // 获取表单内容
        // 将数据拼装成一个对象
        const newLog = {
            date: new Date(inputDate),
            desc: inputDesc,
            time: +inputTime
        }
        // 当我们要添加新的日志的时候 调用父组件传递进来的函数
        props.onSaveLog(newLog)
        // 清空表单项
        setInputDate('')
        setInputDesc('')
        setInputTime('')


    }


    return (
        <Card className='logs-form'>
            <form onSubmit={formSubmitHandler}>
                <div className='form-item' >
                    <label htmlFor='date'>日期</label>
                    <input onChange={dateChangeHandler} value={inputDate} id='date' type='date' />
                </div>
                <div className='form-item'>
                    <label htmlFor='desc'>内容</label>
                    <input id='desc' onChange={descChangeHandler} value={inputDesc} type='text' />
                </div>
                <div className='form-item'>
                    <label htmlFor='time'>时长</label>
                    <input onChange={timeChangeHandler} value={inputTime} id='time' type='number' />
                </div>
                <div className='form-btn'>
                    <button>添加</button>
                </div>
            </form>
        </Card>
    )
}
