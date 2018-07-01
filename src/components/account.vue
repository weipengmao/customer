<template>
<div id="body">
    <div class="container">
      <div class="header">
        <span class="headerText">聊天</span>
        <img class="headerImg" src="../common/image/close.png" @click="toIndex">
      </div>

      <div class="center">
        <!--问题模拟 -->
        <div class="content" v-if="firstQues">
          <img src="../common/image/robot_profile.png" class="contentImg">
          <div class="contentBox">
            <p align="left">{{welcome}}
            </p>
          </div>
        </div>
        <!--历史问题 -->
        <div class="cpBefore" v-for="(key,item) in beforeTxt">
          <div class="contentRight" style="width:100%" v-if="beforeQuest" >
            <div class="rightContent" style="float:right">
              <p align="left">{{key}}
              </p>
            </div>
          </div>

          <div class="content" v-if="beforeflag" >
            <img src="../common/image/robot_profile.png" class="contentImg" >
            <div class="contentBox" style="width:80%;margin-right:0.22rem;" >
              <p align="left">猪肉作为餐桌上重要的动物性食品之一，因为纤维较为细软，结缔组织较少。
              </p>
              <hr style="width:93%;border:0.5px solid rgba(131,205,93,1);margin:0 auto;">
              <img :src="heart" alt="" style="float:left" >
              <p style="float:right;font-size:0.1rem;font-family:SourceHanSansCN-Normal;color:rgba(77,77,77,1);
            line-height:0.5rem;" >更多</p>
            </div>
          </div>

          <div class="content" style="width:100%" v-show="beforeTxt" ref="beforeItem">
            <img src="../common/image/robot_profile.png" class="contentImg" style="margin-left:0;">
            <div class="contentBox" style="width:70%;margin-right:0.9rem;">
              <div v-for="(item,key) in answer">
                <p align="left">{{item}}
                </p>
                <hr style="width:93%;border:0.5px solid rgba(131,205,93,1);margin:0 auto;">
              </div>
              <img src="../common/image/service_ears.png" alt="" style="float:left;margin-top:0.05rem;" @click="serviceDetail"><span
              style="font-size:0.1rem;font-family:SourceHanSansCN-Normal;color:rgba(77,77,77,1);
            float:left;line-height:1.10rem" >转人工客服</span>
              <p style="float:right;font-size:0.1rem;font-family:SourceHanSansCN-Normal;color:rgba(77,77,77,1);
            line-height:0.5rem;" >更多</p>
            </div>
            <div class="service">
              <hr style="width:28%;position:absolute;left:0.5rem;top:0.12rem;opacity:0.2">
              <hr style="width:28%;position:absolute;right:0.5rem;top:0.12rem;opacity:0.2">
              <p class="serviceText">历史消息</p>
            </div>
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

          <div class="content" v-if="answerTxt" ref="item" >
            <img src="../common/image/robot_profile.png" class="contentImg" >
            <div class="contentBox" style="width:80%;margin-right:0.22rem;" >
              <p align="left" :id="id" ref="testIndex">
              </p>
              <hr style="width:93%;border:0.5px solid rgba(131,205,93,1);margin:0 auto;">
              <img :src="heart" alt="" style="float:left" @click="changeStyle(item)" ref="changeSty">
              <p style="float:right;font-size:0.1rem;font-family:SourceHanSansCN-Normal;color:rgba(77,77,77,1);
            line-height:0.5rem;" @click="moreAnswer(item)" >更多</p>
            </div>
          </div>

          <div class="content" style="width:100%" v-show="flagTxt" ref="itemContent" :id = "item">
            <img src="../common/image/robot_profile.png" class="contentImg" style="margin-left:0;">
            <div class="contentBox" style="width:70%;margin-right:0.9rem;">
              <div v-for="(items,key) in randomAnswer[item]" :id="items" @click="info(items,key)">
                <p align="left" >{{items}}
                </p>
                <hr style="width:93%;border:0.5px solid rgba(131,205,93,1);margin:0 auto;">
              </div>
              <img src="../common/image/service_ears.png" alt="" style="float:left;margin-top:0.05rem;" @click="serviceDetail"><span
              style="font-size:0.1rem;font-family:SourceHanSansCN-Normal;color:rgba(77,77,77,1);
            float:left;line-height:1.10rem" @click="serviceDetail">转人工客服</span>
              <p style="float:right;font-size:0.1rem;font-family:SourceHanSansCN-Normal;color:rgba(77,77,77,1);
            line-height:0.5rem;" @click="addText(item)">更多</p>
            </div>
          </div>
        </div>
        <!--人工服务 -->
        <div class="contentService" v-if="service" v-for="(key,item) in firstQuestTxt">
          <div class="service">
            <hr style="width:28%;position:absolute;left:0.5rem;top:0.12rem;opacity:0.2">
            <hr style="width:28%;position:absolute;right:0.5rem;top:0.12rem;opacity:0.2">
            <p class="serviceText">已转到人工服务</p>
          </div>
          <div style="float:left">
            <img src="../common/image/service_profile.png" class="contentImgService">
            <div class="contentBoxService" style="width:80%;margin-right:0.22rem;">
              <p align="left">猪肉作为餐桌上重要的动物性食品之一，因为纤维较为细软，结缔组织较少。
              </p>
              <hr style="width:93%;border:0.5px solid rgba(131,205,93,1);margin:0 auto;">
              <img :src="heartBeat" alt="" style="float:left" @click="changeBeat(item-1)" ref="changeBeat">
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
            <div class="contentBox" style="width:80%;margin-right:0.22rem;" >
              <p align="left" ref="testIndexTwo">
              </p>
              <hr style="width:93%;border:0.5px solid rgba(131,205,93,1);margin:0 auto;">
              <img :src="heart" alt="" style="float:left" @click="changeStyle">
              <p style="float:right;font-size:0.1rem;font-family:SourceHanSansCN-Normal;color:rgba(77,77,77,1);
            line-height:0.5rem;" @click="moreAnswerTwo(item)" >更多</p>
            </div>
          </div>

          <div class="content" style="width:100%" v-show="flagTxt" ref="itemTwoContent">
            <img src="../common/image/robot_profile.png" class="contentImg" style="margin-left:0;">
            <div class="contentBox" style="width:70%;margin-right:0.9rem;">
              <div v-for="(items,key) in answer" @click="infoTwo(items,key)">
                <p align="left">{{items}}
                </p>
                <hr style="width:93%;border:0.5px solid rgba(131,205,93,1);margin:0 auto;">
              </div>
              <p style="float:right;font-size:0.1rem;font-family:SourceHanSansCN-Normal;color:rgba(77,77,77,1);
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
            <el-input class="input" clearable placeholder="请输入您的问题" v-model="questDetail" @change="search()"></el-input>
          </div>
        <div class="bottomRight" @click="setQuest"><p>发送</p></div>
      </div>
    </div>
