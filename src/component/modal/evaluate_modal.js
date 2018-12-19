import React from 'react'
import { Form, Input, Modal, Switch, DatePicker, Cascader,Rate,Upload, Icon, } from 'antd'
import {connect} from 'react-redux'
import UploadModal from './upload_modal'
import "./index.less"
@connect(
  state=>state
)
class EvaluateModal extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      //图片上传
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }],
      addressVisible: false,
      valueOne:1,
      valueTwo:2,
      valueThr:3,
      data:[
        // {
        //   key: '1',
        //   name: '小丸子',
        //   phone: '13456801341',
        //   address: '浙江省杭州市滨江区悦湾小区123',
        //   address_select:['zhejiang','hangzhou','xihu'],
        //   specific_address:'123',
        //   default:true
        // },
        // {
        //   key: '2',
        //   name: '小篮子',
        //   phone: '13456801341',
        //   address: '浙江省杭州市滨江区悦湾小区123',
        //     address_select:['zhejiang','hangzhou','xihu'],
        //     specific_address:'123',
        //     default:false
        // },
      ]
    }
  }
  
  handleok = (e) => {
    this.props.form.validateFieldsAndScroll((err, value) => {
      if(err) return
      // this.props.cartData(value)
      this.props.onOk(false,value)

    })
  }

  handleCancel = (e) => {
    this.props.onCancel();
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
  ChangeOnes =(e) => {
    this.setState({ value:e.target.value });
    console.log(this.state.value)
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
    const { getFieldDecorator } = this.props.form;
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
    const options = [{
      value: '浙江省',
      label: '浙江省',
      children: [{
        value: '杭州市',
        label: '杭州市',
        children: [{
          value: '西湖',
          label: '西湖',
        }],
      }],
    }, {
      value: '江苏省',
      label: '江苏省',
      children: [{
        value: '南京市',
        label: '南京市',
        children: [{
          value: '宗华门',
          label: '宗华门',
        }],
      }],
    }];
    return(
      <div className="contaier_modal evaluate_modal">
        <Modal
          title={title}
          footer={footerNull}
          className="address"
          visible={evaluateVisible}
          onOk={this.handleok}
          onCancel={this.handleCancel}
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
              <TextArea onChange={this.ChangeOnes}  placeholder="商品是否符合您的期待? 说说它的优点或美中不足的地方" autosize={{ minRows: 2, maxRows: 6 }}  />
            </div>
            :(null)
          }
          {/*<div className="clearfix">*/}
            {/*<Upload*/}
              {/*action="//jsonplaceholder.typicode.com/posts/"*/}
              {/*listType="picture-card"*/}
              {/*fileList={fileList}*/}
              {/*onPreview={this.handlePreview}*/}
              {/*onChange={this.handleChange}*/}
            {/*>*/}
              {/*{fileList.length >= 3 ? null : uploadButton}*/}
            {/*</Upload>*/}
            {/*<Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>*/}
              {/*<img alt="example" style={{ width: '100%' }} src={previewImage} />*/}
            {/*</Modal>*/}
          {/*</div>*/}
          <UploadModal
            />
        </Modal>
      </div>
    )
  }
}
export default  Form.create()(EvaluateModal)