import React from 'react'
//以上等同于 import React,{Component} from 'react'
import ReactDom from 'react-dom'

//class创建一个组件
class Onecomponent extends React.Component{
    constructor(){
        super()
    }
    //render函数用来渲染当前组件对应的虚拟Dom元素
    render(){
        //return null
        return <div>我是第一个用class类创建出来的react组件</div>
    }
}

//调用ReactDom render函数来渲染
ReactDom.render(
    <div>
        <Onecomponent></Onecomponent>
    </div>,document.getElementById('app'))