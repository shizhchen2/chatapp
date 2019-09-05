import React from 'react'
import {Button} from 'antd-mobile'
export default class NotFound extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <h2>找不到当前界面</h2>
                    <Button type="primary"
                    onClick={()=>this.props.history.replace('/')}
                    >回到首页</Button>
                </div>
            </div>
        )
    }
}