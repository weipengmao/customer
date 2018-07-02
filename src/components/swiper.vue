<template>
<div id="swiper">
  <div style="position:absolute;right:0;z-index:2;" @click="toIndex"><img src="../common/image/close.png" alt="" >
  </div>
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
        <li v-for="item in items" :id="item[0]">{{item[1]}}</li>
    </ul>
    <div class="brief clearfix">
      <router-link to='/detail'>
        <div v-for="key in Index" :id="key">
          <div class="box clearfix info" v-for="key in titleIndex" :id="key[0]">
            <img src="../assets/pork.jpg" alt="">
            <div class='inbox clearfix'>
              <p class="title">{{key[2]}}</p>
              <p class="content">猪肉又名豚肉，是主要家畜之一、猪科动物家猪的肉。其性味甘咸平，含有丰富的营养</p>
            </div>
          </div>
        </div>
      </router-link>

    </div>
</div>
</div>
</template>

<script>
  import {CustomerHttp} from '../common/js/http'
  import {distinct} from '../common/js/distinct'
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {

  name: 'account',
  mounted(){
    var that = this

    CustomerHttp.httpPost('/api/qx',{"url":"qx","cmd":"kind.q","pid":"","ver":1}).then(
      function(val){
        const Data = val.data.rows
        if(that.$route.query.id == '营养汤'){
          for(var i =2 ;i<7;i++){
            that.items.push(Data[i])
          }
        }else if(that.$route.query.id == '食物营养成份'){
          for(var i =8 ;i<29;i++){
            that.items.push(Data[i])
          }
        }else if(that.$route.query.id == '本草纲目'){
          for(var i =28 ;i<45;i++){
            that.items.push(Data[i])
          }
        }else if(that.$route.query.id == '现代百科'){
            that.items.push(Data[46])
        }
        setTimeout(()=>{
          that._req()
        },10)
      },function(err){
        console.log(err)
      }
    )
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
        items:[],
        titleIndex:[],
        Index:[]
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
    _req(){
      var that = this
      var nav=document.querySelector('#nav');
      var lis=nav.querySelectorAll('li');
      var lisId = lis[0].id;
      var arrOne = [];
      lis[0].classList.add('active');
      var num=0;
      for(let i=0;i<lis.length;i++){
        this.num=lis[i];
        lis[i].ontouchend=function(){
          if(!this.classList.contains('active')){
            for(let j=0;j<lis.length;j++){
              lis[j].classList.remove('active');
              this.classList.add('active');
            }

            var id = lis[i].id
            var arr = [];
            CustomerHttp.httpPost('/api/qx',{"kind_id":id,"cmd":"faq.q","ver":1,"page_cnt":"20",
              "page_num":0,"url":"qx"}).then(function(val){
              for(var z=0;z<val.data.rows.length;z++){
                arr.push(val.data.rows[z])
              }
              // if(val.data.rows.length>0){
              //   arrOne.push(val.data.rows[0][1])
              //   that.Index = distinct(arrOne)
              // }
              // that.titleIndex = distinct(arr)
            },function(err){console.log(err)})
          }else{
          }
        }
      }
      if(num == 0){
        CustomerHttp.httpPost('/api/qx',{"kind_id":lisId,"cmd":"faq.q","ver":1,"page_cnt":"20",
          "page_num":0,"url":"qx"}).then(
          function(val){
            if(val.data.rows.length>0){
              arrOne.push(val.data.rows[0][1])
              that.Index = distinct(arrOne)
              for(var h =0;h<val.data.rows.length;h++){
                that.titleIndex.push(val.data.rows[h])
              }
            }
          },function(err){console.log(err)}
        )
        num++
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

#swiper{ height: 30vh;position:relative;
  width:100%;}

  .fd_slide{    height: 30vh;
    width: 100%;
    }


  .fd_slide img{
    width:100%;height:30vh;
  }

.swiper-pagination{
  position:absolute;bottom:0.5rem;
}

.midddle{
  width:100%;box-sizing: border-box;
}
.middle{
  overflow-y:auto;
}
.middle #nav{
  display:inline-block;
  width:22%;float:left;
  background:#F4F4F4;
  height:70vh;
  overflow-y:auto;
}
.middle #nav li{
  width:100%;font-size:0.4rem;
  background:#F4F4F4;
  line-height: 1rem;
  float:left;
  overflow:hidden;
  text-overflow:ellipsis;
  -o-text-overflow:ellipsis;
  -webkit-text-overflow:ellipsis;
  -moz-text-overflow:ellipsis;
    padding:0.2rem;
}
.middle .brief{
  width:78%;
  height:70vh;
  overflow-y:auto;
}

.middle .brief .box{
  width:100%;padding:0.2rem;
  padding-right:0;
}
.middle .brief .box img{
  width:2.5rem;
  float:left;
}
.middle .brief .box .inbox{
  width:4.5rem;font-size: 0.45rem;float:left;
  margin-left:0.2rem;
  letter-spacing: 0;
}

.inbox .title{
  width:100%;line-height: 0.7rem;
  text-align: left;
  font-weight: bold;
  font-size:0.45rem !important;
}
.inbox .content{
  width:100%;
                  word-break: break-all;
                    text-overflow: ellipsis;
                    display: -webkit-box; /** 将对象作为伸缩盒子模型显示 **/
                    -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
                    -webkit-line-clamp: 3; /** 显示的行数 **/
                    overflow: hidden;  /** 隐藏超出的内容 **/
}
.active{
  background:#fff !important;
    line-height: 0.8rem!important;
  font-weight: bold;
  font-size: 0.44rem !important;
  padding:0.2rem;
}
</style>
