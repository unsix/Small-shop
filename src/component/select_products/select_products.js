import React from 'react'
import {  Card} from 'antd'
class SelectProducts extends React.Component{

  render(){
    const { Meta } = Card;
    return(
      <div>
        <div className="selected_bands">
          <h2>精选品牌</h2>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={require('../../component/img/select_1.png')} />}
          >
            <Meta
              className='shop_des'
              title={<span>¥188<s>¥352</s></span>}
              description="三棵树康家净味二合一乳胶漆白色哑光环保漆涂料墙漆"
            />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={require('../../component/img/select_2.png')} />}
          >
            <Meta
              className='shop_des'
              title={<span>¥188<s>¥352</s></span>}
              description="三棵树康家净味二合一乳胶漆白色哑光环保漆涂料墙漆"
            />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={require('../../component/img/select_1.png')} />}
          >
            <Meta
              className='shop_des'
              title={<span>¥188<s>¥352</s></span>}
              description="三棵树康家净味二合一乳胶漆白色哑光环保漆涂料墙漆"
            />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={require('../../component/img/select_2.png')} />}
          >
            <Meta
              className='shop_des'
              title={<span>¥188<s>¥352</s></span>}
              description="三棵树康家净味二合一乳胶漆白色哑光环保漆涂料墙漆"
            />
          </Card>
        </div>
      </div>
    )
  }
}

export default SelectProducts