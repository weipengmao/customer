<template>
  <div class="container">
    <div class="children" v-show="chilTxt">
      <p class="word">我是机器人康康，</p>
      <p class="word">来自健康世界，</p>
      <p class="word">很高兴在这里遇见您，</p>
      <p class="word">希望能成为您的朋友，</p>
      <p class="word">愿健康成为您一生的伴侣。</p>
    </div>
    <button @click="Tome">To me</button>
    <div class="content">
      <div class="text" v-if ="key%4 <= 4 && key<=8" v-for ="key in itemText" :key ="key.id">{{key}}</div>
      <div>
        <div @click="allItem" v-show="hide === true">展开全部</div>
        <div class="text" v-show ="key%4 < 4 && key>8 && flag === true" v-for ="key in itemText" :key ="key.id">{{key}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  mounted () {
    const that = this
    const story = document.querySelectorAll('.word')
    const timer = setInterval(() => {
      story[this.num].style.opacity = 1
      this.num++
      if (this.num === 5) {
        clearInterval(timer)
      }
    }, 500)
    const text = document.querySelectorAll('.content')[0]
    // 上滑改变
    text.addEventListener('touchstart', function (e) {
      this.pointY = e.targetTouches[0].pageY
    })
    text.addEventListener('touchmove', function (e) {
      this.point = e.targetTouches[0].pageY - this.pointY
    })
    text.addEventListener('touchend', function (e) {
      if (this.point < 0) {
        this.style.top = -10 + '%'
        that.flag = true
        that.hide = false
        that.chilTxt = false
      } else {
        document.querySelector('.content').removeAttribute('style')
        that.flag = false
        that.hide = true
        that.chilTxt = true
      }
    })
  },
  data () {
    return {
      num: 0,
      itemText: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
      ],
      flag: false,
      hide: true,
      chilTxt: true
    }
  },
  methods: {
    allItem () {
      this.flag = true
      this.hide = false
    },
    Tome () {
      this.$router.push('/me')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .container
    position:relative;
    height:500px;
    width:100%;
    margin-top:100px;
    .children
      text-align: center;
      .word
        opacity:0;
        transition:all 0.5s;
    .content
      top:135px;
      transition:all 0.5s;
      position:absolute;
      width:300px;
      left:50%;
      -ms-transform: translate(-50%);
      -webkit-transform: translate(-50%);
      -o-transform: translate(-50%);
      -moz-transform: translate(-50%);
      .text
        display: inline-block;
        background:red;
        width:50px;
        height:25px;
        margin:10px 10px;
</style>
