import React from 'react'
import { Carousel, Card, Icon, List, Avatar, Input , Menu} from 'antd'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {shopDetails,evaluateDetails,afterDetails,shopCart,cartData} from '../../redux/shop_redux'
import Shop from  '../../component/shop'
import SelectProducts from  '../../component/select_products/select_products'
import './index.less'
import { dataAdress } from '../../redux/address_redux'
@connect(
  state=>state,
  {shopDetails,evaluateDetails,afterDetails,shopCart,cartData}
)
class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      current: 'mail',
    }
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  listClick = (item) => {
    console.log(item)
    this.props.evaluateDetails(item)
    const url = window.open('http://localhost:3000/')
    url.location.href=`/#/details/shop/${item.id}`
  }
  render(){
    const SubMenu = Menu.SubMenu;
    const MenuItemGroup = Menu.ItemGroup;
    const {Search} = Input
    const menuName = this.props.menu.menuName
    const gridStyle = {
      width: '20%',
      textAlign: 'center',
    };
    const { Meta } = Card;
    const data = [
      {
        id:1,
        title: 'Ant Design Title 1',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      },
      {
        id:2,
        title: 'Ant Design Title 2',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      },
      {
        id:3,
        title: 'Ant Design Title 3',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      },
      {
        id:4,
        title: 'Ant Design Title 4',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      },
    ];
    const dataS = [
      {
        id:1,
        title: 'Ant Design Title 1',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      },
      {
        id:2,
        title: 'Ant Design Title 2',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      },
      {
        id:3,
        title: 'Ant Design Title 3',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      },
      {
        id:4,
        title: 'Ant Design Title 4',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      },
      {
        id:5,
        title: 'Ant Design Title 1',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      },
      {
        id:6,
        title: 'Ant Design Title 2',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      },
      {
        id:7,
        title: 'Ant Design Title 3',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      },
      {
        id:8,
        title: 'Ant Design Title 4',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      },
      {
        id:9,
        title: 'Ant Design Title 3',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      },
      {
        id:10,
        title: 'Ant Design Title 4',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      },
    ];

    // const path = this.props.location.pathname
    // const redirect = this.props.redirectTo
    return(
      <div className="container_home container_width">
        <div className="home_top container_top">
          <h2>{menuName}</h2>
        </div>
        <div className="ground-container">
          <Carousel
            autoplay
            ref='img'
          >
            <div>
              <img src="http://cdn.image.mrcai.com/images/storage.jpg" alt=""/>
            </div>
            <div>
              <img src="http://cdn.image.mrcai.com/images/index.jpg" alt=""/>
            </div>
            <div>
              <img src="http://cdn.image.mrcai.com/images/index.jpg" alt=""/>
            </div>
            <div>
              <img src="http://cdn.image.mrcai.com/images/storage.jpg" alt=""/>
            </div>
          </Carousel>
          <Card >
            <Card.Grid style={gridStyle}>防水材料</Card.Grid>
            <Card.Grid style={gridStyle}>水电材料</Card.Grid>
            <Card.Grid style={gridStyle}>泥水材料</Card.Grid>
            <Card.Grid style={gridStyle}>分类</Card.Grid>
            <Card.Grid style={gridStyle}>油漆材料</Card.Grid>
            <Card.Grid style={gridStyle}>工具</Card.Grid>
            <Card.Grid style={gridStyle}>水电材料</Card.Grid>
            <Card.Grid style={gridStyle}>泥水材料</Card.Grid>
            <Card.Grid style={gridStyle}>分类</Card.Grid>
            <Card.Grid style={gridStyle}>其他</Card.Grid>
          </Card>
        </div>
        <div className="selected_bands">
          <h2>精选品牌</h2>
          <List

            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item
                onClick={()=>this.listClick(item)}
              >
                {/*<Card*/}
                {/*hoverable*/}
                {/*cover={<img alt="example" src={item.avatar} />}*/}
                {/*/>*/}
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src={require('../../component/img/select_2.png')} />}
                >
                  <Meta
                    className='shop_des'
                    title={<span>¥188<s>¥352</s></span>}
                    description="三棵树康家净味二合一乳胶漆白色哑光环保漆涂料墙漆"
                  />
                </Card>
              </List.Item>
            )}
          />
        </div>
        <div className="selected_bands all_bands">
          <Search
            placeholder="油漆"
            enterButton="搜商品"
            size="large"
            onSearch={value => console.log(value)}
          />
          <div className="sort_shop">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <SubMenu title={<span className="submenu-title-wrapper">综合<Icon type="caret-down" /></span>}>
                <Menu.Item key="setting:1">销量</Menu.Item>
                <Menu.Item key="setting:2">信誉</Menu.Item>
              </SubMenu>
              <Menu.Item key="setting:3">销量</Menu.Item>
              <Menu.Item key="setting:4">价格</Menu.Item>
            </Menu>
          </div>
          <List
            grid={{ gutter: 0, column:4}}
            itemLayout="horizontal"
            dataSource={dataS}
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 8,
            }}
            renderItem={item => (
              <List.Item
                onClick={()=>this.listClick(item)}
              >
                {/*<Card*/}
                {/*hoverable*/}
                {/*cover={<img alt="example" src={item.avatar} />}*/}
                {/*/>*/}
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src={require('../../component/img/select_2.png')} />}
                >
                  <Meta
                    className='shop_des'
                    title={<span>¥188<s>¥352</s></span>}
                    description="三棵树康家净味二合一乳胶漆白色哑光环保漆涂料墙漆"
                  />
                </Card>
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }
}

export default Home