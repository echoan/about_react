import React from 'react'
//导入组件Getpinglun
import Getpingluntwo from './Getpingluntwo'
//如果在webpack.config.js中配置了路径 那么还可以使用别名来引入 如import Getpinglun from '@/component/Getpinglun'
//导入外部样式表
import classObj from '@/components/pinglun.scss'
import bootstrapcss from 'bootstrap/dist/css/bootstrap.css'
console.log(classObj);
//导入之后在运行之前需要安装来解析css的依赖并在webpack.config.js中配置好 npm install style-loader css-loader -D 否则无法解析css
//导入的该样式表会对该组件下包括嵌套组件都起作用，所以为了保证不会对其他结构产生影响，需要做进一步的处理 这里的处理方法往往就是对样式表进行模块化处理（同样在webpack.config.js进行处理）
//webpack.config.js中 {test:/\.css$/,use:['style-loader','css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]']} 在css-loader后通过?添加参数modules等，表示为普通的样式表，启用模块化,并且自定义生成类名的格式
//如果{test:/\.css$/,use:['style-loader','css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]']}不可用，可用{test:/\.css$/,use:['style-loader','css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]']}来替换


//引入的外部框架的css在webpack.config.js文件中设置不对其进行模块化处理的方式如下

//有的时候需要在项目中使用其他的框架的ui,比如使用bootstrap.css,如果引用的外部其他框架的css进入项目，那么由于webpack.config.js中的配置
//也会对引入的css也进行模块化处理，模块化之后，在引用该css样式中的类时，通过访问属性的方式来为相关元素添加类名就显得及其繁琐，这时候，可以做其他处理 如下：
//将自己的样式表改为以scss或者less为结尾的文件，安装处理less或scss的依赖，并在webpack.config.js中配置好 npm install sass-loader node-sass -D
//{test:/\.scss$/,use:[{loader:'style-loader'},{loader:'css-loader',options:{modules:{localIdentName:'[path][name]-[local]-[hash:base64:5]'}}},{loader:'sass-loader'}]}在css-loader后通过配置相关参数为普通的样式表启用模块化,并且自定义生成类名的格式
//并在webpack.config.js中将css配置为{test:/\.css$/,use:['style-loader','css-loader]} 这样就可以像正常一样使用外部引入的css了，如 <button class="btn btn-primary">按钮</button>而将自己定义的css后缀改为scss不会受到影响
//Sass是成熟、稳定、强大的CSS预处理器，而SCSS是Sass3版本当中引入的新语法特性，完全兼容CSS3的同时继承了Sass强大的动态功能。


//在引用某个包的时候，如果这个包安装到了node_modules中，在其他组件使用的时候，可以直接以包名引入自己的模块。


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
            {/* <h3 className='test'>这是一个评论列表</h3> */}
            {/* <h3 className='title'>这是一个评论列表</h3> */}
            {/* <h3 className={classObj.title}>这是一个评论列表</h3> */}
            {/* <h3 className={classObj.title + ' test'}>这是一个评论列表</h3> 或者如下 */}
            <h3 className={[classObj.title,'test'].join(' ')}>这是一个评论列表</h3>
            {this.state.TextList.map(item=><Getpingluntwo {...item} key={item.id}></Getpingluntwo>)}
            <button className="btn btn-primary">我是按钮</button>
        </div>
    }
}