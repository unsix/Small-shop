import React from  'react'
import { List, Avatar,Button,Modal} from 'antd';
import {connect} from 'react-redux'

import '../../style/details.less'

@connect(
  state=>state,
)
class EvaluateDetails extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        previewVisible:false,
        previewImage:'',
        data:[
          {
            title: 'Ant Design Title 1',
            description:'2018-10-22 10:23:56',
            content:'每次收货都是非常愉快的，可是只要一想到还要给评价，头就大了。' +
              '幸好万能的网友总结出来一套通用的网购模板，如果你是想看评论决定买不买这个宝贝，' +
              '你可以打住了。因为我说的你不一定信，但是我自己却坚定不移的要给好评，为啥呢？' +
              '我来评价下这个宝贝，价格不错，质量不错，快递不错，老板不错。下次网购我还是这样写满100个字的评价' +
              '，让那些不相信我评价语的网友产生怀疑，这人买东西有一套，不然评语不会这么坚定',
            img:['https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
              'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            ]
          },
          {
            title: '自信北鼻',
            description:'2018-10-22 10:23:56',
            content:'小时候读书不努力，写作文完全靠编，上了100字就靠标点符号来凑了。' +
              '何况现在上了年纪，手懒了，嘴不利索了。你还叫我写100字的好评，你于心何忍啊。' +
              '我从不给人差评，好评都是默认的，质量非常好，与卖家描述的完全一致，' +
              '非常满意,真的很喜欢，完全超出期望值，发货速度非常快，包装非常仔细、' +
              '严实，运送速度很快，很满意的一次购物。小学毕业了。',
             img:['https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
               'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
             ]
          },
        ]
      }
    }
  toSee = (v) => {
      this.setState({
        previewVisible:true,
        previewImage: v,
      })
  }
  handleCancel = () => this.setState({ previewVisible: false })
  render(){
    const evaluates = this.props.shop.evaluates
    const {previewVisible,data,previewImage} = this.state
    return(
      <div className="container_details container_evaluate">
        <div className="back">
          <Button type="primary" onClick={()=>this.props.history.goBack()}>返回</Button>
        </div>
        <div className="evaluate_top">
          <h3>全部评价{evaluates.id}</h3>
        </div>
        <List
          itemLayout="horizontal"
          dataSource={this.state.data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={item.title}
                description={item.description}
              />
              <br/>
              <div>
                {item.content}
                <div style={{marginTop:'20px'}}>
                  {item.img.map(v=>(
                    <img onClick={()=>this.toSee(v)} src={v} key={v} style={{width:'100px',height:'100px'}} alt=""/>
                  ))}
                </div>
              </div>

            </List.Item>
          )}
        />
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%',height:'500px' }} src={previewImage} />
        </Modal>
      </div>
    )
  }
}
export default EvaluateDetails