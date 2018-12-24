import React, { Component } from 'react';
import Header from './component/header'
import NavLeft from './component/navlist'
import './style/common.less'
import { Row,Col } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Row >
          <Col span="24" className="nav-menu">
            <NavLeft/>
          </Col>
            <Col span="24" className="main">
              <div className="content">
                {this.props.children}
              </div>
            </Col>
          <div className="customer_service">
            <a target="_blank"  rel="noopener noreferrer" href="http://wpa.qq.com/msgrd?v=3&uin=599901500&site=qq&menu=yes">
              <img border="0" src="http://wpa.qq.com/pa?p=2:599901500:53" alt="点击这里给我发消息" title="点击这里给我发消息"/>
            </a>
          </div>
        </Row>
        {/*<Col span="24" className="main">*/}

            {/*<Row className="content">*/}
              {/*/!* <Home/> *!/*/}


            {/*</Row>*/}
        {/*</Col>*/}
      </div>
    );
  }
}

export default App;
