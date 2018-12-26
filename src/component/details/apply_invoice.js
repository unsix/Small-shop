import React from 'react'
import { Cascader, DatePicker, Form, Icon, Input, Modal, Switch,Button} from 'antd'

class ApplyInvoice extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      addressVisible: false,
      data:{
        id:1,
        ordernumber:'0000000000000001',
        status:2,
        key: '1',
        avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
        ],
        name: '中财PPR热水管',
        unit:10,
        number:1,
        price:10,
        Specifications: '绿色',
        operation:['申请开票','下载合同','申请退款','确认收货']
      },
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
    const { data } = this.state
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 2},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 12},
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
      <div className="container_width payment container_height">
        {/*{!this.props.shop.cart?<Redirect to='/order' />:null}*/}
        <div className="shop_top container_top contain">
          <h2>申请开票</h2>
        </div>
         <div className=" apply_invoice container_details">
        <div className="address">
          <div>
            <Icon type="environment" />
          </div>
          <div className="address_content">
            <h6>收件人: 小丸子 <span>13456801341</span></h6>
            <h6>收货地址: 浙江省杭州市滨江区某某小区</h6>
          </div>
        </div>
        <div className="order_inf">
          <h6>订单号: {data.ordernumber}</h6>
          <h6>开票金额: <span>¥{data.price}</span></h6>
          <h6><span>注: </span>如果订单发生退货退款，开票金额将变更为最终实付金额</h6>
        </div>
        <div className="invoice_form mt20">
          <Form className="form_shop form_content">
            <FormItem label="发票抬头"  {...formItemLayout}>
              {getFieldDecorator('Invoice_rise', {
                rules: [{ required: true, message: '请输入发票抬头' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="开户银行"  {...formItemLayout}>
              {getFieldDecorator('Bank_deposit')(
                <Input />
              )}
            </FormItem>
            <FormItem label="银行账号"  {...formItemLayout}>
              {getFieldDecorator('Bank_number')(
                <Input />
              )}
            </FormItem>
            <FormItem label="企业地址"  {...formItemLayout}>
              {getFieldDecorator('Address')(
                <Input />
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
            <FormItem label="发票内容"  {...formItemLayout}>
              {getFieldDecorator('Content',{
                rules: [{ required: true, message: '请输入发票内容' }],
              })(
                <Input />
              )}
            </FormItem>
          </Form>
          <Button type='primary' >提交</Button>
        </div>
      </div>
      </div>
    )
  }
}
export default  Form.create()(ApplyInvoice)