import React from 'react'
import { Cascader, Form, Input, Modal, Switch, } from 'antd'
import {connect} from 'react-redux'

import "./index.less"
@connect(
  state=>state
)
class Address extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      addressVisible: false,
      data:[]
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
          <Form >
            <FormItem  label="姓名"  {...formItemLayout}>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入姓名！' }],
              })(
                <Input  style={{ width: '100%' }} />
              )}
            </FormItem>
            <FormItem label="联系方式"  {...formItemLayout}>
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: '请输入联系方式' }],
              })(
                <Input  style={{ width: '100%' }} />
              )}
            </FormItem>
            <FormItem label="省市区"  {...formItemLayout}>
              {getFieldDecorator('address_select', {
                rules: [{ required: true, message: '请选择省市区!' }],
              })(
                <Cascader options={options}  placeholder="请选择省市区" />

              )}
            </FormItem>
            <FormItem label="门街号"  {...formItemLayout}>
              {getFieldDecorator('specific_address', {
                rules: [{ required: true, message: '请输入门街号!' }],
              })(
                <TextArea placeholder="" autosize={{ minRows: 2, maxRows: 6 }} />
              )}
            </FormItem>
            <FormItem label="设为默认地址"  {...formItemLayout}>
              {getFieldDecorator('default', {
                // rules: [{ required: false, message: 'Please input your phone number!' }],
              })(
                <Switch  />
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}
export default  Form.create()(Address)