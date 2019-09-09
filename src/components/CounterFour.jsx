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
        //在组件运行阶段，componentWillUpdate()过后还会再次调用render()函数，在render()执行完毕之前，页面上的dom还是旧的。
        console.log(this.refs.h3 && this.refs.h3.innerHTML+'--------------运行阶段调用render()时')

        return <div>
            <h3 id = "oneDom">这是一个Counter计数器组件</h3>
            <button id="btn" onClick = {()=>this.changeData()}>点击+1</button>
            <hr/>
            <h3 ref = 'h3'>当前的数量是{this.state.count}</h3>
        </div>
    }
    componentDidMount(){
        console.log(document.getElementById('oneDom'))
    }
    shouldComponentUpdate(nextProps,nextState){
        //shouldComponentUpdate()判断组件是否需要更新 返回布尔值 返回true则会调用render()重新渲染页面，之后数据和页面都是最新的
        //如果返回false，不会执行后续的生命周期函数，render()函数也不会调用，将会继续返回组件的运行中的状态，数据得到更新，组件的state状态会被修改，但是页面并没有重新渲染，是旧的。
        //在该组件中，通过this.state.count拿到的属性值是旧的，并不是最新的，在这里可以通过nextProps和nextState去获取到对应的最新的属性值
        // return this.state.count%2?false:true
        return nextState.count%2?false:true
        //只有偶数时才更新页面
    }
    //组件将要更新阶段的状态，在该状态下，内存中的虚拟dom和页面上的dom还都是旧的，所以在该阶段要谨慎操作dom，因为很可能只是操作的旧的Dom
    componentWillUpdate(){
        console.log(this.refs.h3.innerHTML+'---------------componentWillUpdate');
        //打印出来的是旧dom的innerHTML
    }
    //组件完成了更新的状态，在该状态下，数据和内存中的虚拟dom以及页面上的dom都是最新的，此时可以放心大胆的去操作dom
    componentDidUpdate(){
        console.log(this.refs.h3.innerHTML+'---------------componentDidUpdate');
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