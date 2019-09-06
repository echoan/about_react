// console.log("React真好用")
import React from 'react'
import ReactDom from 'react-dom'

import Counter from '@/components/Counter'


ReactDom.render(<div>
{/* 在这里规定每个使用该组件的用户必须传递一个默认的数量值，作为组件初始化的数据 */}
    <Counter oneCount = {1}></Counter>
    <hr/>
    <Counter oneCount = {100}></Counter>
</div>,document.getElementById('app'))