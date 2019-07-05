import Vue from 'vue'
import Router from 'vue-router'
// import NProgress from 'nprogress' 
// import 'nprogress/nprogress.css' 

import Layout from '../views/layout'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path:'/',
      component:Layout,
      redirect: 'home',
      name:'home',
      children:[{
        path: 'home',
        name: 'home',
        component:() => import('../views/home'),
        meta: { title: '首页'}
      }],
    },
    {
      path:'/manage',
      component:Layout,
      redirect: '/manage/memberintegral',
      children:[
        {
          path: 'memberintegral',
          name: 'memberintegral',
          component:() => import('../views/memberManage/memberintegral'),
          meta:{title:'会员管理'}
        },
        {
          path: 'memberblacklist',
          name: 'memberblacklist',
          component:() => import('../views/memberManage/memberblacklist'),
          meta:{title:'会员黑名单'}
        }
      ],
    },
  ]
})
