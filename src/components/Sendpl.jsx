import React from 'react'

export default class Sendpl extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return <div>
            <label htmlFor="pinglunren">评论人</label><br/>
            <input type="text" name = "pinglunren" ref = 'pinglunren'/><br/>
            <label htmlFor="contentBox">评论内容</label><br/>
            <textarea name="contentBox" id="contentBox" cols="30" rows="10" ref = "contentBox"></textarea>
            <button onClick = {()=>this.Addpl()}>发表评论</button>
        </div>
    }
    Addpl = ()=>{
        //1、获取评论人和评论内容
        //2、从本地存储中获取获取之前的评论数组
        //3、把最新的评论人和评论内容放到数组中
        //4、把最新的数组存储在本地并清空相关区域
        const content = {name:this.refs.pinglunren.value,words:this.refs.contentBox.value}
        const pllist = JSON.parse(localStorage.getItem('lists')||'[]')
        pllist.unshift(content)
        localStorage.setItem('lists',JSON.stringify(pllist))
        console.log(localStorage.getItem('lists'))
        this.refs.pinglunren.value=this.refs.contentBox.value=''
        //调用传递的getPL方法刷新评论列表
        this.props.reloadlist()

    }
}