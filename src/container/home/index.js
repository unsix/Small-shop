import React from 'react'
import { Carousel, Card, Icon } from 'antd'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {shopDetails,evaluateDetails,afterDetails,shopCart,cartData} from '../../redux/shop_redux'
import Shop from  '../../component/shop'
import SelectProducts from  '../../component/select_products'
import './index.less'
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
  render(){
    const menuName = this.props.menu.menuName
    const { footerNull } = this.state
    const gridStyle = {
      width: '20%',
      textAlign: 'center',
    };
    const { Meta } = Card;
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
      </div>
    )
  }
}

export default Home