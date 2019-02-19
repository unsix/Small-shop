import React from 'react'
import { Menu, Dropdown, Icon,Row,Col,Avatar,Breadcrumb} from 'antd';
import {connect} from 'react-redux'
import {logoutSubmit} from '../../redux/user_redux'
// import {authSuccess} from '../../redux/menu_redux'
import './index.less'
import { withRouter } from "react-router-dom"

@withRouter
@connect(
  state=>state.user,
  {logoutSubmit}
)
class Header extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      menuName:''
    }
  }
  //根据传入类型跳转
  LinkPush = (type) => {
    this.props.history.push(type)
    console.log(type,this.props)

  }

  componentWillMount(){
    console.log(this.state)
  }
  render(){
    //下单menu
    const menuName = this.props.menu.menuName
    const menu = (
      <Menu>
        <Menu.Item>
          <a ><span>基本信息</span></a>
        </Menu.Item>
        <Menu.Item>
          <a ><span>收获管理</span></a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={()=>this.LinkPush('/setting/reset')}><span>重置密码</span></a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item

        >
          <a onClick={()=>this.LinkPush('/login')}><Icon type="logout" /><span>退出登录</span></a>
        </Menu.Item>
      </Menu>
    );
    return(
      <div className="component component_header">
        <Row className="header-top">
          <Col span="12">
            <h3 >五金商城 <span>/{menuName}</span></h3>
          </Col>
          <Col span="12" className="header-top-nav">
              <Avatar style={{ backgroundColor: '#87d068' }} className="header-avatar">U</Avatar>
              <Dropdown overlay={menu}>
                  <span>欢迎 Jack Ma <Icon type="caret-down" /></span>
              </Dropdown>
          </Col>
        </Row>
      </div>
    )
  }
}
export  default  Header