import React from 'react'
import ReactTypes from 'prop-types'

// export default class Father extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             color:'red'
//         }
//     }
//     render(){
//         return <div>
//             <h2>我是父组件</h2>
//             <Son color = {this.state.color}></Son>
//         </div>
//     }
// }
// class Son extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {}
//     }
//     render(){
//         return <div>
//             <h4>我是子组件</h4>
//             <Grandson color = {this.props.color}></Grandson>
//         </div>
//     }
// }
// class Grandson extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {}
//     }
//     render(){
//         return <div style = {{color:this.props.color}}>
//             <h5>我是孙子组件</h5>
//         </div>
//     }
// }
//以上案例的目的，是孙组件如果想用到父组件的state里的值，
//是经过了多次传导才得到的，而且子组件并没有使用该值，但是也参与了其中，这样子看上去过于繁琐，所以为了避免有时候出现这种状况，可以使用react中的Context的属性，如下：。


export default class Father extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            color:'red'
        }
    }
    // react中Context的使用
    //1、在父组件中，创建一个function，它有个固定的名称,getChildContext,这个方法内部返回一个对象，将需要共享给其他子组件的数据包含在其中。
    //2、需要使用属性校验，规定共享给子组件的数据的类型,childContextTypes
    getChildContext(){
        return {
            color:this.state.color
        }
    }
    static childContextTypes = {
        color:ReactTypes.string
    }
    render(){
        return <div>
            <h2>我是父组件</h2>
            <Son></Son>
        </div>
    }
}
class Son extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return <div>
            <h4>我是子组件</h4>
            <Grandson></Grandson>
        </div>
    }
}
class Grandson extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    //使用父组件共享的数据时同样也是必须先进行校验
    static contextTypes = {
        color:ReactTypes.string
    }
    render(){
        return <div>
            <h5 style = {{color:this.context.color}}>我是孙子组件----{this.context.color}</h5>
        </div>
    }

}