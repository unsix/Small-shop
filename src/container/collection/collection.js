import React from 'react'
import { Table, Button, Popconfirm, Avatar, Pagination,Icon} from 'antd'
import CartModal from '../../component/modal/cart_modal'
import PictureBrowsing from '../../component/modal/picture_browsing_modal'
import {connect} from 'react-redux'
import {addCollectionList,cancelCollection} from '../../redux/collection_redux'
import './index.less'


@connect(
  state=>state.collection,
  {addCollectionList,cancelCollection}
)
class Collection extends React.Component {
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
    }
  }
  componentDidMount(){
    this.props.addCollectionList()
  }
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
  //取消
  onDelete = (record,index) => {

    let obj = {
      productIds:`${record.id}`
    }
    this.props.cancelCollection(obj)
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
    const {collectionList,loading} = this.props
    const {  selectedRowKeys,visible} = this.state;
    // const menuName = this.props.menu.menuName
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    const columns = [
      {
        title: '图片',
        dataIndex: 'avatar',
        render:(value,record)=>{
          return(
            <div>
              <Avatar onClick={()=>this.toSee(record.thumbImage)} src={`http://39.105.25.92${record.thumbImage}`}></Avatar>
            </div>
          )
        }
      },
      {
        title: '名称',
        dataIndex: 'name',
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
              title="确认要取消本商品嘛"
              onConfirm = {()=>this.onDelete(record,index)}
            >
              <Button><Icon type="star"/>取消收藏</Button>
            </Popconfirm>
          )
        }
      }
      ,
    ];
    return (
      <div className="container_collection container_width">
        <div className="shop_top container_top">
          {/*<h2>{menuName}</h2>*/}
          <h2>管理收藏</h2>
        </div>
        <div className="type_button">
          {/*<Button*/}
            {/*type="danger"*/}
            {/*disabled={!hasSelected}*/}
            {/*onClick={this.onDelete}*/}
          {/*>*/}
            {/*批量取消*/}
          {/*</Button>*/}
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={collectionList}
          onDelete={this.onDelete}
          pagination={false}
          loading={loading}
        />
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

export  default  Collection