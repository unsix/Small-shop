
const  SWITCH_ADDRESS = 'SWICH_ADRESS'

const initState = {
  data_Address:[]
}

export function address(state=initState, action){
  switch(action.type){
    case SWITCH_ADDRESS:
      return {
        ...state,
        data_Address:action.payload
      }
    default:
      return state
  }
}

export function dataAdress(name) {
  return {type:SWITCH_ADDRESS,payload:name}
}