import axios from 'axios'
const  SWITCH_ADDRESS = 'SWICH_ADDRESS'

const initState = {
 addressList:[]
}

export function address(state=initState, action){
  switch(action.type){
    case SWITCH_ADDRESS:
      return {
        ...state,
        addressList:action.payload
      }
    default:
      return state
  }
}

export function addressList(data) {
  return {type:SWITCH_ADDRESS,payload:data}
}

export function getAddressList(){
  return dispatch=>{
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token)
    axios.post('/app/shop/receiver/v1/myReceiver',
      JSON.stringify({
       token
      })
      )
      .then(res=>{
        if(res.data.status===1){
          dispatch(addressList(res.data.content))
          console.log(res.data.content)
        }
      })
  }
}