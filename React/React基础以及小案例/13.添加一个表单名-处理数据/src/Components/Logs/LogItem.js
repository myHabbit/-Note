import React from 'react'
import MyDate from './MyDate'

import '../Logs/LogItem.css'
export default function LogItem(props) {
  // 在函数组件中 属性就相当于是函数的参数  可以通过参数来访问
  // 在函数组件的形参中 定义一个props  
  // 它包含了父组件传递的所有参数
  return (
    <div className='item'>
      <MyDate date={props.date}></MyDate>
      {/* 日志内容容器 */}
      <div className='content'>
        {/* 
             如果将组件中的数据全部写死 将会导致我们组件无法动态设置 不具有实用价值
               我们希望组件数据可以由外部传递进来，在组件间 ，父组件可以给props向子组件传递数据
        */}
        <h2 className='desc'>{props.desc}</h2>
        <div className='time'>{props.time}</div>
      </div>
    </div>
  )
}

function sum(a, b) {
  return a + b
}
