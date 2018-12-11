import React from 'react'
import { Table, Button,Popconfirm, Avatar,Icon, Modal,Input, Form, message,Cascader} from 'antd';
import './index.less'
class ManagerAdress extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      visible:false,
      editRow: {},
      modalType: "add",
      data:[{
        key: '1',
        name: '小丸子',
        phone: '13456801341',
        address: '浙江省杭州市滨江区悦湾小区123',
        address_select:['zhejiang','hangzhou','xihu'],
        specific_address:'123',
      },
        {
        key: '2',
        name: '小篮子',
        phone: '13456801341',
        address: '浙江省杭州市滨江区悦湾小区123',
          address_select:['zhejiang','hangzhou','xihu'],
          specific_address:'123'
      },]

    }
  }
  componentDidMount(){

  }
  //提交
  handleOk = () => {
    this.props.form.validateFieldsAndScroll((err, value) => {
      if (err) return;
      let adddata = {
        key:value.name+value.address+value.specific_address,
        name: value.name,
        phone: value.phone,
        address_select:value.address_select,
        specific_address:value.specific_address,
        address: value.address_select+value.specific_address
      };
      console.log(adddata)
      let data = this.state.data
      if(this.state.modalType === 'add'){
        data.push(adddata)
        this.setState({
          data,
          visible:false
        })
      }
      else {
        // data.splice(adddata)
        this.setState({
          data,
          visible:false
        })
        console.log(data)
      }
    })
  }

  //添加编辑用户
  modal = (type, record) => {
    this.setState({
      visible: true,
      modalType: type
    }, () => {
      this.props.form.resetFields();
      if (type === 'add') return;
      this.props.form.setFieldsValue({
        name: record.name,
        phone: record.phone,
        address_select: record.address_select,
        specific_address:record.specific_address
      })
      console.log(record)
      this.setState({editRow: record})
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
    const FormItem = Form.Item;
    const {confirm} = Modal;
    const { TextArea } = Input;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 4},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    };
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
        render:(value,record,index) => {
          return (
            <div>
              <Button onClick={()=>this.modal('edit',record,index)}>编辑</Button>
              <Popconfirm
                title="确认要删除这行码"
                onConfirm = {()=>this.onDelete(record,index)}
              >
                <Button  style={{marginLeft:'15px'}}>删除</Button>
              </Popconfirm>
            </div>
          )
        }
      }
      ,
    ];
    const options = [{
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
          value: 'xihu',
          label: 'West Lake',
        }],
      }],
    }, {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
          value: 'zhonghuamen',
          label: 'Zhong Hua Men',
        }],
      }],
    }];

    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={() => this.modal('add')}
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
        <Modal
          title={this.state.modalType === 'add' ? "添加用户" : "编辑用户"}
          onOk={this.handleOk}
          onCancel={() => this.setState({visible: false})}
          visible={this.state.visible}
        >
          <Form>
            <FormItem label="名字"  {...formItemLayout}>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(
                <Input  style={{ width: '100%' }} />
              )}
            </FormItem>
            <FormItem label="联系方式"  {...formItemLayout}>
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(
                <Input  style={{ width: '100%' }} />
              )}
            </FormItem>
            <FormItem label="省市区"  {...formItemLayout}>
              {getFieldDecorator('address_select', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(
                  <Cascader options={options}  placeholder="Please select" />

              )}
            </FormItem>
            <FormItem label="门街号"  {...formItemLayout}>
              {getFieldDecorator('specific_address', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(
                <TextArea placeholder="" autosize={{ minRows: 2, maxRows: 6 }} />
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

export  default  Form.create()(ManagerAdress)