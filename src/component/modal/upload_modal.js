import { Upload, Icon, Modal } from 'antd';
import React from 'react'
import EvaluateModal from './evaluate_modal'
class UploadModal extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }],
    };
  }

  handleCancel =( ) => {
    this.props.onCancel(false)
  }

  //传入父组件
  handlePreview = (file) => {
    this.props.onPreview(file)
  }

  handleChange = (fileList) => {
    this.props.onChange(fileList)
  }
  // 拦截文件上传
  beforeUploadHandle =(file) => {
    console.log(file)
    this.setState(({fileList})=>({
      fileList:[...fileList,file],
    }))

    // let reader = new FileReader();
    // reader.readAsDataURL(file);
    //
    // reader.onloadend = function () {
    //   this.setState({
    //     fileList:[{
    //       uid: -1,
    //       name: 'xxx.png',
    //       status: 'done',
    //       url: reader.result
    //     }]
    //   });
    // };
    return false;
  }

  // handleUploadData = () => {
  //   this.props.data()
  // }

  render() {
    const { previewVisible, previewImage, fileList,action} = this.props;
    // console.log(this.props)

    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">上传照片</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          // data={()=>this.handleUploadData()}
          action={action}
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          destroyOnClose={this.props.destroyOnClose}
          beforeUpload={this.beforeUploadHandle}
        >
          {fileList.length >= 12 ? null : uploadButton}
        </Upload>
        <Modal
          className="preview"
          visible={previewVisible}
          footer={null}
          onCancel={this.handleCancel}
          destroyOnClose={this.props.destroyOnClose}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default UploadModal