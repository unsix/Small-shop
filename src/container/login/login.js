import  React from 'react';
import  axios from 'axios'
import {Tabs, Form,Row,Col ,Icon, Input, Button, Checkbox } from 'antd';
import { withRouter } from "react-router-dom"
import {connect} from 'react-redux'
import { loginUser } from '../../redux/user_redux'
import LogReg from '../../component/background/log_reg';
import './login.less'


@withRouter
@connect(
  state=>state,
  {loginUser}
)
class LoginForm extends React.Component {

  state = {
      count:0,
      autoLogin:true,
  }
  //忘记密码
  ForgotPwd = () => {
    this.props.history.push('/forgotpwd')
  }
  //注册跳转
  register = () => {
    this.props.history.push('/register')
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // this.props.history.push('/')
        let obj = {
          id:647037,
          username:values.phone,
          password:values.password

        }
        this.props.loginUser(obj)
      }
    });
  }
  //记住密码
  changgeAutoLogin = e => {
    this.setState({
      autoLogin:e.target.checked
    })
    console.log(this.autoLogin)
  }
  onTabChange = type => {
    this.setState({type})
  }

  // componentDidMount(){
  //
  //   axios.get("/api/test/profile")
  //     .then(res=>{
  //       // if (res.status==200&&res.data.code===0) {
  //       // 	dispatch(authSuccess(res.data.data))
  //       // }else{
  //       // 	dispatch(errorMsg(res.data.msg))
  //       // }
  //       console.log(res);
  //
  //     })
  //
  //
  // }
  render() {
    const { getFieldDecorator } = this.props.form;
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
              defaultActiveKey={'account'}
            >
              <TabPane tab="登录" key="account" >
                <Form onSubmit={this.handleSubmit} className="login-form">
                  <FormItem>
                    {getFieldDecorator('phone', {
                      rules: [{ required: true, message: '请输入账号!' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入手机号" />
                    )}
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
                  <FormItem>
                    {getFieldDecorator('remember', {
                      valuePropName: 'checked',
                      initialValue: true,
                    })(
                      <Checkbox >记住密码</Checkbox>
                    )}
                    <span className="login-form-forgot">
                  <a onClick={this.ForgotPwd}>忘记密码</a>
                  </span>
                  </FormItem>
                  <FormItem >
                    <Button type="primary" htmlType="submit" className="login-form-button btn_280">登录</Button>
                  </FormItem>
                </Form>
              </TabPane>
            </Tabs>
            <a>第三方登录</a>
            <a onClick={this.register} className="register">注册</a>
          </div>
        </div>
      </LogReg>

    );
  }
}

const Login = Form.create()(LoginForm)
export  default  Login
