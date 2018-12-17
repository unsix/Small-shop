// 获取
const  DATA_ORDER= 'DATA_ORDER'

const initState = {
  details:[]
}

export function order(state=initState, action){
  switch(action.type){
    case DATA_ORDER:
      return {
        ...state,
        details:action.payload
      }
    default:
      return state
  }
}

export function orDetails(name) {
  return {type: DATA_ORDER,payload:name}
}