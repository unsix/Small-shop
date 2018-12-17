import React from 'react'
import { Table, Button, Avatar, Popconfirm, Form, Modal, Input,Icon,Rate,Pagination,InputNumber } from 'antd'
import {connect} from 'react-redux'
import {shopDetails,evaluateDetails,afterDetails,shopCart,cartData} from '../../redux/shop_redux'
import ShopModal from '../../component/modal/shop_modal'
import './index.less'

const {Search} = Input
@connect(
  state=>state,
  {shopDetails,evaluateDetails,afterDetails,shopCart,cartData}
)
class Shop extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      details:[],
      loading: false,
      modalType:'添加购物车',
      sum:0,
      allprice:0,
      visible:false,
      data:[{
        id:'1',
        key: '1',
        avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
        ],
        name: '中财PPR热水管',
        unit:10,
        number:1,
        price:10,
        color:'黑色',
        Specifications: '大',
        star:0,
      }, {
        id:'2',
        key: '2',
        avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'],
        name: '霍尼韦尔PPR热水管',
        unit:20,
        number:1,
        price:20,
        color:'黑色',
        Specifications: '中',
        star:1
      }, {
        id:'3',
        key: '3',
        avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'],
        name: '宜家不锈钢液压铰链',
        unit:30,
        number:1,
        price:30,
        color:'黑色',
        Specifications: '小',
        star:0
      }, {
        id:'4',
        key: '4',
        avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'],
        name: '高渗透基膜',
        unit:40,
        number:1,
        price:40,
        color:'黑色',
        Specifications: '中',
        star:0
      }]

    }
  }
  componentDidMount(){

  }
  //查看详情
  details = (record) => {
    this.props.shopDetails(record)
    this.props.history.push(`/details/shop/${record.id}`)
  }
  //评价
  evaluate = (record) => {
    this.props.evaluateDetails(record)
    this.props.history.push(`/details/evaluate/${record.id}`)
  }
  //售后
  after = (record) => {
    this.props.afterDetails(record)
    this.props.history.push(`/details/after/${record.id}`)
  }
  //购物车//立即购买
  modal = (type,record) => {
    this.props.shopCart(record)
    let visible = this.state.visible;
    this.setState({
      visible:!visible,
      modalType:type
    })
  }
  //取消弹窗
  onCancel = () => {
    this.setState({
      visible:false
    })
  }
  //moadl提交
  handleok= (val,value) => {
    let id = this.props.shop.cart.id
    let price = this.props.shop.cart.price
    let allprice = value.number*price
    let obj = {
      value:{
        Specifications:value.Specifications,
        color:value.color,
        number:value.number,
        allprice:allprice,
      },
      'id':id,
    }
      this.props.cartData(obj)

    if(this.state.modalType === 'pay'){
      console.log(val)
      this.setState({
        visible:val
      })
    }
    else {
      this.setState({
        visible:val
      })
    }
  }
  //收藏
  collect = (reacord) => {
    console.log(reacord)
  }
  //删除行
  onDelete = (record,index) => {
    console.log(record)
    const dataChange = this.state.data
    dataChange.splice(index, 1);
    this.setState({
      data:dataChange
    })
  }
  render() {
    // console.log(this.props)
    const menuName = this.props.menu.menuName
    const {visible} = this.state
    const columns = [
      {
        title: '图片',
        dataIndex: 'avatar',
        render:(value,record,index)=>{
          return(
            <div>
              <Avatar src={record.avatar[0]}></Avatar>
            </div>
          )
        }
      },
      {
      title: '名称',
      dataIndex: 'name',
       },
      {
        title: '规格',
        dataIndex: 'Specifications',
      },
      {
        title: '颜色',
        dataIndex: 'color',
      },
      {
        title: '单价',
        dataIndex: 'unit',
        render:val=>`¥${val}`
      },
      {
        title: '价格',
        dataIndex: 'price',
        render:val=>`¥${val}`
      },
      {
        title: '评价',
        dataIndex: 'evaluate',
        render:(value,record)=>{
          return(
            <div>
              <Button onClick={()=>this.evaluate(record)}>
                评价
              </Button>
            </div>
          )
        }
      },
      {
        title: '',
        dataIndex: 'details',
        render:(value,record) => {
          return(
            <div>
              <Button onClick={()=>this.details(record)}>
                详情
              </Button>
            </div>
          )
        }
      },
      {
        title: '售后',
        dataIndex: 'aftersale',
        render:(value,record)=>{
          return(
            <div>
              <Button onClick={()=>this.after(record)}>
                售后
              </Button>
            </div>
          )
        }
      },
      {
        title: '',
        dataIndex: 'delete',
        render:(value,record,index) => {
          return (
            <div>
                <img onClick={()=>this.modal('添加购物车',record,index)} src={require('../../component/img/shop_cart.png')} style={{width:'32px'}} alt=""/>
              <Button onClick={()=>this.modal('立即购买',record,index)} type="danger" style={{marginLeft:'30px'}}>立即购买</Button>
            </div>

          )
        }
      },
      {
        title: '收藏',
        dataIndex: 'star',
        render:(record,value)=>{
          return(
            <div>
              <Rate onChange={()=>this.collect(record,value)}   count={1} />
            </div>
          )
        }
      },
    ];
    return (
      <div className="container_shop container_width">
        <div className="shop_top container_top">
          <h2>{menuName}</h2>
          <Search placeholder="油漆" onChange={this.search} />
        </div>
        <Table
          columns={columns}
          dataSource={this.state.data}
          onDelete={this.onDelete}
          pagination={false}
        />
        <Pagination
          current={1} total={1} pageSize={1}
          />
       <ShopModal
         visible={visible}
         title={this.state.modalType}
         onOk={this.handleok}
         onCancel={this.onCancel}
       />
      </div>
    );
  }
}

export  default  Shop