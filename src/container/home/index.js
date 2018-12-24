import React from 'react'
import { Carousel, Card, Icon,List,Avatar} from 'antd'
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
      visible:false,
      modalType:'',
      footerNull:undefined
    }
  }
  // //详情
  // OnDetails = (record) => {
  //   this.props.shopDetails(record)
  //   this.props.history.push(`/details/shop/${record.id}`)
  // }
  // //评价
  // OnEvaluate = (record) => {
  //   this.props.evaluateDetails(record)
  //   this.props.history.push(`/details/evaluate/${record.id}`)
  // }
  // //售后
  // OnAfter = (record) => {
  //   this.props.afterDetails(record)
  //   this.props.history.push(`/details/after/${record.id}`)
  // }
  //cart pay modal
  OnModal = (type,record) => {
    if(type === '添加购物车'){
      this.props.shopCart(record)
      console.log(type)
      let visible = this.state.visible;
      this.setState({
        visible:!visible,
        modalType:type
      })
    }
    if(type === '立即购买') {
      this.props.shopCart(record)
      let visible = this.state.visible;
      this.setState({
        visible:!visible,
        modalType:type
      })
      console.log(this.state.modalType)
    }
    if(type === '评价') {
      this.props.shopCart(record)
      let visible = this.state.visible;
      this.setState({
        visible:!visible,
        modalType:type,
        footerNull:null
      })
    }
    if(type === '详情') {
      this.props.shopCart(record)
      let visible = this.state.visible;
      this.setState({
        visible:!visible,
        modalType:type,
        footerNull:null
      })
    }
    if(type === '售后') {
      this.props.shopCart(record)
      let visible = this.state.visible;
      this.setState({
        visible:!visible,
        modalType:type,
        footerNull:null
      })
    }
  }
  shopOk = (val,obj) => {
    console.log(val)
    if(this.state.modalType === '立即购买'){
      console.log(val)
      this.setState({
        visible:val
      })
      this.props.shopCart(obj)
      this.props.history.push(`payment/${obj.id}`)
    }
  }
  //close modal
  OnCancel = () => {
    this.setState({
      visible:false,
      footerNull:undefined
    })
  }
  listClick = (item) => {
    console.log(item)
    this.props.evaluateDetails(item)
    const url=window.open('about:blank')
    url.location.href=`/#/details/shop/${item.id}`

  }
  render(){
    const menuName = this.props.menu.menuName
    const { footerNull } = this.state
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
          <SelectProducts
            visible={this.state.visible}
            modal = {this.OnModal}
            onCancel = {this.OnCancel}
            title={this.state.modalType}
            onOk={this.shopOk}
            footerNull={footerNull}
          />
          <Shop
            visible={this.state.visible}
            modal = {this.OnModal}
            onCancel = {this.OnCancel}
            title={this.state.modalType}
            onOk={this.shopOk}
            footerNull={footerNull}
          />
        </div>
        <List
          grid={{ gutter: 105, column:4}}
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
    )
  }
}

export default Home