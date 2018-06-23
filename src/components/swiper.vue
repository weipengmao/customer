<template>
<div id="swiper">
  <!-- 轮播图 -->
    <swiper  :options="swiperOption" ref="mySwiper">
      <swiper-slide><div class="fd_slide fd_slide1"><img src="../assets/img1.jpg" alt=""></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide2"><img src="../assets/img1.jpg" alt=""></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide3"><img src="../assets/img1.jpg" alt=""></div></swiper-slide>
      <div class="swiper-pagination "  slot="pagination"></div>
      <!-- <img class="shut" src="../assets/close.png" alt=""> -->
    </swiper>
  <!-- 左边导航栏及右边的功能简介 -->
<div class="middle clearfix">
    <ul id="nav" >
        <li v-for="item in items">{{item}}</li>
    </ul>
    <div class="brief">

    </div>
</div>
</div>
</template>

<script>

  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {

  name: 'account',
  mounted(){
      var nav=document.querySelector('#nav');
      var lis=nav.querySelectorAll('li');
      lis[0].className='active';
      var num=0;
      for(let i=0;i<lis.length;i++){
        this.num=lis[i];
        lis[i].ontouchend=function(){
            for(let j=0;j<lis.length;j++){

            }
        }
      }
  },
  data () {
    return {
        swiperOption: {
          initialSlide:0,//设定初始化时slide的索引
          direction:'horizontal',//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
          loop: false,  //无限滚动
          speed:300,//滑动速度
          autoplay:true,
          pagination: {
            el: '.swiper-pagination',
            clickable :true
          },
          autoplay: {
            disableOnInteraction: false,
          }
        },
        swiperSlides: [1, 2, 3, 4],
        items:['人部','草部','木部']
    }
  },
      components:{
      swiper,
      swiperSlide
    },
  methods:{
    

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    margin:0;padding:0;box-sizing: border-box;
    list-style-type: none;
}
#swiper{ height: 30vh;
  width:100%;}

  .fd_slide{    height: 30vh;
    width: 100%;
    background: red;}


  .fd_slide1{    background: yellow;}
  .fd_slide img{
    width:100%;height:200px;
  }

  .fd_slide2{  background: red;}
  

  .fd_slide3{
    background: yellowgreen;
  }


  .fd_slide4{
    background: orange;
  }


.midddle{
  width:100%;box-sizing: border-box;
}
.middle #nav{
  display:inline-block;
  width:30%;float:left;
  background:#F4F4F4;
  height:70vh;
}
.middle #nav li{
  width:100%;height:1.3rem;font-size:0.5rem;
  line-height: 1.3rem;
  float:left;
}
.middle .brief{
  width:70%;
  height:70vh;
  float:left;
  /* background:black; */
}

.active{
  background:#fff;
  font-weight: bold;
}
</style>