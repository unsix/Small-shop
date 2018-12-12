import React from 'react'
import { Table, Button, Avatar, Popconfirm, Form, Modal, Input,Icon,Rate,Pagination,Badge } from 'antd'
import '../../style/table.less'


const {confirm} = Modal;
const statusMap = ['default','error','processing','success']
const status = ['交易关闭','等待买家付款','买家已付款','卖家已发货']
class WaitReceiveTable extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      loading: false,
      sum:0,
      allprice:0,
      visible:false,
      data:[{
        ordernumber:'0000000000000001',
        status:2,
        key: '1',
        avatar:'U',
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
          avatar:'W',
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

  //查看详情
  details = (record) => {
    this.setState({
      visible: true,
    }, () => {
    })
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
    const { getFieldDecorator } = this.props.form;
    const FormItem = Form.Item;
    const { TextArea } = Input;
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
            <Avatar  style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{record.avatar}</Avatar>
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
      },
      {
        title: '订单详情',
        dataIndex: 'details',
        render:(value,record) => {
          return(
            <div>
              <Button onClick={()=>this.details(record)}>详情</Button>
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
      // {
      //   title: '',
      //   dataIndex: 'delete',
      //   render:(value,record,index) => {
      //     return (
      //       <div>
      //         <Popconfirm
      //           title="确认加入购物车吗？"
      //           onConfirm = {()=>this.onDelete(record,index)}
      //         >
      //          <Button>删除订单</Button>
      //         </Popconfirm>
      //         <Button type="danger" style={{marginLeft:'30px'}}>付款</Button>
      //       </div>
      //
      //     )
      //   }
      // },
    ];
    return (
      <div className="container_shop congtainer_order">
        <Table
          columns={columns}
          dataSource={this.state.data}
          onDelete={this.onDelete}
          pagination={false}
        />
        <Pagination
          current={1} total={1} pageSize={1}
        />
        <Modal
          title="商品详情"
          onOk={this.handleOk}
          onCancel={() => this.setState({visible: false})}
          visible={this.state.visible}
        >
          <Form>
            <FormItem label="名字"  >
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(
                <Input  style={{ width: '100%' }} />
              )}
            </FormItem>
            <FormItem label="联系方式"  >
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(
                <Input  style={{ width: '100%' }} />
              )}
            </FormItem>
            <FormItem label="门街号" >
              {getFieldDecorator('specific_address', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(
                <TextArea placeholder={this.state.sum} autosize={{ minRows: 2, maxRows: 6 }} />,
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

export  default Form.create()(WaitReceiveTable)