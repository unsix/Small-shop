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
            <Col span="24" className="" >
              <div className="header_content">
                <Header/>
              </div>
            </Col>
            <Col span="24" className="main">
              <div className="content">
                {this.props.children}
              </div>
            </Col>
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
