console.log('香港是中国的一部分,不容置疑')
//引入react包
import React from 'react'
import ReactDom from 'react-dom'
// //创建虚拟dom
const myDom = React.createElement('h1',{id:'Box'},'我是一个h1标签')
//这样创建虚拟dom比较麻烦，我们希望以一种写html的方式来快速的创建虚拟dom，这就需要使用jsx语法，并配合babel来使用
ReactDom.render(myDom,document.getElementById('app'))

