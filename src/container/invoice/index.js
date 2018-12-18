import React from 'react'
import { Table, Button, Popconfirm, Icon, Switch, Form, Badge, Pagination } from 'antd'
import Invoice from  '../../component/modal/invoice_modal'
import './index.less'
import {connect} from 'react-redux'
import { dataAdress } from '../../redux/address_redux'


const orderStatus = ['待发货','交易成功']
const invoiceStatus = ['待开票','已开票']
@connect(
  state=>state,
  {dataAdress}
)
class ManagerAdress extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      addressVisible: false,
      editRow: {},
      modalType: "新建地址",
      data:[
        {
          id:'1',
          key: '1',
          orderNumber:'00120301230120302',
          phone: '13456801341',
          orderStatus:0,
          startTime:'2018-12-12 10:20:00',
          invoiceStatus:0,
          invoiceType:'纸质发票',
          invoicePrice:'199'

        },
      ]
    }
  }
  componentDidMount(){

  }
  //提交
  handleok = (val,value) => {
    console.log(value)
    // const _address = value.address_select+value.specific_address
    // const address = _address.replace(/,/g, "")
    let addAdress = {
      key:value.orderNumber,
      orderNumber:value.orderNumber
    };

    console.log(addAdress)
    let data = this.state.data
    if(this.state.modalType === '新建地址'){
      data.push(addAdress)
      this.setState({
        data,
        addressVisible:val
      })
      this.props.dataAdress(data)
    }
    else {
      // data.splice(adddata)
      this.setState({
        data,
        addressVisible:val
      })
      console.log(data)
    }
  }

  //编辑用户弹窗
  modal = (type, record) => {
    this.setState({
      addressVisible: true,
      modalType: type
    }, () => {
      // this.props.form.resetFields();
      // if (type === '新建地址') return;
      // this.props.form.setFieldsValue({
      //   orderNumber: record.name,
      //   phone: record.phone,
      //   address_select: record.address_select,
      //   specific_address:record.specific_address,
      //   default:record.default
      // })
      this.setState({editRow: record})
    })
  }
  //close modal
  onCancel = () => {
    this.setState({
      addressVisible:false
    })
  }
  //删除行
  onDelete = (record,index) => {
    console.log(index)
    const dataChange = this.state.data
    dataChange.splice(index, 1);
    this.setState({
      data:dataChange
    })
  }
  render() {
    const { addressVisible, modalType}  = this.state
    const columns = [{
      title: '订单号',
      dataIndex: 'orderNumber',
    },
      {
        title: '订单状态',
        dataIndex:'orderStatus',
        filters:[
          {
            text:orderStatus[0],
            value:0
          },
          {
            text:orderStatus[1],
            value:1
          },
        ],
        render:(val) => {
          return <h6>{orderStatus[val]}</h6>
        }
      },
      {
        title: '开票时间',
        dataIndex: 'startTime',
      },
      {
        title: '开票状态',
        dataIndex: 'invoiceStatus',
        filters:[
          {
            text:invoiceStatus[0],
            value:0
          },
          {
            text:invoiceStatus[1],
            value:1
          },
        ],
        render:(val) => {
          return <h6>{invoiceStatus[val]}</h6>
        }
      },
      {
        title: '发票类型',
        dataIndex: 'invoiceType',
      },
      {
        title: '开票金额',
        dataIndex: 'invoicePrice',
        render:val=>`¥${val}`
      },
      {
        title: '操作',
        dataIndex: 'delete',
        render: (value, record, index) => {
          return (
            <div>
              <Button onClick={() => this.modal('编辑发票', record, index)}>编辑</Button>
              <Button style={{marginLeft: '15px'}} onClick={() => this.modal('查看发票', record, index)}>查看</Button>
              {/*<Popconfirm*/}
                {/*title="确认要删除这行码"*/}
                {/*onConfirm={() => this.onDelete(record, index)}*/}
              {/*>*/}
                {/*<Button style={{marginLeft: '15px'}}>查看</Button>*/}
              {/*</Popconfirm>*/}
            </div>
          )
        }
      },
    ];
    return (
      <div className="container_manager_address container_width">
        <div className="shop_top container_top">
          {/*<h2>{menuName}</h2>*/}
          <h2>我的发票</h2>
        </div>
        <div className="type_button">
          <Button
            type="primary"
            onClick={() => this.modal('新建地址')}
          >
            <Icon type='plus' />
            新建
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={this.state.data}
          onDelete={this.onDelete}
          rowKey={record => record.key}
          pagination={false}
        />
        <Pagination
          current={1} total={1} pageSize={1}
        />
        <Invoice
          addressVisible={addressVisible}
          title={modalType}
          onOk={this.handleok}
          onCancel={this.onCancel}
        />
      </div>
    );
  }
}

export  default Form.create()(ManagerAdress)