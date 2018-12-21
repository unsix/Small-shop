import  React from 'react';
import {Tabs, Form,Icon, Input, Button,  } from 'antd';
import { withRouter } from "react-router-dom"
import {connect} from 'react-redux'
import { orDetails } from '../../redux/order_redux'
@withRouter
@connect(
  state=>state,
  {orDetails}
)
class Service extends React.Component {
  render() {
    const menuName = this.props.menu.menuName
    return (
      <div className="container_change_pwd container_width">
        <div className="shop_top container_top">
          <h2>{menuName}</h2>
        </div>
      </div>

    );
  }
}

export  default Service