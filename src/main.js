// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './common/stylus/index.styl'
import './common/stylus/ele-ui.styl'
import './common/stylus/swiper.styl'
import axios from 'axios'
import vueLoading from 'vue-loading-template'
import lazyLoad from 'vue-lazyload'


Vue.config.productionTip = false
Vue.prototype.index = []
Vue.prototype.num = 0
Vue.use(ElementUi)
Vue.use(vueLoading)
Vue.use(lazyLoad,{
    loading:require('./common/image/timg.gif')
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
