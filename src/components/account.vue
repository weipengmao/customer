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
            <p align="left">您可以这样向我咨询问题，如：<br>1、猪肉有什么功效?<br>2、花生有什么营养?
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
        <div class="cpOne" v-for="(key,item) in firstQuestTxt">
          <div class="contentRight" style="width:100%" v-if="firstQuest" >
            <div class="rightContent" style="float:right">
              <p align="left">{{key}}
              </p>
            </div>
          </div>

          <div class="content" v-if="answerTxt" ref="item" >
            <img src="../common/image/robot_profile.png" class="contentImg" >
            <div class="contentBox" style="width:80%;margin-right:0.22rem;" >
              <p align="left">猪肉作为餐桌上重要的动物性食品之一，因为纤维较为细软，结缔组织较少。
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
              <div v-for="(item,key) in randomAnswer[item]">
                <p align="left">{{item}}
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
              <p align="left">猪肉作为餐桌上重要的动物性食品之一，因为纤维较为细软，结缔组织较少。
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
              <div v-for="(item,key) in answer">
                <p align="left">{{item}}
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
      </div>



      <div class="bottom">
        <div class="bottomLeft"><p>{{text}}</p></div>
        <el-input class="input" clearable placeholder="请输入您的问题" v-model="questDetail"></el-input>
        <div class="bottomRight" @click="setQuest"><p>发送</p></div>
      </div>
    </div>
</div>
</template>

<script>
  import {CustomerHttp} from '../common/js/http'
export default {
  name: 'account',
  mounted() {
    for (var i = 0; i < 5; i++) {
      this.answer.push(this.answerArr[i])
    }
    for (var i = 0; i < 5; i++) {
      for(var j = 0;j<this.randomAnswer.length;j++)
      this.randomAnswer[j].push(this.answerArr[i])
    }
      this.beforeflag = true
      this.beforeQuest = true
  },
  data () {
    return {
      text: '检索',
      heart: require('../common/image/heart_before.png'),
      heartBeat: require('../common/image/heart_before.png'),
      flag: true,
      flagBeat:true,
      answerArr: ['1.猪肉营养价值在哪里?', '2.猪肉怎么吃最健康', '3.猪肉对我们有什么害处',
        '4.猪肉营养价值在哪里?', '5.猪肉怎么吃最健康', '6.猪肉营养价值在哪里?', '7.猪肉怎么吃最健康',
        '8.猪肉营养价值在哪里?', '9.猪肉怎么吃最健康', '10.猪肉怎么吃最健康', '11.猪肉怎么吃最健康',
        '12.猪肉怎么吃最健康',
        '13.猪肉营养价值在哪里?', '14.猪肉怎么吃最健康'],
      addItem: false,
      answer:[],
      randomAnswer:[[],[],[],[],[],[],[],[]],
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
      num:[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
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
      this.$refs.item[a].style.display = 'block'
      this.$refs.itemContent[a].style.display = 'block'
    },
    moreAnswerTwo(a){
      this.$refs.itemTwo[a].style.display = 'block'
      this.$refs.itemTwoContent[a].style.display = 'block'
    },
    setQuest(){
      if(this.service == false){
        this.firstQuestTxt.push(this.questDetail)
        this.firstQuest = true
        this.answerTxt = true
      }
      this.Time ++
      if(this.service == true){
        this.questTxt.push(this.questDetail)
        this.quest = true
        this.answerTxt = true
      }
    },
    serviceDetail(){
      this.service = true
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
</style>
