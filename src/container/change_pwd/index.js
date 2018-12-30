import  React from 'react';
import  axios from 'axios'
import {Tabs, Form,Row,Col ,Icon, Input, Button, Checkbox } from 'antd';
import { Redirect, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import './index.less'
import { updatePwdUser } from '../../redux/user_redux'
import LogReg from '../../component/background/log_reg'

@withRouter
@connect(
  state=>state,
  {updatePwdUser}
)
class ChangeForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // this.props.history.push('/')
        let obj = {
          currentPassword:values.oldPwd,
          password:values.confirmPwd

        }
        this.props.updatePwdUser(obj,)
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const TabPane = Tabs.TabPane;
    const FormItem = Form.Item;
    const menuName = this.props.menu.menuName
    return (
        <div className="container_change_pwd container_width">
          <div className="shop_top container_top">
            <h2>{menuName}</h2>
          </div>
              <Form onSubmit={this.handleSubmit} className="change-form">
                <FormItem>
                  {getFieldDecorator('oldPwd', {
                    rules: [{ required: true, message: '请输入旧密码!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入旧密码" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('newPwd', {
                    rules: [{ required: true, message: '请输入新密码!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入新密码" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('confirmPwd', {
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