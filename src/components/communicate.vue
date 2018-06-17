<template>
  <div class="container">
    <div class="communContent">
      <div @click="ret">return</div>
    </div>
    <div class="model">
      <ul class="text" v-show="inputContent"><li v-if="key" v-show="keyText" v-for="key in text">{{key}}</li></ul>
      <input type="text" @change="search" v-model="searchText">
    </div>
  </div>
</template>
<script>
  import { CustomerHttp } from '../common/js/http.js'
  export default{
    data(){
      return{
        inputContent:true,
        text:[],
        searchText:'',
        key:true,
        keyText:true
      }
    },
    methods: {
      ret(){
        this.$router.go(-1)
      },
      search(){
        const reg = new RegExp('^'+this.searchText+'[\\u4e00-\\u9fa5]*$','g')
        const that = this
        const url = '/api/communicate'
        CustomerHttp.httpGet(url,{}).then(function (val) {
          for(var key in val.data){
            if(reg.test(val.data[key]) && that.searchText !== ''){
              that.text.push(val.data[key])
              that.keyText = true
              return
            }else{
              for(var i =0;i< that.text.length;i++){
                that.text[i] = ''
                that.key = false
              }
            }
            if(that.searchText == ''){
              that.keyText = false
            }
          }
        }, function (val) {
          console.log(val)
        })
      }
    }
  }
</script>
<style scoped lang="stylus">
  @import '../common/stylus/variable.styl';
  .container
    height:100%;
  input
    border:1px solid $color-background
</style>
