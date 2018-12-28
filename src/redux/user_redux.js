import axios from 'axios'
import {getRedirectPath} from '../util'

const AUTH_SUCCESS = 'AUTH_SUCCESS'
const SMSCODE = 'SMSCODE'
const LOGOUT = 'LOGOUT'
const initState={
  redirectTo:'',
  username:''
}
// reducer
export function user(state=initState, action){
  switch(action.type){
    case AUTH_SUCCESS:
      return {...state,redirectTo:getRedirectPath(), ...action.payload}
    case SMSCODE:
      return {...state, ...action.payload}
    case LOGOUT:
      return{...initState,redirectTo:'/login'}
    default:
      return state
  }
}

function authSuccess(data){
  return {type:AUTH_SUCCESS, payload:data}
}

export function logoutSubmit(){
  return { type:LOGOUT }
}

export function regisgerUser({username,smsCode,password}){

  return dispatch=>{
    axios.post('/app/account/register',
      JSON.stringify({
        username,smsCode,password
      })
      )
      .then(res=>{
        if (res.data.code===1) {
          dispatch(authSuccess({username,smsCode,password}))
        }
      })
  }
}

export function loginUser({username,password}){
  return dispatch=>{
    axios.post('/app/account/login',
      JSON.stringify({
        username,password
      })
    )
      .then(res=>{
        if (res.data.status===1) {
          localStorage.setItem("token",JSON.stringify(res.data.token));
          dispatch(authSuccess(res.data.info))
        }
        console.log(res)
      })
  }
}

export function smsCode({username,smsType}){
  return dispatch=>{
    axios.post('/app/account/sendSms',
      JSON.stringify({
        username,smsType
      })
    // {
    //   username,smsType
    // }
    )
      .then(res=>{
        if (res.status===1) {
          dispatch(authSuccess({username,smsType}))
        }
      })
  }
}
export function forgetPwdUser({username,smsCode,password}){

  return dispatch=>{
    axios.post('/app/account/forget',
      JSON.stringify({
        username,smsCode,password
      })
    )
      .then(res=>{
        if (res.data.code===1) {
          dispatch(authSuccess({username,smsCode,password}))
        }
      })
  }
}
