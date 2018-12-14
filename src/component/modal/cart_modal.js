
import React from 'react'
import {Radio, Form,Button, InputNumber, Modal, Input, Avatar, Cascader, Switch } from 'antd'
import {connect} from 'react-redux'
import "./index.less"
@connect(
  state=>state
)
class CartModal extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      visible: false,
    }

  }
  handleOk = (e) => {
      this.props.onOk(false)
  }

  handleCancel = (e) => {
    this.props.onCancel();
  }
  render(){
    // console.log(this.props)

    const cart = this.props.shop.cart
    return(
      <div>
        <Modal
          okText="提交订单"
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          destroyOnClose={true}
        >
          <div className=" modal_shop modal_content">
            <h3>{cart.name}</h3>
            <div className="img_dec">
              {cart.avatar&&cart.avatar.map(v=>(
                <img key={v} src={v} alt={v}/>
              ))}
              <span>
                ¥{cart.price}
              </span>
            </div>

          </div>
        </Modal>
      </div>
    )
  }
}
export default  CartModal