/* 
   日志的容器
*/

import LogItem from '../Logs/LogItem'
import '../Logs/Logs.css'
import Card from '../UI/Card/Card'

const Logs = () => {

    // 模拟一条从服务器中加载的数据
    const logsData = [
        {
            id: '001',
            date: new Date(2021, 2, 20, 18, 30),
            desc: '学习九阳神功',
            time: 30
        },
        {
            id: '002',
            date: new Date(2022, 3, 10, 12, 30),
            desc: '学习降龙十八掌',
            time: 30
        },
        {
            id: '003',
            date: new Date(2022, 3, 11, 15, 30),
            desc: '学习javascript',
            time: 40
        },
        {
            id: '004',
            date: new Date(2022, 3, 15, 10, 30),
            desc: '学习react',
            time: 80
        }
    ]



    return <Card className='logs'>
        {/* 
           在父组件中可以直接在子组件中设置属性
        */}
        {

            logsData.map(item => <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time} />)
            // logsData.map(item => <LogItem {...item} />)
        }
    </Card>
}

export default Logs