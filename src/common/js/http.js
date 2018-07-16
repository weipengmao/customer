/**
 * Created by Administrator on 2018/6/16 0016.
 */
import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//终止请求
const CancelToken = axios.CancelToken;
let cancelAjaxText = '中断成功';
Vue.prototype.cancelAjax = function(){ //切换页面强行中断请求 router.beforeEach中用到
  if(Vue.prototype.index){
    for(var i = 0;i<Vue.prototype.index.length;i++){
      if(typeof Vue.prototype.index[i] == 'function'){
        Vue.prototype.index[i](cancelAjaxText)
      }
    }
  }
}
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
    Vue.prototype.num++
    //对url进行处理
    //url += param(url)
    //data = Object.assign(data,param(url))
    //let postData = qs.stringify(data)
    //返回promise对象
    return new Promise((resolve,reject)=>{
        axios({method:'post',url:url,data:data,cancelToken:new CancelToken(c => { 
          //强行中断请求要用到的
          Vue.prototype.index[Vue.prototype.num] = c
        })
      }).then((res)=>{
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
  //截取code
  getUrlParam(name){
    var reg = new RegExp('(^|&)' + name + '=([^&*])(&|$)')
    var r = window.location.search.substr(1).match(reg)
    console.log(window.location.search)
    if(r!=null){
      return unescape(r[2])
    }else{
      return null
    }
  },
  common:{
    "corp_id":"9c3b580d264111e793920242ac110005",
    "randomAnswer":[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    "randomNumber":[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
    "indexArr":  [["1我是机器人康康，","来自健康世界，","很高兴在这里遇见您，","希望能成为您的朋友，","愿健康成为您一生的伴侣。"],
    ["2我是机器人康康，","来自健康世界，","很高兴在这里遇见您，","希望能成为您的朋友，","愿健康成为您一生的伴侣。"],
    ["3我是机器人康康，","来自健康世界，","很高兴在这里遇见您，","希望能成为您的朋友，","愿健康成为您一生的伴侣。"],
    ["4我是机器人康康，","来自健康世界，","很高兴在这里遇见您，","希望能成为您的朋友，","愿健康成为您一生的伴侣。"],
    ["5我是机器人康康，","来自健康世界，","很高兴在这里遇见您，","希望能成为您的朋友，","愿健康成为您一生的伴侣。"],
    ["6我是机器人康康，","来自健康世界，","很高兴在这里遇见您，","希望能成为您的朋友，","愿健康成为您一生的伴侣。"],
    ["7我是机器人康康，","来自健康世界，","很高兴在这里遇见您，","希望能成为您的朋友，","愿健康成为您一生的伴侣。"],
    ["8我是机器人康康，","来自健康世界，","很高兴在这里遇见您，","希望能成为您的朋友，","愿健康成为您一生的伴侣。"],
    ["9我是机器人康康，","来自健康世界，","很高兴在这里遇见您，","希望能成为您的朋友，","愿健康成为您一生的伴侣。"],
    ["10我是机器人康康，","来自健康世界，","很高兴在这里遇见您，","希望能成为您的朋友，","愿健康成为您一生的伴侣。"]
  ]
}
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
