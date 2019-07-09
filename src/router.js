import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/layouts/Home')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact')
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/layouts/Auth'),
      children: [
        { path: 'register', name: 'register', component: () => import('@/views/Register') },
        { path: 'login', name: 'login', component: () => import('@/views/Login') }

      ]
    }
  ]
})
