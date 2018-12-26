import React from  'react'

import {connect} from 'react-redux'
import { List} from 'antd/lib/list'
import { Avatar,Button } from 'antd'

@connect(
  state=>state,
)
class ReundDetails extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      addressVisible: false,
      data:
        {
          orderNumber:'0000000000000001',
          orderStatus:0,
          key: '2',
          avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
          ],
          name: '霍尼韦尔PPR热水管(绿色)',
          unit:20,
          number:1,
          price:20,
          Specifications: '红色',
          operation:['下载合同','申请开票','查看详情']
        },
    }
  }

  render(){
    console.log(this.props)
    const { data } = this.state
    return(
      <div className="container_width payment container_height">
        {/*{!this.props.shop.cart?<Redirect to='/order' />:null}*/}
        <div className="shop_top container_top contain">
          <h2>退款详情</h2>
        </div>
        <div className="container_details ">
        <div className="order order_details">
          <div className="order_top">
            <h3 className="tg">退款详情</h3>
            {data.orderStatus === 0 ?
              (<div className="order_top_content">
                <h4>退款成功</h4>
                <h6>7天无理由退款</h6>
              </div>)
              :(null)
            }
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
          <div className="information refund_information">
            <h6>退款偏号 : 129376129873691826312837 </h6>
            <h6 className="order_allprice">退款总金额: <span> ¥306</span></h6>
            <h6>退回银行卡(尾号7788)</h6>
            <h6>退款时间 : 2018年12月12日 14:30:25</h6>
            <h6>申请件数 : 2018年12月12日 14:30:25</h6>
            <h6>申请时间 : 2018年12月12日 14:30:25</h6>
          </div>
        </div>

      </div>
      </div>
    )
  }
}
export default ReundDetails