import React from  'react'

import {connect} from 'react-redux'
import { List} from 'antd/lib/list'
import { Avatar, Button, Form, Input, Select,} from 'antd'

@connect(
  state=>state,
)
class Refund extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      addressVisible: false,
      data:{
        id:1,
        ordernumber:'0000000000000001',
        status:2,
        key: '1',
        avatar:['https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
        ],
        name: '中财PPR热水管',
        unit:10,
        number:1,
        price:10,
        Specifications: '绿色',
        operation:['申请开票','下载合同','申请退款','确认收货']
      },
    }
  }

  render(){
    const FormItem = Form.Item;
    const { TextArea } = Input;
    const { getFieldDecorator } = this.props.form;
    const Option = Select.Option
    const { data } = this.state
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 2},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 12},
      },
    };
    return(
      <div className="container_width payment container_height">
        {/*{!this.props.shop.cart?<Redirect to='/order' />:null}*/}
        <div className="shop_top container_top contain">
          <h2>申请退款</h2>
        </div>
        <div className="container_details container_logistics">
        {/*<div className="back">*/}
        {/*<Button type="primary" onClick={()=>this.props.history.goBack()}>返回</Button>*/}
        {/*</div>*/}
        <div className=" modal_order modal_cancel">
          <div className="order_content">
            <div className="pictures">
              <div className="img_dec">
                {data.avatar?
                  <img src={data.avatar[0]} alt={data.avatar[0]} />:(null)
                }
              </div>
            </div>
            <div className="name_spe">
              <h6>{data.name}</h6>
              <h6>{data.Specifications}</h6>
            </div>
            <div className="price_number">
              <h6><span>¥{data.price}</span></h6>
              <h6>×{data.number}</h6>
            </div>
          </div>
          <div className="refund_from mt20">
            <Form className="form_shop form_content">

              <FormItem label="发票内容"  {...formItemLayout}>
                {getFieldDecorator('Content',{
                  rules: [{ required: true, message: '颜色分类' }],
                })(
                  <Select placeholder="请选择退货理由">
                    <Option value="7天无理由">7天无理由</Option>
                    <Option value="其他原因">其他原因</Option>
                  </Select>
                )}
              </FormItem>
            </Form>
            <Button type="primary" className="fr">提交</Button>
          </div>
        </div>

      </div>
      </div>
    )
  }
}
export default Form.create()(Refund)