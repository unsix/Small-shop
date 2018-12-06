import React, { Component } from 'react';
import Header from './component/header'
import NavLeft from './component/navleftlist'
import Navlist from './component/navlist'
import './style/common.less'
import { Row,Col } from 'antd';

class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span="24">
            <Navlist/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;