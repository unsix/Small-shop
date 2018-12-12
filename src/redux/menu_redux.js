

// 获取
const  SWITCH_MENU = 'SWITCH_MENU'

const initState = {
  menuName:'首页'
}

export function menu(state=initState, action){
  switch(action.type){
    case SWITCH_MENU:
      return {
        ...state,
        menuName:action.payload
      }
    default:
      return state
  }
}

export function authSuccess(menName) {
  return {type: SWITCH_MENU,payload:menName}
}