import React from 'react'
import DataTypes from 'prop-types'

export default class CounterFive extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message:'我是子组件'
        }
    }
    render(){
        return <div>
            <h3>我是父组件</h3>
            <button onClick = {()=>this.changeData()}>点击改变数据</button>
            <hr/>
            <Son msg = {this.state.message} oneCount = {100}></Son>
        </div>
    }
    changeData=()=>{
        this.setState({
            message:'哈哈哈，哈哈哈'
        })
    }
}
class Son extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    static defaultProps = {
        oneCount:10
    }
    static propTypes = {
        oneCount:DataTypes.number
    }
    render(){
        return <div>
               <h5>{this.props.msg}</h5>
               <p>{this.props.oneCount}</p>
        </div>
    }
    //第一次渲染时是不会触发该状态的，在传递的参数被修改后才会触发
    UNSAFE_componentWillReceiveProps(nextProps){
        //想要获得最新的属性值，要通过其参数列表来获取
        console.log(this.props.msg+'------'+nextProps.msg)
        //我是子组件 -------哈哈哈，哈哈哈
    }
}