import  React from 'react';
import { Steps, Button, message, Input, Icon, Form, Tabs, Select } from 'antd'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import './index.less'


const Step = Steps.Step;

@connect(
  state=>state
)
class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    const { getFieldDecorator } = this.props.form;
    const FormItem = Form.Item;
    if(this.props.shop.cart.payMode === undefined){
      this.props.history.push('/user/order')
    }
    const payMentMode  = this.props.shop.cart.payMode
    console.log(this.props)
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
    return (
      <div className="container_width container_height">
        {/*{!this.props.shop.cart?<Redirect to='/order' />:null}*/}
        <div className="shop_top container_top contain">
          <h2>付款</h2>
        </div>
        {payMentMode === '1'?
          (
            <div className="steps">
              <Steps current={current}>
                <Step title="扫码支付" />
              </Steps>
              <img src={require('../img/alipay.jpg')} style={{ width:'200px',marginTop:'30px'}} alt="weixing" />
            </div>):null
        }
        {payMentMode === '2'?

          (
            <div className="steps">
              <Steps current={current}>
                <Step title="扫码支付" />
              </Steps>
            <img src={require('../img/weixing.jpg')} style={{ width:'200px',marginTop:'30px'}} alt="weixing" />
          </div>):null
        }
        {payMentMode === '3'?
          ( <div className="steps">
          <Steps current={current}>
            <Step title="填写支付信息" />
            <Step title="确认支付信息" />
            <Step title="支付成功" />
          </Steps>
          <div className="steps-content">
              <div>
                  {this.state.current === 0?
                    (<div className="stepsOne stepsNumber mt30">
                      <Form onSubmit={this.handleSubmit} className="change-form payment-form">
                        <FormItem label="银行"  {...formItemLayout}>
                          {getFieldDecorator('bank', {
                            rules: [{ required: true, message: '请输入银行!' }],
                          })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="请输入银行" />
                          )}
                        </FormItem>
                        <FormItem label="银行名称"  {...formItemLayout}>
                          {getFieldDecorator('bankName', {
                            rules: [{ required: true, message: '请输入银行名称!' }],
                          })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="请输入银行名称" />
                          )}
                        </FormItem>
                        <FormItem label="开户行"  {...formItemLayout}>
                          {getFieldDecorator('openBank', {
                            rules: [{ required: true, message: '请输入开户行!' }],
                          })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="请输入开户行" />
                          )}
                        </FormItem>
                        <FormItem label="银行账号"  {...formItemLayout}>
                          {getFieldDecorator('bankAccount', {
                            rules: [{ required: true, message: '请输入银行账号!' }],
                          })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="请输入银行账号" />
                          )}
                        </FormItem>
                        <FormItem label="账号名称"  {...formItemLayout}>
                          {getFieldDecorator('userAccount', {
                            rules: [{ required: true, message: '请输入账号名称!' }],
                          })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="请输入账号名称" />
                          )}
                        </FormItem>
                      </Form>
                    </div>):null
                  }
                  {this.state.current === 1?
                    (<div>
                      1
                    </div>):null
                  }
                  {this.state.current === 2?
                    (<div>
                      2
                    </div>):null
                  }
              </div>
          </div>
          <div className="steps-action">
            {
              current <2
              && <Button type="primary" onClick={() => this.next()}>下一步</Button>
            }
            {
              current ===2
              && <Button type="primary" onClick={() => message.success('Processing complete!')}>提交</Button>
            }
            {
              current > 0
              && (
                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                  上一步
                </Button>
              )
            }
          </div>
        </div>):null
        }
      </div>
    );
  }
}
export default Form.create()(Payment)