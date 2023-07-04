import React, { Component } from 'react'

export default class user extends Component {
    /* 
      类组件中的props是存储到类的实例对象的上的
         可以直接通过实例对象访问
           this.props


      类组件中 state统一存储在了实例对象的state属性当中
         可以通过 this.state 访问
          通过this.setState对其进行修改
          当我们通过this.setState() 修改state时
              react只会修改设置了的属性

       函数组件中 事件响应函数可以直接以函数的形式定义在组件中
           类组件中  响应函数以类的方法来定义
           但是这仅限于直接存储在state中的属性


           获取dom对象
               1.创建一个属性  用来存储dom对象
                2.将这个属性 设置为指定元素的ref值
    */

    //向state当中添加属性
    divRef = React.createRef()

    state = {
        count: 0,
        test: '哈哈',
        obj: { name: '孙悟空', age: 18 }
    };

    clickHandler = () => {
        // this.setState({
        //     count: 10
        // })

        // this.setState({
        //     obj: { ...this.state.obj, name: '沙和尚' }
        // })
        // this.setState(prevSate => {
        //     return {
        //         count: prevSate.count + 1
        //     }
        // })

        this.divRef.current.style.background = 'red'
        console.log(this.divRef.current);
    }




    render() {
        return (
            <div ref={this.divRef}>
                <h1>{this.state.count}--{this.state.test}</h1>
                <h2>{this.state.obj.name}--{this.state.obj.age}</h2>

                <button onClick={this.clickHandler}>点我</button>
                <ul>
                    <li>姓名：{this.props.name}</li>
                    <li>年龄:{this.props.age}</li>
                    <li>性别: {this.props.gender}</li>
                </ul>
            </div>
        )
    }
}
