<template>
<div id="swiper">
  <div style="position:absolute;right:0;z-index:2;" @click="toIndex"><img src="../common/image/close.png" alt="" class="closeImg">
  </div>
  <!-- 轮播图 -->
    <swiper  :options="swiperOption" ref="mySwiper">
      <swiper-slide><div class="fd_slide fd_slide1"><img src="../assets/img1.jpg" alt=""></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide2"><img src="../assets/img1.jpg" alt=""></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide3"><img src="../assets/img1.jpg" alt=""></div></swiper-slide>
      <div class="swiper-pagination "  slot="pagination"></div>
      <!-- <img class="shut" src="../assets/close.png" alt=""> -->
    </swiper>
    <div class="contentBoxAuto">
      <!-- 功能详情 -->
      <div class="box clearfix">
        <p class="title">猪肉的功效</p>
        <p class="inbox" @click="toggle()">
          <img v-show="hide" class="img1" src="../assets/dislike.png" alt="">
          <img v-show="show" class="img2" src="../assets/like.png" alt="">
        </p>
      </div>
      <!-- 文章 -->
      <div class="content clearfix">
        猪肉又名豚肉，是主要家畜之一、猪科动物家猪的肉。其性味甘咸平，含有丰富的蛋白质及脂肪、碳水化合物、钙、铁、磷等营养成分。<br>&nbsp&nbsp&nbsp&nbsp&nbsp猪肉是日常生活的主要副食品，具有补虚强身，滋阴润燥、丰肌泽肤的作用。凡病后体弱、产后血虚、面黄赢瘦者，皆可用之作营养滋补之品。
        猪肉作为餐桌上重要的动物性食品之一，因为纤维较为细软，结缔组织较少，肌肉组织中含有较多的肌间脂肪，因此，经过烹调加工后肉味特别鲜美。
      </div>
      <!-- 附件 -->
      <div class="bottom clearfix">
        <p class="clearfix"> <span>附件1：《猪肉的营养价值》</span>    <img src="../assets/arrow.jpg" alt=""></p>
        <p class="clearfix"> <span>附件2：《猪肉怎么吃最健康？》</span>    <img src="../assets/arrow.jpg" alt=""></p>
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
      var parent=document.querySelector('.bottom');
      var ps=parent.querySelectorAll('p');
      for(var i=1;i<ps.length;i++){
//          ps[ps.length].style.borderBottom=none;
//        此处报错，记得处理
      }
  },
  data () {
    return {
        hide:true,
        show:false,
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

    }
  },
      components:{
      swiper,
      swiperSlide
    },
  methods:{
    toIndex(){
      this.$router.go(-1)
    },
    toggle:function(){
        if(this.hide===true){

            this.hide=false;
            this.show=true;


        }else{

            this.show=false;
            this.hide=true;


        }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    margin:0;padding:0;box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
}
a{
  color:#000;
}

.contentBoxAuto{
  height:13rem;
  overflow-y: auto;
}

#swiper{
  height: 100vh;
  position:relative;
  width:100%;
  overflow-y: hidden;
}

  .fd_slide{    height: 30vh;
    width: 100%;
    }


  .fd_slide img{
    width:100%;height:30vh;
  }

.swiper-pagination{
  position:absolute;bottom:0.5rem;
}



.box{
    width:100%;height:1.5rem;
    line-height: 1.5rem;
    padding:0.3rem 0.5rem;
    padding-bottom:0;
    padding-right:0;
}
.box .title{
    width:7.5rem;height:1.5rem;
    line-height: 1.5rem;
    font-size:0.7rem;
    float:left;
    text-align: left;
    font-weight: bold;
    color:black;
}
.box .inbox{
    width:1.5rem;height:1.5rem;
    line-height:1.5rem;
    float:right;
}
.box .inbox .img1,.box .inbox .img2{
    width:1.5rem;
    transition:all 0.5s;
    float:right;
}

.content{
    width:100%;font-size:0.45rem ;
    text-align: justify;
    padding:0 0.4rem;
    letter-spacing: 0.03rem;
    line-height: 0.8rem;
    text-indent: 2em;
}


.bottom{
    width:9rem;margin:0 auto;
    border-radius: 5%;
    background:#F2F2F2;
    padding-left:0.5rem;
    padding-right:0.5rem;
    margin-top:0.4rem;
    margin-bottom: 1rem;
}
.bottom p{
    width:100%;
    height:1.5rem;
    line-height:1.5rem;
    font-size:0.4rem;
    border-bottom:1px solid #EBEBEB;
}
.bottom p span{
    float:left;
}
.bottom p img{
    width:0.5rem;
    height:0.6rem;
    margin-top:0.5rem;
    float:right;
}

</style>
