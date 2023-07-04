import React from "react";


/* 
    类组件必须要继承React.Component
       相较于函数组件 类组件的编写要麻烦一些 
         但是他两功能是一样的
*/
class App extends React.Component {

    //  类组件中必须添加一个 render() 方法   返回值必须是JSX

    render() {
        return <div>这是一个类组件</div>
    }
}


// 导出
export default App