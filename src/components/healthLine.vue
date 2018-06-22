<template>
  <div class="container">
    <swiper  :options="swiperOption" ref="mySwiper">
      <swiper-slide><div class="fd_slide fd_slide1">I'm Slide 1</div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide2">I'm Slide 2</div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide3">I'm Slide 3</div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide4">I'm Slide 4</div></swiper-slide>
      <div class="swiper-pagination "  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default{
    data() {
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
        swiperSlides: [1, 2, 3, 4]
      }
    },
    components:{
      swiper,
      swiperSlide
    },
    mounted(){

    }
  }
</script>
<style scoped lang="stylus">
.container
  height:200px;
  width:100%;
  .fd_slide
    height: 100px;
    width: 100%;
    background: red;

  .fd_slide1
    background: yellow;

  .fd_slide2
    background: red;

  .fd_slide3
    background: yellowgreen;

  .fd_slide4
    background: orange;
</style>
