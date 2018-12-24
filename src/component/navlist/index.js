

import React from 'react'
import { Menu, Icon, Row, Col, Avatar, Dropdown } from 'antd'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {authSuccess} from '../../redux/menu_redux'
import Menulist from './../../config/menuConfig'
import './index.less'
import { withRouter } from "react-router-dom"

@withRouter
@connect(
  state=>state,
  {authSuccess}
)

class NavLeft extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      currentKey: '',
    }
  }
  componentWillMount(){
    const menuTreeNode = this.renderMenu(Menulist);
    let currentKey = window.location.hash.replace(/#|\?.*$/g,'')
    this.setState({
      menuTreeNode,
      currentKey
    })
  }
  handleClick = ({item}) => {
    console.log((item))
    this.props.authSuccess(item.props.title)
    this.setState({
      currentKey:item.key
    })
    console.log(this.state.currentKey)
  }
  //根据传入类型跳转
  LinkPush = (type) => {
    this.props.history.push(type)
    console.log(type,this.props)

  }
  //菜单渲染
  renderMenu =(data)=>{
    const SubMenu = Menu.SubMenu;
    return data.map((item)=>{
      if(item.children){
        return (
          //{/*<SubMenu title={item.title}  key={item.key}>*/}
          <SubMenu title={<span><Icon type={item.icon} />{item.title}</span> }  key={item.key}>
            { this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
        {/*//有Icon 缺少 type*/}
        <NavLink to={item.key}>{<span><Icon type={item.icon} />{item.title}</span> }</NavLink>
        {/*<NavLink to={item.key}>{item.title}</NavLink>*/}
      </Menu.Item>
    })
  }
  render() {
    // const SubMenu = Menu.SubMenu;
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
          <a onClick={()=>this.LinkPush('/seting/reset')}><span>重置密码</span></a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item

        >
          <a onClick={()=>this.LinkPush('/login')}><Icon type="logout" /><span>退出登录</span></a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="navNenu">
        <Row>
          <Col span="4">
            <div className="logo">
              <img src={require('../img/logo.jpg')} alt="" />
              <h1>五金商城</h1>
            </div>
          </Col>
          <Col span="12">
            <div className="menuList">
              <Menu
                mode="horizontal"
                theme="dark"
                onClick={this.handleClick}
              >
                { this.state.menuTreeNode }
              </Menu>
            </div>
          </Col>
          <Col span="6">
            <div className="userName">
              <Avatar style={{ backgroundColor: '#87d068' }} className="user-avatar">U</Avatar>
              <Dropdown overlay={menu}>
                <span>欢迎 Jack Ma <Icon type="caret-down" /></span>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
export  default NavLeft