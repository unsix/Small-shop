import React from  'react'

import {connect} from 'react-redux'

@connect(
  state=>state,
)
class ShopDetails extends React.Component{

  render(){
    const details= this.props.menu.details_shop
    return(
      <div>
        <h1>{details.id}</h1>
      </div>
    )
  }
}
export default ShopDetails