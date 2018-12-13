

// 详情
const  SWITCH_SHOP = 'SWITCH_SHOP'
//评价
const  SWITCH_EVALUATE = 'SWITCH_EVALUATE'
//售后
const  SWITCH_AFTER = 'SWITCH_AFTER'
//购物车
const  SWITCH_CART = 'SWITCH_CART'
//加入购物车的数据
const SWITCH_DATA = 'SWITCH_DATA'

const initState = {
  details:[],
  evaluates:[],
  afters:[],
  cart:[],
  cartData:[]
}

export function shop(state=initState, action){
  switch(action.type){
    case SWITCH_SHOP:
      return {
        ...state,
        details:action.payload
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

export function shopDetails(details) {
  return {type:SWITCH_SHOP,payload:details}
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

export function shopCart(obj){
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
