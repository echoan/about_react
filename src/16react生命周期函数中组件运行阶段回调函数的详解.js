// console.log("React真好用")
import React from 'react'
import ReactDom from 'react-dom'

import CounterFour from '@/components/CounterFour'


ReactDom.render(<div>
{/* 在这里规定每个使用该组件的用户必须传递一个默认的数量值，作为组件初始化的数据 */}
    <CounterFour oneCount = {0}></CounterFour>
</div>,document.getElementById('app'))