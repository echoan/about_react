import React from 'react'
//导入组件Getpinglun
import Getpinglun from './Getpinglun'
//如果在webpack.config.js中配置了路径 那么还可以使用别名来引入 如import Getpinglun from '@/component/Getpinglun'

export default class Pinglun extends React.Component{
    constructor(){
        super()
        this.state = {
            TextList:[
                {id:0,name:'张三','words':'哈哈,沙发'},
                {id:1,name:'李四','words':'啦啦,板凳'},
                {id:2,name:'王五','words':'哈哈,凉席'},
                {id:3,name:'赵六','words':'哈哈,砖头'},
                {id:4,name:'田七','words':'哈哈,楼下山炮'}
            ]
        }
    }
    render(){
        return <div>
            {/* jsx语法中如果想加入行内样式那么应该照如下语法来写,属性值不是数字的要加引号，数字不需要 */}
            <h3 style = {{color:'red',fontSize:'33px',zIndex:3,fontWeight:200,textAlign:'center'}}>这是一个评论列表</h3>
            {this.state.TextList.map(item=><Getpinglun {...item} key={item.id}></Getpinglun>)}
        </div>
    }
}