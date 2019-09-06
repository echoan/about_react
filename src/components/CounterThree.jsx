import React from 'react'
//导入参数传递校验的模块
import dataRules from 'prop-types'

export default class CounterThree extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message:'hello',
            //将props.oneCount赋值给state中的一个属性
            count:props.oneCount
        }
    }
    static defaultProps = {
        oneCount:10
    }
    static propTypes = {
        oneCount:dataRules.number
    }
    //componentWillMount 组件将要挂载到页面时触发该函数,此时组件还没有挂载到页面上
    //而且内存中，虚拟的Dom结构还没有被创建出来，但是初始化时的默认属性和this.state的属性是可以在函数中访问到的，可以调用组件中定义的方法
    UNSAFE_componentWillMount(){
        console.log(document.getElementById('oneDom'));//null 此时虚拟dom还未创建
        console.log(this.props.oneCount)//100
        console.log(this.state.message)//hello
        this.oneMethod();//我是oneMethod方法
    }
    render(){
        console.log(document.getElementById('oneDom'))
         console.log('-------------------')
        //在return之前 虚拟Dom还未创建完成，页面是空的，拿不到任何元素
        return <div>
            <h3 id = "oneDom">这是一个Counter计数器组件</h3>
            <button id="btn" onClick = {()=>this.changeData()}>点击+1</button>
            <hr/>
            <h3>当前的数量是{this.state.count}</h3>
        </div>
        //return 执行完毕之后，虚拟Dom结构已经创建完，但还没有挂载到页面上
    }
    componentDidMount(){
        //该阶段类比Vue中生命周期的mounted
        //如果我们想操作dom元素，最早可以在该阶段去操作
        console.log(document.getElementById('oneDom'))
      
        // document.getElementById('btn').onclick = ()=>{
        //     // console.log('原生js在react绑定的事件')
        //     this.setState({
        //         count:this.state.count+1
        //     })
        // }
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