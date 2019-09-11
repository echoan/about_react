import React from 'react'
import ReactDom from 'react-dom'
import Appone from '@/components/Appone'
//导入Ant-Design的样式表
// import 'antd/dist/antd.css'
//如果在引用第三方框架的时候，像上面这样将整个css全部引入进来，虽然是可以的，但是打包之后的文件体积显得过大
//有时候我们只引用了某个组件或者ui，那么这时再将整个的样式表全部引入就显得不是那么合适，所以可以通过配置将所需的样式按需自动加载
//同时也避免了在主入口文件引入样式表

//实现按需加载的方式
//1、安装用于按需加载组件代码和样式的 babel 插件npm install babel-plugin-import
//2、在.babellrc中的plugins中添加如下配置 ["import", { "libraryName": "antd", "style": "css" }]


ReactDom.render(<div>
    <Appone></Appone>
</div>,document.getElementById('app'))