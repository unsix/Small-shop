import React from 'react'
import { Form, Input, Modal, Switch, DatePicker } from 'antd'
import {connect} from 'react-redux'

import "./index.less"
@connect(
  state=>state
)
class Invoice extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      addressVisible: false,
      data:[
        // {
        //   key: '1',
        //   name: '小丸子',
        //   phone: '13456801341',
        //   address: '浙江省杭州市滨江区悦湾小区123',
        //   address_select:['zhejiang','hangzhou','xihu'],
        //   specific_address:'123',
        //   default:true
        // },
        // {
        //   key: '2',
        //   name: '小篮子',
        //   phone: '13456801341',
        //   address: '浙江省杭州市滨江区悦湾小区123',
        //     address_select:['zhejiang','hangzhou','xihu'],
        //     specific_address:'123',
        //     default:false
        // },
      ]
    }
  }

  handleok = (e) => {
    this.props.form.validateFieldsAndScroll((err, value) => {
      if(err) return
      // this.props.cartData(value)
      this.props.onOk(false,value)

    })
  }

  handleCancel = (e) => {
    this.props.onCancel();
  }
  render(){
    // console.log(this.props)
    const FormItem = Form.Item;
    const { TextArea } = Input;
    const { getFieldDecorator } = this.props.form;
    const { addressVisible,title} = this.props
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
    const options = [{
      value: '浙江省',
      label: '浙江省',
      children: [{
        value: '杭州市',
        label: '杭州市',
        children: [{
          value: '西湖',
          label: '西湖',
        }],
      }],
    }, {
      value: '江苏省',
      label: '江苏省',
      children: [{
        value: '南京市',
        label: '南京市',
        children: [{
          value: '宗华门',
          label: '宗华门',
        }],
      }],
    }];
    return(
      <div className="preview_browsing">
        <Modal
          title={title}
          className="address"
          visible={addressVisible}
          onOk={this.handleok}
          onCancel={this.handleCancel}
        >
          <h6>发票信息</h6>
          <Form className="form_shop form_content">
            <FormItem label="发票抬头"  {...formItemLayout}>
              {getFieldDecorator('invoiceRise', {
                rules: [{ required: true, message: '请输入发票抬头' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="发票内容"  {...formItemLayout}>
              {getFieldDecorator('content',{
                rules: [{ required: true, message: '请输入发票内容' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="发票类型"  {...formItemLayout}>
              {getFieldDecorator('invoiceType')(
                <Input />
              )}
            </FormItem>
            <FormItem label="发票总额"  {...formItemLayout}>
              {getFieldDecorator('invoicePrice')(
                <Input />
              )}
            </FormItem>
            <FormItem label="申请时间"  {...formItemLayout}>
              {getFieldDecorator('datePicker')(
                <DatePicker  />
                )}
            </FormItem>
            <FormItem label="企业电话"  {...formItemLayout}>
              {getFieldDecorator('Phone')(
                <Input />
              )}
            </FormItem>
            <FormItem label="默认抬头"  {...formItemLayout}>
              {getFieldDecorator('Default')(
                <Switch  />
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}
export default  Form.create()(Invoice)