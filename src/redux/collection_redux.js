import axios from 'axios'
import { message } from 'antd'


//动态请求loading
const AUTH_AXIOS = 'AUTH_AXIOS'
const AUTH_FAILED = 'AUTH_FAILED'
//收藏列表
const  COLLECTION_LIST = 'COLLECTION_LIST'
const  CANCEL_COLLECT  = 'CANCEL_COLLECT '
// const ADD_EVALUATE = 'ADD_EVALUATE'
const initState = {
  collectionList:[],
  loading:false
}

export function collection(state=initState, action){
  switch(action.type){
    case AUTH_AXIOS:
      return {...state,loading:true,}
    case AUTH_FAILED:
      return {...state,msg:action.msg,loading:false}
    case COLLECTION_LIST:
      return {
        ...state,
        collectionList:action.payload,
        loading:false
      }
    // case  CANCEL_COLLECT:
    //   return {
    //     ...state,
    //     collectionList:action.payload
    //   }
    default:
      return state
  }
}

//请求load Type
function authAxios(){
  return {type:AUTH_AXIOS}
}
function authFailed(msg){
  return {type:AUTH_FAILED, msg}
}

//获取收藏列表
export function collectionList(data) {
  return {type:COLLECTION_LIST,payload:data}
}
//取消收藏
// export function cancelCollect(name) {
//   return {type:COLLECTION_LIST,payload:name}
// }
//获取收藏列表
export function addCollectionList(){
  return dispatch=>{
    dispatch(authAxios())
    const token = JSON.parse(localStorage.getItem("token"));
    axios.post('/app/shop/favorite/v1/myFavorite',
      JSON.stringify({
       token
      })
    )
      .then(res=>{
        if(res.data.status===1){
          dispatch(collectionList(res.data.content))
        }
        else {
          message.error(res.data.message)
        }
      })
  }
}
export function cancelCollection({ productIds}){
  return dispatch=>{
    const token = JSON.parse(localStorage.getItem("token"));
    axios.post('/app/shop/favorite/v1/del',
      JSON.stringify({
        productIds,token
      })
    )
      .then(res=>{
        if(res.data.status===1){
          message.success(res.data.message)
          dispatch(addCollectionList())
        }
        else {
          message.error(res.data.message)
        }
      })
  }
}