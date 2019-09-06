import React from 'react'
//导入参数传递校验的模块
import dataRules from 'prop-types'

export default class CounterThree extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message:'hello',
            count:props.oneCount
        }
    }
    static defaultProps = {
        oneCount:10
    }
    static propTypes = {
        oneCount:dataRules.number
    }
    UNSAFE_componentWillMount(){
        console.log(document.getElementById('oneDom'));//null 此时虚拟dom还未创建
        console.log(this.props.oneCount)//100
        console.log(this.state.message)//hello
        this.oneMethod();//我是oneMethod方法
    }
    render(){
        console.log(document.getElementById('oneDom'))
        return <div>
            <h3 id = "oneDom">这是一个Counter计数器组件</h3>
            <button id="btn" onClick = {()=>this.changeData()}>点击+1</button>
            <hr/>
            <h3>当前的数量是{this.state.count}</h3>
        </div>
    }
    componentDidMount(){
        console.log(document.getElementById('oneDom'))
    }
    shouldComponentUpdate(nextProps,nextState){
        //shouldComponentUpdate()判断组件是否需要更新 返回布尔值 返回true则会调用render()重新渲染页面，之后数据和页面都是最新的，如果返回false
        //不会执行后续的生命周期函数，render()函数也不会调用，将会继续返回组件的运行中的状态，数据得到更新，组件的state状态会被修改，但是页面并没有重新渲染，是旧的。
        //在该组件中，通过this.state.count拿到的属性值是旧的，并不是最新的，在这里可以通过nextProps和nextState去获取到对应的最新的属性值
        // return this.state.count%2?false:true
        return nextState.count%2?false:true
        //只有偶数时才更新页面
    }
    oneMethod(){
        console.log('我是oneMethod方法')
    }
    changeData=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
}