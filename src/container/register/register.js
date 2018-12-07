import  React from 'react';
import  axios from 'axios'
import {Tabs, Form,Row,Col ,Icon, Input, Button, Checkbox } from 'antd';
import LogReg from '../../component/background/log_reg';
import './index.less'
import { withRouter } from 'react-router-dom'

@withRouter
class RegisterForm extends React.Component {

  state = {
    count:0
  }

  //跳转登录
  Login = () => {
    this.props.history.push('/login')
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.history.push('/')

      }
    });
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
  componentDidMount(){

    axios.get("/api/test/profile")
      .then(res=>{
        // if (res.status==200&&res.data.code===0) {
        // 	dispatch(authSuccess(res.data.data))
        // }else{
        // 	dispatch(errorMsg(res.data.msg))
        // }
        console.log(res);

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
              <TabPane tab="注册" key="phone">
                <Form onSubmit={this.handleSubmit} className="login-form">
                  <FormItem>
                    {getFieldDecorator('phone', {
                      rules: [{ required: true, message: '请输入手机号码!' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="phone" />
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
                      rules: [{ required: true, message: '请输入密码!' }],
                    })(
                      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                  </FormItem>
                  <FormItem >
                    <Button type="primary" htmlType="submit" className="login-form-button btn_280">注册</Button>
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

const Register = Form.create()(RegisterForm)
export  default  Register