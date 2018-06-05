import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import error from '@/components/error'
import mall from '@/components/mall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/error',
      name: 'error',
      component: error
    },
    {
      path: '/mall',
      name: 'mall',
      component: mall
    },
    {
      path: '/',
      redirect: mall
    }
  ]
})
