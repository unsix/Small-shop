import React from 'react';
import { Menu, Icon, Row,Col,Carousel} from 'antd';
import Menulist from '../../config/menuConfig'
import './index.less'

class Navlist extends React.Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  onChange = (a,b,c)=>{
    console.log(a, b, c);
  }
  handlePrev = ()=>{
    this.refs.img.next();
  }
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
        {item.title}
      </Menu.Item>
    })
  }
  render() {
    const SubMenu = Menu.SubMenu;
    const MenuItemGroup = Menu.ItemGroup;
    return (
      <div className="navlist">
        <Row>
          <Col span="8">
            <div className="logo">
              <img src={require('../img/logo.jpg')} alt="" />
              <h1>邦邦商城</h1>
            </div>
          </Col>
          <Col span="16">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
              theme="dark"
            >
              { this.state.menuTreeNode }
              <SubMenu className="log_reg" title={<span className="submenu-title-wrapper "><Icon type="setting" />登录</span>}>
              </SubMenu>
              <SubMenu className="log_reg" title={<span className="submenu-title-wrapper "><Icon type="setting" />注册</span>}>
              </SubMenu>
            </Menu>
          </Col>
        </Row>
        <Icon type="left" theme="outlined" style={{ fontSize: '30px'}} onClick={this.handlePrev}/>
        <Carousel afterChange={this.onChange} ref='img'>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
      </div>
    )
  }
}
export default Navlist