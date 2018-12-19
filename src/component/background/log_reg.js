import React from "react";
// import logoImg from './job.png'
import { Menu, Icon, Row,Col,Carousel} from 'antd';
import './log_reg.less';
class LogReg extends React.Component {
  render(){
    return(
      <div className="container container_lr">
        <div className="ground-container">
          <Carousel
            autoplay
            vertical
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
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default LogReg