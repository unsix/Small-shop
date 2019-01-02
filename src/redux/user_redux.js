import axios from 'axios'
import { message } from 'antd';
import {getRedirectPath} from '../util'

const AUTH_SUCCESS = 'AUTH_SUCCESS'
const AUTH_AXIOS = 'AUTH_AXIOS'
const AUTH_FAILED = 'AUTH_FAILED'
const SMSCODE = 'SMSCODE'


const LOGOUT = 'LOGOUT'
const REGISTER  = 'REGISTER'
const CHANGEPWD = 'CHANGEPWD'
const initState={
  redirectTo:'',
  username:'',
  loading:false,
  msg:''
}
// reducer
export function user(state=initState, action){
  switch(action.type){
    case AUTH_AXIOS:
      return {...state,loading:true,}
    case AUTH_SUCCESS:
      return {...state,loading:false,redirectTo:getRedirectPath(action.payload), ...action.payload}
    case AUTH_FAILED:
      return {...state,msg:action.msg,loading:false}
    case SMSCODE:
      return {...state, ...action.code}
    case LOGOUT:
      return{...initState,redirectTo:'/login'}
    case REGISTER:
      return{...initState,redirectTo:'/register'}
    case CHANGEPWD:
      return{...initState,redirectTo:'/forgotpwd'}
    default:
      return state
  }
}

function authAxios(){
  return {type:AUTH_AXIOS}
}
function authSuccess(data){
  return {type:AUTH_SUCCESS, payload:data}
}
function authFailed(msg){
  return {type:AUTH_FAILED, msg}
}
function smsCodes(code) {
  return {type:SMSCODE, code}
}

/*
*
* 由于redireto在longin register changepwd 需要动态调redireto*/
//退出登录
export function logoutSubmit(){
  return { type:LOGOUT }
}

//跳转注册
export function registerSubmit(){
  return { type:REGISTER }
}
//忘记密码
export function forgotpwdSubmit(){
  return { type:LOGOUT }
}
//注册
export function regisgerUser({username,smsCode,password},type){
  console.log(type)
  return dispatch=>{
    dispatch(authAxios())
    axios.post('/app/account/register',
      JSON.stringify({
        username,smsCode,password
      })
      )
      .then(res=>{
        if (res.data.status===1) {
          message.success('注册成功');
          dispatch(authSuccess({username,type}))
        }
        else {
          dispatch(authFailed(res.data.message))
          message.error(res.data.message);
        }
        console.log(res)
      })
  }
}
//登录
export function loginUser({username,password}){
  return dispatch=>{
    dispatch(authAxios())
    axios.post('/app/account/login',
      JSON.stringify({
        username,password
      })
    )
      .then(res=>{
        if (res.data.status===1) {
          message.success('登录成功');
          localStorage.setItem("token",JSON.stringify(res.data.token));
          dispatch(authSuccess(res.data.info))
        }
        else {
          dispatch(authFailed(res.data.message))
          message.error(res.data.message);
        }
        console.log(res)
      })
      // .catch(error => {
      //
      // })
  }
}
//忘记密码
export function forgetPwdUser({username,smsCode,password},type){

  return dispatch=>{
    axios.post('/app/account/forget',
      JSON.stringify({
        username,smsCode,password
      })
    )
      .then(res=>{
        if (res.data.status===1) {
          dispatch(authSuccess(type))
        }
        else {
          dispatch(authFailed(res.data.message))
          message.error(res.data.message);
        }
        console.log(res)
      })
  }
}
//验证码
export function smsCode({username,smsType}){
  return dispatch=>{
    axios.post('/app/account/sendSms',
      JSON.stringify({
        username,smsType
      })
    )
      .then(res=>{
        if (res.data.status===1) {
          message.success('已发送验证码');
          dispatch(smsCodes({username,smsType}))
        }
        else {
          dispatch(authFailed(res.data.message))
          message.error(res.data.message);
        }
      })
  }
}
export function updatePwdUser({currentPassword,password}){

  return dispatch=>{
    const token = JSON.parse(localStorage.getItem("token"));
    axios.post('/app/account/updatePassword',
      JSON.stringify({
        currentPassword,password,token
      })
    )
      .then(res=>{
        if (res.data.code===1) {
          // dispatch(authSuccess({username,smsCode,password}))
        }
      })
  }
}
