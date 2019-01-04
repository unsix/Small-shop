import React from 'react'
import { Table, Button, Popconfirm, Avatar, Pagination,Icon} from 'antd'
import CartModal from '../../component/modal/cart_modal'
import PictureBrowsing from '../../component/modal/picture_browsing_modal'
import {connect} from 'react-redux'
import {dataCartList} from '../../redux/cart_redux'
import './index.less'


@connect(
  state=>state,
  {dataCartList}
)
class ShopCart extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      selectedRows:[],
      loading: false,
      sum:0,
      allprice:0,
      previewVisible:false,
      previewImage:'',
      visible:false,
      cartList:[]
    }
  }
  componentDidMount(){
   this.props.dataCartList()
  }
  componentWillReceiveProps(){

  }

  onSelectChange = (selectedRowKeys,selectedRows) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys,'selectedRows',selectedRows);
    let allprice = this.state.allprice
    allprice= selectedRows.reduce((total, item) => total + item.price*item.quantity, 0)
    this.setState({
      selectedRowKeys,
      selectedRows,
      allprice,
    });
    // console.log(selectedRows)
  }
  //购物车+
  addSum = (value,record) => {
    record.quantity = value + 1
    let allprice = this.state.allprice
    const cartList = this.props.cart.dataCart
    allprice= cartList.reduce((total, item) =>total + item.price*item.quantity, 0)
    this.setState({
      value:record.quantity,
      cartList,
      allprice
    })
    console.log(allprice)
  }
  //购物车-
  reduceSum = (value,record) => {
    if(record.quantity>1){
      record.quantity = value - 1
    }
    let allprice = this.state.allprice
    let data = this.state.data
    const cartList = this.props.cart.dataCart
    allprice= cartList.reduce((total, item) => total + item.price*item.quantity, 0)
      this.setState({
        value:record.quantity,
        allprice,
        cartList,
      })
      // console.log(record.number,record)
  }
  //删除
  onDelete = (record,index) => {

  }
  //结算modal
  modal = () => {
    const id  = this.state.data.length
    const url = window.open('http://localhost:3000/')
    url.location.href=`/#/details/placeorder/${id}`
  }
  //modal提交
  handleok = () => [
    this.setState({
      visible:false
    })
  ]
  //取消弹窗
  onCancel = () => {
    this.setState({
      visible:false
    })
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
  render() {
    const {previewVisible,previewImage,} = this.state
    const cartList = this.props.cart.dataCart

    // const product = this.props.cart.dataCart.cartItems.product
    const columns = [
      {
        title: '图片',
        dataIndex: 'avatar',
        render:(value,record,index)=>{
          return(
            <div >
              <img style={{width:'100px',height:'100px'}} onClick={()=>this.toSee(record.thumbImage)} src={`http://39.105.25.92${record.thumbImage}`} />
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
      title: '数量',
      dataIndex: 'quantity',
      render:(value,record) => {
       return(
         <div>
           <Button onClick={()=>this.addSum(value,record)}>+</Button>
           <Button>{value}</Button>
           <Button onClick={()=>this.reduceSum(value,record)}>-</Button>
         </div>
       )
      }
    },
    {
      title: '单价',
      dataIndex: 'price',
      render:val=>`¥${val}`
    },
      {
        title: '操作',
        dataIndex: 'delete',
        render:(value,record,index) => {
          return (
            <Popconfirm
              title="确认要删除这行码"
              onConfirm = {()=>this.onDelete(record,index)}
            >
             <Button type="danger"><Icon type="delete"/>删除</Button>
            </Popconfirm>
          )
        }
      }
      ,
    ];
    const { loading, selectedRowKeys,visible} = this.state;
    const menuName = this.props.menu.menuName
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div className="container_shop_cart container_width">
        <div className="shop_top container_top">
          <h2>{menuName}</h2>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={cartList}
          onDelete={this.onDelete}
          pagination={false}
        />
        <div className="type_button mt30">
          <Button
            type="primary"
            disabled={!hasSelected}
            onClick={this.modal}
          >
            结算
          </Button>
          <span className="allprice">合计金额 :<span>¥{this.state.allprice}</span> </span>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `共${selectedRowKeys.length}件商品` : ''}
          </span>
        </div>
        <Pagination
          current={1} total={1} pageSize={1}
        />
        <CartModal
          visible={visible}
          title={this.state.modalType}
          onOk={this.handleok}
          onCancel={this.onCancel}
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

export  default  ShopCart