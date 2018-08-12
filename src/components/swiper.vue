<template>
<div id="swiper">
  <div id="box"  v-show='!loading'>
  <div style="position:absolute;right:0;top:-3%;z-index:2;" @click="toIndex"><img src="../common/image/close.png" alt="" >
  </div>
  <!-- 轮播图 -->
    <swiper  :options="swiperOption" ref="mySwiper">
      <swiper-slide><div class="fd_slide fd_slide1"><img src="../common/image/swiper1.jpg" alt=""></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide2"><img src="../common/image/swiper2.jpg" alt=""></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide3"><img src="../common/image/swiper3.jpg" alt=""></div></swiper-slide>
      <div class="swiper-pagination "  slot="pagination"></div>
      <!-- <img class="shut" src="../assets/close.png" alt=""> -->
    </swiper>
  <!-- 左边导航栏及右边的功能简介 -->
  <div class="middle clearfix">
    <ul id="nav" >
        <li v-for="lis in items" :id="lis[0]">{{lis[1]}}</li>
    </ul>
    <div class="brief clearfix" >
      <!-- <router-link to='/detail'> -->
        <div class="noneText" v-show="noneText">暂无更多数据，请看其他栏目</div>
        <div  :id="Index" name="text" >
          <div class="box clearfix info" v-for="(item,key) in titleIndex"  @click="toDetail(titleContent[key],item)">
            <div style="height:1.8rem;display:inline-block;float:left;position:relative;">
                <div v-show="moreAnswerLoadings" class="loadingImgA"><img src="../../static/loading.gif" width="20px" height="20px" ></div>
                <img  :src="imgIndex[key]=='none'?backgroundImg:imgIndex[key]" alt="">
            </div>
            <div class='inbox clearfix'>
              <p class="title">{{item}}</p>
              <p class="content" :style="titleIndex[key]?(titleIndex[key].length>12?'-webkit-line-clamp: 1;-webkit-box-orient: vertical;'
                :'-webkit-line-clamp: 2;-webkit-box-orient: vertical;'):''" > {{titleContent[key]}}
                <div v-show="moreAnswerLoadingAs" class="loadingImg"><img src="../../static/loading.gif" width="20px" height="20px" ></div>
              </p>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>

<!-- 图片加载中 -->
  <vue-loading type="spin" color="#5AC1DD" :size="{ width: '2rem', height: '2rem' }" style="position:fixed;left:50%;bottom:7rem;margin-left:-1rem;" v-show="loading"></vue-loading>
</div>
</template>

