
// 获取
import axios from 'axios'
import { message } from 'antd'
import { getAddressList } from './address_redux'


//动态请求loading
const AUTH_AXIOS = 'AUTH_AXIOS'
const AUTH_FAILED = 'AUTH_FAILED'

const  DATA_CART = 'DATA_CART'

const initState = {
 dataCart:[]
}


export function cart(state=initState, action){
  switch(action.type){
    case AUTH_AXIOS:
      return {...state,loading:true,}
    case AUTH_FAILED:
      return {...state,msg:action.msg,loading:false}
    case DATA_CART:
      return {
        ...state,
        dataCart:action.payload,
        loading:false
      }
    default:
      return state
  }
}

//请求load Type
function authAxios(){
  return {type:AUTH_AXIOS}
}
function authFailed(msg){
  return {type:AUTH_FAILED, msg}
}
export function dataCart(name) {
  return {type: DATA_CART,payload:name}
}
//
export function dataCartList(){
  return dispatch=>{
    dispatch(authAxios())
    const token = JSON.parse(localStorage.getItem("token"));
    axios.post('/app/shop/cart/v1/myCart',
      JSON.stringify({
       token
      })
    )
      .then(res=>{
        if(res.data.status===1){
          let list=[]
          if(res.data.content.cartItems){
            res.data.content.cartItems.forEach((item,i)=>{
              list[i]=
                {
                  id:item.id,
                  thumbImage:item.product.thumbImage,
                  name:item.product.name,
                  quantity:item.quantity,
                  price:item.product.price,
                  Specifications:item.product.goods[0].specName
                }
            })
          }
          dispatch(dataCart(list))
        }
        else {
          message.error(res.data.message)
        }
      })
  }
}

//删除购物车
export function deteleCart(ids){
  return dispatch=>{
    const token = JSON.parse(localStorage.getItem("token"));
    axios.post('/app/shop/cart/v1/del',
      JSON.stringify({
       ids,token
      })
    )
      .then(res=>{
        if(res.data.status===1){
          message.success(res.data.message)
          dispatch(dataCartList())
        }
      })
  }
}