import  React from 'react';
import  axios from 'axios'
import {Tabs, Form,Row,Col ,Icon, Input, Button, Checkbox } from 'antd';
import { withRouter } from "react-router-dom"
// import LogReg from '../../component/background/log_reg';
import './login.less'

@withRouter
class LoginForm extends React.Component {

  state = {
      type:'account',
      count:0
  }
  handleSubmit = (e) => {
    console.log(this.props)
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
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
      <div className="container_login">
        <div className="logo-top">
          <img src={require('../../component/img/logo.jpg')} alt="" />
          <h1>五金商城</h1>
        </div>
        <Tabs
          defaultActiveKey={type}

        >
          <TabPane tab="登录" key="account" >
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
                  <Checkbox>记住密码</Checkbox>
                )}
                  <span className="login-form-forgot">
                  <a  href="">忘记密码</a>
                  </span>
              </FormItem>
              <FormItem >
                <Button type="primary" htmlType="submit" className="login-form-button btn_280">登录</Button>
              </FormItem>
            </Form>
          </TabPane>
          {/*<TabPane tab="注册" key="2"  >*/}

          {/*</TabPane>*/}
        </Tabs>
      </div>

    );
  }
}

const Login = Form.create()(LoginForm)
export  default  Login
