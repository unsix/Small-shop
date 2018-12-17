import React from 'react'
import { Tabs } from 'antd';
import './index.less'
import { orDetails } from '../../redux/order_redux'
import connect from 'react-redux/es/connect/connect'
import OrderTable from '../../component/table/order'
import WaitPayTable from '../../component/table/wait_pay'
import WaitReceiveTable from '../../component/table/wait_rec'
import ShoppedTable from '../../component/table/shopped'
const TabPane = Tabs.TabPane;

@connect(
  state=>state,
  {orDetails}
)
class Order extends React.Component{
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
            />
          </TabPane>
          <TabPane tab="待付款" key="2">
            <WaitPayTable
              details={this.details}
            />
          </TabPane>
          <TabPane tab="待发货" key="3">
            <WaitReceiveTable
              details={this.details}
            />
          </TabPane>
          <TabPane tab="已发货" key="4">
            <ShoppedTable
              details={this.details}
            />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
export default Order