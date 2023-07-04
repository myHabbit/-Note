import './App.css'
import { useState } from 'react'
const App = () => {





    /* 
        在react 当组件渲染完毕后 在修改组件中的变量 不会使视图重新渲染
        要使得 组件可以可以收到变量的影响 必须在变量修改后对组件进行重新渲染
        这里我们就需要一个特殊的变量 ，当这个变量被修改时 组件会自动重新渲染

        state相当于一个变量 。
        只是这个变量在react中进行了注册
        react会监控变量的变化，当state发生变化时，会自动触发组件的重新渲染 使得我们的
        的修改可以在页面中呈现出来

        在函数组件中 我们需要钩子函数 获取state

        使用useState()   来创建state
        它需要一个值作为参数 这个值就是state的初始值
          返回的的一个数组  数组中第一个元素 是初始值
             --初始值只用来显示数据 直接修改不会触发组件的重新渲染
           数组中第二个元素是个函数  通常会命名为setxxx
              --这个函数用来修改state，调用其修改state后 会触发组件的重新渲染
              --并且使用函数中的值 做为新的state的值
    */


    const result = useState(1)
    // const count = result[0]
    // const setCount = result[1]
    const [count, setCount] = result


    /* 
     当我们点击+时 数字增大
     点击-时  数字减少
    */
    //    创建一个变量 存储数字
    // let count = 1

    const addHandler = () => {
        // 点击后 数字+1
        setCount(count + 1)     //修改state的值
    };
    const lessHandler = () => {
        // 点击后 数字-1
        setCount(count - 1)     //修改state的值

    }


    return <div className={'app'}>
        <h1>{count}</h1>
        <button onClick={addHandler}>+</button>
        <button onClick={lessHandler}>-</button>
    </div>
}

export default App