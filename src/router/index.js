import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import account from '@/components/account'
import swiper from '@/components/swiper'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/account',
      name: 'account',
      component: account
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: swiper
    }
  ]
})
