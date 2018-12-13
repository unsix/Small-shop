import React from  'react'

import {connect} from 'react-redux'
import { List } from 'antd/lib/list'
import { Avatar } from 'antd'

@connect(
  state=>state,
)
class AfterDetails extends React.Component{

  render(){
    const after= this.props.shop.after
    return(
      <div className="container_details container_evaluate">
        <div className="evaluate_top">
          <h3>售后服务{after}</h3>
        </div>

      </div>
    )
  }
}
export default AfterDetails