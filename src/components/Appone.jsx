import React from 'react'
import locale from 'antd/es/date-picker/locale/zh_CN'
import {DatePicker} from 'antd'

export default class Appone extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return <div>
            <h3>使用ant-design</h3>
            <DatePicker locale = {locale}></DatePicker>
        </div>
    }
}