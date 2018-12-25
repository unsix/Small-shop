import React from 'react'
import { Form, Modal, Input, Switch, Icon, Select, Avatar, Button } from 'antd'
import {connect} from 'react-redux'
import OrderDetails from '../../../component/details/order_details'
import './index.less'

const Option = Select.Option
@connect(
  state=>state
)
class OrderCart extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      visible: false,
      allprice:'',
      modalType:'',
      formData:[]
    }

  }
  orderOk = (e) => {
      this.props.form.validateFieldsAndScroll((err, value) => {
        if(err) return
        this.setState({
          formData:value,
        },()=>{
          const { formData } = this.state
          this.props.onOk(false,formData)
          console.log(formData)
        })
      })
  }
  // payCount = (val,obj) => {
  //   this.props.onOk(val,obj)
  // }
  handleCancel = (e) => {
    this.props.onCancel();
  }
  render(){
    const details = this.props.order.details
    const FormItem = Form.Item;
    const { getFieldDecorator } = this.props.form
    const {footerNull,title,visible} =this.props
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
    // console.log(details)
    // console.log(this.props)
    return(
      <div>
        <Modal
          title={title}
          visible={visible}
          footer={footerNull}
          onOk={this.orderOk}
          onCancel={this.handleCancel}
          destroyOnClose={true}
        >
          {this.props.title === '详情'?
            <OrderDetails
              // onOK={this.payCount}
            /> : null
          }
          {this.props.title === '取消订单'?
            <div className=" modal_order modal_cancel">
              <div className="order_content">
                <div className="pictures">
                  <div className="img_dec">
                    {details.avatar?
                      <img src={details.avatar[0]} alt={details.avatar[0]} />:(null)
                    }
                  </div>
                </div>
                <div className="name_spe">
                  <h6>{details.name}</h6>
                  <h6>{details.Specifications}</h6>
                </div>
                <div className="price_number">
                  <h6><span>¥{details.price}</span></h6>
                  <h6>×{details.number}</h6>
                </div>
              </div>
              <div className="refund_from mt20">
                <Form className="form_shop form_content">

                  <FormItem label="取消理由"  {...formItemLayout}>
                    {getFieldDecorator('Content',{
                      rules: [{ required: true, message: '颜色分类' }],
                    })(
                      <Select placeholder="请选择取消理由">
                        <Option value="1">信息填写错误，重新拍</Option>
                        <Option value="2">卖家缺货</Option>
                        <Option value="3">其他原因</Option>
                      </Select>
                    )}
                  </FormItem>
                </Form>
              </div>
            </div>
            :(null)
          }
          {this.props.title === '付款'?
            <div className=" modal_order modal_cancel">
              <div className="order_content">
                <div className="pictures">
                  <div className="img_dec">
                    {details.avatar?
                      <img src={details.avatar[0]} alt={details.avatar[0]} />:(null)
                    }
                  </div>
                </div>
                <div className="name_spe">
                  <h6>{details.name}</h6>
                  <h6>{details.Specifications}</h6>
                </div>
                <div className="price_number">
                  <h6><span>¥{details.price}</span></h6>
                  <h6>×{details.number}</h6>
                </div>
              </div>
              <Form className="patMent">
                <FormItem label="支付方式"  {...formItemLayout}>
                  {getFieldDecorator('payMode',{
                    rules: [{ required: true, message: '请选择支付方式' }],
                  })(
                    <Select placeholder="请选择支付方式">
                      <Option value="1">支付宝</Option>
                      <Option value="2">微信</Option>
                      <Option value="3">线下汇款</Option>
                    </Select>
                  )}
                </FormItem>
              </Form>
            </div>
            :(null)
          }
          {this.props.title === '申请开票'?
            <div className=" modal_order modal_invoice">
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
                <h6>订单号: {details.ordernumber}</h6>
                <h6>开票金额: <span>¥{details.price}</span></h6>
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
              </div>
            </div>
            :(null)
          }
          {this.props.title === '下载合同'?
            <div>
              下载合同
            </div>
            :(null)
          }
          {this.props.title === '申请退款'?
            <div className=" modal_order modal_cancel">
              <div className="order_content">
                <div className="pictures">
                  <div className="img_dec">
                    {details.avatar?
                      <img src={details.avatar[0]} alt={details.avatar[0]} />:(null)
                    }
                  </div>
                </div>
                <div className="name_spe">
                  <h6>{details.name}</h6>
                  <h6>{details.Specifications}</h6>
                </div>
                <div className="price_number">
                  <h6><span>¥{details.price}</span></h6>
                  <h6>×{details.number}</h6>
                </div>
              </div>
              <div className="refund_from mt20">
                <Form className="form_shop form_content">

                  <FormItem label="发票内容"  {...formItemLayout}>
                    {getFieldDecorator('Content',{
                      rules: [{ required: true, message: '颜色分类' }],
                    })(
                      <Select placeholder="请选择退货理由">
                        <Option value="7天无理由">7天无理由</Option>
                        <Option value="其他原因">其他原因</Option>
                      </Select>
                    )}
                  </FormItem>
                </Form>
              </div>
            </div>
            :(null)
          }
          {this.props.title === '确认收货'?
            <div className=" modal_order modal_cancel">
              <div className="order_content">
                <div className="pictures">
                  <div className="img_dec">
                    {details.avatar?
                      <img src={details.avatar[0]} alt={details.avatar[0]} />:(null)
                    }
                  </div>
                </div>
                <div className="name_spe">
                  <h6>{details.name}</h6>
                  <h6>{details.Specifications}</h6>
                </div>
                <div className="price_number">
                  <h6><span>¥{details.price}</span></h6>
                  <h6>×{details.number}</h6>
                </div>
              </div>
            </div>
            :(null)
          }
          {this.props.title === '查看详情'?
            <div className="order order_details">
              <div className="order_top">
                <h3 className="tg">退款详情</h3>
                {details.orderStatus === 0 ?
                  (<div className="order_top_content">
                    <h3>退款成功</h3>
                    <h6>7天无理由退款</h6>
                  </div>)
                  :(null)
                }
              </div>
              <div className="content">
                <Avatar src={details.avatar[0]} />
                <div className="name">
                  <h6>{details.name}</h6>
                  <h6>{details.Specifications}</h6>
                </div>
                <div className="price">
                  <h6>¥{details.unit}</h6>
                  <h6 className="num">×{details.number}</h6>
                </div>
              </div>
              <div className="information refund_information">
                <h6>退款偏号 : 129376129873691826312837 </h6>
                <h6 className="order_allprice">退款总金额: <span> ¥306</span></h6>
                <h6>退回银行卡(尾号7788)</h6>
                <h6>退款时间 : 2018年12月12日 14:30:25</h6>
                <h6>申请件数 : 2018年12月12日 14:30:25</h6>
                <h6>申请时间 : 2018年12月12日 14:30:25</h6>
              </div>
            </div>
            :(
              null
            )
          }
        </Modal>
      </div>
    )
  }
}
export default  Form.create()(OrderCart)