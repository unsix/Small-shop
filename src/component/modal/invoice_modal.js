import React from 'react'
import { Form, Input, Modal, Switch, DatePicker, Cascader } from 'antd'
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
    const { addressVisible,title,footerNull} = this.props
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
          footer={footerNull}
          className="address"
          visible={addressVisible}
          onOk={this.handleok}
          onCancel={this.handleCancel}
        >
          {title === '编辑发票'||title === '新建发票'?
            (
              <div className="modal_invoice">
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
                  <FormItem label="发票状态"  {...formItemLayout}>
                    {getFieldDecorator('invoiceStatus')(
                      <Input />
                    )}
                  </FormItem>
                  <h6>发票信息</h6>
                  <FormItem label="收件人"  {...formItemLayout}>
                    {getFieldDecorator('name')(
                      <Switch  />
                    )}
                  </FormItem>
                  <FormItem label="省市区"  {...formItemLayout}>
                    {getFieldDecorator('address_select', {
                      rules: [{ required: true, message: '请选择省市区!' }],
                    })(
                      <Cascader options={options}  placeholder="请选择省市区" />

                    )}
                  </FormItem>
                  <FormItem label="详情地址"  {...formItemLayout}>
                    {getFieldDecorator('specific_address', {
                      rules: [{ required: true, message: '请输入详细地址!' }],
                    })(
                      <TextArea placeholder="" autosize={{ minRows: 2, maxRows: 6 }} />
                    )}
                  </FormItem>
                </Form>
              </div>
            ):null
          }
          {
            title === "查看发票"?
              (<div className="modal_invoice">
                <h6>发票信息</h6>
                <h6>发票抬头: 某某公司</h6>
                <h6>发票内容: 五金等器材</h6>
                <h6>发票类型: 发票总额</h6>
                <h6>申请时间: 2018-12-12</h6>
                <h6>发票状态: 待开票</h6>
                <h6>收件人: ant-design</h6>
                <h6>省市区: 浙江省杭州市滨江区</h6>
                <h6>详细地址: 某某小区</h6>
              </div>):null
          }
        </Modal>
      </div>
    )
  }
}
export default  Form.create()(Invoice)