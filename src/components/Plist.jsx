import React from 'react'
import Plitem from '@/components/Plitem'
import Sendpl from '@/components/Sendpl'

export default class PList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:[
                {id:0,name:'tom',words:'hello'},
                {id:1,name:'jack',words:'world'},
                {id:2,name:'cat',words:'byebye'}
            ]
        }
    }
    render(){
        return <div>
            {/* 评论标题 */}
            <h3>评论列表</h3>

            {/* 发表评论组件 */}
            {/* 在react中传递给组件数据或者方法都可以使用this.props.属性（或者方法名）来调用 ，这与Vue中数据传递使用props，方法传递使用this.$emit(方法名)是有不同的*/}
            {/* 在该组件点击发表评论时应该再一次调用UNSAFE_componentWillMount中执行的方法getPL()，刷新评论列表 */}
            <Sendpl reloadlist = {this.getPL}></Sendpl>


            {/* 评论列表组件 */}
            {this.state.list.map(item=>{
                return <Plitem {...item} key={item.name}></Plitem>
            })}
        </div>
    }
    //获取评论数组
    getPL=()=>{
        var getpl = JSON.parse(localStorage.getItem('lists')||'[]')
        this.setState({
            list:getpl
        })
    }
    //虚拟Dom挂载到页面之前调用getPL该方法，从本地取出数据替换掉之前的假数据
    UNSAFE_componentWillMount(){
        this.getPL()
    }
}