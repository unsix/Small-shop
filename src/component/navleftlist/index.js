import React from 'react'
import { Menu, Icon } from 'antd';
import Menulist from './../../config/menuConfig'

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
      }
      return <Menu.Item title={item.title} key={item.key}>

       {item.title}
      </Menu.Item>
    })
  }
  render() {
    // const SubMenu = Menu.SubMenu;
    return (
      <div>
        {/*<NavLink to="/home" onClick={this.homeHandleClick}>*/}
          {/*<div className="logo">*/}
            {/*<img src="/assets/logo-ant.svg" alt=""/>*/}
            {/*<h1>Imooc MS</h1>*/}
          {/*</div>*/}
        {/*</NavLink>*/}
        <div className="logo">
          <img src={require('../img/logo.jpg')} alt="" />
        </div>
        <div className="navmenu">
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
    );
  }
}
export  default NavLeft