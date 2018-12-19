import React from 'react'
import { Table, Button, Avatar, Popconfirm, Form, Modal, Input,Icon,Rate,Pagination,Badge } from 'antd'
import OrderCart from './modal/order_modal'
import connect from 'react-redux/es/connect/connect'
import {orDetails} from '../../redux/order_redux'
import '../../style/table.less'

const {confirm} = Modal;
const statusMap = ['default','error','processing','success']
const status = ['交易关闭','等待买家付款','买家已付款','卖家已发货']
@connect(
  state=>state,
  {orDetails}
)
class ShoppedTable extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      loading: false,
      sum:0,
      allprice:0,
      modalType:'申请开票',
      visible:false,
      footerNull:undefined,
      data:[
        {
          ordernumber:'0000000000000001',
          status:3,
          key: '1',
          avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'],
          name: '霍尼韦尔PPR热水管(绿色)',
          unit:20,
          number:1,
          price:20,
          Specifications: '红色',
          operation:['申请开票','下载合同','申请退款']
        }
      ]
    }
  }
  componentDidMount(){

  }
  //操作与付款
  operation = (v,record,index) => {
    let _this = this               //由于内容onOK非箭头函数 改变this指向
    console.log(v)
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
      // this.props.orDetails(record)
      this.setState({
        visible:true,
        modalType:v
      })
    }
    if(v==='下载合同'){
      // this.props.orDetails(record)
      this.setState({
        visible:true,
        modalType:v
      })
    }
    if(v==='申请退款'){
      // this.props.orDetails(record)
      this.setState({
        visible:true,
        modalType:v
      })
    }
    if(v==='确认收货'){
      // this.props.orDetails(record)
      this.setState({
        visible:true,
        modalType:v
      })
    }
    if(v==='详情'){
      this.props.orDetails(record)
      this.setState({
        visible:true,
        modalType:v,
        footerNull:null
      },)
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
    const { visible ,modalType,footerNull} = this.state
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
            text:status[3],
            value:3
          },
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
              <Avatar src={record.avatar[0]}></Avatar>
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
            <div>
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
                <Button key={v} type={v==='付款'?'danger':null} style={{marginRight:'10px'}} onClick={()=>this.operation(v,record,index)}>{v}</Button>
              ))}
            </div>
          )
        }
      },
    ];
    return (
      <div className=" container_manager_address container_table congtainer_order">
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
          footerNull={footerNull}
        />
      </div>
    );
  }
}

export  default Form.create()(ShoppedTable)