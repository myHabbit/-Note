/* 
   日志的容器
*/

import { useState } from 'react'
import LogFilter from '../LogFilter/LogFilter'
import LogItem from '../Logs/LogItem'
import '../Logs/Logs.css'
import Card from '../UI/Card/Card'

const Logs = (props) => {
    // 创建一个存储年份的state
    const [year, setYear] = useState(2022)


    // 创建一个修改年份的函数
    const changeYearHandler = (year) => {
        setYear(year)
    }
    /* 
      logsDate用来存储学习日志  
         这个数据除了当前组件logs需要使用外 logsform也需要使用
          当遇到一个数据需要被多个组件使用时 我们可以将数据放在这些组件公共的祖先元素中
          这样可以使得多个组件都能方便的访问到这个数据


          state的提升
    
    */


    //   过滤数据
    let filterData = props.logsData.filter(item => {
        return item.date.getFullYear() === year
    })


    let logItemData = filterData.map((item, index) => <LogItem
        // logIndex={index}
        // onDelLog={props.onDelLog}
        onDelLog={() => props.onDelLog(index)} key={item.id}
        date={item.date} desc={item.desc} time={item.time} />)
    // logsData.map(item => <LogItem {...item} />)
    return <Card className='logs'>
        {/* 在父组件中可以直接在子组件中设置属性*/}

        {/*引入年份组件 */}
        <LogFilter year={year} onYearHandler={changeYearHandler}></LogFilter>

        {
            logItemData.length !== 0 ? logItemData : <p className='no-logs'>!!没有数据哦</p>
        }
    </Card>
}

export default Logs