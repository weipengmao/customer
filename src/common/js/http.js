/**
 * Created by Administrator on 2018/6/16 0016.
 */
import axios from 'axios'
import qs from 'qs'
export const CustomerHttp = {
  //get请求
  httpGet(url,data){
    //对url进行处理
    //url += param(url)
    //data = Object.assign(data,param(url))
    //let getData = qs.stringify(data)
    //返回promise对象
    return new Promise((resolve,reject)=>{
        axios.get(url,data)
        .then((res)=>{
        resolve(res)
      }).catch((err)=>{
      reject(err)
    })
  })
  },
  //post请求
  httpPost(url,data){
    //对url进行处理
    //url += param(url)
    //data = Object.assign(data,param(url))
    //let postData = qs.stringify(data)
    //返回promise对象
    return new Promise((resolve,reject)=>{
        axios.post(url,data)
        .then((res)=>{
        resolve(res)
      }).catch((err)=>{
      reject(err)
    })
  })
  },
  //修改数据
  httpPatch(url,data){
    //对url进行处理
    //url += param(url)
    //data = Object.assign(data,param(url))
    //let patchData = qs.stringify(data)
    //返回promise对象
    return new Promise((resolve,reject)=>{
        axios.patch(url,data)
        .then((res)=>{
        resolve(res)
      }).catch((err)=>{
      reject(err)
    })
  })
  },
  //删除数据
  httpDelete(url,data){
    //对url进行处理
    //url += param(url)
    //data = Object.assign(data,param(url))
    //let deleteData = qs.stringify(data)
    //返回promise对象
    return new Promise((resolve,reject)=>{
        axios.delete(url,data)
        .then((res)=>{
        resolve(res)
      }).catch((err)=>{
      reject(err)
    })
  })
  },
}

//export function param(url){
//  //对url进行处理
//  if(url.indexOf('?')<0){
//    return ''
//  }else{
//    const str = url.substring(url.indexOf('?')).substring(1).split('&')
//    const data = {}
//    for(var i = 0; i < str.length;i++){
//      var params = str[i].split('=')
//      data[params[0]] = params[1]
//    }
//    return data
//  }
//}
