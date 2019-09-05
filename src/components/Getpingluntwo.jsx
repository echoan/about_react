import React from 'react'
import objtwo from '@/components/getpinglun.scss'
console.log(objtwo)
export default function Getpinglun(props){
    return <div id={objtwo.box}>
                {/* <h2 className='title'>评论人：{props.name}</h2> */}
                <h2 className={objtwo.title}>评论人：{props.name}</h2>
                <p className={objtwo.content}>评论内容：{props.words}</p>
            </div>
}