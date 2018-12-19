import React from 'react'
import { Form, Input, Modal, Switch, DatePicker, Cascader,Rate,Upload, Icon, } from 'antd'
import {connect} from 'react-redux'
import UploadModal from './upload_modal'
import { dataEvaluate } from '../../redux/evaluate_redux'
import "./index.less"
@connect(
  state=>state,
  {dataEvaluate}
)
class EvaluateModal extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      //图片上传
      previewVisible: false,
      previewImage: '',
      fileList: [],
      evaluateVisible: false,
      valueOne:1,
      valueTwo:2,
      valueThr:3,
      dec:'',
      data:[]
    }
  }
  //图片上传
  onPreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }
  handleChange = ({ fileList }) => this.setState({ fileList })
  previewCancel = (val) => this.setState({ previewVisible: val})
  handleok = (e) => {
    const { valueOne,valueTwo,valueThr,dec,fileList} = this.state
      const value ={
        valueOne:valueOne,
        valueTwo:valueTwo,
        valueThr:valueThr,
        dec:dec,
        fileList:fileList
      }
      this.props.dataEvaluate(value)
      this.props.onOk(false,value)
  }

  handleCancel = (e) => {
    this.props.onCancel();
    this.setState({
      fileList:[]
    })
  }
  ChangeOne = (value) => {
    this.setState({ valueOne:value });
    console.log(value)
  }
  ChangeTwo = (value) => {
    this.setState({ valueTwo:value });
    console.log(value)
  }
  ChangeThr = (value) => {
    this.setState({ valueThr:value });
    console.log(value)
  }
  ChangeDec =(e) => {
    this.setState({ dec:e.target.value });
    console.log(this.state.dec)
  }
  render(){
    // console.log(this.props)
    const FormItem = Form.Item;
    const { TextArea } = Input;
    const {valueOne,valueTwo,valueThr, previewVisible, previewImage, fileList} = this.state
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { evaluateVisible,title,footerNull} = this.props
    const evaluate = this.props.evaluate.evaluate
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 4},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    };
    return(
      <div className="contaier_modal evaluate_modal">
        <Modal
          title={title}
          footer={footerNull}
          className="address"
          visible={evaluateVisible}
          onOk={this.handleok}
          onCancel={this.handleCancel}
          destroyOnClose={true}
        >
          {title === '评价'?
            <div className=" modal_order modal_cancel evaluate_modal">
              <div className="order_content">
                <div className="pictures">
                  <div className="img_dec">
                    {evaluate.avatar?
                      <img src={evaluate.avatar[0]} alt={evaluate.avatar[0]} />:(null)
                    }
                  </div>
                </div>
                <div className="name_spe">
                  <h6>{evaluate.name}</h6>
                </div>
              </div>
              <div className="evaluate_star mt20">
                <div className="star">
                  <h6>描述相符</h6>
                  <Rate onChange={this.ChangeOne}  />
                </div>
                <div className="star">
                  <h6>物流服务</h6>
                  <Rate onChange={this.ChangeTwo}  />
                </div>
                <div className="star">
                  <h6>服务态度</h6>
                  <Rate onChange={this.ChangeThr}  />
                </div>
              </div>
              <div className="describe mt20 mb20">
                <TextArea
                  onChange={this.ChangeDec}
                  placeholder="商品是否符合您的期待? 说说它的优点或美中不足的地方"
                  autosize={{ minRows: 4, maxRows: 6 }}  />
              </div>
            </div>
            :(null)
          }
          <UploadModal
            action="//jsonplaceholder.typicode.com/posts/"
            listType="picture-card"
            fileList={fileList}
            onPreview={this.onPreview}
            onChange={this.handleChange}
            previewVisible = {previewVisible}
            previewImage = {previewImage}
            onCancel={this.previewCancel}
            destroyOnClose={true}
          />
        </Modal>
      </div>
    )
  }
}

export default  Form.create()(EvaluateModal)