import axios from 'axios'


const AUTH_SUCCESS = 'AUTH_SUCCESS'
const SMSCODE = 'SMSCODE'

const initState={
  user:'',
}

// reducer
export function user(state=initState, action){
  switch(action.type){
    case AUTH_SUCCESS:
      return {...state, ...action.payload}
    case SMSCODE:
      return {...state, ...action.payload}
    default:
      return state
  }
}

function authSuccess(obj){
  const {pwd,...data} = obj
  return {type:AUTH_SUCCESS, payload:data}
}

export function regisgerUser({id,username,smsCode,password}){

  return dispatch=>{
    axios.get('/app/account/register',
        {params :
            { //请求参数
              id,username,smsCode,password
            }
        }
      )
      .then(res=>{
        if (res.data.code===1) {
          dispatch(authSuccess({id,username,smsCode,password}))
        }
      })
  }
}
export function loginUser({username,password}){
  return dispatch=>{
    axios.get('/app/account/login',
      {params :
        { //请求参数
        username,password
        }
      }
    )
      .then(res=>{
        if (res.data.code===1) {
          dispatch(authSuccess(res.data.data))
        }
      })
  }
}
export function smsCode({username,smsType}){
  return dispatch=>{
    axios.post('/app/account/sendSms',{username,smsType})
      .then(res=>{
        if (res.status===1) {
          dispatch(authSuccess({username,smsType}))
        }
      })
  }
}