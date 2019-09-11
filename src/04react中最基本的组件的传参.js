import React from 'react'
import ReactDom from 'react-dom'
//引入创建的Helloword组件
import Helloword from './components/Helloword.jsx'
//构造函数创建组件
// function Helloword(props){
//     console.log(props);
//     //props.age = 100;
//     //console.log(props);//props只读无法修改
//     return <div>我是一个构造函数创建出来的组件,我的名字叫{props.name} 我的年龄是{props.age}岁</div>
// }
const obj = {
    name:'Tom',
    age:'30'
}
//解构的使用
const objone = {
    name:'cat',
    age:30
}
const objtwo = {
    sex:'male',
    ...objone
}
console.log(objtwo);
ReactDom.render(
<div>
    {/* 直接把创建的组件的名称 以标签的形式 放在页面即可使用 */}
    <Helloword name = {obj.name} age = {obj.age}></Helloword>
</div>,document.getElementById('app'))