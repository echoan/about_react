import React from 'react'

//jsx中写行内样式
// export default function Getpinglun(props){
//     {/* jsx语法中如果想加入行内样式那么应该照如下语法来写,属性值不是数字的要加引号，数字不需要 */}
//     return <div style={{border:'1px solid #ccc',margin:'10px',padding:'10px',boxShadow:'0 0 10px #ccc'}}>
//                 <h2 style={{fontSize:'16px'}}>评论人：{props.name}</h2>
//                 <p style = {{fontSize:'12px'}}>评论内容：{props.words}</p>
//             </div>
// }


//如果向上面这样写样式，反而会让结构看起来更加混乱因此可以将样式进行一下简单的封装处理 如下
// const divstyle = {border:'1px solid #ccc',margin:'10px',padding:'10px',boxShadow:'0 0 10px #ccc'};
// const hstyle = {fontSize:'16px'};
// const pstyle = {fontSize:'12px'};
// export default function Getpinglun(props){
//     return <div style={divstyle}>
//                 <h2 style={hstyle}>评论人：{props.name}</h2>
//                 <p style={pstyle}>评论内容：{props.words}</p>
//             </div>
// }


//可以进一步做如下处理
// const styles = {
//     divstyle:{border:'1px solid #ccc',margin:'10px',padding:'10px',boxShadow:'0 0 10px #ccc'},
//      hstyle:{fontSize:'16px'},
//      pstyle:{fontSize:'12px'}
// }
//  export default function Getpinglun(props){
//     return <div style={styles.divstyle}>
//                 <h2 style={styles.hstyle}>评论人：{props.name}</h2>
//                 <p style={styles.pstyle}>评论内容：{props.words}</p>
//             </div>
// }



//进一步将styles抽离为一个单独的样式模块 如下
//引入抽离出去的styles.js
import styles from '@/components/styles'
export default function Getpinglun(props){
    return <div style={styles.divstyle}>
                <h2 style={styles.hstyle}>评论人：{props.name}</h2>
                <p style={styles.pstyle}>评论内容：{props.words}</p>
            </div>
}