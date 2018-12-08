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
    function handleChange(value) {
      console.log(`selected ${value}`);

    }

    return(

      <div className="container_search">
        <div className="ground-container">
          <Select
            mode="multiple"
            placeholder={'油漆'}
            showSearch
            onChange={handleChange}
          >
            <Option>11</Option>
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