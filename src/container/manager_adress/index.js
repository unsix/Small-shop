import React from 'react'
import { Table, Button, Popconfirm, Icon, Switch, Form } from 'antd'
import Address from  '../../component/modal/address_modal'
import './index.less'
import {connect} from 'react-redux'
import { getAddressList ,addAddress,deleteAddress,getOptionsList,updateAddress} from '../../redux/address_redux'

@connect(
  state=>state.address,
  {getAddressList,addAddress,deleteAddress,getOptionsList,updateAddress}
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
      addressList:[],
      mapOptions:{}
    }
  }
  componentDidMount(){
    this.props.getAddressList()
  }

  //提交
  handleOk = (val,value) => {
    console.log(val)
    console.log(value)
      // const _areaName = value.areaName+value.address
     const {modalType} = this.state
      console.log(modalType)
      const areaName = value.areaName
      const address = value.areaName.join(" ")
      console.log(areaName)
     // console.log(_areaName.join(""))

      // const areaName = _areaName.replace(/,/g, "")
     const {id} = this.state.editRow
      let addAddress = {
        // key:value.name+value.address+value.specificAddress,
        consignee: value.consignee,
        phone: value.phone,
        address:value.address,
        isDefault:`${value.isDefault===true?1:0}`,
        area:`${areaName[1]}`,
        zipCode:'',
        id:`${id}`
        // areaCity: 5,
        // areaProvince: 1
      };

      // console.log(addAdress)

      if(modalType === '新建地址'){
        this.setState({
          addressVisible:val
        })
        this.props.addAddress(addAddress)
      }
      else {

        this.props.updateAddress(addAddress)
        // this.setState({
        //   addressVisible:val
        // })
      }
  }

  //编辑用户弹窗
  modal = (type, record) => {
    // console.log(record)
    if(type === '编辑地址') {
      this.setState({
        addressVisible: true,
        modalType: type,
        record:record
      }, () => {
        this.setState({editRow: record})
      })
    }
    else {
      this.setState({
        record:[],
        addressVisible: true,
        modalType: type,
      })
    }
  }
  //close modal
  onCancel = () => {
    this.setState({
      addressVisible:false
    })
  }
  //删除地址
  onDelete = (record) => {
    //后端强制传字符串
    let obj = {
      id: `${record.id}`
    }
    this.props.deleteAddress(obj)
  }
  render() {
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
          onOk={this.handleOk}
          onCancel={this.onCancel}
        />
      </div>
    );
  }
}

export  default Form.create()(ManagerAdress)