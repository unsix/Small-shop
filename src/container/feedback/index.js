import  React from 'react';
import {Tabs, Form,Icon, Input, Button,  } from 'antd';
import { withRouter } from "react-router-dom"
import {connect} from 'react-redux'
import { orDetails } from '../../redux/order_redux'
import './index.less'
@withRouter
@connect(
  state=>state,
  {orDetails}
)
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
    const {TextArea} = Input
    const TabPane = Tabs.TabPane;
    const FormItem = Form.Item;
    const menuName = this.props.menu.menuName
    return (
      <div className="container_change_pwd container_width">
        <div className="shop_top container_top">
          <h2>{menuName}</h2>
        </div>
        <Form onSubmit={this.handleSubmit} className="change-form feed_form">
          <FormItem>
            {getFieldDecorator('feedTitle', {
              rules: [{ required: true, message: '请输入反馈标题！' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="反馈标题" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('feedContent', {
              rules: [{ required: true, message: '请输入反馈内容！' }],
            })(
              <TextArea
               autosize={
                 {
                   minRows:4,
                   maxRows:10
                 }
               }
               placeholder="反馈内容"
              />
            )}
          </FormItem>
          <FormItem >
            <Button type="primary" htmlType="submit" className="login-form-button btn_280">提交</Button>
          </FormItem>
        </Form>
      </div>

    );
  }
}

const ChangePwd = Form.create()(ChangeForm)
export  default  ChangePwd