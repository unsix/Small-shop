import React from 'react'
import {Radio, Form,Button, InputNumber, Modal, Input, Avatar, Cascader, Switch } from 'antd'
import {connect} from 'react-redux'
import EvaluateDetails from '../details/evaluate_details'
import ShopDetails from  '../details/shop_details'
import AfterDtetails from  '../details/after_details'
import "./index.less"
@connect(
  state=>state
)
class ShopModal extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      visible: false,
      previewVisible:'',
      previewImage:''
    }

  }
  handleOk = (e) => {
    this.props.form.validateFieldsAndScroll((err, value) => {
        if(err) return
        this.props.onOk(false,value)

    })
  }

  handleCancel = (e) => {
    this.props.onCancel();
  }
  render(){
    // console.log(this.props)
    const FormItem = Form.Item;
    const { getFieldDecorator } = this.props.form
    const RadioButton = Radio.Button;
    const RadioGroup = Radio.Group;
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
    const cart = this.props.shop.cart
    const { title, visible,footerNull} = this.props
    console.log(footerNull)
    return(
      <div>
        <Modal
          footer={footerNull}
          title={title}
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          destroyOnClose={true}
        >
          {
            this.props.title === '评价'?
             <EvaluateDetails /> :null
          }
          {
            this.props.title === '详情'?
              <ShopDetails /> :null
          }
          {
            this.props.title === '售后'?
              <AfterDtetails /> :null
          }
          {
            this.props.title === '添加购物车'?(
            <div className=" modal_shop modal_content">
              <h3>{cart.name}</h3>
              <div className="img_dec">
              {cart.avatar&&cart.avatar.map(v=>(
                <img key={v} src={v} alt={v}/>
              ))}
              <span>
              ¥{cart.price}
              </span>
              </div>
              <Form className="form_shop form_content">
              <FormItem label="规格"  {...formItemLayout}>
              {getFieldDecorator('Specifications', {
                rules: [{ required: true, message: '请选择规格' }],
              })(
                <RadioGroup>
                  <RadioButton value="大">大</RadioButton>
                  <RadioButton value="中">中</RadioButton>
                  <RadioButton value="小">小</RadioButton>
                </RadioGroup>
              )}
              </FormItem>
              <FormItem label="颜色分类"  {...formItemLayout}>
              {getFieldDecorator('color', {
                rules: [{ required: true, message: '颜色分类' }],
              })(
                <RadioGroup>
                  <RadioButton value="黑色">黑色</RadioButton>
                  <RadioButton value="白色">白色</RadioButton>
                  <RadioButton value="蓝色">蓝色</RadioButton>
                </RadioGroup>
              )}
              </FormItem>
              <FormItem label="购买数量"  {...formItemLayout}>
              {getFieldDecorator('number',{ initialValue: 1}
              )(
                <InputNumber
                  min={1}
                />
              )}
              </FormItem>
              </Form>
            </div>
            ):(null)
          }
          {
            this.props.title === '立即购买'?(
              <div className=" modal_shop modal_content">
                <h3>{cart.name}</h3>
                <div className="img_dec">
                  {cart.avatar&&cart.avatar.map(v=>(
                    <img className="img_dec_map" key={v} src={v} alt={v}/>
                  ))}
                  <span>
              ¥{cart.price}
              </span>
                </div>
                <Form className="form_shop form_content">
                  <FormItem label="规格"  {...formItemLayout}>
                    {getFieldDecorator('Specifications', {
                      rules: [{ required: true, message: '请选择规格' }],
                    })(
                      <RadioGroup>
                        <RadioButton value="大">大</RadioButton>
                        <RadioButton value="中">中</RadioButton>
                        <RadioButton value="小">小</RadioButton>
                      </RadioGroup>
                    )}
                  </FormItem>
                  <FormItem label="颜色分类"  {...formItemLayout}>
                    {getFieldDecorator('color', {
                      rules: [{ required: true, message: '颜色分类' }],
                    })(
                      <RadioGroup>
                        <RadioButton value="黑色">黑色</RadioButton>
                        <RadioButton value="白色">白色</RadioButton>
                        <RadioButton value="蓝色">蓝色</RadioButton>
                      </RadioGroup>
                    )}
                  </FormItem>
                  <FormItem label="购买数量"  {...formItemLayout}>
                    {getFieldDecorator('number',{ initialValue: 1}
                    )(
                      <InputNumber
                        min={1}
                      />
                    )}
                  </FormItem>
                </Form>
              </div>
            ):(null)
          }
          {
            this.props.title === '再次购买'?
              (<div className=" modal_shop modal_content">
                <h3>{cart.name}</h3>
                <div className="img_dec">
                  {cart.avatar&&cart.avatar.map(v=>(
                    <img className="img_dec_map" key={v} src={v} alt={v}/>
                  ))}
                  <span>
              ¥{cart.price}
              </span>
                </div>
                <Form className="form_shop form_content">
                  <FormItem label="规格"  {...formItemLayout}>
                    {getFieldDecorator('Specifications', {
                      rules: [{ required: true, message: '请选择规格' }],
                    })(
                      <RadioGroup>
                        <RadioButton value="大">大</RadioButton>
                        <RadioButton value="中">中</RadioButton>
                        <RadioButton value="小">小</RadioButton>
                      </RadioGroup>
                    )}
                  </FormItem>
                  <FormItem label="颜色分类"  {...formItemLayout}>
                    {getFieldDecorator('color', {
                      rules: [{ required: true, message: '颜色分类' }],
                    })(
                      <RadioGroup>
                        <RadioButton value="黑色">黑色</RadioButton>
                        <RadioButton value="白色">白色</RadioButton>
                        <RadioButton value="蓝色">蓝色</RadioButton>
                      </RadioGroup>
                    )}
                  </FormItem>
                  <FormItem label="购买数量"  {...formItemLayout}>
                    {getFieldDecorator('number',{ initialValue: 1}
                    )(
                      <InputNumber
                        min={1}
                      />
                    )}
                  </FormItem>
                </Form>
              </div>):null
          }
          {
            this.props.title === '查询物流'?
              (
                <div className='logistics'>
                  <h6>快递公司: 货拉拉</h6>
                  <h6>快递单号: 234982714823749</h6>
                  <h6>官方地址: wwww.huolala.com</h6>
                  <h6>联系电话: 96333</h6>
                </div>
              )
              :null
          }
        </Modal>
      </div>
    )
  }
}
export default  Form.create()(ShopModal)