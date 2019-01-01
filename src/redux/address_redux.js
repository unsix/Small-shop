import axios from 'axios'
import { message } from 'antd';

const  SWITCH_ADDRESS = 'SWICH_ADDRESS'
const  SWITCH_OPTIONS = 'SWITCH_OPTIONS'
const  SWITCH_OPTIONSTWO = 'SWITCH_OPTIONSTWO'
const initState = {
 addressList:[],
 options:[],
  optionsTwo:[]
}

export function address(state=initState, action){
  switch(action.type){
    case SWITCH_ADDRESS:
      return {
        ...state,
        addressList:action.payload
      }
    case SWITCH_OPTIONS:
      return {
        ...state,
        options:action.payload
      }
    case SWITCH_OPTIONSTWO:
      return {
        ...state,
        optionsTwo:action.payload
      }
    default:
      return state
  }
}

//添加地址
export function addressList(data) {
  return {type:SWITCH_ADDRESS,payload:data}
}
//获取省市
export function optionsList(data) {
  return {type:SWITCH_OPTIONS,payload:data}
}
//获取市区
export function optionsListTwo(data) {
  return {type:SWITCH_OPTIONSTWO,payload:data}
}
//获取地址列表
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

//添加地址
export function addAddress({consignee,phone,address,areaName,isDefault,area,zipCode}){
  return dispatch=>{
    const token = JSON.parse(localStorage.getItem("token"));
    axios.post('/app/shop/receiver/v1/add',
      JSON.stringify({
        consignee,phone,address,areaName,isDefault,area,zipCode,token
      })
    )
      .then(res=>{
        if(res.data.status===1){
          dispatch(getAddressList())
        }
      })
  }
}

//删除地址
export function deleteAddress({id}){
  return dispatch=>{
    const token = JSON.parse(localStorage.getItem("token"));
    axios.post('/app/shop/receiver/v1/del',
      JSON.stringify({
        id,token
      })
    )
      .then(res=>{
        if(res.data.status===1){
          dispatch(getAddressList())
        }
      })
  }
}
//编辑地址
export function updateAddress({id}){
  return dispatch=>{
    const token = JSON.parse(localStorage.getItem("token"));
    axios.post('/app/shop/receiver/v1/update',
      JSON.stringify({
        id,token
      })
    )
      .then(res=>{
        if(res.data.status===1){
          dispatch(getAddressList())
        }
      })
  }
}

//获取省直辖市

export function getOptionsList(parentId){
  return dispatch=>{
    axios.post('/app/shop/area',
      JSON.stringify({
        parentId
      })
    )
      .then(res=>{
        if(res.data.status===1){
          if (parentId==='') {
            let dataMap = [];
            for (let i = 0 ; i<res.data.content.length;i++){
              res.data.content.forEach((item,i)=>{
                dataMap[i]={key:item.value,value:item.name,label:item.name, isLeaf:false}
              })
            }
            dispatch(optionsList(dataMap))
          }
          else {
            let dataMap = [];
            for (let i = 0 ; i<res.data.content.length;i++){
              res.data.content.forEach((item,i)=>{
                dataMap[i]={key:item.value,value:item.name,label:item.name}
              })
            }
            dispatch(optionsListTwo(dataMap))
          }
        }
      })
  }
}