<script>
// const CustomerHttp = r => require.ensure([], () => r(require('../common/js/http'))  )
import { CustomerHttp } from "../common/js/http";
import { distinct } from "../common/js/distinct";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Vue from "vue";
// var root;
// var reg = /http:\/\/47.104.111.7\//;
// if (!reg.test(location.href)) {
//   root = location.href.match(/.+com\//)[0]
// } else {
//   root = "http://47.104.111.7/";
// }
export default {
  created() {
    const localPath = "http://www.health-vi.com";
    var that = this;
    var arrOne = [];
    var text1;
    function decode(text) {
      return text.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, "");
    }
    CustomerHttp.httpPost(`api/qx`, {
      url: "qx",
      cmd: "kind.q",
      pid: "",
      ver: 1
    }).then(
      function(val) {
        var Data = val.data.rows;
        for (var i = 0; i < Data.length; i++) {
          if (that.$route.query.titleIndex == Data[i][2]) {
            that.items.push(Data[i]);
          }
        }
        setTimeout(() => {
          that._req();
        }, 10);
      },
      function(err) {
        console.log(err);
      }
    );

    var s =
      "_" +
      Math.random()
        .toString(36)
        .slice(2);
    console.log(s, window.slotbydup);
    this.advert = s;
    $("#swiper").append('<div id="' + s + '"></div>');
    (window.slotbydup = window.slotbydup || []).push({
      id: "5874769",
      container: "baiDu",
      size: "20,3",
      display: "float"
    });
  },

  data() {
    return {
      swiperOption: {
        initialSlide: 0, //设定初始化时slide的索引
        direction: "horizontal", //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
        loop: false, //无限滚动
        speed: 300, //滑动速度
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          disableOnInteraction: false
        }
      },
      moreAnswerLoadings: false,
      moreAnswerLoadingAs: false,
      swiperSlides: [1, 2, 3, 4],
      items: [],
      titleIndex: [, , , , , , , , , , , , , , , , , , ,],
      titleContent: [],
      Index: [],
      textData: [],
      textIndex: [],
      textPlace: [],
      imgIndex: [],
      backgroundImg: require("../common/image/swiper.jpg"),
      loading: true,
      own: false,
      noneText: false,
      advert: ""
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    toIndex() {
      this.$router.push("/");
    },
    // 进入详情页
    toDetail(id, title) {
      console.log(id, title);
      if (this.moreAnswerLoadings == false) {
        this.$router.push({ path: "/detail", query: { id: id, title: title } });
      }
    },
    _req() {
      var localPath = "http://www.health-vi.com";
      function decode(text) {
        return text.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, "");
      }
      var that = this;
      var arr = [];
      var nav = document.querySelector("#nav");
      var lis = nav.querySelectorAll("li");
      var lisId = lis[0].id;
      lis[0].classList.add("active");
      var num = 0;

      for (let i = 0; i < lis.length; i++) {
        this.num = lis[i];
        lis[i].onclick = function() {
          if (!this.classList.contains("active")) {
            for (let j = 0; j < lis.length; j++) {
              lis[j].classList.remove("active");
              this.classList.add("active");
            }
            //            arr.push(this.id)
            var titleArr = [];
            that.titleIndex = [, , , , , , , , , , , , , , , , , , ,];
            that.imgIndex = [];
            that.titleContent = [];
            that.Index = this.id;
            that.moreAnswerLoadings = true;
            that.moreAnswerLoadingAs = true;
            CustomerHttp.httpPost(`api/qx`, {
              kind_id: that.Index,
              cmd: "faq.q",
              ver: 1,
              page_cnt: "20",
              page_num: 0,
              url: "qx"
            }).then(function(val) {
              if (val.data.rows.length > 0) {
                for (var z = 0; z < val.data.rows.length; z++) {
                  var text = val.data.rows[z][0];
                  var placeName = val.data.rows[z][1];
                  if (text != "") {
                    CustomerHttp.httpPost(`api/qx`, {
                      cmd: "faqspc.r",
                      ver: 1,
                      faq_id: text
                    }).then(val => {
                      titleArr.push(val.data.ask);
                      that.titleIndex = titleArr;
                      if (val.status == 200) {
                        that.moreAnswerLoadings = false;
                        that.moreAnswerLoadingAs = false;
                      }
                      if (val.data.att.match(/\/.+g/)) {
                        that.imgIndex.push(
                          localPath + val.data.att.match(/\/.+g/)[0]
                        );
                      } else {
                        that.imgIndex.push("none");
                      }
                      if (val.data) {
                        var text1 = val.data.ans.replace(/\\x/g, "");
                        text1 = decode(text1);
                        that.titleContent.push(text1);
                      }
                    });
                  }
                }
                that.noneText = false;
                // localStorage.setItem(`${that.Index}+b`,that.imgIndex);
              } else {
                that.titleIndex = [];
                that.noneText = true;
                that.moreAnswerLoadings = false;
                that.moreAnswerLoadingAs = false;
              }
            });
          } else {
          }
        };
      }
      //loading退去
      this.loading = false;
      if (num == 0 && localStorage.getItem(lis[0].id)) {
        that.titleIndex = localStorage.getItem(lis[0].id).split(",");
        that.titleContent = localStorage.getItem(lis[0].id + "a").split(",");
        that.imgIndex = localStorage.getItem(lis[0].id + "b").split(",");
        that.moreAnswerLoadingA = false;
        num++;
      } else if (!localStorage.getItem(lis[0].id)) {
        CustomerHttp.httpPost(`api/qx`, {
          kind_id: lis[0].id,
          cmd: "faq.q",
          ver: 1,
          page_cnt: "20",
          page_num: 0,
          url: "qx"
        }).then(function(val) {
          console.log("ok");
          var titleArr = [];
          that.moreAnswerLoadings = true;
          that.moreAnswerLoadingAs = true;
          if (val.data.rows.length > 0) {
            that.titleIndex = [, , , , , , , , , , , , , , , , , , ,];
            for (var z = 0; z < val.data.rows.length; z++) {
              var text = val.data.rows[z][0];
              var placeName = val.data.rows[z][1];
              if (text != "") {
                CustomerHttp.httpPost(`api/qx`, {
                  cmd: "faqspc.r",
                  ver: 1,
                  faq_id: text
                }).then(val => {
                  titleArr.push(val.data.ask);
                  that.titleIndex = titleArr;
                  if (val.status == 200) {
                    setTimeout(() => {
                      that.moreAnswerLoadings = false;
                      that.moreAnswerLoadingAs = false;
                    }, 200);
                  }
                  if (val.data.att.match(/\/.+g/)) {
                    that.imgIndex.push(
                      localPath + val.data.att.match(/\/.+g/)[0]
                    );
                  } else {
                    that.imgIndex.push("none");
                  }
                  if (val.data) {
                    var text1 = val.data.ans.replace(/\\x/g, "");
                    text1 = decode(text1);
                    that.titleContent.push(text1);
                  }
                });
              }
            }
            that.noneText = false;
          } else {
            that.titleIndex = [];
            that.noneText = true;
            that.moreAnswerLoadings = false;
            that.moreAnswerLoadingAs = false;
          }
        });
      }
    }
  },
  //缓存路由
  beforeRouteLeave(to, from, next) {
    if (to.path == "/") {
      from.meta.keepAlive = false;
    } else {
      from.meta.keepAlive = true;
    }
    Vue.prototype.cancelAjax();
    next();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
}
a {
  color: #000;
}

