import React from 'react'
import { Table, Button, Popconfirm, Icon, Switch, Form } from 'antd'
import Address from  '../../component/modal/address_modal'
import './index.less'
import {connect} from 'react-redux'
import { getAddressList } from '../../redux/address_redux'

@connect(
  state=>state.address,
  {getAddressList}
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
      record:[],
      addressList:[
      ]
    }
  }
  componentDidMount(){
    this.props.getAddressList()
  }
  //提交
  handleok = (val,value) => {
    // console.log(value)
      const _areaName = value.areaName+value.address
      const areaName = _areaName.replace(/,/g, "")
      let addAddress = {
        // key:value.name+value.address+value.specificAddress,
        consignee: value.consignee,
        phone: value.phone,
        address:value.address,
        areaName: areaName,
        default:value.default
      };

      // console.log(addAdress)
      let data = this.state.data
      if(this.state.modalType === '新建地址'){
        data.push(addAddress)
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
        // console.log(data)
      }
  }

  //编辑用户弹窗
  modal = (type, record) => {
    if(type === '编辑地址') {
      this.props.dataAdress(record)
      console.log(record)
      this.setState({
        addressVisible: true,
        modalType: type,
        record:record
      }, () => {

        // this.props.form.setFieldsValue({
        //   name: record.name,
        //   phone: record.phone,
        //   address_select: record.address_select,
        //   specific_address:record.specific_address,
        //   default:record.default
        // })
        this.setState({editRow: record})
        // console.log(this.state.editRow,record)
      })
    }
    else {
      this.setState({
        record:[],
        addressVisible: true,
        modalType: type,
      })
      // if (type === '新建地址') return;
    }
  }
  //close modal
  onCancel = () => {
    this.setState({
      addressVisible:false
    })
  }
  //删除行
  onDelete = (record,index) => {
    // console.log(index)
    const dataChange = this.state.data
    dataChange.splice(index, 1);
    this.setState({
      data:dataChange
    })
  }
  render() {
    // console.log(this.props)
    const { addressVisible, modalType}  = this.state
    const { addressList } = this.props
    const columns = [{
      title: '名字',
      dataIndex: 'consignee',
      key :'consignee'
    },
      {
        title: '联系号码',
        dataIndex: 'phone',
        key :'phone'
      },
      {
        title: '详细地址',
        dataIndex:'area_name',
        key:'area_name',
        render:(val,record)=>{
          return(
           <div> {val}{record.address}</div>
          )
        }
      },
      {
        title: '操作',
        dataIndex: 'delete',
        render: (value, record, index) => {
          return (
            <div>
              <Button onClick={() => this.modal('编辑地址', record, index)}><Icon type="edit"/>编辑</Button>
              <Popconfirm
                title="确认要删除这行码"
                onConfirm={() => this.onDelete(record, index)}
              >
                <Button  style={{marginLeft: '15px'}}><Icon type="delete"/>删除</Button>
              </Popconfirm>
            </div>
          )
        }
      },
      {
        title: '默认地址',
        dataIndex: 'default',
        render:(record,value)=>{
          return(
            <div>
              {value.default===true?<Switch disabled checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} defaultChecked />:<Switch disabled checkedChildren={<Icon type="check" />}  unCheckedChildren={<Icon type="close" />}  />}
            </div>
          )
        }
      },
    ];
    return (
      <div className="container_manager_address container_width">
        <div className="shop_top container_top">
          {/*<h2>{menuName}</h2>*/}
          <h2>管理地址</h2>
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
          //还没有key 值
          columns={columns}
          dataSource={addressList}
          onDelete={this.onDelete}
          rowKey={record => record.key}
        />
        <Address
          addressVisible={addressVisible}
          title={modalType}
          record={this.state.record}
          onOk={this.handleok}
          onCancel={this.onCancel}
        />
      </div>
    );
  }
}

export  default Form.create()(ManagerAdress)