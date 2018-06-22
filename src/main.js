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

Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