</div>
</template>

<script>
  import {CustomerHttp} from '../common/js/http'
  import {distinct} from '../common/js/distinct'
export default {
  name: 'account',
  mounted() {
    var _that = this
    CustomerHttp.httpPost('/api/qx',{"corp_id":this.corp_id,"cmd":"corp.pars","ver":1}).then(
      function(val){
        _that.welcome = val.data.warm_tip
      },function(err){
        console.log(err)
      }
    )


//    for (var i = 0; i < 5; i++) {
//      this.answer.push(this.answerArr[i])
//    }
//    for (var i = 0; i < 5; i++) {
//      for(var j = 0;j<this.randomAnswer.length;j++)
//      this.randomAnswer[j].push(this.answerArr[i])
//    }
      this.beforeflag = true
      this.beforeQuest = true
  },
  data () {
    return {
      inputContent:true,
      text:[],
      searchText:'',
      key:true,
      keyText:true,

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
      randomAnswer:[[],[],[],[],[],[],[],[]],
      randomAnswerTwo:[[],[],[],[],[],[],[],[]],
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
      beforeTxt:['猪肉什么功效'],
      beforeflag:false,
      beforeQuest:false,
      num:[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
      welcome:'',
      robotAnswer:'',
      id:'',
      idNum:0,
      idNumTwo:0
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
      for(var i = 0;i<this.answerArr.length;i++){
        this.randomAnswer[a].push(this.answerArr[i])
      }
      this.$refs.item[a].style.display = 'block'
      this.$refs.itemContent[a].style.display = 'block'
    },
    moreAnswerTwo(a){
      for(var i = 0;i<this.answer.length;i++){
        this.randomAnswerTwo[a].push(this.answer[i])
      }
      this.$refs.itemTwo[a].style.display = 'block'
      this.$refs.itemTwoContent[a].style.display = 'block'
    },
    setQuest(){
      var _that = this
      var arr =[];
      this.text = ''
      if(this.service == false){
        this.firstQuestTxt.push(this.questDetail)
        this.firstQuest = true
        CustomerHttp.httpPost('/api/qx',{"corp_id":this.corp_id,"cmd":"robot.smart.answer","ask":this.questDetail,
          "size":20,"ver":1}).then(
          function(val){
            var reg = new RegExp(_that.questDetail,"i")
            for(var i = 0;i < val.data.rows.length;i++){
              arr.push(val.data.rows[i][0])
              _that.answerArr = arr
              if(reg.test(val.data.rows[i][0])){
//                _that.robotAnswer = val.data.rows[i][1].replace(/[a-zA-Z\<\>\&\;]+/,'')
                _that.robotAnswer = val.data.rows[i][1]
                _that.answerTxt = true
                _that.id = val.data.rows[i][5]
                //玫瑰花茶有什么功效
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
      }
      this.Time ++
      if(this.service == true){
        this.questTxt.push(this.questDetail)
        this.quest = true
        this.answerTxt = true

        CustomerHttp.httpPost('/api/qx',{"corp_id":this.corp_id,"cmd":"robot.smart.answer","ask":this.questDetail,
          "size":20,"ver":1}).then(
          function(val){
            var reg = new RegExp(_that.questDetail,"i")
            for(var i = 0;i < val.data.rows.length;i++){
              arr.push(val.data.rows[i][0])
              _that.answer = arr
              if(reg.test(val.data.rows[i][0])){
//                _that.robotAnswer = val.data.rows[i][1].replace(/[a-zA-Z\<\>\&\;]+/,'')
                _that.robotAnswer = val.data.rows[i][1]
                _that.answerTxt = true
                _that.id = val.data.rows[i][5]
                //玫瑰花茶有什么功效
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
      }
    },
    serviceDetail(){
      this.service = true
    },
    info(a,key){
      var _that = this
      this.firstQuestTxt.push(a)
      this.firstQuest = true
      CustomerHttp.httpPost('/api/qx',{"corp_id":this.corp_id,"cmd":"robot.smart.answer","ask":a,
        "size":20,"ver":1}).then(
        function(val){
          var reg = new RegExp(`\^${a}`,"i")
          if(val.data.rows){
            for(var i = 0;i < val.data.rows.length;i++){
              if(reg.test(val.data.rows[i][0])){
                console.log('ok')
                _that.robotAnswer = val.data.rows[i][1]
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
    infoTwo(a,key){
      var _that = this
      this.questTxt.push(a)
      this.quest = true
      CustomerHttp.httpPost('/api/qx',{"corp_id":this.corp_id,"cmd":"robot.smart.answer","ask":a,
        "size":20,"ver":1}).then(
        function(val){
          var reg = new RegExp(`\^${a}`,"i")
          if(val.data.rows){
            for(var i = 0;i < val.data.rows.length;i++){
              if(reg.test(val.data.rows[i][0])){
                _that.robotAnswer = val.data.rows[i][1]
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
      const that = this
      var arr =[]
      var newArr=[]

      CustomerHttp.httpPost('/api/qx',{"corp_id":this.corp_id,"cmd":"robot.smart.answer","ask":_that.questDetail,
        "size":20,"ver":1}).then(function (val) {

            if(_that.questDetail!=''){
              for(var j=0;j< val.data.rows.length;j++){
                arr.push(val.data.rows[j][0])
              }
              newArr = distinct(arr)
              for(var i = 0;i<newArr.length;i++){
                _that.text.push(newArr[i])
              }
            }else{
              _that.text = ''
            }
          }, function (val) {
            console.log(val)
          })
      },
    searchLi(a){
      this.questDetail = a
    },
    modelChange(){
      this.$refs.model.style.top = '-53%'
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
<style scoped lang="stylus">
.container
  height:100vh;
  width:100%;
  .center
    overflow-y:auto;
    height:80%;
  .header
    height:1.8rem;
    background:#4D4D4D;
    .headerText
      font-size:0.5rem;
      font-family:SourceHanSansCN-Bold;
      color:rgba(255,255,255,1);
      line-height:0px;
      float:left;
      display:inline-block;
      margin:0.99rem 0 0 0.4rem;
      font-weight:Bold;
    .headerImg
      float:right;
      width:1.1rem;
      height:1.7rem;
  .content
    float:left
  .contentBox
    background:rgba(145,237,97,1);
    border-radius:0px 9px 9px 9px;
    width:5rem;
    display:inline-block;
    margin-top:0.65rem;
    transition:all 0.3s;
    p
      font-size:0.1rem;
      font-family:SourceHanSansCN-Normal;
      color:rgba(77,77,77,1);
      line-height:20px;
      margin:0.3rem;
  .contentImg
    display:inline-block;
    width:1.2rem;
    margin:0.6rem 0 0 0.3rem;
    vertical-align:top;
  .contentRight
    float:right;
    margin:0.65rem 0.22rem 0 0;
    .rightContent
      width:4rem;
      background:rgba(233,233,233,1);
      border-radius:9px 0px 9px 9px;
      p
        display:inline-block;
        font-size:0.1rem;
        font-family:SourceHanSansCN-Normal;
        color:rgba(77,77,77,1);
        vertical-align:middle;
        padding:0.3rem;
  .service
    width:100%;
    position:relative
  .serviceText
    font-size:0.25rem;
    font-family:SourceHanSansCN-Normal;
    color:#cac1c1;
    margin-top:0.1rem;
    line-height:1.3rem;
  .contentService
    width:100%;
    float:left
  .contentBoxService
    background:rgba(145,237,97,1);
    border-radius:0px 9px 9px 9px;
    display:inline-block;
    margin-top:5px;
    p
      font-size:0.1rem;
      font-family:SourceHanSansCN-Normal;
      color:rgba(77,77,77,1);
      line-height:20px;
      margin:0.3rem;
  .contentImgService
    width:1.2rem;
    display:inline-block;
    margin:0 0 0.85rem 0.3rem;
    vertical-align:top;
  .bottom
    margin-top:0.2rem;
    position:relative;
    .bottomLeft
      left:0.45rem;
      top:0.2rem;
      position:absolute;
      width:1rem;
      height:1rem;
      background:rgba(26,173,25,1);
      border-radius:50%;
      p
        position:absolute;
        top:50%;
        left:50%;
        transform:translateX(-50%);
        font-size:0.2rem;
        width:10rem;
        font-family:SourceHanSansCN-Normal;
        color:rgba(255,255,255,1);
        line-height:0px;
    .bottomLeftTwo
      left:0.45rem;
      top:0.2rem;
      position:absolute;
      width:1rem;
      height:1rem;
      background:rgba(26,173,25,1);
      border-radius:50%;
      transition:all 0.5s;
      p
        position:absolute;
        top:50%;
        left:50%;
        transform:translateX(-50%);
        font-size:0.2rem;
        width:10rem;
        font-family:SourceHanSansCN-Normal;
        color:rgba(255,255,255,1);
        line-height:0px;
    .bottomRight
      position:absolute;
      right:0.3rem;
      top:0.2rem;
      width:1.3rem;
      height:1rem;
      background:rgba(26,173,25,1);
      border-radius:9px;
      p
        position:absolute;
        top:50%;
        left:50%;
        transform:translateX(-50%);
        font-size:0.2rem;
        font-family:SourceHanSansCN-Normal;
        color:rgba(255,255,255,1);
        line-height:0px;
    .input
      width:65%;
  .text
    position:absolute
    bottom:85%;
    left:50%;
    transform:translate(-50%);
    width: 65%;
    border:1px solid #c7c8cb;
    border-bottom:none;
    border-radius:10px 10px 0px 0px;
    background:white;
  .textLi
    font-size:0.1rem;
    line-height:0.6rem;
    border-bottom:1px solid #c7c8cb;
</style>
