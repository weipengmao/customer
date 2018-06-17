/**
 * Created by Administrator on 2018/6/16 0016.
 */
import axios from 'axios'
export const CustomerHttp = {
  //get请求
    httpGet(url,data){
      return new Promise((resolve,reject)=>{
        axios.get(url,{params:data})
          .then((res)=>{
              resolve(res)
          }).catch((err)=>{
              reject(err)
        })
      })
    },
  //post请求
    httpPost(url,data){
        return new Promise((resolve,reject)=>{
            axios.post(url,{params:data})
            .then((res)=>{
            resolve(res)
          }).catch((err)=>{
          reject(err)
        })
      })
    },
  //修改数据
    httpPatch(url,data){
      return new Promise((resolve,reject)=>{
          axios.patch(url,{params:data})
            .then((res)=>{
            resolve(res)
          }).catch((err)=>{
          reject(err)
        })
      })
    },
  //删除数据
    httpDelete(url,data){
      return new Promise((resolve,reject)=>{
            axios.delete(url,{params:data})
            .then((res)=>{
            resolve(res)
          }).catch((err)=>{
          reject(err)
        })
      })
    },
}
