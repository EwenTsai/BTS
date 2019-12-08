import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/page/index'
import login from '@/components/page/login'
import books from '@/components/page/books'
import book  from '@/components/page/book'
import register from '@/components/page/register'
import error from '@/components/page/error'
import personalMes from '@/components/page/personalMes'
import order from '@/components/page/order'
import orderDetails from '@/components/page/orderDetails'

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
    },
    {
      path: '/personalMes',
      name: 'personalMes',
      component: personalMes
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/orderDetails',
      name: 'orderDetails',
      component: orderDetails
    }
  ]
})
