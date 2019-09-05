// console.log('哈哈')
import React from 'react'
import ReactDom from 'react-dom'
import Onecomponent from '@/components/Onecomponent'
const person = {
    name:'tom',
    age:25
}



ReactDom.render(<div>
    <Onecomponent {...person}></Onecomponent>
</div>,document.getElementById('app'))