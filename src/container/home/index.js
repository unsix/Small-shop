import React from 'react'
import { Carousel, Card, Icon, List, Avatar, Input , Menu} from 'antd'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {shopDetails,evaluateDetails,afterDetails,cartData,getShopList,getSelectedList} from '../../redux/shop_redux'
import Shop from  '../../component/shop'
import SelectProducts from  '../../component/select_products/select_products'
import './index.less'
@connect(
  state=>state,
  {shopDetails,evaluateDetails,afterDetails,cartData,getShopList,getSelectedList}
)
class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      current: 'mail',
    }
  }

  //
  componentDidMount(){

    let obj ={
      // pageIndex: "1",
      // pageSize: "8"
    }
    let objSelect={

    }
    this.props.getShopList(obj)
    this.props.getSelectedList(objSelect)
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
    const {Search} = Input
    const menuName = this.props.menu.menuName
    const {shopList,selectList} = this.props.shop
    const gridStyle = {
      width: '20%',
      textAlign: 'center',
    };
    const { Meta } = Card;
    const data = [

    ];
    const dataS = [
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
        </div>
        <div className="selectBrand">
          <List
            grid={{ gutter: 0, column:4}}
            itemLayout="horizontal"
            dataSource={selectList}
            // pagination={{
            //   onChange: (page) => {
            //     console.log(page);
            //   },
            //   pageSize: 8,
            // }}
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
                >
                  <Meta
                    className='shop_des'
                    title={<span>{item.name}</span>}
                    // description={item.categoryName}
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
            dataSource={shopList}
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 16,
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
                  cover={<img alt="example" src={"http://39.105.25.92"+`${item.thumbImage}`} />}
                >
                  <Meta
                    className='shop_des'
                    title={<span>¥{item.price}</span>}
                    description={item.categoryName}
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