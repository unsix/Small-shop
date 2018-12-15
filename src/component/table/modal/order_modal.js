import React from 'react'
import {  Form,  Modal, Input, Switch,  Icon ,Select} from 'antd'
import {connect} from 'react-redux'
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
      allprice:''
    }

  }
  handleOk = (e) => {
    this.props.onOk(false)
  }

  handleCancel = (e) => {
    this.props.onCancel();
  }
  render(){
    const details = this.props.order.details
    const FormItem = Form.Item;
    const { getFieldDecorator } = this.props.form
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
          title={this.props.title }
          okText={this.props.title}
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          destroyOnClose={true}
        >
          {this.props.title === '取消订单'?
            <div className=" modal_order modal_cancel">
              <div className="order_content">
                <div className="pictures">
                  <div className="img_dec">
                    {details.avatar?
                      <img src={details.avatar[0]} />:(null)
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
          {this.props.title === '付款'?
            <div className=" modal_order modal_cancel">
              <div className="order_content">
                <div className="pictures">
                  <div className="img_dec">
                    {details.avatar?
                      <img src={details.avatar[0]} />:(null)
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
          {this.props.title === '申请开票'?
            <div className=" modal_order modal_cancel">
              <div className="order_content">
                <div className="pictures">
                  <div className="img_dec">
                    {details.avatar?
                      <img src={details.avatar[0]} />:(null)
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
              <div className="invoice_form mt20">
                <Form className="form_shop form_content">
                  <FormItem label="发票抬头"  {...formItemLayout}>
                    {getFieldDecorator('Invoice_rise', {
                      rules: [{ required: true, message: '请选择规格' }],
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
                      rules: [{ required: true, message: '颜色分类' }],
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
                      <img src={details.avatar[0]} />:(null)
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
            <div>
              确认收货
            </div>
            :(null)
          }
        </Modal>
      </div>
    )
  }
}
export default  Form.create()(OrderCart)