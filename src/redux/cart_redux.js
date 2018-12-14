
// 获取
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