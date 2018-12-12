import React from 'react'
import { Carousel, Card, Icon } from 'antd'
import {Redirect} from 'react-router-dom'

import './index.less'

class Home extends React.Component{

  render(){
    const gridStyle = {
      width: '20%',
      textAlign: 'center',
    };
    const { Meta } = Card;
    const path = this.props.location.pathname
    const redirect = this.props.redirectTo
    return(
      <div>
        {redirect&&redirect!=path?<Redirect to={this.props.redirectTo} />:null}
      <div className="container_home">
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
      </div>
      </div>
    )
  }
}

export default Home