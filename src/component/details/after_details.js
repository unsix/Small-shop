import React from  'react'

import {connect} from 'react-redux'
import { List} from 'antd/lib/list'
import { Avatar,Button } from 'antd'

@connect(
  state=>state,
)
class AfterDetails extends React.Component{

  render(){
    console.log(this.props)
    const after= this.props.shop.after
    return(
      <div className="container_details container_evaluate">
        {/*<div className="back">*/}
          {/*<Button type="primary" onClick={()=>this.props.history.goBack()}>返回</Button>*/}
        {/*</div>*/}
        <div className="evaluate_top">
          <h3>售后服务{after}</h3>
        </div>

      </div>
    )
  }
}
export default AfterDetails