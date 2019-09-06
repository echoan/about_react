import React from 'react'
//导入参数传递校验的模块
import dataRules from 'prop-types'

export default class CounterTwo extends React.Component{
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
    

    //封装组件的目的是为了方便高效的开发,在封装组件的时候通常会为组件的一些必要数据进行校验，保证传递的参数是符合要求的，如果不符合要求，就在控制台给出警告。

    //React中通常会使用static propTypes对象对于外界传递的参数做类型校验，在React15的版本之前，prop-types并没有从React中抽离出来，在15的版本之后，才从React中抽离了出来，作为单独的一部分。
    //也就是说，在React15的版本之前，不需要安装该模块，可以直接使用，但是在15版本之后，需要手动安装，才可以使用。 npm install prop-types
    static propTypes = {
        //定义该组件传递的参数类型为number类型
        oneCount:dataRules.number
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