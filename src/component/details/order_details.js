import React from  'react'
import './index.less'
import {connect} from 'react-redux'
import { List} from 'antd/lib/list'
import { Avatar,Button,Icon} from 'antd'
import ShopModal from  '../modal/shop_modal'
import { orDetails } from '../../redux/order_redux'
import { shopCart } from '../../redux/shop_redux'
import { withRouter } from 'react-router-dom'

@withRouter
@connect(
  state=>state,
  {orDetails,shopCart}
)
class OrderDetails extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      visible: false,
      modalType: '再次购买',
      footerNull: undefined,
      data: {
        id: '1',
        ordernumber: '0000000000000001',
        status: 0,
        key: '1',
        avatar: ['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
        ],
        name: '中财PPR热水管',
        unit: 10,
        number: 1,
        price: 10,
        Specifications: '黑色',
        operation: ['删除订单']
      }
    }
  }
  shopOk= (val,value) => {
    // let id = this.props.shop.cart.id
    // let price = this.props.shop.cart.price
    // let allprice = value.number*price
    // let obj = {
    //   value:{
    //     Specifications:value.Specifications,
    //     color:value.color,
    //     number:value.number,
    //     allprice:allprice,
    //   },
    //   'id':id,
    // }
    const { id, price } = this.props.shop.cart
    let allprice = value.number*price
    let obj = {
      payMode:value.payMode,
      Specifications:value.Specifications,
      color:value.color,
      number:value.number,
      allprice:allprice,
      'id':id,
    }
    this.props.shopCart(obj)
    this.props.history.push(`/payment/${obj.id}`)
    console.log(val,obj)

    // if(this.state.modalType === '立即购买'){
    //   console.log(val)
    //   this.setState({
    //     visible:val
    //   })
    // }
    // else {
    //   this.setState({
    //     visible:val
    //   })
    // }
  }
  //再次购买
  againPay = () => {
    const {id} = this.state.data
    const url = window.open('http://localhost:3000/')
    url.location.href=`/#/details/shop/${id}`
  }
  logistics = () => {
    const {id} = this.state.data
    const url = window.open('http://localhost:3000/')
    url.location.href=`/#/details/logistics/${id}`
  }
  render(){
    const details= this.props.order.details
    const { modalType,visible,footerNull,data} = this.state
    console.log(this.props)
    return(
      <div className="container_details container_order">
        {/*<div className="back">*/}
          {/*<Button type="primary" onClick={()=>this.props.history.goBack()}>返回</Button>*/}
        {/*</div>*/}
          <div className="order order_details">
            <div className="order_top">
              <h3 className="tg">订单详情</h3>
              {data.status === 0 ?
                <h4>交易关闭</h4>:(null)
              }
              {data.status === 1 ?
                <h4>等待买家付款</h4>:(null)
              }
              {data.status === 2 ?
                <h4>买家已付款</h4>:(null)
              }
              {data.status === 3 ?
                <h4>卖家已发货</h4>:(null)
              }
              {data.status === 0 ?
                <h4>卖家缺货</h4>:null
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
              <Avatar src={data.avatar[0]} />
              <div className="name">
                <h6>{data.name}</h6>
                <h6>{data.Specifications}</h6>
              </div>
              <div className="price">
                <h6>¥{data.unit}</h6>
                <h6 className="num">×{data.number}</h6>
              </div>
            </div>
            <div className="information">
              <h6>订单号: {data.ordernumber}</h6>
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
            <div className="details_btn">
              <div className="againPay mt20">
                <Button onClick={()=>this.logistics('查询物流')} type='primary'>查询物流</Button>
              </div>
              <div className="againPay mt20">
                <Button onClick={()=>this.againPay('再次购买')} type='danger'>再次购买</Button>
              </div>
            </div>
          </div>
        <ShopModal
          visible={visible}
          title={modalType}
          onOk={this.shopOk}
          onCancel={this.onCancel}
          footerNull={footerNull}
        />
      </div>
    )
  }
}
export default OrderDetails