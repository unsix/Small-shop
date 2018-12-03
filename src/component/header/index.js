import React from 'react'
import { Menu, Dropdown, Icon,Row,Col,Avatar } from 'antd';
import './index.less'



class Header extends React.Component{

  render(){
    //下单menu
    const menu = (
      <Menu>
        <Menu.Item>
          <a  href="http://www.alipay.com/"><span>基本信息</span></a>
        </Menu.Item>
        <Menu.Item>
          <a href="http://www.taobao.com/"><span>收获管理</span></a>
        </Menu.Item>
        <Menu.Item>
          <a href="http://www.tmall.com/"><span>设置</span></a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a href="http://www.tmall.com/"><Icon type="logout" /><span>退出登录</span></a>
        </Menu.Item>
      </Menu>
    );
    return(
      <div className="header">
        <Row className="header-top">
          <Col span="24" className="header-top-nav">
            <Avatar className="header-avatar">U</Avatar>
            <Dropdown overlay={menu} trigger={['click']}>
              <span>欢迎 jack Ma <Icon type="caret-down" /></span>
            </Dropdown>
          </Col>
        </Row>
        {/*<Row className="breadcrumb" span={4}>*/}
          {/*<Col className="breadcrumb-title">*/}
            {/*首页*/}
          {/*</Col>*/}
          {/*<Col className="weather" span={20}>*/}
            {/*<span className="date">2018-5-04</span>*/}
            {/*<span className="weather-detail">晴转多云</span>*/}
          {/*</Col>*/}
        {/*</Row>*/}
      </div>
    )
  }
}
export  default  Header