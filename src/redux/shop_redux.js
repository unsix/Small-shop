

// 详情
const  SWITCH_SHOP = 'SWITCH_SHOP'
//评价
const  SWITCH_EVALUATE = 'SWITCH_EVALUATE'
//售后
const  SWITCH_AFTER = 'SWITCH_AFTER'

const initState = {
  details:[],
  evaluates:[],
  afters:[]
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