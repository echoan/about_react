import React from 'react'

export default class BindEvent extends React.Component{
    constructor(){
        super()
        this.state = {}
    }
    render(){
        return <div>
                    我是BindEvent组件
                    <hr/>
                    {/* 在react中有一套自己的事件绑定机制，事件名小驼峰命名，参数必须为一个函数*/}
                    <button onClick={function(){console.log('我是react当中的点击事件')}}>onclick点击</button>
                    <hr/>
                    <button onMouseOver={function(){console.log('我是react当中的onmouseover事件')}}>onmouseover事件</button>
                     <hr/>
                    <button onMouseMove={function(){console.log('我是react当中的onmousemove事件')}}>onmousemove事件</button>
                     <hr/>
                    {/* 调用该实例对象下的clickEvent方法，点击才会执行 */}
                    <button onClick={this.clickEvent}>点击</button>
                     <hr/>
                     {/* 调用该实例对象下的clickEvent方法，初始化时就执行一次 */}
                    <button onClick={this.clickEvent()}>点击</button>
                     <hr/>
                    {/* react中绑定事件常用方式（箭头函数） 箭头函数内部，this指向外部环境的this，因此这里的this指向的是该实例 */}
                    <button onClick={()=>{this.clickEvent()}}>点击</button>

               </div>
    }
    // clickEvent(){
    //     console.log('哈哈哈哈哈')
    // }
    //将clickEvent改变为一个箭头函数
    clickEvent=()=>{
        console.log('哈哈哈哈')
    }
}