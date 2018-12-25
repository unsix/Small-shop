import React from  'react'

import {connect} from 'react-redux'
import { List} from 'antd/lib/list'
import { Avatar,Button } from 'antd'

@connect(
  state=>state,
)
class Logistics extends React.Component{

  render(){
    console.log(this.props)
    const after= this.props.shop.after
    return(
      <div className="container_logistics">
        {/*<div className="back">*/}
        {/*<Button type="primary" onClick={()=>this.props.history.goBack()}>返回</Button>*/}
        {/*</div>*/}
        <div className="evaluate_top">
          <h3>包裹信息</h3>
          <div className='logistics'>
            <h6>快递公司: 货拉拉</h6>
            <h6>快递单号: 234982714823749</h6>
            <h6>官方地址: wwww.huolala.com</h6>
            <h6>联系电话: 96333</h6>
          </div>
        </div>

      </div>
    )
  }
}
export default Logistics