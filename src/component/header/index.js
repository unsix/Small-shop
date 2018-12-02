import React from 'react'
import { Row,Col } from "antd"
import './index.less'

class Header extends React.Component{

  render(){
    return(
      <div className="header">
        <Row className="header-top">
          <Col span="6" className="logo">
            <img src="/assets/logo-ant.svg" alt=""/>
            <span>IMooc 通用管理系统</span>
          </Col>
          <Col span={24}>
            <span>欢迎，</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb" span={4}>
          <Col className="breadcrumb-title">
            首页
          </Col>
          <Col className="weather" span={20}>
            <span className="date">2018-5-04</span>
            <span className="weather-detail">晴转多云</span>
          </Col>
        </Row>
      </div>
    )
  }
}
export  default  Header