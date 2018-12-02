import  React from 'react';
import  axios from 'axios'
import {Tabs, Form,Row,Col ,Icon, Input, Button, Checkbox } from 'antd';
// import LogReg from '../../component/background/log_reg';
import './login.less'

class RegisterForm extends React.Component {

  state = {
    count:0
  }
  handleSubmit = (e) => {
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
          <h1>邦邦商城</h1>
        </div>
        <Tabs
          defaultActiveKey={type}
          onTabChange={this.handleSubmit}
          onSubmit={this.handleSubmit}
        >
          <TabPane tab="短信验证码登录" key="phone">
            <Form  className="login-form">
              <FormItem>
                {getFieldDecorator('phone', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="phone" />
                )}
              </FormItem>
              <FormItem
              >
                <Row gutter={10}>
                  <Col span={14}>
                    {getFieldDecorator('captcha', {
                      rules: [{ required: true, message: 'Please input the captcha you got!' }],
                    })(
                      <Input placeholder="验证码"/>
                    )}
                  </Col>
                  <Col  className="ml_9"  span={6}>
                    <Button
                      className="width_100"
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
            </Form>
          </TabPane>
        </Tabs>
      </div>

    );
  }
}

const Register = Form.create()(RegisterForm)
export  default  Register