import React from 'react'
//将index.js中创建的一个组件抽离为一个单独的文件
function Helloword(props){
    return <div>我是一个构造函数创建出来的组件,我的名字叫{props.name} 我的年龄是{props.age}岁</div>
}
//将组件文件导出
export default Helloword