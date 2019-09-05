import React from 'react'

export default class BindEventThree extends React.Component{
    constructor(){
        super();
        this.state = {
            message:'哈哈哈哈哈',
            name:'tom'
        }
    }
    render(){
        return <div>
                <button onClick={()=>{this.changeState()}}>点击按钮修改state的message</button>
                <p>{this.state.message}</p>
                {/* react中当为input绑定value值后，必须要做的事情，要么为input 添加readOnly属性，要么为input添加onChange处理事件 */}
                {/* <input type="text" style={{width:'100%'}} value={this.state.message} readOnly /> */}
                <input type="text" style={{width:'100%'}} value={this.state.message} onChange={(e)=>{this.textChange(e)}}  ref='txt'/>
        </div>
    }

    //每当文本框的内容变化，自然会调用该事件
    textChange=(e)=>{
        //onChange事件中用于获取文本框的值有两种方案 
        //方案1、通过参数e来获取
        console.log(e.target.value);
        //方案2、通过refs来获取
        console.log(this.refs.txt.value)
        const newValues = e.target.value;
        this.setState({
            message:newValues
        })
    }
    changeState = ()=>{
        this.setState({
            message:'啦啦啦啦啦啦'
        },console.log('我其实应该是一个回调函数'))
    }
    

}