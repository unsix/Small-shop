import  React from 'react';
import  axios from 'axios'
import {Tabs, Form,Row,Col ,Icon, Input, Button, Checkbox } from 'antd';
import LogReg from '../../component/background/log_reg';
import './index.less'
import {connect} from 'react-redux'
import { smsCode,forgetPwdUser,logoutSubmit} from '../../redux/user_redux'
import { withRouter } from 'react-router-dom'

@withRouter
@connect(
  state=>state,
  {forgetPwdUser,smsCode,logoutSubmit},
)
class ForgotPwdForm extends React.Component {

  state = {
    count:0
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // this.props.history.push('/')
        let obj = {
          // id:647036,
          username:values.phone,
          smsCode:values.captcha,
          password:values.password
        }
        this.props.forgetPwdUser(obj)
      }
    });
  }
  //跳转登录
  Login = () => {
    this.props.logoutSubmit()
    this.props.history.push('/login')
  }

  onTabChange = type => {
    this.setState({type})
  }
  //验证码移除还原
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  //验证码读秒
  onGetCapcha = () => {
    new Promise ((resolve,reject)=>{
      this.props.form.validateFields(['phone'],{},(err,value) => {
        if (err){
          reject(err)
        }
        else{
          //写请求
          let obj = {
            username:`${value.phone}`,
            smsType:"findPassword"
          }

          this.props.smsCode(obj)
          let count = 59
          this.setState({
            count
          })
          this.interval = setInterval(()=>{
            count -= 1
            this.setState({count})
            if(count===0){
              clearInterval(this.interval)
            }
          },1000)
        }
      })
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const {count,type} = this.state
    const TabPane = Tabs.TabPane;
    const FormItem = Form.Item;
    return (
      <LogReg>
        <div className="container_login">
          <div className="content">
            <div className="logo-top">
              <img src={require('../../component/img/logo.jpg')} alt="" />
              <h1>五金商城</h1>
            </div>
            <Tabs
              defaultActiveKey={'phone'}
            >
              <TabPane tab="忘记密码" key="phone">
                <Form onSubmit={this.handleSubmit} className="login-form">
                  <FormItem>
                    {getFieldDecorator('phone', {
                      rules: [
                        { required: true, message: '请输入手机号码!' },
                        { pattern: /^((1[3-8][0-9])+\d{8})$/,message:'手机号格式不对'}
                        ],
                    })(
                      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入手机号" />
                    )}
                  </FormItem>
                  <FormItem
                    clasName="code"
                  >
                    <Row  gutter={10}>
                      <Col  span={14} >
                        {getFieldDecorator('captcha', {
                          rules: [{ required: true, message: '请输入验证码!' }],
                        })(
                          <Input  prefix={<Icon type="code" style={{ color: 'rgba(0,0,0,.25)',}} />}  placeholder="验证码"/>
                          // <Input prefix={<Icon type="code" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="验证码"/>
                        )}
                      </Col>
                      <Col  className="ml_9"  span={6}>
                        <Button
                          className="width_100 height_36"
                          dissbled={count}
                          onClick={this.onGetCapcha}
                        >{count
                          ?`${count}s`
                          :'获取验证码'
                        }
                        </Button>
                      </Col>
                    </Row>
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('password', {
                      rules: [
                        { required: true, message: '请输入密码!' },
                        {min:6, message:'密码长度不能小于6位'}
                        ],
                    })(
                      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                    )}
                  </FormItem>
                  <FormItem >
                    <Button type="primary" htmlType="submit" className="login-form-button btn_280">完成</Button>
                  </FormItem>
                </Form>
              </TabPane>
            </Tabs>
            <a>第三方登录</a>
            <a onClick={this.Login} className="register">登录</a>
          </div>
        </div>
      </LogReg>
    );
  }
}

const ForgotPwd = Form.create()(ForgotPwdForm)
export  default  ForgotPwd