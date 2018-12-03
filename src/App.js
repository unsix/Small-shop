import React, { Component } from 'react';
import Header from './component/header'
import NavLeft from './component/navleftlist'
import './style/common.less'
import { Row,Col } from 'antd';

class App extends Component {
  render() {
    return (
      <div >
        <Row className="container">
          <Col span="3" className="nav-left">
            <NavLeft/>
          </Col>
          <Col span="21" className="main">
            <Header/>
            <Row className="content">
              {/* <Home/> */}

            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
