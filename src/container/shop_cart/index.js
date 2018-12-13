import React from 'react'
import { Table, Button,Popconfirm} from 'antd';
import './index.less'
class ShopCart extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      sum:0,
      allprice:0,
      data:[{
        key: '1',
        name: '中财PPR热水管',
        unit:10,
        number:1,
        price:10,
        Specifications: '蓝色',
      }, {
        key: '2',
        name: '霍尼韦尔PPR热水管(绿色)',
        unit:20,
        number:1,
        price:20,
        Specifications: '黑色',
      }, {
        key: '3',
        name: '宜家不锈钢液压铰链',
        brand: 32,
        unit:30,
        number:2,
        price:60,
        Specifications: '灰色',
      }, {
        key: '4',
        name: '高渗透基膜',
        unit:40,
        number:1,
        price:40,
        Specifications: '棕色',
      }]

    }
  }
  componentDidMount(){

  }
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }

  onSelectChange = (selectedRowKeys,selectedRows) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys,'selectedRows',selectedRows);
    let allprice = this.state.allprice
    // selectedRows.forEach(i=>{
    //   console.log(i)
    //   allprice += i.price
    // })
    // this.addSum(selectedRows.forEach(i=>{
    //   allprice += i.price
    // }))
    allprice= selectedRows.reduce((total, item) => total + item.price, 0)
    this.setState({
      selectedRowKeys,
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
  render() {
    const columns = [{
      title: '名称',
      dataIndex: 'name',
    },
      {
        title: '颜色',
        dataIndex: 'Specifications',
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
    const { loading, selectedRowKeys} = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div className="container_shop_cart">
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}

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
      </div>
    );
  }
}

export  default  ShopCart