import React from 'react'
import { Modal,} from 'antd'
import {connect} from 'react-redux'
import "./index.less"
@connect(
  state=>state
)
class PictureBrowsing extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      previewVisible: false,
    }

  }
  handleOk = (e) => {
    this.props.onOk(false)
  }

  handleCancel = (e) => {
    this.props.previewonCancel();
  }
  render(){
    // console.log(this.props)
    const { previewVisible,previewImage} = this.props
    return(
      <div className="preview_browsing">
        <Modal
          className="preview"
          visible={previewVisible}
          footer={null}
          onCancel={this.handleCancel}
        >
            <img alt="example" style={{ width: '100%',height:'520px' }} src={previewImage} />
        </Modal>
      </div>
    )
  }
}
export default  PictureBrowsing