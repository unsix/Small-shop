import React from 'react'
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom'
import Menulist from './../../config/menuConfig'
import './index.less'
class NavLeft extends React.Component {
  // state = {
  //   currentKey: ''
  // }
  componentWillMount(){
    const menuTreeNode = this.renderMenu(Menulist);

    this.setState({
      menuTreeNode
    })
  }
  菜单渲染
  renderMenu =(data)=>{
    const SubMenu = Menu.SubMenu;
    return data.map((item)=>{
      if(item.children){
        return (
          <SubMenu title={<span><Icon type={item.icon} />{item.title}</span> }  key={item.key}>
            { this.renderMenu(item.children)}
          </SubMenu>
        )
        // if(item.children){
        //   return (
        //     <SubMenu title={item.title}  key={item.key}>
        //       { this.renderMenu(item.children)}
        //     </SubMenu>
        //   )
        // }
        // return <SubMenu title={item.title}  key={item.key}>
        //   {item.title}
        // </SubMenu>
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
         <h1>邦邦商城</h1>
        </div>
        <div >
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub2']}
            mode="inline"
            theme="dark"
          >
            { this.state.menuTreeNode }
          </Menu>
        </div>
      </div>
    )
  }
}
export  default NavLeft