
import React from 'react'
import {Radio, Form,Button, InputNumber, Modal, Input, Avatar, Cascader, Switch,List } from 'antd'
import {connect} from 'react-redux'
import "./index.less"
@connect(
  state=>state
)
class CartModal extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      visible: false,
      allprice:''
    }

  }
  handleOk = (e) => {
      this.props.onOk(false)
  }

  handleCancel = (e) => {
    this.props.onCancel();
  }
  render(){
    // console.log(this.props)

    const datacart = this.props.cart.dataCart.selectedRows
    const allprice = this.props.cart.dataCart.allprice
    console.log(datacart)
    return(
      <div>
        <Modal
          okText="提交订单"
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          destroyOnClose={true}
        >
          <div className=" modal_cart modal_content">
                <List
                  itemLayout="horizontal"
                  dataSource={datacart}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar[0]} />}
                        title={item.name}
                      />
                      <div className="content">
                        <div className="unit">
                          <h6>¥{item.unit} <span>×1</span></h6>
                        </div>
                        <h6 className="spe">{item.Specifications}</h6>
                        <h6 className="cor">{item.color}</h6>
                        <h6 className="num">×{item.number}</h6>
                      </div>
                    </List.Item>
                  )}
                />
            <div>
              <h3 className="pce">合计金额 :
                <span>
                ¥{allprice}
                </span>
              </h3>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
// {chatmsgs.map(v=>{
//   const avatar = require(`../img/${users[v.from].avatar}.png`)
//   return v.from==userid?(
//     <List key={v._id} >
//       <Item
//         thumb={avatar}
//       >
//
//         {v.content}
//       </Item>
//     </List>):(
//     <List key= {v._id} >
//       <Item
//         extra = {<img alt="头像" src={avatar} />}
//         className='chat-me'
//       >
//         {v.content}
//       </Item>
//     </List>
//   )
//
//
// })}
export default  CartModal