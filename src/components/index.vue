<template>
<div id="body">
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
      <div class="box">
        <router-link to='/swiper'>
            <p class="button" v-for="(item,key) in items" v-if="(key+1)<=6">
              {{item}}
            </p>
            <p class="button" v-for="(item,key) in items" v-if="(key+1)>6 && hide == false">
              {{item}}
            </p>
        </router-link>

      </div>


    </div>

  <!-- 底部上划 -->
  <div class="bottom" v-show="bottomTxt">
      <img src="../assets/pullup.png" alt="">
  </div>

</div>
</template>

<script>
  import {CustomerHttp} from '../common/js/http'
export default {
  name: 'index',
  mounted(){
    CustomerHttp.httpPost('/api/qx',{"url":"qx","cmd":"faq.q","page_cnt":10,"ver":1})
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
      } else {
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
    ,1000)
  },
  methods:{
  },
  data(){
    return{
      words:['我是机器人康康，','来自健康世界，','很高兴在这里遇见您，','希望能成为您的朋友，','愿健康成为您一生的伴侣。'],
      //随机配置
      randomWord:[['1我是机器人康康，','来自健康世界，','很高兴在这里遇见您，','希望能成为您的朋友，','愿健康成为您一生的伴侣。'],
        ['2我是机器人康康，','来自健康世界，','很高兴在这里遇见您，','希望能成为您的朋友，','愿健康成为您一生的伴侣。'],
        ['3我是机器人康康，','来自健康世界，','很高兴在这里遇见您，','希望能成为您的朋友，','愿健康成为您一生的伴侣。'],
        ['4我是机器人康康，','来自健康世界，','很高兴在这里遇见您，','希望能成为您的朋友，','愿健康成为您一生的伴侣。'],
        ['5我是机器人康康，','来自健康世界，','很高兴在这里遇见您，','希望能成为您的朋友，','愿健康成为您一生的伴侣。'],
        ['6我是机器人康康，','来自健康世界，','很高兴在这里遇见您，','希望能成为您的朋友，','愿健康成为您一生的伴侣。'],
        ['7我是机器人康康，','来自健康世界，','很高兴在这里遇见您，','希望能成为您的朋友，','愿健康成为您一生的伴侣。'],
        ['8我是机器人康康，','来自健康世界，','很高兴在这里遇见您，','希望能成为您的朋友，','愿健康成为您一生的伴侣。'],
        ['9我是机器人康康，','来自健康世界，','很高兴在这里遇见您，','希望能成为您的朋友，','愿健康成为您一生的伴侣。'],
        ['10我是机器人康康，','来自健康世界，','很高兴在这里遇见您，','希望能成为您的朋友，','愿健康成为您一生的伴侣。']
      ],
      items:['本草纲目','食物营养','健康知识','本草纲目','食物营养','健康知识',
        '本草纲目','食物营养','健康知识','本草纲目','食物营养','健康知识'],
      hideWords:true,
      num:0,
      flag: false,
      hide: true,
      bottomTxt:true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#body{
  width:100%;
  height:100vh;
  box-sizing: border-box;
  background:url(../assets/bgimg.png) center center no-repeat;
  background-size:100% 100vh;
  position:relative;
}
.pop{
  position:fixed;
  height:100%;
  width:100%;
  background: black;
  opacity:0.4;
}
.top{
  width:9rem;height:9rem;
  margin:0 auto;margin-bottom:0;
  padding-top:2rem;
  background:url(../assets/timg.png) center no-repeat;
  background-size:100%;
  position:relative;
}
.top .word{
  font-size:0.5rem;color:white;padding:0.25rem 0;
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
  width:2.255rem;height:1rem;text-align: center;line-height: 1rem;color:white;
  font-size:0.42rem;border:2px solid #fff;
  display:inline-block;float:left;margin:0.1rem 0;
  margin-right:0.21rem;
  margin-top:0.15rem;
  border-radius: 10%;
  padding:0.45rem 0.25rem;font-weight: bold;
  letter-spacing: 0.035rem;
  background: url('../assets/button.png') center no-repeat;
}


.bottom{
  transition:all 0.5s;
  width:100%;height:1rem;position:fixed;bottom:0;
}
.bottom img{
  width:9.5rem;height:1rem;
}
</style>
