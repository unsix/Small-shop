import React from 'react'
import { Table, Button, Avatar, Popconfirm, Form, Modal, Input,Icon,Rate,Pagination,InputNumber } from 'antd'
import {connect} from 'react-redux'
// import {shopDetails,evaluateDetails,afterDetails,shopCart,cartData} from '../../redux/shop_redux'
import ShopModal from '../modal/shop_modal'
import PictureBrowsing from  '../modal/picture_browsing_modal'
import './index.less'

const {Search} = Input
@connect(
  state=>state,
  // {shopDetails,evaluateDetails,afterDetails,shopCart,cartData}
)
class Shop extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      current: 1,
      size: 10,
      total: 1,
      details:[],
      loading: false,
      sum:0,
      allprice:0,
      visible:false,
      previewVisible:false,
      previewImage:'',
      data:[
        {
        id:'1',
        key: '1',
        avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'],
        name: '中财PPR热水管',
        unit:10,
        number:1,
        price:10,
        color:'黑色',
        Specifications: '大',
        star:0
      },
      {
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
      },
      {
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
      },
       {
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
      },
        {
          id:'4123',
          key: '123',
          avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'],
          name: '高渗透基膜',
          unit:40,
          number:1,
          price:40,
          color:'黑色',
          Specifications: '中',
          star:0
        },
        {
          id:'101',
          key: '101',
          avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'],
          name: '高渗透基膜',
          unit:40,
          number:1,
          price:40,
          color:'黑色',
          Specifications: '中',
          star:0
        },
        {
          id:'5',
          key: '5',
          avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'],
          name: '高渗透基膜',
          unit:40,
          number:1,
          price:40,
          color:'黑色',
          Specifications: '中',
          star:0
        },{
          id:'6',
          key: '6',
          avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'],
          name: '高渗透基膜',
          unit:40,
          number:1,
          price:40,
          color:'黑色',
          Specifications: '中',
          star:0
        },
        {
          id:'7',
          key: '7',
          avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'],
          name: '高渗透基膜',
          unit:40,
          number:1,
          price:40,
          color:'黑色',
          Specifications: '中',
          star:0
        },
        {
          id:'8',
          key: '8',
          avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'],
          name: '高渗透基膜',
          unit:40,
          number:1,
          price:40,
          color:'黑色',
          Specifications: '中',
          star:0
        },
        {
          id:'9',
          key: '9',
          avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'],
          name: '高渗透基膜',
          unit:40,
          number:1,
          price:40,
          color:'黑色',
          Specifications: '中',
          star:0
        },
        {
          id:'12555',
          key: '15552',
          avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'],
          name: '高渗透基膜',
          unit:40,
          number:1,
          price:40,
          color:'黑色',
          Specifications: '中',
          star:0
        },
        {
          id:'10',
          key: '10',
          avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'],
          name: '高渗透基膜',
          unit:40,
          number:1,
          price:40,
          color:'黑色',
          Specifications: '中',
          star:0
        },
        {
          id:'11',
          key: '11',
          avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'],
          name: '高渗透基膜',
          unit:40,
          number:1,
          price:40,
          color:'黑色',
          Specifications: '中',
          star:0
        },
        {
          id:'12',
          key: '12',
          avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'],
          name: '高渗透基膜',
          unit:40,
          number:1,
          price:40,
          color:'黑色',
          Specifications: '中',
          star:0
        }
    ],
    }
  }
  componentDidMount(){

  }
  modal = (type,record) => {
    this.props.modal(type,record)
  }
  //取消弹窗
  onCancel = () => {
    this.props.onCancel()
  }
  //moadl提交
  shopOk= (val,value) => {
    // let id = this.props.shop.cart.id
    // let price = this.props.shop.cart.price
    // let allprice = value.number*price
    // let obj = {
    //   value:{
    //     Specifications:value.Specifications,
    //     color:value.color,
    //     number:value.number,
    //     allprice:allprice,
    //   },
    //   'id':id,
    // }
    const { id, price } = this.props.shop.cart
    let allprice = value.number*price
    let obj = {
        payMode:value.payMode,
        Specifications:value.Specifications,
        color:value.color,
        number:value.number,
        allprice:allprice,
        'id':id,
    }
    this.props.onOk(val,obj)
    console.log(val,obj)

    // if(this.state.modalType === '立即购买'){
    //   console.log(val)
    //   this.setState({
    //     visible:val
    //   })
    // }
    // else {
    //   this.setState({
    //     visible:val
    //   })
    // }
  }
  //收藏
  collect = (reacord) => {
    console.log(reacord)
  }
  //图片浏览打开
  toSee = (v) => {
    this.setState({
      previewVisible:true,
      previewImage: v,
    })
    console.log(v,this.state.previewVisible)
  }
  //预览弹窗关闭
  previewonCancel = () => this.setState({ previewVisible: false })

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
    // const menuName = this.props.menu.menuName
    const {previewVisible,previewImage,} = this.state
    const {visible,footerNull} = this.props
    const columns = [
      {
        title: '图片',
        dataIndex: 'avatar',
        render:(value,record,index)=>{
          return(
            <div>
              <Avatar onClick={()=>this.toSee(record.avatar[0])} src={record.avatar[0]}></Avatar>
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
      //   title: '价格',
      //   dataIndex: 'price',
      //   render:val=>`¥${val}`
      // },
      {
        title: '评价',
        dataIndex: 'evaluate',
        render:(value,record)=>{
          return(
            <div>
              <Button onClick={()=>this.modal('评价',record)}>
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
              <Button onClick={()=>this.modal('详情',record)}>
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
              <Button onClick={()=>this.modal('售后',record)}>
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
          {/*<h2>{menuName}</h2>*/}
          <h2>所有商品</h2>
          <Search placeholder="油漆" onChange={this.search} />
        </div>
        <Table
          columns={columns}
          dataSource={this.state.data}
          onDelete={this.onDelete}

        />
       <ShopModal
         visible={visible}
         title={this.props.title}
         onOk={this.shopOk}
         onCancel={this.onCancel}
         footerNull={footerNull}
       />
        <PictureBrowsing
        previewVisible={previewVisible}
        previewImage ={previewImage}
        previewonCancel={this.previewonCancel}
        />
      </div>
    );
  }
}

export  default  Shop