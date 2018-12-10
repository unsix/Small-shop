import React from 'react'
import {  Card,Select,Icon,Button,Modal} from 'antd'

import './index.less'

class Search extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      sum:1,
      visible: false
    }
  }
  //购物车+
  addSum = () => {
    const nextSum = this.state.sum + 1
    this.setState({
      sum:nextSum
    })
  }
  //购物车-
  reduceSum = () => {
    const nextSum = this.state.sum - 1
    if (nextSum>0){
      this.setState({
        sum:nextSum
      })
      console.log(nextSum)
    }
  }
  //购物车相关模态框
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render(){
    const gridStyle = {
      width: '23%',
      margin: '1%',
      textAlign: 'center',
    };
    const Option = Select.Option;
    const { Meta } = Card;
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
          <div className="sort_shop">
            <h3>综合<Icon type="caret-down"/></h3>
            <h3>销量</h3>
            <h3>价格</h3>
            <div className="shop_selected_bands">
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
                <div className="shop_cart">
                  <Button onClick={this.addSum}>+</Button>
                  <Button>{this.state.sum}</Button>
                  <Button onClick={this.reduceSum}>-</Button>
                  <img src={require('../../component/img/shop_cart.png')} alt=""/>
                </div>
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
                <div className="shop_cart">
                  <Button onClick={this.addSum}>+</Button>
                  <Button>{this.state.sum}</Button>
                  <Button onClick={this.reduceSum}>-</Button>
                  <img src={require('../../component/img/shop_cart.png')} alt=""/>
                </div>
              </Card>,
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
                <div className="shop_cart">
                  <Button onClick={this.addSum}>+</Button>
                  <Button>{this.state.sum}</Button>
                  <Button onClick={this.reduceSum}>-</Button>
                  <img src={require('../../component/img/shop_cart.png')} alt=""/>
                </div>
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
                <div className="shop_cart">
                  <Button onClick={this.addSum}>+</Button>
                  <Button>{this.state.sum}</Button>
                  <Button onClick={this.reduceSum}>-</Button>
                  <img src={require('../../component/img/shop_cart.png')} alt=""/>
                </div>
              </Card>
            </div>
          </div>
          <div className="relevant"
               onClick={this.showModal}
            >
            <Card
              hoverable
              cover={<img alt="example" src={require('../../component/img/relevant_1.png')} />}
            >
            </Card>
            <Card
              hoverable
              cover={<img alt="example"  src={require('../../component/img/relevant_2.png')}/>}
            >
            </Card>
            <Card
              hoverable
              cover={<img alt="example" src={require('../../component/img/relevant_3.png')} />}
            >
            </Card>
            <Card
              hoverable
              cover={<img alt="example" src={require('../../component/img/relevant_2.png')} />}
            >
            </Card>
            <Card
              hoverable
              cover={<img alt="example" src={require('../../component/img/relevant_2.png')} />}
            >
            </Card>
          </div>
          {/*<div className="sort_shop">*/}
            {/*<div className="shop_selected_bands">*/}
          <Modal
            title="油漆相关产品"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <div className="sort_shop">
              <div className="shop_selected_bands">
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
                  <div className="shop_cart">
                    <Button onClick={this.addSum}>+</Button>
                    <Button>{this.state.sum}</Button>
                    <Button onClick={this.reduceSum}>-</Button>
                    <img src={require('../../component/img/shop_cart.png')} alt=""/>
                  </div>
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
                  <div className="shop_cart">
                    <Button onClick={this.addSum}>+</Button>
                    <Button>{this.state.sum}</Button>
                    <Button onClick={this.reduceSum}>-</Button>
                    <img src={require('../../component/img/shop_cart.png')} alt=""/>
                  </div>
                </Card>,
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
                  <div className="shop_cart">
                    <Button onClick={this.addSum}>+</Button>
                    <Button>{this.state.sum}</Button>
                    <Button onClick={this.reduceSum}>-</Button>
                    <img src={require('../../component/img/shop_cart.png')} alt=""/>
                  </div>
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
                  <div className="shop_cart">
                    <Button onClick={this.addSum}>+</Button>
                    <Button>{this.state.sum}</Button>
                    <Button onClick={this.reduceSum}>-</Button>
                    <img src={require('../../component/img/shop_cart.png')} alt=""/>
                  </div>
                </Card>
              </div>
            </div>
          </Modal>
        </div>
      </div>

    )
  }
}

export default Search