import React from 'react'
import { Carousel, Card, Icon } from 'antd'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {shopDetails,evaluateDetails,afterDetails,shopCart,cartData} from '../../redux/shop_redux'
import Shop from  '../../component/shop'
import './index.less'
@connect(
  state=>state,
  {shopDetails,evaluateDetails,afterDetails,shopCart,cartData}
)
class Home extends React.Component{


  OnDetails = (record) => {
    this.props.shopDetails(record)
    this.props.history.push(`/details/shop/${record.id}`)
  }
  OnEvaluate = (record) => {
    this.props.evaluateDetails(record)
    this.props.history.push(`/details/evaluate/${record.id}`)
  }
  OnAfter = (record) => {
    this.props.afterDetails(record)
    this.props.history.push(`/details/after/${record.id}`)
  }
  render(){
    const menuName = this.props.menu.menuName
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
          <div className="selected_bands">
            <h2>精选品牌</h2>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={require('../../component/img/select_1.png')} />}
            >
              <Meta
                className='shop_des'
                title={<span>¥188<s>¥352</s></span>}
                description="三棵树康家净味二合一乳胶漆白色哑光环保漆涂料墙漆"
              />
            </Card>
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
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={require('../../component/img/select_1.png')} />}
            >
              <Meta
                className='shop_des'
                title={<span>¥188<s>¥352</s></span>}
                description="三棵树康家净味二合一乳胶漆白色哑光环保漆涂料墙漆"
              />
            </Card>
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
          </div>
        </div>
        <Shop
          details = {this.OnDetails}
          evaluate = {this.OnEvaluate}
          after = {this.OnAfter}
        />
      </div>
    )
  }
}

export default Home