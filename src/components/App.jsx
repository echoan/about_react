import React from 'react'
import Home from '@/components/Home'
import Movie from '@/components/Movie'
import About from '@/components/About'

//在react中使用路由需要安装路由模块 npm install react-router-dom -S,之后需要在主入口将其导入
import {HashRouter,Route,Link} from 'react-router-dom'
//HashRouter表示路由的根容器，将来所有跟路由相关的内容都需要包裹在HashRouter里面，一个网站中只需要一个HashRouter就好
//Route 路由规则，有两个重要的属性 path和component
//Link表示路由的连接，相当于Vue中的<router-link-to=""></router-link>

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        //用HashRouter来包裹根组件, 为当前网站启用路由,在HashRouter中只能有唯一一个根元素，如此处的div
        return <HashRouter>
            <div>
                <h3>我是网站App的根组件</h3>
                <Link to = "/">首页</Link>&nbsp;&nbsp;
                <Link to = "/movie/top100/5">电影</Link>&nbsp;&nbsp;
                <Link to = "/about">我的</Link>&nbsp;&nbsp;
                <hr/>
                
                {/* 添加路由规则,path表示匹配的路由，component表示需要展示的组件*/}
                {/* 在Vue中有<router-view></router-view>这样的路由标签，专门用来放匹配到的路由组件，在react中，没有router-view，而是直接使用Route标签来当做占位符。 */}
                {/* react中的Route有两种身份，首先是路由规则，其次还是占位符 */}
                {/* 默认情况下，react中的路由是模糊匹配的，如果路由可以部分匹配成功，就会展示这个路由对应的组件 */}
                {/* 这里的exact是精确匹配的意思，比如我们有多层路由进行嵌套时，exact可以帮助我们精确匹配到你想跳转的路由。exact的值为bool型，为true是表示严格匹配，为false时为正常匹配 */}
                {/* 在路由中想要传递参数可以在匹配规则中使用:修饰符，表示这个位置匹配到的是参数 */}
                {/* 这里添加的replace的作用去除警告  Warning: Hash history cannot PUSH the same path; a new entry will not be added to the history stack */}
                <Route exact path = "/" component = {Home}></Route>
                <Route exact path = "/movie/:type/:id" component = {Movie} replace></Route>
                <Route path = "/about" component = {About}></Route>
            </div>
        </HashRouter>
    }
}