import  React from 'react';
import { Tabs } from 'antd';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
// import LogReg from '../../component/background/log_reg';
import './login.less'


class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const TabPane = Tabs.TabPane;
    const FormItem = Form.Item;
    return (
      <div className="container_login">
        <div className="logo-top">
          <img src={require('../../component/img/logo.jpg')} alt="" />
          <h1>邦邦商城</h1>
        </div>
        <Tabs defaultActiveKey="1" >
          <TabPane tab="登录" key="1" >
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <span className="login-form-forgot">
               <a  href="">Forgot password</a>
            </span>
                <br/>
                <Button  type="primary" htmlType="submit" className="login-form-button btn_280">
                  Log in
                </Button>
                {/*Or <a href="">register now!</a>*/}
              </FormItem>
            </Form>
          </TabPane>
          <TabPane tab="注册" key="2">
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <span className="login-form-forgot">
               <a  href="">Forgot password</a>
            </span>
                <br/>
                <Button  type="primary" htmlType="submit" className="login-form-button btn_280">
                  regi ster
                </Button>
                {/*Or <a href="">register now!</a>*/}
              </FormItem>
            </Form>
          </TabPane>
        </Tabs>
      </div>

    );
  }
}

const Login = Form.create()(LoginForm)
export  default  Login
