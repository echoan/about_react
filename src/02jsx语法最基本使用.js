import React from 'react'
import ReactDom from 'react-dom'

//使用jsx语法在js中以一种写html语言的方式来创建虚拟dom效率更高
const myDom = <div id = "Box">
    我是jsx语法创建的dom
    <h2>我是一个h2标签</h2>
</div>

//调用ReactDom.render来将虚拟dom挂载到页面

ReactDom.render(myDom,document.getElementById('app'));