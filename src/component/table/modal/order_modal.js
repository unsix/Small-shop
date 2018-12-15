import React from 'react'
import { Radio, Form, Button, InputNumber, Modal, Input, Avatar, Cascader, Switch, List, Icon } from 'antd'
import {connect} from 'react-redux'
import './index.less'
@connect(
  state=>state
)
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
    const details = this.props.order.details
    // console.log(details)
    // console.log(this.props)
    return(
      <div>
        <Modal
          title={this.props.title }
          okText={this.props.title}
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          destroyOnClose={true}
        >
          {this.props.title === '取消订单'?
            <div className=" modal_order modal_cancel">
              <div className="pictures">
                <div className="img_dec">
                  {details.avatar?
                    <img src={details.avatar[0]} />:(null)
                  }
                </div>
              </div>
              <div className="name_spe">
                <h6>{details.name}</h6>
                <h6>{details.Specifications}</h6>
              </div>
              <div className="price_number">
                <h6><span>¥{details.price}</span></h6>
                <h6>×{details.number}</h6>
              </div>
            </div>
            :(null)
          }
          {this.props.title === '付款'?
            <div className="modal_order modal_pay">
              <div className="pictures">
                <div className="img_dec">
                  {details.avatar?
                    <img src={details.avatar[0]} />:(null)
                  }
                </div>
              </div>
              <div className="name_spe">
                <h6>{details.name}</h6>
                <h6>{details.Specifications}</h6>
              </div>
              <div className="price_number">
                <h6><span>¥{details.price}</span></h6>
                <h6>×{details.number}</h6>
              </div>
            </div>
            :(null)
          }
          {this.props.title === '申请开票'?
            <div className="modal_order modal_invoice">
              <div className="address">
                <div>
                  <Icon type="environment" />
                </div>
                <div className="address_content">
                  <h6>收件人: 小丸子 <span>13456801341</span></h6>
                  <h6>收货地址: 浙江省杭州市滨江区某某小区</h6>
                </div>
              </div>
              <div className="order_inf">
                <h6>订单号: {details.ordernumber}</h6>
                <h6>开票金额: {details.price}</h6>
                <p><span>注: </span>如果订单发生退货退款, 开票金额将变为最终实付金额</p>
              </div>
            </div>
            :(null)
          }
          {this.props.title === '下载合同'?
            <div>
              222
            </div>
            :(null)
          }
          {this.props.title === '申请退款'?
            <div>
              222
            </div>
            :(null)
          }
          {this.props.title === '确认收货'?
            <div>
              222
            </div>
            :(null)
          }
        </Modal>
      </div>
    )
  }
}
export default  OrderCart