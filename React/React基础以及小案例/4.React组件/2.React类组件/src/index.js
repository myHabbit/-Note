/* 
   组件
      react中组件有两种创建方式
      函数式组件
          函数组件就是返回jsx的普通函数
          组件的首字母必须是大写
      类组件
*/

import ReactDOM from 'react-dom/client'
// 引入组件
import App from './App.js'

// function App() {
//     return <div>Hello React</div>
// }

const root = ReactDOM.createRoot(document.getElementById('root'))

// react可以直接通过JSX渲染
root.render(<App></App>)