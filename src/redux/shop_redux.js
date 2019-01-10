import axios from 'axios'
import { message } from 'antd';
import { getRedirectPath } from '../util'


//动态请求loading
const AUTH_AXIOS = 'AUTH_AXIOS'
const AUTH_FAILED = 'AUTH_FAILED'
// 详情


//商品
const  SWITCH_SHOP = 'SWITCH_SHOP'
//精选
const  SWITCH_SELECTSHOP = 'SWITCH_SELECTSHOP'
//详情
const SWITCH_DETAILS = 'SWITCH_DETAILS'
//评价
const  SWITCH_EVALUATE = 'SWITCH_EVALUATE'
//售后
const  SWITCH_AFTER = 'SWITCH_AFTER'
//购物车
const  SWITCH_CART = 'SWITCH_CART'
//加入购物车的数据
const SWITCH_DATA = 'SWITCH_DATA'
//收藏
const SWITCH_COLLECTION = 'SWITCH_COLLECTION'
const initState = {
  shopList:[],
  selectList:[],
  details:[],
  collection:[],
  evaluates:[],
  afters:[],
  cart:[],
  cartData:[],
  loading:false
}

export function shop(state=initState, action){
  switch(action.type){
    case AUTH_AXIOS:
      return {...state,loading:true,}
    case AUTH_FAILED:
      return {...state,msg:action.msg,loading:false}
    case SWITCH_SHOP:
      return {
        ...state,
        shopList:action.payload,loading:false
      }
    case SWITCH_SELECTSHOP:
      return {
        ...state,
        selectList:action.payload
      }
    case SWITCH_DETAILS:
      return {
        ...state,
        details:action.payload
      }
    case SWITCH_COLLECTION:
      return {
        ...state,
        collection:action.payload
      }
    case SWITCH_EVALUATE:
      return{
        ...state,
        evaluates:action.payload
      }
    case SWITCH_AFTER:
      return{
        ...state,
        afters:action.payload
      }
    case SWITCH_CART:
      return{
        ...state,
        cart:action.payload
      }
    case SWITCH_DATA:
      return{
        ...state,
        cartData:action.payload
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

//商品
export function shopList(data) {
  return {type:SWITCH_SHOP,payload:data}
}
//精选
export function selectList(data) {
  return {type:SWITCH_SELECTSHOP,payload:data}
}
//商品详情
export function shopDetails(details) {
  return {type:SWITCH_DETAILS,payload:details}
}
//收藏
export function addCollection(data) {
  return {type:SWITCH_COLLECTION,payload:data}
}
export function evaluateDetails(obj){
  return{
    type: SWITCH_EVALUATE,
    payload: obj
  }
}

export function afterDetails(obj){
  return{
    type: SWITCH_AFTER,
    payload: obj
  }
}

export function addCart(obj){
  return{
    type: SWITCH_CART,
    payload: obj
  }
}

export function cartData(obj){
  return{
    type: SWITCH_DATA,
    payload: obj
  }
}


//获取商品列表
export function getShopList({pageIndex,pageSize}){
  return dispatch=>{
    dispatch(authAxios())
    // const token = JSON.parse(localStorage.getItem("token"));
    // console.log(token)
    axios.post('/app/shop/product/v1/search',
      JSON.stringify({
        //空着传 不影响
        pageIndex,pageSize
      })
    )
      .then(res=>{
        if(res.data.status===1){
          dispatch(shopList(res.data.content))
          console.log(res.data.content)
        }
      })
  }
}

//获取精选产品列表

export function getSelectedList({pageIndex,pageSize}){
  return dispatch=>{
    // const token = JSON.parse(localStorage.getItem("token"));
    // console.log(token)
    axios.post('/app/shop/product/v1/category',
      JSON.stringify({
        pageIndex,pageSize
      })
    )
      .then(res=>{
        if(res.data.status===1){
          dispatch(selectList(res.data.content))
          console.log(res.data.content)
        }
      })
  }
}

//商品详情
export function getShopDetails(id){
  return dispatch=>{
    // const token = JSON.parse(localStorage.getItem("token"));
    // console.log(token)
    axios.post('/app/shop/product/v1/detail',
      JSON.stringify({
       id
      })
    )
      .then(res=>{
        if(res.data.status===1){
          dispatch(shopDetails(res.data.content))

        }
      })
  }
}

//加入购物车
export function addCartList({quantity,productId,goodsId}){
  return dispatch=>{
    const token = JSON.parse(localStorage.getItem("token"));
    // console.log(token)
    axios.post('/app/shop/cart/v1/add',
      JSON.stringify({
        quantity,productId,goodsId,token
      })
    )
      .then(res=>{
        if(res.data.status===1){
          message.success(res.data.content)
          dispatch(addCart(res.data.content))
        }
        else {
          message.error(res.data.message)
        }
      })
  }
}

//收藏
export function addCollectionList({productIds}){
  return dispatch=>{
    const token = JSON.parse(localStorage.getItem("token"));
    // console.log(token)
    axios.post('/app/shop/favorite/v1/add',
      JSON.stringify({
       productIds,token
      })
    )
      .then(res=>{
        if(res.data.status===1){
          message.success(res.data.content.content)
          dispatch(addCollection(res.data.content))
        }
        else {
          message.error(res.data.message)
        }
      })
  }
}
