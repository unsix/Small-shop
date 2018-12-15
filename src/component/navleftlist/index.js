// import React from 'react'
// import { Menu, Icon } from 'antd';
// import { NavLink } from 'react-router-dom'
// import {connect} from 'react-redux'
// import {authSuccess} from '../../redux/menu_redux'
// import Menulist from './../../config/menuConfig'
// import './index.less'
//
// @connect(
//   state=>state,
//   {authSuccess}
// )
//
// class NavLeft extends React.Component {
//   constructor (props){
//     super(props)
//     this.state = {
//       currentKey: '',
//     }
//   }
//   componentWillMount(){
//     const menuTreeNode = this.renderMenu(Menulist);
//     let currentKey = window.location.hash.replace(/#|\?.*$/g,'')
//     this.setState({
//       menuTreeNode,
//       currentKey
//     })
//   }
//   handleClick = ({item}) => {
//     console.log((item))
//     this.props.authSuccess(item.props.title)
//     this.setState({
//       currentKey:item.key
//     })
//     console.log(this.state.currentKey)
//   }
//   //菜单渲染
//   renderMenu =(data)=>{
//     const SubMenu = Menu.SubMenu;
//     return data.map((item)=>{
//       if(item.children){
//         return (
//           //{/*<SubMenu title={item.title}  key={item.key}>*/}
//             <SubMenu title={<span><Icon type={item.icon} />{item.title}</span> }  key={item.key}>
//             { this.renderMenu(item.children)}
//           </SubMenu>
//         )
//       }
//       return <Menu.Item title={item.title} key={item.key}>
//         <NavLink to={item.key}>{item.title}</NavLink>
//             </Menu.Item>
//     })
//   }
//   render() {
//     // const SubMenu = Menu.SubMenu;
//     return (
//       <div>
//         <div className="logo">
//           <img src={require('../img/logo.jpg')} alt="" />
//          <h1>五金商城</h1>
//         </div>
//         <div >
//           <Menu
//             defaultSelectedKeys={['1']}
//             defaultOpenKeys={['sub1']}
//             mode="inline"
//             theme="dark"
//             onClick={this.handleClick}
//           >
//             { this.state.menuTreeNode }
//           </Menu>
//         </div>
//       </div>
//     )
//   }
// }
// export  default NavLeft
//
// import React from 'react';
// import { Menu, Icon, Row,Col} from 'antd';
// import Menulist from '../../config/menuConfig'
// import './index.less'
//
// class Navlist extends React.Component {
//   state = {
//     current:'mail',
//   }
//
//   handleClick = (e) => {
//     console.log('click ', e);
//     this.setState({
//       current: e.key,
//     });
//     console.log(this.state.current)
//   }
//   handlePrev = ()=>{
//     this.refs.img.next();
//   }
//   componentWillMount(){
//     const menuTreeNode = this.renderMenu(Menulist);
//
//     this.setState({
//       menuTreeNode
//     })
//   }
//   菜单渲染
//   renderMenu =(data)=>{
//     const SubMenu = Menu.SubMenu;
//     return data.map((item)=>{
//       if(item.children){
//         return (
//           <SubMenu title={<span><Icon type={item.icon} />{item.title}</span> }  key={item.key}>
//             { this.renderMenu(item.children)}
//           </SubMenu>
//         )
//       }
//       return <Menu.Item title={item.title} key={item.key}>
//         {item.title}
//       </Menu.Item>
//     })
//   }
//   render() {
//     const SubMenu = Menu.SubMenu;
//     const MenuItemGroup = Menu.ItemGroup;
//     return (
//       <div className="navlist">
//         <Row>
//           <Col span="8">
//             <div className="logo">
//               <img src={require('../img/logo.jpg')} alt="" />
//               <h1>五金商城</h1>
//             </div>
//           </Col>
//           <Col span="16">
//             <Menu
//               onClick={this.handleClick}
//               selectedKeys={[this.state.current]}
//               mode="horizontal"
//               theme="dark"
//             >
//               { this.state.menuTreeNode }
//             </Menu>
//           </Col>
//         </Row>
//         <Icon type="left" theme="outlined" style={{ fontSize: '30px'}} onClick={this.handlePrev}/>
//         <Carousel afterChange={this.onChange} ref='img'>
//           <div><h3>1</h3></div>
//           <div><h3>2</h3></div>
//           <div><h3>3</h3></div>
//           <div><h3>4</h3></div>
//         </Carousel>
//       </div>
//     )
//   }
// }
// export default Navlist