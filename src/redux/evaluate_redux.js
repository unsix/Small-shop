const  SWITCH_EVALUATE = 'SWITCH_EVALUATE'
// const ADD_EVALUATE = 'ADD_EVALUATE'
const initState = {
  evaluate:[],
  addEvaluate:[]
}

export function evaluate(state=initState, action){
  switch(action.type){
    case SWITCH_EVALUATE:
      return {
        ...state,
        evaluate:action.payload
      }
    default:
      return state
  }
}

export function dataEvaluate(name) {
  return {type:SWITCH_EVALUATE,payload:name}
}