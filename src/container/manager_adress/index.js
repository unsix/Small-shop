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
      data:[]
    }
  }
  componentDidMount(){

  }
  //提交
  handleok = (val,value) => {
    console.log(value)
      const _address = value.address_select+value.specific_address
      const address = _address.replace(/,/g, "")
      let addAdress = {
        key:value.name+value.address+value.specific_address,
        name: value.name,
        phone: value.phone,
        address_select:value.address_select,
        specific_address:value.specific_address,
        address: address,
        default:value.default
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
      this.props.form.resetFields();
      if (type === '新建地址') return;
      this.props.form.setFieldsValue({
        name: record.name,
        phone: record.phone,
        address_select: record.address_select,
        specific_address:record.specific_address,
        default:record.default
      })
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
              <Button onClick={() => this.modal('编辑地址', record, index)}>编辑</Button>
              <Popconfirm
                title="确认要删除这行码"
                onConfirm={() => this.onDelete(record, index)}
              >
                <Button style={{marginLeft: '15px'}}>删除</Button>
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
          onOk={this.handleok}
          onCancel={this.onCancel}
        />
      </div>
    );
  }
}

export  default Form.create()(ManagerAdress)