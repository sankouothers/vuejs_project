import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import error from '@/components/error'

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
      name : 'error',
      component: error
    },
    {
      path: '/',
      redirect: login
    }
  ]
})
