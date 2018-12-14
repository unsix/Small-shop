// 获取
const  DATA_CART = 'DATA_CART'

const initState = {
  details:[]
}

export function order(state=initState, action){
  switch(action.type){
    case DATA_CART:
      return {
        ...state,
        details:action.payload
      }
    default:
      return state
  }
}

export function orDetails(name) {
  return {type: DATA_CART,payload:name}
}