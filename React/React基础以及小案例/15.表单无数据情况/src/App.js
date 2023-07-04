import Logs from './Components/Logs/Logs'
import './Components/UI/Card/Card.css'
import LogsForm from './LogsForm/LogsForm'
import './App.css'
import { useState } from 'react'
const App = () => {
    // 数据
    const [logsData, setLogsDate] = useState([
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
    ])

    // 要将logsform数据传递给App组件 并且插入到logsData数组中
    //定义一个函数
    const onSaveLogsHandler = (newLog) => {
        newLog.id = Date.now() + '';
        // logsData.push(newLog)
        setLogsDate([
            newLog,
            ...logsData

        ])

    }

    // 定义一个函数 从数据中删除一个日志
    const deleteLogByIndex = (index) => {
        setLogsDate(prevState => {
            const newLogs = [...prevState]
            newLogs.splice(index, 1)
            return newLogs
        })
    }



    return <div className='app'>
        {/* 引入logsform */}
        <LogsForm onSaveLog={onSaveLogsHandler} />
        <Logs logsData={logsData} onDelLog={deleteLogByIndex} ></Logs>
    </div>
}

export default App