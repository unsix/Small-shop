import React from  'react'

import {connect} from 'react-redux'
import { List} from 'antd/lib/list'
import { Avatar,Button} from 'antd'

@connect(
  state=>state,
)
class OrderDetails extends React.Component{

  render(){
    const details= this.props.order.details
    return(
      <div className="container_details container_order">
        <div className="back">
          <Button type="primary" onClick={()=>this.props.history.goBack()}>返回</Button>
        </div>
        <div className="evaluate_top">
          <h3>订单详情{details.id}</h3>
        </div>

      </div>
    )
  }
}
export default OrderDetails