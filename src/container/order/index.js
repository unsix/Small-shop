import React from 'react'
import { Tabs } from 'antd';
import './index.less'
import { orDetails } from '../../redux/order_redux'
import { shopCart } from  '../../redux/shop_redux'
import connect from 'react-redux/es/connect/connect'
import OrderTable from '../../component/table/order'
import WaitPayTable from '../../component/table/wait_pay'
import WaitReceiveTable from '../../component/table/wait_rec'
import ShoppedTable from '../../component/table/shopped'
import EvaluateTable from  '../../component/table/evaluate'
import RefundAfter from  '../../component/table/refund_after'

const TabPane = Tabs.TabPane;

@connect(
  state=>state,
  {orDetails,shopCart}
)
class Order extends React.Component{

  payCount = (obj) => {
    this.props.shopCart(obj)
    this.props.history.push(`/payment/${obj.id}`)
  }
  render(){
    const menuName = this.props.menu.menuName
    return(
      <div className="container_order container_width">
        <div className="shop_top container_top">
          <h2>{menuName}</h2>
        </div>
        <Tabs defaultActiveKey="1" >
          <TabPane tab="全部合同订单" key="1">
            <OrderTable
              // details={this.details}
              payCount={this.payCount}
            />
          </TabPane>
          <TabPane tab="待付款" key="2">
            <WaitPayTable
              details={this.details}
              payCount={this.payCount}
            />
          </TabPane>
          <TabPane tab="待发货" key="3">
            <WaitReceiveTable
              details={this.details}
            />
          </TabPane>
          <TabPane tab="已收货" key="4">
            <ShoppedTable
              details={this.details}
            />
          </TabPane>
          <TabPane tab="评价" key="5">
            <EvaluateTable />
          </TabPane>
          <TabPane tab="退款售后" key="6">
            <RefundAfter />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
export default Order