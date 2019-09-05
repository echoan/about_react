import React from 'react'
//以上等同于 import React,{Component} from 'react'
import ReactDom from 'react-dom'

//class创建一个组件
class Onecomponent extends React.Component{
    constructor(){
        super()
        //this.state在这里就相当于vue中的data(){return{}}
        this.state = {
            message:'我是class关键字创建的组件的私有数据'
        }
    }
    //render函数用来渲染当前组件对应的虚拟Dom元素
    render(){
        //return null
        //this.props.name = 'jack' 试图修改props的属性 会报错 。无论是使用class关键字创建的组件还是使用构造函数创建的组件 props都是只读的不可修改其属性。
        //class创建的组件的私有数据是可以被修改的，它是可读可写的
        this.state.message = '我被修改了'
        //class关键字创建的组件在使用外界的参数时，不需要接受，直接使用this.props.属性名即可访问，this代表的是当前组件创建的实例对象
        return <div>我是第一个用class类创建出来的react组件---{this.props.name}-----{this.props.age}------{this.state.message}</div>
    }
}
const user = {
    name:'tom',
    age:20
}
//调用ReactDom render函数来渲染
ReactDom.render(
    <div>
        <Onecomponent {...user}></Onecomponent>
    </div>,document.getElementById('app'))