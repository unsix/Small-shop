// 获取
const  SWITCH_SHOP = 'SWITCH_SHOP'

const initState = {
  details:[]
}

export function shop(state=initState, action){
  switch(action.type){
    case SWITCH_SHOP:
      return {
        ...state,
        details:action.payload
      }
    default:
      return state
  }
}

export function shopDetails(details) {
  return {type:SWITCH_SHOP,payload:details}
}