.clearfix:after {
  content: "";
  clear: both;
  display: block;
}
#swiper {
  overflow: hidden;
  height: 100vh;
  position: relative;
  width: 100%;
}
.fd_slide {
  height: 20vh;
  width: 100%;
}

.fd_slide img {
  width: 100%;
  /* height:20vh; */
}

.swiper-pagination {
  position: absolute;
  bottom: 0.1rem;
}

.midddle {
  width: 100%;
  box-sizing: border-box;
}
.middle {
  overflow-y: auto;
}
.middle #nav {
  display: inline-block;
  width: 22%;
  float: left;
  background: #f4f4f4;
  height: 80vh;
  overflow-y: auto;
}
.middle #nav li {
  width: 100%;
  font-size: 0.43rem;
  padding: 0.25rem 0.1rem;
  background: #f4f4f4;
  line-height: 0.6rem;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  -webkit-text-overflow: ellipsis;
  -moz-text-overflow: ellipsis;
}
.middle .brief {
  position: relative;
  width: 78%;
  height: 80vh;
  overflow-y: auto;
  padding-bottom: 1.2rem;
}

.middle .brief .box {
  width: 100%;
  padding: 0.2rem;
  padding-right: 0;
  height: 2.2rem;
  overflow: hidden;
}
.middle .brief .box img {
  width: 1.8rem;
  float: left;
}
.middle .brief .box .inbox {
  width: 5rem;
  font-size: 0.42rem;
  float: left;
  height: 1.8rem;
  margin-left: 0.2rem;
  letter-spacing: 0;
  position: relative;
}

.inbox .title {
  width: 100%;
  line-height: 0.5rem;
  text-align: left;
  font-weight: bold;
  font-size: 0.43rem !important;
  padding-bottom: 0.2rem;
}
.inbox .content {
  width: 100%;
  line-height: 0.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.active {
  background: #fff !important;
  line-height: 0.8rem !important;
  font-weight: bold;
  font-size: 0.44rem !important;
  padding: 0.2rem;
}
.loadingImg img {
  width: 20px !important;
  text-align: center !important;
  float: none !important;
  position: absolute;
  /* right: 50%; */
  top: 50%;
  border: 0;
}
.loadingImgA img {
  width: 20px !important;
  text-align: center !important;
  top: 50%;
  margin-top: 36%;
  margin-left: 36%;
  border: 0;
}
.loadingImg {
  width: 100%;
}
.loadingImgA {
  position: absolute;
  left: 0;
  /* display: block !important; */
  width: 1.85rem;
  float: left;
}
.noneText {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  font-size: 16px;
  color: #a09696;
}
</style>

