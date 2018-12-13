import React from 'react'
import { Menu, Icon } from 'antd';
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
      currentKey: ''
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
        <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
    })
  }
  render() {
    // const SubMenu = Menu.SubMenu;
    return (
      <div>
        <div className="logo">
          <img src={require('../img/logo.jpg')} alt="" />
         <h1>五金商城</h1>
        </div>
        <div >
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub2']}
            mode="inline"
            theme="dark"
            selectedKeys={[this.state.currentKey]}
            onClick={this.handleClick}
          >
            { this.state.menuTreeNode }
          </Menu>
        </div>
      </div>
    )
  }
}
export  default NavLeft