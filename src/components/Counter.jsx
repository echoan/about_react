import React from 'react'

export default class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    //在封装一些组件的时候，组件内部肯定有一些数据是必须的，哪怕用户并没有传递一些相关的启动参数，这个时候在组件的内部，尽量给自己提供一个默认值
    //在组件中通过static defaultProps来为组件设置默认属性值
    static defaultProps = {
        oneCount:10
        //设置默认属性值之后，如果外界没有传递相关参数，那么设置的该属性值在组件初始化的时候就会派上用场，当有相关参数传递的时候，那么外界传递的参数就会替代该设置的默认值。
    }
    render(){
        return <div>
            <h3>这是一个Counter计数器组件</h3>
            <button>点击+1</button>
            <hr/>
            <h3>当前的数量是{this.props.oneCount}</h3>
        </div>
    }
}