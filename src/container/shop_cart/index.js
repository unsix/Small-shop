import React from 'react'
import { Table, Button, Popconfirm, Avatar } from 'antd'
import CartModal from '../../component/modal/cart_modal'
import {connect} from 'react-redux'
import {dataCart} from '../../redux/cart_redux'
import './index.less'


@connect(
  state=>state,
  {dataCart}
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
  // start = () => {
  //   this.setState({ loading: true });
  //   setTimeout(() => {
  //     this.setState({
  //       selectedRowKeys: [],
  //       loading: false,
  //     });
  //   }, 1000);
  // }

  onSelectChange = (selectedRowKeys,selectedRows) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys,'selectedRows',selectedRows);
    let allprice = this.state.allprice
    allprice= selectedRows.reduce((total, item) => total + item.price, 0)
    this.setState({
      selectedRowKeys,
      selectedRows,
      allprice,
    });
    // console.log(selectedRows)
  }
  //购物车+
  addSum = (value,record) => {
    record.number = value + 1
    record.price = record.number*record.unit
    let data = this.state.data
    let allprice = this.state.allprice
    allprice= data.reduce((total, item) => total + item.price, 0)
    this.setState({
      value:record.number,
      data,
      allprice
    })

    // console.log(data)
  }
  //购物车-
  reduceSum = (value,record) => {
    if(record.number>1){
      record.number = value - 1
      record.price = record.number*record.unit
    }
    let allprice = this.state.allprice
    let data = this.state.data
    allprice= data.reduce((total, item) => total + item.price, 0)
      this.setState({
        value:record.number,
        allprice,
        data
      })
      // console.log(record.number,record)
  }
  //删除
  onDelete = (record,index) => {
   const dataChange = this.state.data
         dataChange.splice(index,1)
         this.setState({
           data:dataChange
         })
  }
  //结算modal
  modal = () => {
    let visible = this.state.visible;
    let allprice = this.state.allprice
    console.log(allprice)
    let selectedRows = this.state.selectedRows;
    console.log(selectedRows)
    this.setState({
      visible:!visible,
    },()=>{
      let obj = {
        selectedRows:selectedRows,
        allprice:allprice
      }



      this.props.dataCart(obj)

    })
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
  render() {
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
        title: '数量',
        dataIndex: 'number',
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
        title: '价格',
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
             <Button type="danger">删除</Button>
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
        <div className="type_button">
          <Button
            type="primary"
            disabled={!hasSelected}
            onClick={this.modal}
          >
            结算
          </Button>
          <span className="allprice">合计金额 :<span>¥{this.state.allprice}</span> </span>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.state.data}
          onDelete={this.onDelete}

        />
        <CartModal
          visible={visible}
          title={this.state.modalType}
          onOk={this.handleok}
          onCancel={this.onCancel}
        />
      </div>
    );
  }
}

export  default  ShopCart