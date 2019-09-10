import React from 'react'

export default class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            routeParams:props.match.params
        }
    }
    render(){
        // 如果想要在路由规则中提取匹配的参数进行使用可以使用this.props.match.params来访问
        console.log(this.props.match.params)
        return <div>
            <h4>我是电影 参数为{this.state.routeParams.type}---{this.state.routeParams.id} </h4>
        </div>
    }
}