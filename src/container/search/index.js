import React from 'react'
import {  Card,Select,Icon  } from 'antd'

import './index.less'

class Search extends React.Component{

  render(){
    const gridStyle = {
      width: '23%',
      margin: '1%',
      textAlign: 'center',
    };
    const Option = Select.Option;


    return(

      <div className="container_search">
        <div className="ground-container">
          <Select
            mode="multiple"
            placeholder={'油漆'}
            showSearch
          >
            <Option value="1">
              <div className="select_choice">
                <li>沥青类</li>
              </div>
              <Card.Grid style={gridStyle}>沥青类</Card.Grid>
            </Option>
            <Option value="2">
              <div className="select_choice">
                <li>橡胶类</li>
              </div>
              <Card.Grid style={gridStyle}>橡胶类</Card.Grid>
            </Option>
            <Option value="3">
              <div className="select_choice">
                <li>水泥类</li>
              </div>
              <Card.Grid style={gridStyle}>水泥类</Card.Grid>
            </Option>
            <Option value="4">
              <div className="select_choice">
                <li>金属类</li>
              </div>
              <Card.Grid style={gridStyle}>金属类</Card.Grid>
            </Option>
            <Option value="5">
              <div className="select_choice">
                <li>其他类</li>
              </div>
              <Card.Grid style={gridStyle}>其他类</Card.Grid>
            </Option>
            <Option value="6">
              <div className="select_choice">
                <li>等等类</li>
              </div>
              <Card.Grid style={gridStyle}>等等类</Card.Grid>
            </Option>
            <Option value="7">
              <div className="select_choice">
                <li>不同类</li>
              </div>
              <Card.Grid style={gridStyle}>不同类</Card.Grid>
            </Option>
            <Option value="8">
              <div className="select_choice">
                <li><Icon type="caret-down"/></li>
              </div>

              <Card.Grid style={gridStyle}><Icon type="caret-down"/></Card.Grid>
            </Option>
          </Select>
          <Card >
            <Card.Grid style={gridStyle}>沥青类</Card.Grid>
            <Card.Grid style={gridStyle}>橡胶类</Card.Grid>
            <Card.Grid style={gridStyle}>水泥类</Card.Grid>
            <Card.Grid style={gridStyle}>金属类</Card.Grid>
            <Card.Grid style={gridStyle}>其他类</Card.Grid>
            <Card.Grid style={gridStyle}>等等类</Card.Grid>
            <Card.Grid style={gridStyle}>不同类</Card.Grid>
            <Card.Grid style={gridStyle}><Icon type="caret-down"/></Card.Grid>
          </Card>
        </div>
      </div>
    )
  }
}

export default Search