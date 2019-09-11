import React from 'react'
import ReactDom from 'react-dom'


class Pinglun extends React.Component{
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
            <h3>这是一个评论列表</h3>
            {this.state.TextList.map(item=>
                <div key = {item.id}>
                    <h2>评论人：{item.name}</h2>
                    <p>评论内容：{item.words}</p>
                </div>
            )}
        </div>
    }
}
ReactDom.render(<div>
    <Pinglun></Pinglun>
</div>,document.getElementById('app'))