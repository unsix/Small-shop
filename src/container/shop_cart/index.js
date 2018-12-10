import React from 'react'

import { Table, Button,Popconfirm} from 'antd';



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
        name: 'John Brown',
        brand: 32,
        unit:10,
        number:1,
        price:10,
        Specifications: 'New York No. 1 Lake Park',
      }, {
        key: '2',
        name: 'Jim Green',
        brand: 42,
        unit:20,
        number:1,
        price:20,
        Specifications: 'London No. 1 Lake Park',
      }, {
        key: '3',
        name: 'Joe Black',
        brand: 32,
        unit:30,
        number:1,
        price:30,
        Specifications: 'Sidney No. 1 Lake Park',
      }, {
        key: '4',
        name: 'Disabled User',
        brand: 99,
        unit:40,
        number:1,
        price:40,
        Specifications: 'Sidney No. 1 Lake Park',
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
    allprice= selectedRows.reduce((total, item) => total + item.price, 0)
    this.setState({
      selectedRowKeys,
      allprice
    });
  }
  //购物车+
  addSum = (value,record) => {
    record.number = value + 1
    record.price = record.number*record.unit
    let allprice = this.state.allprice
    this.setState({
      value:record.number,
      allprice
    })
  }
  //购物车-
  reduceSum = (value,record) => {
    record.number = value - 1
    record.price = record.number*record.unit
    if (record.number>0){
      this.setState({
        value:record.number

      })
      console.log(record.number,record)
    }
  }
  //删除
  onDelete = (record) => {
   const dataChange = this.state.data
         dataChange.splice(record,1)
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
        title: '操作',
        dataIndex: 'delete',
        render:(value,record) => {
          return (
            <Popconfirm
              title="确认要删除这行码"
              onConfirm = {()=>this.onDelete(record)}
            >
              <a>删除</a>
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
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}

          >
            结算
          </Button>
          <span>合计金额:{this.state.allprice}</span>
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