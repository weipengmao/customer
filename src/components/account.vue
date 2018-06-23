<template>
<div id="body">
    <div class="container">
      <div class="header">
        <span class="headerText">聊天</span>
        <img class="headerImg" src="../common/image/close.png">
      </div>
      <div class="center">
        <div class="content">
          <img src="../common/image/robot_profile.png" class="contentImg">
          <div class="contentBox"></div>
        </div>
        <div class="contentRight">
          <div class="rightContent"></div>
        </div>
        <div class="content">
          <img src="../common/image/robot_profile.png" class="contentImg">
          <div class="contentBox"></div>
        </div>
        <div class="content">
          <img src="../common/image/robot_profile.png" class="contentImg">
          <div class="contentBox"></div>
        </div>
        <div class="contentService">
          <div class="service">
            <hr style="width:28%;position:absolute;left:0.5rem;top:0.12rem;">
            <hr style="width:28%;position:absolute;right:0.5rem;top:0.12rem;">
            <p class="serviceText">已转到人工服务</p>
          </div>
          <div style="float:left">
            <img src="../common/image/service_profile.png" class="contentImgService">
            <div class="contentBoxService"></div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottomLeft"></div>
        <el-input class="input" clearable placeholder="请输入您的问题"></el-input>
        <div class="bottomRight"></div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'account',
  data () {
    return {


    }
  },
  methods:{


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
      height:1.5rem;
      margin:0.1rem 0 0 0rem;
  .content
    float:left
  .contentBox
    background:rgba(145,237,97,1);
    border-radius:0px 9px 9px 9px;
    width:5rem;
    height:2rem;
    display:inline-block;
    margin-top:0.65rem
  .contentImg
    display:inline-block;
    width:1.2rem;
    margin:0 0 0.85rem 0.3rem;
  .contentRight
    float:right;
    margin:0.65rem 0.3rem 0 0;
    .rightContent
      width:4rem;
      height:1.5rem;
      background:rgba(233,233,233,1);
      border-radius:9px 0px 9px 9px;
  .service
    width:100%;
    position:relative
  .serviceText
    font-size:0.25rem;
    font-family:SourceHanSansCN-Normal;
    color:#cac1c1;
    line-height:1.3rem;
  .contentService
    width:100%;
    float:left
  .contentBoxService
    background:rgba(145,237,97,1);
    border-radius:0px 9px 9px 9px;
    width:5rem;
    height:2rem;
    display:inline-block;
    margin-top:5px;
  .contentImgService
    width:1.2rem;
    display:inline-block;
    margin:0 0 0.85rem 0.3rem;
  .bottom
    margin-top:0.3rem;
    position:relative;
    .bottomLeft
      left:0.45rem;
      top:0.2rem;
      position:absolute;
      width:1rem;
      height:1rem;
      background:rgba(26,173,25,1);
      border-radius:50%;
    .bottomRight
      position:absolute;
      right:0.3rem;
      top:0.2rem;
      width:1.3rem;
      height:1rem;
      background:rgba(26,173,25,1);
      border-radius:9px;
    .input
      width:65%;
</style>
