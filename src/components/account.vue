<template>
<div id="body">
    <div class="container">
      <div class="header">
        <span class="headerText">聊天</span>
        <img class="headerImg" src="../common/image/close.png" @click="toIndex">
      </div>

      <div class="center">
        <div class="content">
          <img src="../common/image/robot_profile.png" class="contentImg">
          <div class="contentBox">
            <p align="left">您可以这样向我咨询问题，如：<br>1、猪肉有什么功效?<br>2、花生有什么营养?
            </p>
          </div>
        </div>

        <div class="contentRight">
          <div class="rightContent">
            <p align="left">猪肉有什么功效?
            </p>
          </div>
        </div>

        <div class="content" >
          <img src="../common/image/robot_profile.png" class="contentImg" >
          <div class="contentBox" style="width:80%;margin-right:0.22rem;" >
            <p align="left">猪肉作为餐桌上重要的动物性食品之一，因为纤维较为细软，结缔组织较少。
            </p>
            <hr style="width:93%;border:0.5px solid rgba(131,205,93,1);margin:0 auto;">
            <img :src="heart" alt="" style="float:left" @click="changeStyle">
            <p style="float:right;font-size:0.1rem;font-family:SourceHanSansCN-Normal;color:rgba(77,77,77,1);
            line-height:0.5rem;">更多</p>
          </div>
        </div>

        <div class="content" style="width:100%">
          <img src="../common/image/robot_profile.png" class="contentImg" style="margin-left:0;">
          <div class="contentBox" style="width:70%;margin-right:0.9rem;">
            <div>
              <p align="left">1.猪肉营养价值在哪里?
              </p>
              <hr style="width:93%;border:0.5px solid rgba(131,205,93,1);margin:0 auto;">
            </div>
            <p align="left">2.猪肉怎样吃最健康？
            </p>
            <hr style="width:93%;border:0.5px solid rgba(131,205,93,1);margin:0 auto;">
            <p align="left">3.猪肉对我们的身体会产生害处吗？
            </p>
            <hr style="width:93%;border:0.5px solid rgba(131,205,93,1);margin:0 auto;">
            <img src="../common/image/service_ears.png" alt="" style="float:left;margin-top:0.05rem;" @click="changeStyle"><span
          style="font-size:0.1rem;font-family:SourceHanSansCN-Normal;color:rgba(77,77,77,1);
            float:left;line-height:1.10rem">转人工客服</span>
            <p style="float:right;font-size:0.1rem;font-family:SourceHanSansCN-Normal;color:rgba(77,77,77,1);
            line-height:0.5rem;">更多</p>
          </div>
        </div>

        <div class="contentService">
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
              <img :src="heart" alt="" style="float:left" @click="changeStyle">
            </div>
          </div>
        </div>
      </div>

      <div class="bottom">
        <div class="bottomLeft"><p>{{text}}</p></div>
        <el-input class="input" clearable placeholder="请输入您的问题"></el-input>
        <div class="bottomRight"><p>发送</p></div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'account',
  data () {
    return {
      text:'检索',
      heart:require('../common/image/heart_before.png'),
      flag:true
    }
  },
  methods:{
    toIndex(){
      this.$router.go(-1)
    },
    changeStyle(){
      if(this.flag){
        this.heart = require('../common/image/heart_after.png')
        this.flag = false
      }else{
        this.heart = require('../common/image/heart_before.png')
        this.flag = true
      }
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
