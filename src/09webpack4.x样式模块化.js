import React from 'react'
import ReactDom from 'react-dom'
//导入Pinglun组件
import Pingluntwo from '@/components/Pingluntwo'
//如果在webpack.config.js中配置了路径 那么还可以使用别名来引入 如import Pinglun from '@/component/Pinglun'


ReactDom.render(<div>
    <Pingluntwo></Pingluntwo>
</div>,document.getElementById('app'))