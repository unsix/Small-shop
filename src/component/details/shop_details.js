import React from  'react'

import {connect} from 'react-redux'
import { List} from 'antd/lib/list'
import { Avatar,Button} from 'antd'
import './index.less'
@connect(
  state=>state,
)
class ShopDetails extends React.Component{

  render(){
    const details= this.props.shop.details
    return(
      <div className="container_details container_evaluate">
        <div className="back">
          <Button type="primary" onClick={()=>this.props.history.goBack()}>返回</Button>
        </div>
        <div className="evaluate_top">
          <h3>商品详情{details.id}</h3>
        </div>

      </div>
    )
  }
}
export default ShopDetails