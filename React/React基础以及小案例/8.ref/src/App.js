import './App.css'
import { useRef } from 'react'
const App = () => {
    /* 
      react如何获取原生DOM对象
        1：使用传统的document对dom进行操作
        2：直接从react处获取dom对象
              步骤：
                 1：创建一个存储dom对象的容器
                     使用useRef() 钩子函数
                        钩子函数的注意事项 ：
                           1. react的钩子函数只能用于函数组件或者自定义钩子
                           2. 钩子函数只能直接在函数中调用
                 2: 将这个容器设置为想要获取dom对象的ref属性
                     <h1 ref={xxx}>.....</h1>
                     --react会自动将当前元素的dom对象 设置为容器的current属性

        useRef()
          --返回的就是一个普通的JS对象
           我们直接创建一个js对象 也可以代替useRef（）
        区别：
            我们创建的对象，组件每次重新渲染都会创建一个新对象
            useRef()创建的对象，可以确保每次渲染获取到的都是同一个对象


            -当你需要一个对象 不会因为组件的重新渲染而改变时 就可以使用useRef()
    */

    const h1Ref = useRef()    //创建一个容器
    // const h1Ref = {current:null}

    console.log(h1Ref.current);


    const clickHandler = () => {
        //  通过id获取h1
        // const header = document.getElementById('header')
        // header.innerHTML = '哈哈哈'

    }

    return <div className={'app'} ref={h1Ref}>
        <h1 id='header'>我是标题</h1>
        <button onClick={clickHandler} >1</button>
        <button >2</button>
    </div>
}

export default App