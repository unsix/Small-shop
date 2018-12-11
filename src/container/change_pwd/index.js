import  React from 'react';
import  axios from 'axios'
import {Tabs, Form,Row,Col ,Icon, Input, Button, Checkbox } from 'antd';
import { withRouter } from "react-router-dom"
import './index.less'

@withRouter
class ChangeForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.history.push('/')
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const TabPane = Tabs.TabPane;
    const FormItem = Form.Item;
    return (
        <div className="container_change_pwd">
                <Form onSubmit={this.handleSubmit} className="login-form">
                  <h2>重置密码</h2>
                  <FormItem>
                    {getFieldDecorator('oldpassword', {
                      rules: [{ required: true, message: '请输入旧密码!' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入旧密码" />
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('newpassword', {
                      rules: [{ required: true, message: '请输入新密码!' }],
                    })(
                      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入新密码" />
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('confirmpassword', {
                      rules: [{ required: true, message: '请再次输入新密码!' }],
                    })(
                      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请再次输入新密码" />
                    )}
                  </FormItem>
                  <FormItem >
                    <Button type="primary" htmlType="submit" className="login-form-button btn_280">确定</Button>
                  </FormItem>
                </Form>
        </div>

    );
  }
}

const ChangePwd = Form.create()(ChangeForm)
export  default  ChangePwd