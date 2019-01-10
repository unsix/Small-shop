import React from 'react'
import { Cascader, Form, Input, Modal, Switch, } from 'antd'
import {connect} from 'react-redux'

import { getOptionsList} from '../../redux/address_redux'

import "./index.less"
@connect(
  state=>state.address,
  {getOptionsList}
)
class Address extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      addressVisible: false,
      options: [],
      optionsTwo:[]
    }
  }
  handleOk = (e) => {
    this.props.form.validateFieldsAndScroll((err, value) => {
      if(err) return
      // this.props.cartData(value)
      this.props.onOk(false,value)

    })
  }
  componentDidMount(){
    let  parentId = ""
    this.props.getOptionsList(parentId)
    // this.handleDataTree()
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      options:this.props.options
    })

  }
  handleCancel = (e) => {
    this.props.onCancel();
  }
  // onChange = (value, selectedOptions) => {
  //   // console.log(value, selectedOptions);
  //   // let parentId = value
  //   // this.props.getOptionsList()
  // }
  // //
  loadData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;
    console.log(selectedOptions)
    console.log(targetOption)
    // load options lazily
    let parentId = `${targetOption.key}`
    console.log(parentId)
    this.props.getOptionsList(parentId)
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = this.props.optionsTwo
      this.setState({
        optionsTwo: [...this.state.optionsTwo],
      });
      console.log(targetOption.children)
    },1000);
  }
  render(){
    console.log(this.props)
    // console.log(this.state.mapOptions)
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
    return(
      <div className="preview_browsing">
        <Modal
          title={title}
          className="address"
          visible={addressVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form >
            <FormItem  label="收货人"  {...formItemLayout}>
              {getFieldDecorator('consignee',{
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
              {getFieldDecorator('areaName',{
                rules: [{ required: true, message: '请选择省市区!' }],
              })(
                <Cascader
                  options={this.state.options}
                  onChange={this.onChange}
                  loadData={this.loadData}
                  placeholder="请选择省市区"
                  changeOnSelect
                />

              )}
            </FormItem>
            <FormItem label="详细地址"  {...formItemLayout}>
              {getFieldDecorator('address', {
                rules: [{ required: true, message: '请输入门街号!' }],
              })(
                <TextArea placeholder="" autosize={{ minRows: 2, maxRows: 6 }} />
              )}
            </FormItem>
            <FormItem label="设为默认地址"  {...formItemLayout}>
              {getFieldDecorator('isDefault',{
                valuePropName: 'checked',
              },{
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
export default  Form.create(
  {
    mapPropsToFields(props){
      // console.log(props.record.address);
     return{
       consignee:Form.createFormField({
         value:props.record.consignee
       }),
       phone:Form.createFormField({
         value:props.record.phone
       }),
       areaName:Form.createFormField({
         value:props.record.areaName
       }),
       address:Form.createFormField({
         value:props.record.address
       }),
       isDefault:Form.createFormField({
         value:props.record.isDefault
       }),
     }
    },
    onFieldsChange(props, fields) {
      fields.name = props.consignee;
      fields.phone = props.phone;
      fields.areaName = props.areaName;
      fields.isDefault = props.isDefault;
      fields.address = props.address;
    }
  },
)(Address)