import React from 'react'
import { Table, Button, Avatar, Popconfirm } from 'antd'
import './index.less'
class Shop extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      loading: false,
      sum:0,
      allprice:0,
      data:[{
        key: '1',
        avatar:'U',
        name: '中财PPR热水管(绿色)',
        brand: '中财',
        unit:10,
        number:1,
        price:10,
        Specifications: '大',
      }, {
        key: '2',
        avatar:'W',
        name: '霍尼韦尔PPR热水管(绿色)',
        brand: '中财',
        unit:20,
        number:1,
        price:20,
        Specifications: '中',
      }, {
        key: '3',
        avatar:'C',
        name: '宜家不锈钢液压铰链',
        brand: '中财',
        unit:30,
        number:1,
        price:30,
        Specifications: '小',
      }, {
        key: '4',
        avatar:'Q',
        name: '高渗透基膜',
        brand: '中财',
        unit:40,
        number:1,
        price:40,
        Specifications: '大',
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
    if(record.number>0){
      record.number = value - 1
    }
    record.price = record.number*record.unit
    this.setState({
      value:record.number,
    })
    // console.log(record.number,record)
  }
  //删除
  onDelete = (record,index,value) => {
    console.log(record,value)
    const dataChange = this.state.data
    dataChange.splice(index,1)
    this.setState({
      data:dataChange
    })
  }
  render() {
    const columns = [
      {
        title: '图片',
        dataIndex: 'avatar',
        render:(value,record)=>{
          return(
            <Avatar  style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{record.avatar}</Avatar>
          )
    }
      },
      {
      title: '名称',
      dataIndex: 'name',
       },
      {
        title: '品牌',
        dataIndex: 'brand',
      },
      {
        title: '规格',
        dataIndex: 'Specifications',
      },
      {
        title: '单价',
        dataIndex: 'unit',
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
      },
      {
        title: '',
        dataIndex: 'delete',
        render:(value,record,index) => {
          return (
            <div>
              <Popconfirm
                title="确认加入购物车吗？"
                onConfirm = {()=>this.onDelete(record,index)}
              >
                <img src={require('../../component/img/shop_cart.png')} style={{width:'32px'}} alt=""/>
              </Popconfirm>
              <Button style={{marginLeft:'30px'}}>立即购买</Button>
            </div>

          )
        }
      }
      ,
    ];
    const {  selectedRowKeys} = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <div className="container_shop">

        <Table
          columns={columns}
          dataSource={this.state.data}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export  default  Shop