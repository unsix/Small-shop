import React from 'react'
import { Table, Button, Avatar, Popconfirm, Form, Modal, Input,Icon,Rate,Pagination,Badge } from 'antd'
import '../../style/table.less'
import OrderCart from './modal/order_modal'
import connect from 'react-redux/es/connect/connect'
import {orDetails} from '../../redux/order_redux'

const {confirm} = Modal;
const statusMap = ['default','error','processing','success']
const status = ['交易关闭','等待买家付款','买家已付款','卖家已发货']
@connect(
  state=>state,
  {orDetails}
)
class WaitReceiveTable extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      loading: false,
      sum:0,
      allprice:0,
      modalType:'取消订单',
      visible:false,
      data:[{
        ordernumber:'0000000000000001',
        status:2,
        key: '1',
        avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
        ],
        name: '中财PPR热水管',
        unit:10,
        number:1,
        price:10,
        Specifications: '绿色',
        operation:['申请开票','下载合同','申请退款','确认收货']
      },
        {
          ordernumber:'0000000000000001',
          status:2,
          key: '2',
          avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
          ],
          name: '霍尼韦尔PPR热水管',
          unit:20,
          number:1,
          price:20,
          Specifications: '蓝色',
          operation:['申请开票','下载合同','申请退款','确认收货']

        }
      ]
    }
  }
  componentDidMount(){

  }

  //传入父组件
  details = (record) => {
    if ( this.props.details)
      this.props.details(record)
  }
  //moadl提交
  handleok= (val,value) => {
  console.log(this.state.modalType)
    if(this.state.modalType === '申请发票'){
      let ordernumber = this.props.shop.order.details.ordernumber
      this.props.orDetails(value)
      this.setState({
        visible:val
      })
    }
    else {
      this.setState({
        visible:val
      })
    }
  }
  //操作与付款
  operation = (v,record,index) => {
    let _this = this               //由于内容onOK非箭头函数 改变this指向
    if(v==='删除订单'){
      confirm({
        title: '是否要删除该用户?',
        okText: '是',
        okType: '否',
        cancelText: 'No',
        onOk(){
          const dataChange = _this.state.data
          dataChange.splice(index, 1);
          _this.setState({
            data:dataChange
          })
        }
      })
    }
    if(v==='申请开票'){
      this.props.orDetails(record)
      this.setState({
        visible:true,
        modalType:v
      })
    }
    if(v==='下载合同'){
      this.props.orDetails(record)
      this.setState({
        visible:true,
        modalType:v
      })
    }
    if(v==='申请退款'){
      this.props.orDetails(record)
      this.setState({
        visible:true,
        modalType:v
      })
    }
    if(v==='确认收货'){
      this.props.orDetails(record)
      this.setState({
        visible:true,
        modalType:v
      })
    }
    if(v==='详情'){
      this.props.orDetails(record)
      this.setState({
        visible:true,
        modalType:v
      })
    }
  }
  //取消弹窗
  onCancel = () => {
    this.setState({
      visible:false
    })
  }
  //删除行
  onDelete = (record,index) => {
    console.log(record)
    const dataChange = this.state.data
    dataChange.splice(index, 1);
    this.setState({
      data:dataChange
    })
  }
  render() {
    const { visible ,modalType} = this.state
    const columns = [
      {
        title: '订单号',
        dataIndex: 'ordernumber',
      },
      {
        title: '订单状态',
        dataIndex: 'status',
        filters:[
          {
            text:status[0],
            value:0
          },
          {
            text:status[1],
            value:1
          },
          {
            text:status[2],
            value:2
          },
          {
            text:status[4],
            value:4
          }
        ],
        render:(val) => {
          return <Badge status={statusMap[val]} text={status[val]}/>
        }
      },
      {
        title: '图片',
        dataIndex: 'avatar',
        render:(value,record)=>{
          return(
            <div>
              <Avatar src={record.avatar[0]}  ></Avatar>
            </div>
          )
        }
      },
      {
        title: '名称',
        dataIndex: 'name',
      },
      {
        title: '颜色',
        dataIndex: 'Specifications',
      },
      {
        title: '单价',
        dataIndex: 'unit',
        render:val=>`¥${val}`
      },
      {
        title: '数量',
        dataIndex: 'number',
        render:(value,record) => {
          return(
            <div >
             {value}
            </div>
          )
        }
      },
      {
        title: '应付总额',
        dataIndex: 'price',
        render:val=>`¥${val}`
      },
      {
        title: '订单详情',
        dataIndex: 'details',
        render:(value,record) => {
          return(
            <div>
              <Button onClick={()=>this.operation('详情',record)}>详情</Button>
            </div>
          )
        }
      },
      {
        title: '操作',
        dataIndex:'operation',
        render:(value,record,index)=>{
          return(
            <div>
              {record.operation.map(v=>(
                <Button key={v} type={v==='付款'?'danger':null} style={{marginRight:'6px'}} onClick={()=>this.operation(v,record,index)}>{v}</Button>
              ))}
            </div>
          )
        }
      },
    ];
    return (
      <div className="container_table congtainer_order">
        <Table
          columns={columns}
          dataSource={this.state.data}
          onDelete={this.onDelete}
          pagination={false}
        />
        <Pagination
          current={1} total={1} pageSize={1}
        />
        <OrderCart
          visible={visible}
          title={modalType}
          onOk={this.handleok}
          onCancel={this.onCancel}
        />
      </div>
    );
  }
}

export  default Form.create()(WaitReceiveTable)