
// 获取
import axios from 'axios'
import { message } from 'antd'

const  DATA_CART = 'DATA_CART'

const initState = {
 dataCart:[]
}

export function cart(state=initState, action){
  switch(action.type){
    case DATA_CART:
      return {
        ...state,
        dataCart:action.payload
      }
    default:
      return state
  }
}

export function dataCart(name) {
  return {type: DATA_CART,payload:name}
}
export function dataCartList(){
  return dispatch=>{
    const token = JSON.parse(localStorage.getItem("token"));
    axios.post('/app/shop/cart/v1/myCart',
      JSON.stringify({
       token
      })
    )
      .then(res=>{
        if(res.data.status===1){
          let list=[]
            res.data.content.cartItems.forEach((item,i)=>{
              list[i]={thumbImage:item.product.thumbImage,
                name:item.product.name,
                quantity:item.quantity,
                price:item.product.price,
                Specifications:item.product.goods[0].specName
                }
            })
          dispatch(dataCart(list))
        }
        else {
          message.error(res.data.message)
        }
      })
  }
}