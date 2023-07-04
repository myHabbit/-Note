import React from 'react'

export default function LogFilter(props) {
    // 创建监听change事件的响应函数
    const changeHandler = (e) => {
        props.onYearHandler(+ e.target.value)
    }

    return (
        <div>
            年份: <select onChange={changeHandler} defaultValue={props.year}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2023">2023</option>
            </select>
        </div>
    )
}
