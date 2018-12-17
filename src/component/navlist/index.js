

import React from 'react'
import { Menu, Icon,Row,Col } from 'antd';
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {authSuccess} from '../../redux/menu_redux'
import Menulist from './../../config/menuConfig'
import './index.less'

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
        <NavLink to={item.key}>{<span><Icon type={item.icon} />{item.title}</span> }</NavLink>
      </Menu.Item>
    })
  }
  render() {
    // const SubMenu = Menu.SubMenu;
    return (
      <div className="navNenu">
        <Row>
          <Col span="6">
            <div className="logo">
              <img src={require('../img/logo.jpg')} alt="" />
              <h1>五金商城</h1>
            </div>
          </Col>
          <Col span="18">
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
        </Row>
      </div>
    )
  }
}
export  default NavLeft