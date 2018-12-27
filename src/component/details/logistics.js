import React from  'react'

import {connect} from 'react-redux'
import { List} from 'antd/lib/list'
import { Avatar,Button } from 'antd'

@connect(
  state=>state,
)
class Logistics extends React.Component{

  render(){
    return(
      <div className="container_width payment container_height">
        {/*{!this.props.shop.cart?<Redirect to='/order' />:null}*/}
        <div className="shop_top container_top contain">
          <h2>物流信息</h2>
        </div>
       <div className="container_details container_logistics">
        {/*<div className="back">*/}
        {/*<Button type="primary" onClick={()=>this.props.history.goBack()}>返回</Button>*/}
        {/*</div>*/}
        <div className="evaluate_top">
          <div className='logistics'>
            <h6>快递公司: 货拉拉</h6>
            <h6>快递单号: 234982714823749</h6>
            <h6>官方地址: wwww.huolala.com</h6>
            <h6>联系电话: 96333</h6>
          </div>
        </div>

      </div>
      </div>
    )
  }
}
export default Logistics