<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import {vueLoading} from 'vue-loading-template'
export default {
  name: 'App',
      components: {
      vueLoading
    },
}
</script>

<style scoped lang="stylus">
@import './common/stylus/variable.styl';
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
html{
  font-size:10vw;
  box-sizing: border-box;
}

</style>
