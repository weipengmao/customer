<template>
<div id="swiper">
  <div style="position:absolute;right:0;z-index:2;" @click="toIndex"><img src="../common/image/close.png" alt="" >
  </div>
  <!-- 轮播图 -->
    <swiper  :options="swiperOption" ref="mySwiper">
      <swiper-slide><div class="fd_slide fd_slide1"><img src="../common/image/swiper.jpg" alt=""></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide2"><img src="../common/image/swiper.jpg" alt=""></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide3"><img src="../common/image/swiper.jpg" alt=""></div></swiper-slide>
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
        <div  :id="Index" name="text">
          <div class="box clearfix info" v-for="(item,key) in titleIndex" :id="textPlace[key]+':'+item">
            <img v-lazy="key.url" alt="">
            <div class='inbox clearfix'>
              <p class="title">{{item}}</p>
              <p class="content">{{textData[key]}}</p>
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
    var arrOne =[]
    var arrTwo
    CustomerHttp.httpPost('/api/qx',{"url":"qx","cmd":"kind.q","pid":"","ver":1}).then(
      function(val){
        var Data = val.data.rows
        if(that.$route.query.id == '营养汤'){
          for(var i =2 ;i<7;i++) {
            that.items.push(Data[i])
            CustomerHttp.httpPost('/api/qx', {
              "kind_id": Data[i][0], "cmd": "faq.q", "ver": 1, "page_cnt": "20",
              "page_num": 0, "url": "qx"
            }).then(function (val) {
              var placeData = []
              for (var z = 0; z < val.data.rows.length; z++) {
                var text = val.data.rows[z][0]
                CustomerHttp.httpPost('/api/qx',{"cmd":"faqspc.r","ver":1,"faq_id":text}).then(function(val){
                  that.textData.push(val.data.ans)
                })

                var placeName = val.data.rows[z][1]
                placeData.push(val.data.rows[z][2])
                arrOne.push(placeName)
                if(placeName){
                  localStorage.setItem(placeName,placeData)
                }
                  that.Index = distinct(arrOne)
              }
            })
          }
        }else if(that.$route.query.id == '食物营养成份'){
          console.log('ok')
          for(var i =8 ;i<29;i++){
            that.items.push(Data[i])
            CustomerHttp.httpPost('/api/qx', {
              "kind_id": Data[i][0], "cmd": "faq.q", "ver": 1, "page_cnt": "20",
              "page_num": 0, "url": "qx"
            }).then(function (val) {
              var placeData = []
              for (var z = 0; z < val.data.rows.length; z++) {
                //获取图片
                var text = val.data.rows[z][0]
                that.textPlace.push(text)
                CustomerHttp.httpPost('/api/qx',{"cmd":"faqspc.r","ver":1,"faq_id":text}).then(function(val){
                  that.textData.push(val.data.ans)
                })


                var placeName = val.data.rows[z][1]
                placeData.push(val.data.rows[z][2])
                arrOne.push(placeName)
                if(placeName){
                  localStorage.setItem(placeName,placeData)
                }
                that.Index = distinct(arrOne)
              }
            })
          }

        }else if(that.$route.query.id == '本草纲目'){
          for(var i =28 ;i<45;i++){
            that.items.push(Data[i])
            CustomerHttp.httpPost('/api/qx', {
              "kind_id": Data[i][0], "cmd": "faq.q", "ver": 1, "page_cnt": "20",
              "page_num": 0, "url": "qx"
            }).then(function (val) {
              var placeData = []
              for (var z = 0; z < val.data.rows.length; z++) {
                var text = val.data.rows[z][0]
                CustomerHttp.httpPost('/api/qx',{"cmd":"faqspc.r","ver":1,"faq_id":text}).then(function(val){
                  that.textData.push(val.data.ans)
                })
                var placeName = val.data.rows[z][1]
                placeData.push(val.data.rows[z][2])
                arrOne.push(placeName)
                if(placeName){
                  localStorage.setItem(placeName,placeData)
                }
                that.Index = distinct(arrOne)
              }
            })
          }
        }else if(that.$route.query.id == '现代百科'){
            that.items.push(Data[46])
            CustomerHttp.httpPost('/api/qx', {
              "kind_id": Data[46][0], "cmd": "faq.q", "ver": 1, "page_cnt": "20",
              "page_num": 0, "url": "qx"
            }).then(function (val) {
              var placeData = []
              for (var z = 0; z < val.data.rows.length; z++) {
                var text = val.data.rows[z][0]
                CustomerHttp.httpPost('/api/qx',{"cmd":"faqspc.r","ver":1,"faq_id":text}).then(function(val){
                  that.textData.push(val.data.ans)
                })
                var placeName = val.data.rows[z][1]
                placeData.push(val.data.rows[z][2])
                arrOne.push(placeName)
                if(placeName){
                  localStorage.setItem(placeName,placeData)
                }
                that.Index = distinct(arrOne)
              }
            })
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
        Index:[],
        textData:[],
        textIndex:[],
        textPlace:[]
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
      var arr =[]
      var nav=document.querySelector('#nav');
      var lis=nav.querySelectorAll('li');
      var lisId = lis[0].id;
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
//            arr.push(this.id)
            that.Index = this.id
            var f = document.querySelector('[name=text]');
//            对有无数据进行判断，此处可以做交互
            if(!(localStorage.getItem(this.id))){
              //移除所有节点
              f.style.display = 'none'
            }else{
              that.titleIndex = localStorage.getItem(this.id).split(',')
              f.style.display = 'block'
            }
          }else{
          }
        }
      }

        if(num == 0 &&(localStorage.getItem(lis[0].id))){
        that.titleIndex = localStorage.getItem(lis[0].id).split(',')
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

  .fd_slide{    height: 40vh;
    width: 100%;
    }


  .fd_slide img{
    width:100%;
    height:40vh;
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
  height:60vh;
  overflow-y:auto;
}
.middle #nav li{
  width:100%;font-size:0.43rem;
  padding:0.25rem 0.1rem;
  background:#F4F4F4;
  line-height: 0.6rem;
  float:left;
  overflow:hidden;
  text-overflow:ellipsis;
  -o-text-overflow:ellipsis;
  -webkit-text-overflow:ellipsis;
  -moz-text-overflow:ellipsis;
}
.middle .brief{
  width:78%;
  height:60vh;
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
  width:4.5rem;font-size: 0.42rem;float:left;
  margin-left:0.2rem;
  letter-spacing: 0;
}

.inbox .title{
  width:100%;line-height: 0.5rem;
  text-align: left;
  font-weight: bold;
  font-size:0.43rem !important;
  padding-bottom:0.2rem;
}
.inbox .content{
  width:100%;
  line-height: 0.5rem;
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
