import React from  'react'
import './index.less'
import {connect} from 'react-redux'
import { List} from 'antd/lib/list'
import { Avatar,Button,Icon} from 'antd'
import ShopModal from  '../modal/shop_modal'

@connect(
  state=>state,
)
class OrderDetails extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      visible:false,
      modalType:'再次购买',
      footerNull:undefined,
    }
  }
  onModal = (type,record) => {
    if(type === '再次购买') {
      // console.log(type)
      this.setState({
        visible:true,
        modalType:type
      })
      // console.log(this.state.visible)
    }
    if(type === '查询物流') {
      // console.log(type)
      this.setState({
        visible:true,
        modalType:type,
        footerNull:null,
      })
      // console.log(this.state.visible)
    }
  }
  //close modal
  onCancel = () => {
    this.setState({
      visible:false,
      footerNull:undefined,
    })
  }
  render(){
    const details= this.props.order.details
    const { modalType,visible,footerNull} = this.state
    return(
      <div className="container_details container_order">
        {/*<div className="back">*/}
          {/*<Button type="primary" onClick={()=>this.props.history.goBack()}>返回</Button>*/}
        {/*</div>*/}
        {details.avatar?
          <div className="order order_details">
            <div className="order_top">
              <h3>订单详情</h3>
              {details.status === 0 ?
                <h3>交易关闭</h3>:(null)
              }
              {details.status === 1 ?
                <h3>等待买家付款</h3>:(null)
              }
              {details.status === 2 ?
                <h3>买家已付款</h3>:(null)
              }
              {details.status === 3 ?
                <h3>卖家已发货</h3>:(null)
              }
              {details.status === 0 ?
                <h6>卖家缺货</h6>:null
              }
            </div>
            <div className="address">
              <div>
                <Icon type="environment" />
              </div>
             <div className="address_content">
               <h6>收件人: 小丸子 <span>13456801341</span></h6>
               <h6>收货地址: 浙江省杭州市滨江区某某小区</h6>
             </div>
            </div>
            <div className="content">
              <Avatar src={details.avatar[0]} />
              <div className="name">
                <h6>{details.name}</h6>
                <h6>{details.Specifications}</h6>
              </div>
              <div className="price">
                <h6>¥{details.unit}</h6>
                <h6 className="num">×{details.number}</h6>
              </div>
            </div>
            <div className="information">
              <h6>订单号: {details.ordernumber}</h6>
              <h6>创建时间: 2018年11月11日 14:30:25</h6>
              <h6>付款时间: 2018年11月11日 14:30:25</h6>
              <h6>支付方式: 支付宝</h6>
              <h6>发货时间: 2018年11月11日 14:30:25</h6>
            </div>
            <div>
              <div className="footer">
                <h6>商品金额</h6>
                <h6>¥296</h6>
              </div>
              <div className="footer">
                <h6>配送费</h6>
                <h6>¥10</h6>
              </div>
              <div className="footer">
                <h6>合计费用</h6>
                <h6 className="order_allprice"><span>¥306</span></h6>
              </div>
            </div>
            <div>
              <div className="againPay mt20">
                <Button onClick={()=>this.onModal('查询物流')} type='primary'>查询物流</Button>
              </div>
              <div className="againPay mt20">
                <Button onClick={()=>this.onModal('再次购买')} type='danger'>再次购买</Button>
              </div>
            </div>
          </div>
          :(
            null
          )
        }
        <ShopModal
          visible={visible}
          title={modalType}
          onOk={this.handleok}
          onCancel={this.onCancel}
          footerNull={footerNull}
        />
      </div>
    )
  }
}
export default OrderDetails