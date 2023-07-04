/* 
   日志的容器
*/

import LogItem from '../Logs/LogItem'
import '../Logs/Logs.css'
import Card from '../UI/Card/Card'

const Logs = (props) => {

    /* 
      logsDate用来存储学习日志  
         这个数据除了当前组件logs需要使用外 logsform也需要使用
          当遇到一个数据需要被多个组件使用时 我们可以将数据放在这些组件公共的祖先元素中
          这样可以使得多个组件都能方便的访问到这个数据


          state的提升
    
    */


    const logItemData = props.logsData.map((item, index) => <LogItem
        // logIndex={index}
        // onDelLog={props.onDelLog}
        onDelLog={() => props.onDelLog(index)} key={item.id}
        date={item.date} desc={item.desc} time={item.time} />)
    // logsData.map(item => <LogItem {...item} />)
    return <Card className='logs'>
        {/* 
           在父组件中可以直接在子组件中设置属性
        */}
        {
            logItemData.length !== 0 ? logItemData : <p className='no-logs'>!!没有数据哦</p>
        }
    </Card>
}

export default Logs