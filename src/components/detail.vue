<template>
<div id="swiper">
  <div style="position:absolute;right:0;z-index:2;" @click="toIndex"><img src="../common/image/close.png" alt="" class="closeImg">
  </div>
  <!-- 轮播图 -->
    <swiper  :options="swiperOption" ref="mySwiper">
      <swiper-slide><div class="fd_slide fd_slide1"><img src="../common/image/swiper1.jpg" alt=""></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide2"><img src="../common/image/swiper2.jpg" alt=""></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide3"><img src="../common/image/swiper3.jpg" alt=""></div></swiper-slide>
      <div class="swiper-pagination "  slot="pagination"></div>
      <!-- <img class="shut" src="../assets/close.png" alt=""> -->
    </swiper>
    
    <div class="clearfix">
    <div class="contentBoxAuto clearfix">
      <!-- 功能详情 -->
      <div class="box clearfix">
        <p class="title clearfix">{{title}}</p>
        <p class="inbox clearfix" @click="toggle()">
          <img v-show="hide" class="img1" src="../assets/dislike.png" alt="">
          <img v-show="show" class="img2" src="../assets/like.png" alt="">
        </p>
      </div>
      <!-- 文章 -->
      <div class="content clearfix" id="box" >
          {{answer}}
      </div>
      <!-- 附件 -->
      <div class="bottom clearfix">
        <p class="clearfix"> <span>附件1：《猪肉的营养价值》</span>    <img src="../assets/arrow.jpg" alt=""></p>
        <p class="clearfix"> <span>附件2：《猪肉怎么吃最健康？》</span>    <img src="../assets/arrow.jpg" alt=""></p>
      </div>
    </div>
    </div>

</div>
</template>

<script>
  import {CustomerHttp} from '../common/js/http'
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {

  mounted(){
    // 附件接口
    //   CustomerHttp.httpPost('/api/qx',{
    //   "cmd":"faqspc.r","faq_id":id,"ver":1}).then(
    //   function(res){
    //     var content=res.data.ans
    //     that.answer=content;
    //   }
    // )

    var that=this
    // 渲染标题和传入id
    this.title=this.$route.query.title
    var id=this.$route.query.id
    localStorage.setItem('content',id)
    that.answer=localStorage.getItem('content');
    var text=that.answer

function decode(text){
      return text.replace(/<[^>]+>/g,"");
}
    that.answer=decode(text)
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
        // 标题
        title:'',
        answer:'',
        id:''

    }
  },
      components:{
      swiper,
      swiperSlide
    },
  methods:{
    toIndex(){
      // console.log('ok')
      this.$router.go(-1)
    },
    // 收藏功能接口
    like(val){
        var  id=this.$route.query.id
                    CustomerHttp.httpPost('/api/qx',{
        // "url":"qx",
        "cmd":"qas.support.w","id":id,"ver":1,tye:val}).then(
        function(res){
          console.log(res)
        }
      )
    },
    toggle:function(){
        if(this.hide===true){

            this.hide=false;
            this.show=true;
          this.like(2)

        }else{

            this.show=false;
            this.hide=true;
        this.like(1)

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

.clearfix:after{
  content:'';clear:both;display:block;
}
.contentBoxAuto{
  width:100%;

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


.clearfix:after{
  content:'';clear:both;display:block;
}
.box{
    width:100%;
    line-height: 1.5rem;
    padding:0.3rem 0.5rem;
    padding-bottom:0;
    padding-right:0;
}
.box .title{
    width:7.5rem;
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
