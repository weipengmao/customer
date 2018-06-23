import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import account from '@/components/account'
import swiper from '@/components/swiper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'index',
      component: index
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
