import React from 'react'
import { Menu, Dropdown, Icon,Row,Col,Avatar } from 'antd';
import './index.less'
import { withRouter } from "react-router-dom"

@withRouter
class Header extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  //根据传入类型跳转
  LinkPush = (type) => {
    this.props.history.push(type)
    console.log(type)
  }
  render(){
    //下单menu
    const menu = (
      <Menu>
        <Menu.Item>
          <a ><span>基本信息</span></a>
        </Menu.Item>
        <Menu.Item>
          <a ><span>收获管理</span></a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={()=>this.LinkPush('/seting/reset')}><span>重置密码</span></a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item

        >
          <a onClick={()=>this.LinkPush('/login')}><Icon type="logout" /><span>退出登录</span></a>
        </Menu.Item>
      </Menu>
    );
    return(
      <div className="header">
        <Row className="header-top">
          <Col span="3">
            <h3 >五金商城</h3>
          </Col>
          <Col span="21" className="header-top-nav">
              <Avatar style={{ backgroundColor: '#87d068' }} className="header-avatar">U</Avatar>
              <Dropdown overlay={menu}>
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