import React from 'react'
import '../Logs/MyDate.css'

export default function MyDate(props) {
    return (
        <div>
            <div>
                {/* 日期容器 */}
                <div className='date'>
                    <div className='month'>{props.date.toLocaleString('zh-CN',{month:'long'})}</div>
                    <div className='day'>{props.date.getDate()}</div>
                </div>
            </div>
        </div>
    )
}
