import React from 'react'

export default class Plitem extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return <div style = {{border:'1px solid #ccc',margin:'15px 0'}}>
            <h3>评论人：{this.props.name}</h3>
            <p>评论内容：{this.props.words}</p>
        </div>
    }
}