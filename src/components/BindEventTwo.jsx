import React from 'react'

export default class BindEventTwo extends React.Component{
    constructor(){
        super();
        this.state = {
            message:'哈哈哈哈哈',
            name:'tom',
            age:20
        }
    }
    render(){
        return <div>
                <button onClick={()=>{this.changeState(1,2)}}>点击按钮修改state的message</button>
                <p>{this.state.message}</p>
        </div>
    }
    changeState=(n1,n2)=>{
        //这里的n1,n2是接收的调用该方法时的参数
        //在react，想要修改或者为state重新赋值，不能使用this.state.xxxx = 值的方式，应该调用react提供的this.setState({属性:值})的方式
        this.setState({
            message:'我被修改了'+n1+n2
        },function(){
            //修改状态值后的回调
            console.log(this.state.message)
        })
        console.log(this.state.message)
        //在React中推荐使用this.setState({})来修改状态值，并且在setState中，只会把对应的state状态更新，而不会覆盖其他的state状态
        //另外this.setState是一个异步的操作，所以在通过这种方式修改state后，如果希望第一时间得到修改过后的状态值，需要在this.setState({},callback)执行回调函数callback这里获取
    }

}