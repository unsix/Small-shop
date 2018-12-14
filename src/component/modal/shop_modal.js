import React from 'react'
import {Radio, Form,Button, InputNumber, Modal, Input, Avatar, Cascader, Switch } from 'antd'
import {connect} from 'react-redux'
import "./index.less"
@connect(
  state=>state
)
class ShopModal extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      visible: false,
    }

  }
  handleOk = (e) => {
    // console.log(e);
    // this.props.handleOk()
    // let id = this.props.shop.cart.id
    this.props.form.validateFieldsAndScroll((err, value) => {
        if(err) return
        // this.props.cartData(value)
        this.props.onOk(false,value)

  })
  }

  handleCancel = (e) => {
    // console.log('cancel');
    this.props.onCancel();
  }
  // getItemsValue = ()=>{    //3、自定义方法，用来传递数据（需要在父组件中调用获取数据）
  //   //   const valus= this.props.form.getFieldsValue();       //4、getFieldsValue：获取一组输入控件的值，如不传入参数，则获取全部组件的值
  //   //   return valus;
  //   // }
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
    return(
      <div>
        <Modal
          title={this.props.title === 'cart' ? "加入购物车" : "立即购买"}
          okText={this.props.title === 'cart' ? "确定" : "提交订单"}
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          destroyOnClose={true}
        >
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
        </Modal>
      </div>
    )
  }
}
export default  Form.create()(ShopModal)