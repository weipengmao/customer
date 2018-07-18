<template>
<div id="body" >
  <div id="box" v-show='!loading'>
  <!--遮罩 -->
  <div class="pop" v-show="flag"></div>
            <!-- 进入首页，文字淡入 -->
    <div class="top" v-show="hide">
          <p class="word" v-for="word in words" v-show="hideWords">{{word}}</p>

          <router-link to="/account">
                    <div class="toAccount"></div>
          </router-link>

    </div>

    <!--导航栏 -->
    <div class="nav">
      <a name='9004.6' id="9004_6" @click="openId()"/> 
      <div class="box">

            <p class="button" v-for="(item,key) in items" v-if="(key+1)<=6" @click="toSwiper(item,titleIndex[key])" :id="titleIndex[key]">
              {{item}}
            </p>
            <p class="button" v-for="(item,key) in items" v-if="(key+1)>6 && hide == false" @click="toSwiper(item,titleIndex[key])" :id="titleIndex[key]">
              {{item}}
            </p>

      </div>


    </div>

  <!-- 底部上划 -->
  <div class="bottom" v-show="bottomTxt">
      <img src="../assets/pullup.png" alt="">
  </div>
  </div>

  <!-- 图片加载中 -->
  <vue-loading type="spin" color="#5AC1DD" :size="{ width: '2rem', height: '2rem' }" style="position:fixed;left:50%;bottom:7rem;margin-left:-1rem;" v-show="loading"></vue-loading>
</div>

</template>

<script>
import {CustomerHttp} from '../common/js/http'
import jsonp from '../common/js/jsonp'
import Vue from 'vue'
var root = process.env.API_HOST
export default {
  created(){
    this._req(this.items)
  },
  mounted(){
    // const appid = 'wx7e88240ec21db9f6'
    // const code = CustomerHttp.getUrlParam('code')
    // const local = window.location.href
    CustomerHttp.httpPost(`${root}qx`,{"usr":"13600000001","pwd":"cfcd208495d565ef66e7dff9f98764da","cmd":"sys.login","ver":1})
    // if(code == null || code == ''){
    //     location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&
    //     redirect_uri=${encodeURIComponent(local)}&response_type=code&scope=snsapi_base&state=47c7be842c4e790f&component_appid=wxb98cc920f74c1f5f#wechat_redirect`
    // }else{
    //     jsonp('https://api.weixin.qq.com/sns/oauth2/component/access_token',{"appid":appid,"code":code,"grant_type":"authorization_code","component_appid":"COMPONENT_APPID",
    //     "component_access_token":"COMPONENT_ACCESS_TOKEN"}).then(function(val){
    //       console.log(val)
    //         Vue.prototype.oppenId = val.data.openid
    //     })
    // }
    //随机函数
    var num = 10;
    var randomNum = parseInt(Math.random()*num)
    this.words = this.randomWord[randomNum]

    //一行一行淡出
    var that = this;
    var words=document.querySelectorAll('.word');
    var text = document.querySelectorAll('.bottom')[0];
    var nav = document.querySelector('.nav')
    text.addEventListener('touchstart', function (e) {
      this.pointY = e.targetTouches[0].pageY
    })
    text.addEventListener('touchmove', function (e) {
      this.point = e.targetTouches[0].pageY - this.pointY
    })
    text.addEventListener('touchend', function (e) {

      if (this.point < 0) {
        nav.style.top = 18 + '%'
        that.flag = true
        that.hide = false
        that.bottomTxt = false
      } else {
        document.querySelector('.nav').removeAttribute('style')
        that.flag = false
        that.hide = true
        that.bottomTxt = true
      }
    })

    nav.addEventListener('touchstart', function (e) {
      this.pointY = e.targetTouches[0].pageY
    })
    nav.addEventListener('touchmove', function (e) {
      this.point = e.targetTouches[0].pageY - this.pointY
    })
    nav.addEventListener('touchend', function (e) {
      if (this.point < 0) {
        nav.style.top = 18 + '%'
        that.flag = true
        that.hide = false
        that.bottomTxt = false
      } else if(this.point > 100){
        document.querySelector('.nav').removeAttribute('style')
        that.flag = false
        that.hide = true
        that.bottomTxt = true
      }
    })
    var timer=setInterval(
      ()=>{
        words[this.num].style.opacity=1;
        this.num++;
        if(this.num===5){
          clearInterval(timer)
        }
      }
    ,1000);

  },
  data(){
    return{
      words:['我是机器人康康，','来自健康世界，','很高兴在这里遇见您，','希望能成为您的朋友，','愿健康成为您一生的伴侣。'],
      //随机配置
      randomWord:CustomerHttp.common.indexArr,
      items:[],
      hideWords:true,
      num:0,
      flag: false,
      hide: true,
      bottomTxt:true,
      loading:true,
      titleIndex:[]
    }
  },
  methods:{
    _req(arr){
      var that=this;
      CustomerHttp.httpPost(`${root}qx`,{"url":"qx","cmd":"kind.q","pid":"","ver":1}).then(
        function(val){
          var Data = val.data.rows
          if(Data){
            for(var i =0;i<Data.length;i++){
              if(Data[i][2] == '' && i!=0){
                that.titleIndex.push(Data[i][0])
                arr.push(Data[i][1])
              }
            }
          }
            that.loading=false;
        },function(err){
          console.log(err)
        }
      )
    },
    toSwiper(text,titleIndex){
      this.$router.push({path:'/swiper',query:{id:text,titleIndex:titleIndex}})
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#box{
  width:100%;
  height:100vh;
  box-sizing: border-box;
  background:url(../common/image/bgimg.png) center center no-repeat;
  background-size:100% 100vh;
  position:relative;
  overflow-y:auto;
}
.pop{
  position:fixed;
  height:100%;
  width:100%;
  background: black;
  opacity:0.4;
}
.top{
  width:8rem;
  height:49vh;
  margin:0 auto;margin-bottom:0;
  padding-top:2rem;
  background:url(../common/image/timg.png) center no-repeat;
  background-size:100%;
  position:relative;
}
.top .word{
  font-size:0.5rem;color:white;padding:0.25rem 0;
  padding-left: 0.5rem;
  font-weight: bold;
  letter-spacing: 0.025rem;
  transition:all 0.5s;
  opacity:0;
}
.toAccount{
  width:4rem;height:1.4rem;position:absolute;bottom:1.2rem;left:2.3rem;
}

.nav{
  top:62%;
  width:10rem;
  position:absolute;
  transition:all 1s;
  }
  .nav .box{
    width:100%;margin:0 auto;margin-left:0.5rem;
  }
.button{
  width:2.255rem;
  height: 5.6vh;
  text-align: center;
  line-height: 0.6rem;
  color:white;
  font-size:0.42rem;border:2px solid #fff;
  display:inline-block;float:left;margin:0.1rem 0;
  margin-right:0.21rem;
  margin-top:0.15rem;
  border-radius: 10%;
  padding:0.45rem 0.25rem;font-weight: bold;
  letter-spacing: 0.035rem;
  background: url('../assets/button.png') center no-repeat;
  text-overflow:ellipsis;
  -o-text-overflow:ellipsis;
  -webkit-text-overflow:ellipsis;
  -moz-text-overflow:ellipsis;
  overflow:hidden;
}


.bottom{
  transition:all 0.5s;
  width:100%;height:1rem;position:fixed;bottom:0;
}
.bottom img{
  width:9.5rem;height:1rem;
}
</style>
