import React from 'react'
import DataTypes from 'prop-types'

export default class CounterSix extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message:'绑定this并传参的几种方式',
            datamsg:'我是数据'
        }
        //绑定this并传参的方式二:在构造函数中绑定并传参
        //当为一个函数绑定bind,改变this的指向后，bind函数调用的结果，有一个返回值，这个返回值是改变this指向的函数的引用
        this.changedata2 = this.changedata2.bind(this,1000,2000)
    }
    render(){
        return <div>
            <h3>{this.state.message}</h3>
            {/* bind的作用，为前面的函数，修改函数内部的this指向，让函数内部的this指向bind参数列表中的第一个参数。
            bind和call和apply之间的区别
            call和apply在修改完this的指向后会立即调用前面的函数
            但是bind不会立即调用。bind参数列表中的第一个参数是用来修改this指向的，之后的参数，会被当做将来调用前面的函数的参数传递进去。 */}
            <button onClick = {this.changedata.bind(this,100,200)}>绑定this并传参的方式一</button>
            <hr/>
            <button onClick = {this.changedata2}>绑定this并传参的方式二</button>
            <hr/>
            <button onClick = {()=>this.changedata3(200,500)}>绑定this并传参的方式三</button>
            <hr/>
            <p>{this.state.datamsg}</p>
        </div>
    }
    //值的注意的是，因为上面绑定处理方法的时候，使用了bind，所以这里可以不再使用箭头函数。
    changedata(num1,num2){
        this.setState({
            datamsg:'我被改变了'+num1+num2
        })
    }
    changedata2(num1,num2){
        this.setState({
            datamsg:'我被改变了'+num1+num2
        })
    }
    changedata3(num1,num2){
        this.setState({
            datamsg:'我被改变了'+num1+num2
        })
    }
}