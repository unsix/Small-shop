

// 获取
const  SWITCH_MENU = 'SWITCH_MENU'

const  SWITCH_SHOP = 'SWITCH_SHOP'
const initState = {
    menuName:'首页',
    details_shop:[]

}

export function menu(state=initState, action){
  switch(action.type){
    case SWITCH_MENU:
      return {
        ...state,
        menuName:action.payload
      }
    case SWITCH_SHOP:
      return {
        ...state,
        details_shop:action.payload
      }
    default:
      return state
  }
}

export function authSuccess(name) {
  return {type: SWITCH_MENU,payload:name}
}
export function shopDetails(details) {
  return {type: SWITCH_SHOP, payload: details}
}