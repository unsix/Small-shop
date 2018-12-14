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

  details = (record) => {
    this.props.orDetails(record)
    this.props.history.push(`/details/order/${record.id}`)
  }
  render(){
    return(
      <div className="container_order">
        <Tabs defaultActiveKey="1" >
          <TabPane tab="全部合同订单" key="1">
            <OrderTable
              details={this.details}
            />
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