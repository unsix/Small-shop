import React from 'react'
import { Table, Button, Popconfirm, Icon, Switch, Form } from 'antd'
import Address from  '../../component/modal/address_modal'
import './index.less'
import {connect} from 'react-redux'
import { dataAdress } from '../../redux/address_redux'

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
      record:[],
      data:[
        {
          id:1,
          key: '1',
          name: '小丸子',
          phone: '13456801341',
          address: '浙江省杭州市滨江区悦湾小区123',
          addressSelect:['浙江省','杭州市','西湖区'],
          specificAddress:'123',
          default:true
        },
        {
          id:2,
          key: '2',
          name: '小篮子',
          phone: '13456801341',
          address: '浙江省杭州市滨江区悦湾小区123',
          addressSelect:['浙江省','杭州市','西湖区'],
          specificAddress:'123',
          default:false
        },
      ]
    }
  }
  componentDidMount(){

  }
  //提交
  handleok = (val,value) => {
    // console.log(value)
      const _address = value.addressSelect+value.specificAddress
      const address = _address.replace(/,/g, "")
      let addAdress = {
        key:value.name+value.address+value.specificAddress,
        name: value.name,
        phone: value.phone,
        addressSelect:value.addressSelect,
        specificAddress:value.specificAddress,
        address: address,
        default:value.default
      };

      // console.log(addAdress)
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
    const columns = [{
      title: '名字',
      dataIndex: 'name',
    },
      {
        title: '联系号码',
        dataIndex: 'phone',
      },
      {
        title: '详细地址',
        dataIndex: 'address',
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
          columns={columns}
          dataSource={this.state.data}
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