import React from 'react'
import {Radio, Form,Button, InputNumber, Modal, Input, Avatar, Cascader, Switch,List } from 'antd'
// import {connect} from 'react-redux'
// import "./index.less"
// @connect(
//   state=>state
// )
class OrderCart extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      visible: false,
      allprice:''
    }

  }
  handleOk = (e) => {
    this.props.onOk(false)
  }

  handleCancel = (e) => {
    this.props.onCancel();
  }
  render(){
    console.log(this.props)
    return(
      <div>
        <Modal
          title={this.props.title === '取消订单'?'取消订单':'付款' }
          okText={this.props.title === '取消订单' ? "确定" : "提交订单"}
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          destroyOnClose={true}
        >
          111
        </Modal>
      </div>
    )
  }
}
export default  OrderCart