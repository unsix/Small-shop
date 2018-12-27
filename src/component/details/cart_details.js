import React from 'react'
import {Radio, Form,Button, InputNumber, Modal, Input, Avatar, Cascader, Switch,List } from 'antd'
import {connect} from 'react-redux'
import "./index.less"
@connect(
  state=>state
)
class CartDetails extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      visible: false,
      allprice:'',
      data:[{
        id:'1',
        key: '1',
        avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
        ],
        name: '中财PPR热水管',
        unit:10,
        number:1,
        price:10,
        color:'黑色',
        Specifications: '大',
        star:0,
      }, {
        id:'2',
        key: '2',
        avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'],
        name: '霍尼韦尔PPR热水管',
        unit:20,
        number:1,
        price:20,
        color:'黑色',
        Specifications: '中',
        star:1
      }, {
        id:'3',
        key: '3',
        avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'],
        name: '宜家不锈钢液压铰链',
        unit:30,
        number:1,
        price:30,
        color:'黑色',
        Specifications: '小',
        star:0
      }, {
        id:'4',
        key: '4',
        avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'],
        name: '高渗透基膜',
        unit:40,
        number:1,
        price:40,
        color:'黑色',
        Specifications: '中',
        star:0
      }]
    }

  }
  handleOk = (e) => {
    this.props.onOk(false)
  }

  handleCancel = (e) => {
    this.props.onCancel();
  }
  placeOrder = () => {
    const id  = this.state.data.length
    const url = window.open('http://localhost:3000/')
    url.location.href=`/#/details/payMent/${id}`
  }
  render(){
    // console.log(this.props)

    const datacart = this.props.cart.dataCart.selectedRows
    const allprice = this.props.cart.dataCart.allprice
    console.log(datacart)
    const {data} = this.state
    return(
      <div className="container_width payment container_height">
        {/*{!this.props.shop.cart?<Redirect to='/order' />:null}*/}
        <div className="shop_top container_top contain">
          <h2>确认订单信息</h2>
        </div>
          <div className="container_details cart_details">
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={ <img src={item.avatar[0]} alt=""/>}
                    title={item.name}
                  />
                  <div className="content">
                    <div className="unit">
                      <h6><span>¥{item.unit}</span> <span>×1</span></h6>
                      <h6 className="spe">{item.Specifications}</h6>
                      <h6 className="cor">{item.color}</h6>
                      <h6 className="num">×{item.number}</h6>
                    </div>
                  </div>
                </List.Item>
              )}
            />
            <div>
              <h3 className="pce">合计金额 :
                <span>
                ¥{allprice}100
                </span>
              </h3>
            </div>
            <Button type="primary" className="fr" onClick={this.placeOrder}>提交订单</Button>
          </div>
      </div>
    )
  }
}
export default  CartDetails