import React from 'react'
import { Table, Button, Popconfirm, Icon, Switch, Form, Badge, Pagination, Avatar } from 'antd'
import EvaluateModal from  '../../component/modal/evaluate_modal'
import './index.less'
import {connect} from 'react-redux'
import { dataEvaluate } from '../../redux/evaluate_redux'


const orderStatus = ['交易成功']
@connect(
  state=>state,
  {dataEvaluate}
)
class Evaluate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      evaluateVisible: false,
      editRow: {},
      modalType: "评价",
      footerNull:undefined,
      data:[
        {
          orderNumber:'0000000000000001',
          orderStatus:0,
          key: '2',
          avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
          ],
          name: '霍尼韦尔PPR热水管(绿色)',
          unit:20,
          number:1,
          price:20,
          Specifications: '红色',
          operation:['评价']
        },
      ]
    }
  }
  componentDidMount(){

  }
  operation = (v,record) => {
    console.log(v)
    if(v==='评价'){
      this.props.dataEvaluate(record)
      this.setState({
        evaluateVisible:true,
        modalType:v
      })
    }

  }
  //提交
  handleok = (val,value) => {
    this.setState({
      addressVisible:val
    })
  }

  //close modal
  onCancel = () => {
    this.setState({
      evaluateVisible:false
    })
  }
  render() {
    const { evaluateVisible, modalType,footerNull}  = this.state
    const columns = [{
      title: '订单号',
      dataIndex: 'orderNumber',
    },
      {
        title: '订单状态',
        dataIndex:'orderStatus',
        filters:[
          {
            text:orderStatus[0],
            value:0
          },
          {
            text:orderStatus[1],
            value:1
          },
        ],
        render:(val) => {
          return <h6>{orderStatus[val]}</h6>
        }
      },
      {
        name: '名称',
        dataIndex: 'name',
      },
      {
        title: '图片',
        dataIndex: 'avatar',
        render:(value,record)=>{
          return(
            <div>
              <Avatar src={record.avatar[0]}></Avatar>
            </div>
          )
        }
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
              {value}
            </div>
          )
        }
      },
      {
        title: '应付总额',
        dataIndex: 'price',
        render:val=>`¥${val}`
      },
      {
        title: '操作',
        dataIndex:'operation',
        render:(value,record,index)=>{
          return(
            <div>
              {record.operation.map(v=>(
                <Button key={v}  style={{marginRight:'10px'}} onClick={()=>this.operation(v,record,index)}>{v}</Button>
              ))}
            </div>
          )
        }
      },
    ];
    return (
      <div className="container_manager_address container_width">
        <div className="shop_top container_top">
          {/*<h2>{menuName}</h2>*/}
          <h2>评价中心</h2>
        </div>
        {/*<div className="type_button">*/}
          {/*<Button*/}
            {/*type="primary"*/}
            {/*onClick={() => this.modal('新建发票')}*/}
          {/*>*/}
            {/*<Icon type='plus' />*/}
            {/*新建*/}
          {/*</Button>*/}
        {/*</div>*/}
        <Table
          columns={columns}
          dataSource={this.state.data}
          onDelete={this.onDelete}
          rowKey={record => record.key}
          pagination={false}
        />
        <Pagination
          current={1} total={1} pageSize={1}
        />
        <EvaluateModal
          evaluateVisible={evaluateVisible}
          title={modalType}
          onOk={this.handleok}
          onCancel={this.onCancel}
          footerNull={footerNull}
        />
      </div>
    );
  }
}

export  default Form.create()(Evaluate)