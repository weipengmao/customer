<template>
<div id="body">
    <header>
            <!-- 进入首页，文字淡入 -->
    <div class="top">
          <p class="word" v-for="word in words" v-show="hideWords">{{word}}</p>

          <router-link to="/account">
                    <div class="toAccount"></div>
          </router-link>

    </div>

    <!--导航栏 -->
    <div class="nav">
      <div class="box">
        <router-link to='/swiper'>
            <p class="button" v-for="item in items">
                    {{item}}  
            </p>
        </router-link>

      </div>

      
    </div>

  <!-- 底部上划 -->
  <div class="bottom">
      <img src="../assets/pullup.png" alt="">
  </div>
    </header>

</div>
</template>

<script>
export default {
  name: 'index',
  mounted(){
    var words=document.querySelectorAll('.word');
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
  data(){
    return{
    words:['我是机器人康康，','来自健康世界，','很高兴在这里遇见您，','希望能成为您的朋友，','愿健康成为您一生的伴侣。'],
    items:['本草纲目','食物营养','健康知识','本草纲目','食物营养','健康知识'],
    hideWords:true,
    num:0,
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
  width:10rem;
  }
  .nav .box{
    width:100%;margin:0 auto;margin-left:0.5rem;
  }
.button{
  width:2.22rem;height:1rem;text-align: center;line-height: 1rem;color:white;
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
  width:100%;height:1rem;position:fixed;bottom:0;
}
.bottom img{
  width:9.5rem;height:1rem;
}
</style>
