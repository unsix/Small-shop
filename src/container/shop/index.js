import React from 'react'
import { Table, Button, Avatar, Popconfirm, Form, Modal, Input,Icon,Rate,Pagination,InputNumber } from 'antd'
import {connect} from 'react-redux'
import {shopDetails,evaluateDetails,afterDetails,shopCart} from '../../redux/shop_redux'
import ShopModal from '../../component/modal/shop_modal'
import './index.less'


const {Search} = Input
@connect(
  state=>state,
  {shopDetails,evaluateDetails,afterDetails,shopCart}
)
class Shop extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      details:[],
      loading: false,
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
      }]

    }
  }
  componentDidMount(){

  }

  //购物车+
  addSum = (value,record) => {
    record.number = value + 1
    record.price = record.number*record.unit
    this.setState({
      value:record.number,
    })

    // console.log(data)
  }
  //购物车-
  reduceSum = (value,record) => {
    if(record.number>1){
      record.number = value - 1
      record.price = record.number*record.unit
    }
    this.setState({
      value:record.number,
    })
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
  //购物车
  shopCart = (record) => {
    let visible = this.state.visible;
    this.setState({
      visible:true
    },()=>{
      this.props.shopCart(record)
    })
  }
  //取消弹窗
  onCancel = () => {
    this.setState({
      visible:false
    })
  }
  //
  handleOk= () => {
   // console.log(value)
   //  this.props.form.validateFieldsAndScroll((err, value) => {
   //    console.log(value)
   //    this.props.cartData(value)
      this.setState({
        visible:false
      })
    // })
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
    const {visible} = this.state
    const columns = [
      {
        title: '图片',
        dataIndex: 'avatar',
        render:(value,record,index)=>{
          return(
            <div>
              {/*{record.avatar.map(v=>(*/}
                {/*<Avatar  src={v}></Avatar>*/}
              {/*))}*/}
              {/*{<img src={record.avatar[0]} alt="">}*/}
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
      // {
      //   title: '数量',
      //   dataIndex: 'number',
      //   render:(value,record) => {
      //     return(
      //       <div>
      //         <Button onClick={()=>this.addSum(value,record)}>+</Button>
      //         <Button>{value}</Button>
      //         <Button onClick={()=>this.reduceSum(value,record)}>-</Button>
      //       </div>
      //     )
      //   }
      // },
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
                <img onClick={()=>this.shopCart(record,index)} src={require('../../component/img/shop_cart.png')} style={{width:'32px'}} alt=""/>
              <Button type="danger" style={{marginLeft:'30px'}}>立即购买</Button>
            </div>

          )
        }
      },
      {
        title: '收藏',
        dataIndex: 'star',
        render:()=>{
          return(
            <div>
              <Rate count={1} />
            </div>
          )
        }
      },
    ];
    return (
      <div className="container_shop">
        <div className="shop_top">
          <h2>商品信息</h2>
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
         onOk={this.handleOk}
         onCancel={this.onCancel}
       />
      </div>
    );
  }
}

export  default  Shop