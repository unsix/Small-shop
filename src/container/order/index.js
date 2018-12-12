import React from 'react'
import { Tabs } from 'antd';
import './index.less'
import OrderTable from '../../component/table/order'
import WaitPayTable from '../../component/table/wait_pay'
import WaitReceiveTable from '../../component/table/wait_rec'
import ShoppedTable from '../../component/table/shopped'
const TabPane = Tabs.TabPane;

class Order extends React.Component{

  render(){
    return(
      <div className="container_order">
        <Tabs defaultActiveKey="1" >
          <TabPane tab="全部合同订单" key="1">
            <OrderTable/>
          </TabPane>
          <TabPane tab="待付款" key="2">
            <WaitPayTable />
          </TabPane>
          <TabPane tab="待发货" key="3">
            <WaitReceiveTable />
          </TabPane>
          <TabPane tab="已发货" key="4">
            <ShoppedTable />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
export default Order