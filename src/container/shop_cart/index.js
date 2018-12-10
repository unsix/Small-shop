import React from 'react'

import { Table, Button,Popconfirm} from 'antd';



class ShopCart extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      sum:0,
      data:[{
        key: '1',
        name: 'John Brown',
        brand: 32,
        unit:'mm',
        Specifications: 'New York No. 1 Lake Park',
      }, {
        key: '2',
        name: 'Jim Green',
        brand: 42,
        unit:'m',
        Specifications: 'London No. 1 Lake Park',
      }, {
        key: '3',
        name: 'Joe Black',
        brand: 32,
        unit:'cm',
        Specifications: 'Sidney No. 1 Lake Park',
      }, {
        key: '4',
        name: 'Disabled User',
        brand: 99,
        unit:'mm',
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

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  //购物车+
  addSum = (record) => {
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
        title: '单位',
        dataIndex: 'unit',
      },
      {
        title: '数量',
        dataIndex: 'number',
        render:(value,record) => {
         return(
           <div>
             <Button onClick={this.addSum}>+</Button>
             <Button>{this.state.sum}</Button>
             <Button onClick={this.reduceSum}>-</Button>
           </div>
         )
        }
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
          {/*<Button*/}
            {/*type="primary"*/}
            {/*onClick={this.start}*/}
            {/*disabled={!hasSelected}*/}
            {/*loading={loading}*/}
          {/*>*/}
            {/*Reload*/}
          {/*</Button>*/}
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} onDelete={this.onDelete}/>
      </div>
    );
  }
}

export  default  ShopCart