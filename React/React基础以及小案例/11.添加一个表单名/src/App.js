import Logs from './Components/Logs/Logs'
import './Components/UI/Card/Card.css'
import LogsForm from './LogsForm/LogsForm'
import './App.css'
const App = () => {
    return <div className='app'>
        {/* 引入logsform */}
        <LogsForm />
        <Logs></Logs>
    </div>
}

export default App