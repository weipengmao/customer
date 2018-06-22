import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import me from '@/components/me'
import communicate from '@/components/communicate'
import healthLine from '@/components/healthLine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path:'/communicate',
      name:'communicate',
      component:communicate
    },
    {
      path:'/healthLine',
      name:'healthLine',
      component:healthLine
    }
  ]
})
