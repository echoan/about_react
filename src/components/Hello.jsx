import React from 'react'

export default function Onecomponent(props){
    console.log(props);
    return <div>我是构造函数创建的第一个组件---姓名{props.name}----年龄{props.age}</div>
}