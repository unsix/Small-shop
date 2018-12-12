import React from 'react'
import { Table, Button, Avatar, Popconfirm, Form, Modal, Input,Icon,Rate,Pagination } from 'antd'
import './index.less'

const {Search} = Input
class Shop extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      loading: false,
      sum:0,
      allprice:0,
      visible:false,
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
    // record.price = record.number*record.unit
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
    this.setState({
      value:record.number,
    })
  }
  //查看详情
  details = (record) => {
    this.setState({
      visible: true,
    }, () => {
    })
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
    const { getFieldDecorator } = this.props.form;
    const FormItem = Form.Item;
    const { TextArea } = Input;
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
        title: '评价',
        dataIndex: 'evaluate',
        render:()=>{
          return(
            <div>
              <Button>
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
              <Button onClick={()=>this.details(record)}>详情</Button>
            </div>
          )
        }
      },
      {
        title: '售后',
        dataIndex: 'aftersale',
        render:()=>{
          return(
            <div>
              <Button>
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
              <Popconfirm
                title="确认加入购物车吗？"
                onConfirm = {()=>this.onDelete(record,index)}
              >
                <img src={require('../../component/img/shop_cart.png')} style={{width:'32px'}} alt=""/>
              </Popconfirm>
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
        <Modal
          title="商品详情"
          onOk={this.handleOk}
          onCancel={() => this.setState({visible: false})}
          visible={this.state.visible}
        >
          <Form>
            <FormItem label="名字"  >
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(
                <Input  style={{ width: '100%' }} />
              )}
            </FormItem>
            <FormItem label="联系方式"  >
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(
                <Input  style={{ width: '100%' }} />
              )}
            </FormItem>
            <FormItem label="门街号" >
              {getFieldDecorator('specific_address', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(
                <TextArea placeholder={this.state.sum} autosize={{ minRows: 2, maxRows: 6 }} />,
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

export  default   Form.create()(Shop)