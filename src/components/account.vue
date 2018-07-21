<template>
<div id="body">
    <div class="container">
      <div class="pop" v-show="popFlag">
        <div></div>
      </div>
      <div class="header">
        <span class="headerText">聊天</span>
        <img class="headerImg" src="../common/image/close.png" @touchend="toIndex">
      </div>
      <div class="center">
        <!--历史问题 -->
        <div class="cpBefore" >
          <div class="contentRight" style="width:100%" v-if="beforeQuest" >
            <div class="rightContent" style="float:right">
              <p align="left">{{beforeTxt}}
              </p>
            </div>
          </div>

          <div class="content" v-if="beforeflag" >
            <img src="../common/image/robot_profile.png" class="contentImg" >
            <div class="contentBox" style="width:80%;margin-right:0.1rem;" >
              <p align="left">{{history}}
              </p>
              <hr style="width:93%;border:0.5px solid rgba(131,205,93,1);margin:0 auto;">
            </div>
          </div>

          <div class="content" style="width:100%"  ref="beforeItem">
            <img src="../common/image/robot_profile.png" class="contentImg" style="margin-left:0;" v-show="false">
            <div class="contentBox" style="width:70%;margin-right:0.1rem;" v-show="false">
            <div v-for="(item,key) in answer">
              <p align="left">{{item}}
              </p>
              <hr style="width:93%;border:0.5px solid rgba(131,205,93,1);margin:0 auto;">
            </div>
            <img src="../common/image/service_ears.png" alt="" style="float:left;margin-top:0.05rem;" @touchend="serviceDetail"><span
            style="font-size:0.4rem;font-family:SourceHanSansCN-Normal;color:rgba(77,77,77,1);
            float:left;line-height:1.10rem" >转人工客服</span>
            <p style="float:right;font-size:0.4rem;font-family:SourceHanSansCN-Normal;color:rgba(77,77,77,1);
            line-height:0.5rem;" >更多</p>
          </div>
            <div class="service" v-if="historyText">
              <hr style="width:28%;position:absolute;left:0.5rem;top:0.12rem;opacity:0.2">
              <hr style="width:28%;position:absolute;right:0.5rem;top:0.12rem;opacity:0.2">
              <p class="serviceText">历史消息</p>
            </div>
          </div>
        </div>
        <!--问题模拟 -->
        <div class="content" v-if="firstQues">
          <img src="../common/image/robot_profile.png" class="contentImg">
          <div class="contentBox">
            <p align="left">{{welcome}}
            </p>
          </div>
        </div>
        <!--当前问题 -->
        <div class="cpOne" v-for="(key,item) in firstQuestTxt" :id="item">
          <div class="contentRight" style="width:100%" v-if="firstQuest" >
            <div class="rightContent" style="float:right">
              <p align="left">{{key}}
              </p>
            </div>
          </div>
          <!--<div style="float:left;margin:0rem auto;width:100%;">loading</div>-->
          <div class="content" v-if="answerTxt" ref="item" >
            <img src="../common/image/robot_profile.png" class="contentImg" >
            <div class="contentBox" style="width:80%;margin-right:0.1rem;" >
              <div :id="'moreAnswerLoading'+item"><img src="../../static/loading.gif" width="20px" height="20px" alt=""></div>
              <p align="left" :id="id" ref="testIndex">
              </p>
              <hr style="width:93%;border:0.5px solid rgba(131,205,93,1);margin:0 auto;">
              <img :src="heart" alt="" style="float:left" @touchend="changeStyle(item)" ref="changeSty">
              <p style="float:right;font-size:0.4rem;font-family:SourceHanSansCN-Normal;color:rgba(77,77,77,1);
            line-height:0.5rem;" @touchend="moreAnswer(item)" >更多</p>
            </div>
          </div>

          <div class="content" style="width:100%" v-show="flagTxt" ref="itemContent" :id = "item">
            <img src="../common/image/robot_profile.png" class="contentImg" style="margin-left:0;">
            <div :id="'moreAnswerLoadingA'+item"><img src="../../static/loading.gif" width="20px" height="20px" alt=""></div>
            <div class="contentBox" style="width:70%;margin-right:0.9rem;">
              <div v-for="(items,key) in randomAnswer[item]" :id="items" @click="info(items,key,item)">
                <p align="left" >{{items}}
                </p>
                <hr style="width:93%;border:0.5px solid rgba(131,205,93,1);margin:0 auto;">
              </div>
              <img src="../common/image/service_ears.png" alt="" style="float:left;margin-top:0.05rem;" @click="serviceDetail"><span
              style="font-size:0.4rem;font-family:SourceHanSansCN-Normal;color:rgba(77,77,77,1);
            float:left;line-height:1.10rem" @click="serviceDetail">转人工客服</span>
              <p style="float:right;font-size:0.4rem;font-family:SourceHanSansCN-Normal;color:rgba(77,77,77,1);
            line-height:0.5rem;" @click="addText(item)">更多</p>
            </div>
          </div>
        </div>
        <!--人工服务 -->
        <div class="contentService" v-if="service" >
          <div class="service">
            <hr style="width:28%;position:absolute;left:0.5rem;top:0.12rem;opacity:0.2">
            <hr style="width:28%;position:absolute;right:0.5rem;top:0.12rem;opacity:0.2">
            <p class="serviceText">已转到人工服务</p>
          </div>
          <div style="float:left">
            <img src="../common/image/service_profile.png" class="contentImgService">
            <div class="contentBoxService" style="width:80%;margin-right:0.1rem;">
              <p align="left">亲爱的VIP客户，现在为人工服务模式，请问能帮到您什么？。
              </p>
              <hr style="width:93%;border:0.5px solid rgba(131,205,93,1);margin:0 auto;">
              <img src="../common/image/service_ears.png" alt="" style="float:left;margin-top:0.05rem;" ><span
              style="font-size:0.4rem;font-family:SourceHanSansCN-Normal;color:rgba(77,77,77,1);
            float:left;line-height:1.10rem">人工客服</span>
              <!--<img :src="heartBeat" alt="" style="float:left" @touchend="changeBeat(item-1)" ref="changeBeat">-->
            </div>
          </div>
        </div>
        <!--人工服务后问题 -->
        <div class="cpTwo" v-for="(key,item) in questTxt">
          <div class="contentRight" style="width:100%" v-if="quest" >
            <div class="rightContent" style="float:right">
              <p align="left">{{key}}
              </p>
            </div>
          </div>

          <div class="content" v-if="answerTxt" ref="itemTwo">
            <img src="../common/image/robot_profile.png" class="contentImg" >
            <div class="contentBox" style="width:80%;margin-right:0.1rem;" >
              <div :id="'moreAnswerLoadingC'+item"><img src="../../static/loading.gif" width="20px" height="20px" alt=""></div>
              <p align="left" ref="testIndexTwo">
              </p>
              <hr style="width:93%;border:0.5px solid rgba(131,205,93,1);margin:0 auto;">
              <img :src="heart" alt="" style="float:left" @touchend="changeStyle">
              <p style="float:right;font-size:0.4rem;font-family:SourceHanSansCN-Normal;color:rgba(77,77,77,1);
            line-height:0.5rem;" @click="moreAnswerTwo(item)" >更多</p>
            </div>
          </div>

          <div class="content" style="width:100%" v-show="flagTxt" ref="itemTwoContent">
            <img src="../common/image/robot_profile.png" class="contentImg" style="margin-left:0;">
            <div :id="'moreAnswerLoadingB'+item"><img src="../../static/loading.gif" width="20px" height="20px" alt=""></div>
            <div class="contentBox" style="width:70%;margin-right:0.9rem;">
              <div v-for="(items,key) in answer" @click="infoTwo(items,key,item)">
                <p align="left">{{items}}
                </p>
                <hr style="width:93%;border:0.5px solid rgba(131,205,93,1);margin:0 auto;">
              </div>
              <p style="float:right;font-size:0.4rem;font-family:SourceHanSansCN-Normal;color:rgba(77,77,77,1);
            line-height:0.5rem;" @click="addText(item)">更多</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottomLeftTwo" v-show="model" ref="model" @touchend="modelChangeTwo"><p>{{textSearchTwo}}</p></div>
        <div class="bottomLeft" @touchend="modelChange"><p>{{textSearch}}</p></div>
          <div class="model">
            <ul class="text" v-show="inputContent"><li v-if="key" v-show="keyText" v-for="key in text" class="textLi" @touchend="searchLi(key)">{{key}}</li></ul>
            <el-input class="input" clearable placeholder="请输入您的问题" v-model="questDetail" @input="search()"></el-input>
          </div>
        <div class="bottomRight" @touchend="setQuest"><p>发送</p></div>
      </div>
    </div>
