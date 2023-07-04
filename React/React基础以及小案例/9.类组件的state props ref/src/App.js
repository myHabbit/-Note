import React from 'react'
import './App.css'
import User from './Components/user'




class App extends React.Component {
    render() {
        return (<div className='app'>
            Hello React
            <User name='猪八戒' age={28} gender='男' />
        </div>)
    }
}

export default App



