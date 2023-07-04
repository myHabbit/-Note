import './App.css'
import { useState } from 'react'
const App = () => {

    console.log('函数执行了');
    /* 
      state就是一个被state管理的变量
        当我们通过setstate()修改变量的值时，会触发组件的重新渲染
    */

    const result = useState(1)

    const [count, setCount] = result


    const addHandler = () => {
        // 点击后 数字+1
        setCount(count + 1)     //修改state的值
    };



    return <div className={'app'}>
        <h1>{count}</h1>
        <button onClick={addHandler}>1</button>
    </div>
}

export default App