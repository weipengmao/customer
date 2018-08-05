import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/detail',
      name: 'detail',
      component: resolve => require.ensure([], () => resolve(require('@/components/detail')), 'detail')
    },
    {
      path: '/',
      name: 'index',
      component: resolve => require.ensure([], () => resolve(require('@/components/index')), 'detail')
    },
    {
      path: '/account',
      name: 'account',
      component: resolve => require.ensure([], () => resolve(require('@/components/account')), 'detail')
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: resolve => require.ensure([], () => resolve(require('@/components/swiper')), 'detail'),
    }
  ]
})
