import React from  'react'
import ReactImageMagnify from 'react-image-magnify';
import {connect} from 'react-redux'
import { List} from 'antd/lib/list'
import {  Form, InputNumber, Radio,Card,Button,Icon} from 'antd'
import './index.less'
@connect(
  state=>state,
)
class ShopDetails extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      data:{
        id:'1',
        key: '1',
        avatar:'http://qidye.oss-cn-hangzhou.aliyuncs.com/2013/11/Andrew-Smith-qidye-1.jpg',
        name: '中财PPR热水管',
        unit:10,
        number:1,
        price:10,
        color:'黑色',
        Specifications: '大',
        star:0
      }
    }
  }
  render(){
    // const details= this.props.shop.details
    const FormItem = Form.Item;
    const { getFieldDecorator } = this.props.form
    const RadioButton = Radio.Button;
    const RadioGroup = Radio.Group;
    const { data } = this.state
    return(
      <div className="container_details container_evaluate " >
        {/*<div className="back">*/}
          {/*<Button type="primary" onClick={()=>this.props.history.goBack()}>返回</Button>*/}
        {/*</div>*/}
        <div className="details_shop">
          <h3>商品详情</h3>
          <div className="shop_content">
            <div className="content_img">
              <ReactImageMagnify
                {...{
                smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: true,
                  src: data.avatar,
                },
                largeImage: {
                  src: 'http://qidye.oss-cn-hangzhou.aliyuncs.com/2013/11/Andrew-Smith-qidye-1.jpg',
                  width: 1300,
                  height: 1300
                },
                  enlargedImageContainerDimensions: {
                    width: '150%',
                    height: '150%'
                  }
                // isHintEnabled:true
              }} />
              <span>
              </span>
            </div>
            <div className="content_inf">
              <div className="inf_title">
                <h4>{data.name} <span>月销量：3560笔</span></h4>
                {/*<div className="info">*/}
                  {/*<h6>快递：0</h6>*/}
                  {/*<h6>月销：3234笔</h6>*/}
                  {/*<h6>浙江杭州</h6>*/}
                {/*</div>*/}
                <h6>配送至: 浙江省杭州市滨江区某某小区 <span>快递费：免运费</span></h6>

              </div>
              <Form className="inf_form">
                <FormItem label="选择规格" >
                  {getFieldDecorator('Specifications', {
                    rules: [{ required: true, message: '请选择规格' }],
                  })(
                    <RadioGroup>
                      <RadioButton value="大">大</RadioButton>
                      <RadioButton value="中">中</RadioButton>
                      <RadioButton value="小">小</RadioButton>
                    </RadioGroup>
                  )}
                </FormItem>
                <FormItem label="选择颜色分类" >
                  {getFieldDecorator('color', {
                    rules: [{ required: true, message: '颜色分类' }],
                  })(
                    <RadioGroup>
                      <RadioButton value="黑色">黑色</RadioButton>
                      <RadioButton value="白色">白色</RadioButton>
                      <RadioButton value="蓝色">蓝色</RadioButton>
                    </RadioGroup>
                  )}
                </FormItem>
                <FormItem label="购买数量" >
                  {getFieldDecorator('number',{ initialValue: 1}
                  )(
                    <InputNumber
                      min={1}
                    />
                  )}
                </FormItem>
              </Form>
              <div className="shop_btn">
                <Button type="default" className="btn-buy">立即购买</Button>
                <Button type="danger" className="btn-add"><Icon type="shopping-cart" />加入购物车</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="about_shop">
          <h3>相似产品</h3>
          <div className="relevant"
               onClick={this.showModal}
          >
            <Card
              hoverable
              cover={<img alt="example" src={require('../../component/img/relevant_1.png')} />}
            >
            </Card>
            <Card
              hoverable
              cover={<img alt="example"  src={require('../../component/img/relevant_2.png')}/>}
            >
            </Card>
            <Card
              hoverable
              cover={<img alt="example" src={require('../../component/img/relevant_3.png')} />}
            >
            </Card>
            <Card
              hoverable
              cover={<img alt="example" src={require('../../component/img/relevant_2.png')} />}
            >
            </Card>
            <Card
              hoverable
              cover={<img alt="example" src={require('../../component/img/relevant_2.png')} />}
            >
            </Card>
          </div>
        </div>
      </div>
    )
  }
}
export default Form.create()(ShopDetails)