</div>
</template>

<script>
  import {CustomerHttp} from '../common/js/http'
  import {distinct} from '../common/js/distinct'
  import Vue from 'vue'
  var root = process.env.API_HOST
export default {
  name: 'account',
  mounted() {
    var _that = this
    CustomerHttp.httpPost(`${root}qx`,{"corp_id":CustomerHttp.common.corp_id,"cmd":"corp.pars","ver":1}).then(
      function(val){
        _that.welcome = val.data.warm_tip
      },function(err){
        console.log(err)
      }
    )

    if(localStorage.getItem('answer')){
      this.beforeflag = true
      this.beforeQuest = true
      this.historyText = true
      this.beforeTxt = localStorage.getItem('quest')
      this.history = localStorage.getItem('answer')
    }else{
      this.historyText = false
    }
  },
  data () {
    return {
      history:'',
      inputContent:true,
      text:[],
      searchText:'',
      key:true,
      keyText:true,
      historyText:false,
      textSearch: '检索',
      textSearchTwo:'标准',
      model:true,
      heart: require('../common/image/heart_before.png'),
      heartBeat: require('../common/image/heart_before.png'),
      flag: true,
      flagBeat:true,
      answerArr: [],
      addItem: false,
      answer:[],
      randomAnswer:CustomerHttp.common.randomAnswer,
      randomAnswerTwo:CustomerHttp.common.randomAnswer,
      flagTxt:false,
      firstQues:true,
      quest:false,
      questTxt:[],
      firstQuestTxt:[],
      questDetail:'',
      answerTxt:false,
      service:false,
      firstQuest:false,
      Time:1,
      beforeTxt:'',
      beforeflag:false,
      beforeQuest:false,
      num:CustomerHttp.common.randomNumber,
      welcome:'',
      robotAnswer:'',
      id:'',
      idNum:0,
      idNumTwo:0,
      numId:'random',
      numIdB:'randomB',
      serviceNum:0,
      normalText:0,
      popFlag:false
    }
  },
  methods: {
    toIndex(){
      this.$router.go(-1)
    },
    changeStyle(a){
      if (this.flag) {
        this.$refs.changeSty[a].src = require('../common/image/heart_after.png')
        this.flag = false
      } else {
        this.$refs.changeSty[a].src = require('../common/image/heart_before.png')
        this.flag = true
      }
    },
    changeBeat(a){
      if (this.flagBeat) {
        this.$refs.changeBeat[a].src = require('../common/image/heart_after.png')
        this.flagBeat = false
      } else {
        this.$refs.changeBeat[a].src = require('../common/image/heart_before.png')
        this.flagBeat = true
      }
    },
    addText(a){
      //加载指定数量
      this.num[a] += 5
      var abs =(this.answerArr.length -  this.randomAnswer[a].length)/5
      if(abs >=1){
        for(var i = 0;i<5;i++ ){
          this.randomAnswer[a].push(this.answerArr[(this.num[a] - 5)+ i])
        }
      }else{
        for(var i = 0;i<abs*5;i++ ){
          this.randomAnswer[a].push(this.answerArr[(this.num[a] - 5)+ i])
        }
      }
    },
    moreAnswer(a){
      if(this.numId != a){
        this.numId = a
        for(var i = 0;i<this.answerArr.length;i++){
          if(this.randomAnswer[a].length < this.answerArr.length){
            this.randomAnswer[a].push(this.answerArr[i])
          }
          if(i == this.answerArr.length-1){
            setTimeout(() =>{
              document.querySelector('#'+'moreAnswerLoadingA'+a).style.display = 'none'
            },10)
          }
        }
        this.$refs.item[a].style.display = 'block'
        this.$refs.itemContent[a].style.display = 'block'
      }
    },
    moreAnswerTwo(a){
      if(this.numIdB != a) {
        this.numIdB = a
        for (var i = 0; i < this.answer.length; i++) {
          if(this.randomAnswerTwo[a].length < this.answerArr.length){
            this.randomAnswerTwo[a].push(this.answer[i])
          }
          if (i == this.answer.length - 1) {
            setTimeout(() => {
              document.querySelector('#' + 'moreAnswerLoadingB' + a).style.display = 'none'
           },10)
          }
        }
        this.$refs.itemTwo[a].style.display = 'block'
        this.$refs.itemTwoContent[a].style.display = 'block'
      }
    },
    setQuest(){
      var _that = this
      var arr =[];
      this.text = ''
      if(this.service == false ){
        this.firstQuestTxt.push(this.questDetail)
        this.firstQuest = true
        CustomerHttp.httpPost(`${root}qx`,{"corp_id":CustomerHttp.common.corp_id,"cmd":"robot.smart.answer","ask":this.questDetail,
          "size":20,"ver":1}).then(
          function(val){
            var textS = 'moreAnswerLoading' + _that.normalText
            _that.normalText++
            setTimeout(()=>{
              document.querySelector("#"+textS).style.display = 'none'
            },10)
            var reg = new RegExp('^'+_that.questDetail,"i")
            if(val.data.flag!=90010098){
              for(var i = 0;i < val.data.rows.length;i++){
                arr.push(val.data.rows[i][0])
                _that.answerArr = arr
                if(reg.test(val.data.rows[i][0])){
//                _that.robotAnswer = val.data.rows[i][1].replace(/[a-zA-Z\<\>\&\;]+/,'')
                  _that.robotAnswer = val.data.rows[i][1]
                  if(_that.questDetail!= ''){
                    localStorage.setItem('quest',_that.questDetail)
                    localStorage.setItem('answer',_that.robotAnswer)
                  }
                  _that.answerTxt = true
                  _that.id = val.data.rows[i][5]
                  //玫瑰花茶有什么功效
                }
              }
              _that.$nextTick(() => {
                if(_that.questDetail == ''){
                  _that.$refs.testIndex[_that.idNum].parentNode.parentNode.style.width = '100%'
                  _that.$refs.testIndex[_that.idNum].parentNode.lastChild.innerHTML = ''
                  _that.$refs.testIndex[_that.idNum].innerHTML = "没能理解您的意思哦，换一种问法试试"
                }else{
                  _that.$refs.testIndex[_that.idNum].innerHTML = `${_that.robotAnswer}`
                }
              _that.idNum++
            })
            }else if(!val.data.rows || !_that.questDetail){
              _that.answerTxt = true
              _that.$nextTick(() => {
              _that.$refs.testIndex[_that.idNum].parentNode.parentNode.style.width = '100%'
              if(val.data.rows){
                _that.$refs.testIndex[_that.idNum].innerHTML = "没能理解您的意思哦，换一种问法试试"
              }else{
                 _that.$refs.testIndex[_that.idNum].parentNode.lastChild.innerHTML = ''
                _that.$refs.testIndex[_that.idNum].innerHTML = val.data.msg
              }
              _that.idNum++
            })
            }
          },function(err){
            console.log(err)
          }
        )
      }
      this.Time ++
      if(this.service == true){
        this.questTxt.push(this.questDetail)
        this.quest = true
        this.answerTxt = true

        CustomerHttp.httpPost(`${root}qx`,{"corp_id":CustomerHttp.common.corp_id,"cmd":"robot.smart.answer","ask":this.questDetail,
          "size":20,"ver":1}).then(
          function(val){
            var textC = 'moreAnswerLoadingC' + _that.serviceNum
            _that.serviceNum++
            setTimeout(()=>{
              document.querySelector("#"+textC).style.display = 'none'
          },10)
            var reg = new RegExp(_that.questDetail,"i")
            if(val.data.flag!=90010098){
              for(var i = 0;i < val.data.rows.length;i++){
                arr.push(val.data.rows[i][0])
                _that.answer = arr
                if(reg.test(val.data.rows[i][0])){
  //                _that.robotAnswer = val.data.rows[i][1].replace(/[a-zA-Z\<\>\&\;]+/,'')
                  _that.robotAnswer = val.data.rows[i][1]
                  if(_that.questDetail!= ''){
                    localStorage.setItem('quest',_that.questDetail)
                    localStorage.setItem('answer',_that.robotAnswer)
                  }
                  _that.answerTxt = true
                  _that.id = val.data.rows[i][5]
                  //玫瑰花茶有什么功效
                }
              }
            }else if(!val.data.rows || !_that.questDetail){
              _that.answerTxt = true
              _that.$nextTick(() => {
              _that.$refs.testIndexTwo[_that.idNumTwo].parentNode.parentNode.style.width = '100%'
              if(val.data.rows){
                _that.$refs.testIndexTwo[_that.idNumTwo].innerHTML = "没能理解您的意思哦，换一种问法试试"
              }else{
                if(_that.$refs.testIndexTwo[_that.idNumTwo].parentNode.lastChild.innerHTML){
                  _that.$refs.testIndexTwo[_that.idNumTwo].parentNode.lastChild.innerHTML = ''
                }
                _that.$refs.testIndexTwo[_that.idNumTwo].innerHTML = val.data.msg
              }
              _that.idNumTwo++
            })
            }
            _that.$nextTick(() => {
              if(_that.questDetail == ''){
                _that.$refs.testIndexTwo[_that.idNumTwo].parentNode.parentNode.style.width = '100%'
                if(_that.$refs.testIndexTwo[_that.idNumTwo].parentNode.lastChild.innerHTML){
                  _that.$refs.testIndexTwo[_that.idNumTwo].parentNode.lastChild.innerHTML = ''
                }
                _that.$refs.testIndexTwo[_that.idNumTwo].innerHTML = "没能理解您的意思哦，换一种问法试试"
              }else{
                console.log(typeof _that.questDetail)
                if(typeof _that.questDetail != 'number'){
                  _that.$refs.testIndexTwo[_that.idNumTwo].innerHTML = `${_that.robotAnswer}`
                }
              }
            _that.idNumTwo++
          })
          },function(err){
            console.log(err)
          }
        )
      }
    },
    serviceDetail(){
      var openID = sessionStorage.getItem("openid");
      if(openID){
        this.service = true
      }else{
        location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7e88240ec21db9f6&redirect_uri=http://robot.health-vi.com/customer/auth.html?redirect_uri=http://robot.health-vi.com/customer&response_type=code&scope=snsapi_base&state=47c7be842c4e790f&component_appid=wxb98cc920f74c1f5f#wechat_redirect"
      }
    },
    info(a,key,item){
//      var reg = /【---.*---】/
//      a = a.match(reg)
//      a = a[0].split('【---')
//      a = a[1].split('---】')[0]
//      console.log(a)
      console.log(item)
      localStorage.setItem('quest',a)
      var _that = this
      this.firstQuestTxt.push(a)
      this.firstQuest = true
      CustomerHttp.httpPost(`${root}qx`,{"corp_id":CustomerHttp.common.corp_id,"cmd":"robot.smart.answer","ask":a,
        "size":20,"ver":1}).then(
        function(val){
          var textS = 'moreAnswerLoading' + _that.normalText
          _that.normalText++
          setTimeout(()=>{
            document.querySelector("#"+textS).style.display = 'none'
          },10)
          var reg = new RegExp(`\^${a}`,"i")
          if(val.data.rows){
            for(var i = 0;i < val.data.rows.length;i++){
              if(reg.test(val.data.rows[i][0])){
                console.log('ok')
                _that.robotAnswer = val.data.rows[i][1]
                localStorage.setItem('answer',_that.robotAnswer)
                _that.answerTxt = true
                _that.id = val.data.rows[i][5]+key
                //玫瑰花茶有什么功效
              }
            }
          }
          _that.$nextTick(() => {
            _that.$refs.testIndex[_that.idNum].innerHTML = `${_that.robotAnswer}`
            _that.idNum++
        })
        },function(err){
          console.log(err)
        }
      )
    },
    infoTwo(a,key,item){
      localStorage.setItem('quest',a)
      var _that = this
      this.questTxt.push(a)
      this.quest = true
      CustomerHttp.httpPost(`${root}qx`,{"corp_id":CustomerHttp.common.corp_id,"cmd":"robot.smart.answer","ask":a,
        "size":20,"ver":1}).then(
        function(val){
          var textC = 'moreAnswerLoadingC' + _that.serviceNum
          _that.serviceNum++
          console.log(textC)
          setTimeout(()=>{
            document.querySelector("#"+textC).style.display = 'none'
          },10)
          var reg = new RegExp(`\^${a}`,"i")
          if(val.data.rows){
            for(var i = 0;i < val.data.rows.length;i++){
              if(reg.test(val.data.rows[i][0])){
                _that.robotAnswer = val.data.rows[i][1]
                localStorage.setItem('answer',_that.robotAnswer)
                _that.answerTxt = true
                _that.id = val.data.rows[i][5]+key
                //玫瑰花茶有什么功效
              }
            }
          }
          _that.$nextTick(() => {
            _that.$refs.testIndexTwo[_that.idNumTwo].innerHTML = `${_that.robotAnswer}`
          _that.idNumTwo++
        })
        },function(err){
          console.log(err)
        }
      )
    },
    search(){
          var _that = this
          const reg = new RegExp('^'+this.searchText+'[\\u4e00-\\u9fa5]*$','g')
          var arr =[]
          var newArr=[]

          CustomerHttp.httpPost(`${root}qx`,{"corp_id":CustomerHttp.common.corp_id,"cmd":"robot.smart.answer","ask":_that.questDetail,
            "size":20,"ver":1}).then(function (val) {
              if(_that.questDetail!='' && _that.textSearch =='检索'&& val.data.flag!=90010098){
                  _that.inputContent = true
                  _that.text=[]
                  for(var j=0;j< val.data.rows.length;j++){
                    arr.push(val.data.rows[j][0])
                  }
                  newArr = distinct(arr)
                  for(var i = 0;i<newArr.length;i++){
                    _that.text.push(newArr[i])
                  }
                  setTimeout(()=>{
                    _that.text = ''
                  },3000)
                }else{
                  _that.text = ''
                }
              }, function (err) {
                console.log(err)
              })
  
      },
    searchLi(a){
      this.questDetail = a
      this.inputContent = false

    },
    modelChange(){
      var _that = this
      if(this.$refs.model.style.top!='0.2rem'){
        document.addEventListener('click',function(){
            _that.$refs.model.style.top = '0.2rem'
        })
      }
      setTimeout(()=>{
        this.$refs.model.style.top = '-53%'
      },30)
    },
    modelChangeTwo(){
      if(this.textSearchTwo == '标准'){
        this.textSearchTwo="检索"
        this.textSearch="标准"
      }else{
        this.textSearchTwo="标准"
        this.textSearch="检索"
      }
      this.$refs.model.style.top = '0.2rem'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.container{
  height:100vh;
  width:100%;
}
.center{
  overflow-y:auto;
  height:80%;
}
.header{
  height:1.8rem;
  background:#4D4D4D;
}
.headerText{
  font-size:0.5rem;
  font-family:SourceHanSansCN-Bold;
  color:rgba(255,255,255,1);
  line-height:0px;
  float:left;
  display:inline-block;
  margin:0.99rem 0 0 0.4rem;
  font-weight:Bold;
}
.headerImg{
  float:right;
  width:1.1rem;
  height:1.7rem;
}
.content{
  float:left
}
.contentBox{
  background:rgba(145,237,97,1);
  border-radius:0px 9px 9px 9px;
  width:5rem;
  display:inline-block;
  margin-top:0.65rem;
  transition:all 0.3s;
}
.contentBox p{
  font-size:0.4rem;
  font-family:SourceHanSansCN-Normal;
  color:rgba(77,77,77,1);
  line-height:20px;
  margin:0.3rem;
}
.contentImg{
  display:inline-block;
  width:1.2rem;
  margin:0.6rem 0 0 0.3rem;
  vertical-align:top;
}
.contentRight{
  float:right;
  margin:0.65rem 0.22rem 0 0;
}
.rightContent{
  width:4rem;
  background:rgba(233,233,233,1);
  border-radius:9px 0px 9px 9px;
}
.rightContent p{
  display:inline-block;
  font-size:0.4rem;
  font-family:SourceHanSansCN-Normal;
  color:rgba(77,77,77,1);
  vertical-align:middle;
  padding:0.3rem;
}  
.service{
  width:100%;
  position:relative
}
.serviceText{
  font-size:0.25rem;
  font-family:SourceHanSansCN-Normal;
  color:#cac1c1;
  margin-top:0.1rem;
  line-height:1.3rem;
}
.contentService{
  width:100%;
  float:left
}
.contentBoxService{
  background:rgba(145,237,97,1);
  border-radius:0px 9px 9px 9px;
  display:inline-block;
  margin-top:5px;
}
.contentBoxService p{
  font-size:0.4rem;
  font-family:SourceHanSansCN-Normal;
  color:rgba(77,77,77,1);
  line-height:20px;
  margin:0.3rem;
}
.contentImgService{
  width:1.2rem;
  display:inline-block;
  margin:0 0 0.85rem 0.3rem;
  vertical-align:top;
}
.bottom{
  margin-top:0.2rem;
  position:relative;
}
.bottomLeft{
  left:0.45rem;
  top:0.2rem;
  position:absolute;
  width:1rem;
  height:1rem;
  background:rgba(26,173,25,1);
  border-radius:50%;
}
.bottomLeft p{
  position:absolute;
  top:50%;
  left:50%;
  transform:translateX(-50%);
  font-size:0.4rem;
  width:10rem;
  font-family:SourceHanSansCN-Normal;
  color:rgba(255,255,255,1);
  line-height:0px;
}  
.bottomLeftTwo{
  left:0.45rem;
  top:0.2rem;
  position:absolute;
  width:1rem;
  height:1rem;
  background:rgba(26,173,25,1);
  border-radius:50%;
  transition:all 0.5s;
}
.bottomLeftTwo p{
  position:absolute;
  top:50%;
  left:50%;
  transform:translateX(-50%);
  font-size:0.4rem;
  width:10rem;
  font-family:SourceHanSansCN-Normal;
  color:rgba(255,255,255,1);
  line-height:0px;
} 
.bottomRight{
  position:absolute;
  right:0.3rem;
  top:0.2rem;
  width:1.3rem;
  height:1rem;
  background:rgba(26,173,25,1);
  border-radius:9px;
}
.bottomRight p{
  width:1.5rem;
  position:absolute;
  top:50%;
  left:50%;
  transform:translateX(-50%);
  font-size:0.4rem;
  font-family:SourceHanSansCN-Normal;
  color:rgba(255,255,255,1);
  line-height:0px;
}
.input{
  width:65%;
}
.text{
  position:absolute;
  bottom:85%;
  left:50%;
  transform:translate(-50%);
  width: 65%;
  border:1px solid #c7c8cb;
  border-bottom:none;
  border-radius:10px 10px 0px 0px;
  background:white;
}
.textLi{
  font-size:0.4rem;
  line-height:0.6rem;
  border-bottom:1px solid #c7c8cb;
}
.pop{
  position:fixed;
  height:100%;
  width:100%;
  background: black;
  opacity:0.4;
  z-index:10
}
</style>
