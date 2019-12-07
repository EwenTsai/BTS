import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/page/index'
import login from '@/components/page/login'
import books from '@/components/page/books'
import book  from '@/components/page/book'
import register from '@/components/page/register'
import error from '@/components/page/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/books',
      name: 'books',
      component: books
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/error',
      name: 'error',
      component: error
    }
  ]
})
