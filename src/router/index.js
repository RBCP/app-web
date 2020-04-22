import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../views/layout/Layout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index')
    },
    {
      path:'',
      redirect:'/home',
      component:Layout,
      children:[{
        path:'home',
        name:'home',
        component:()=>import('@/views/home/index'),
        meta :{title:'主页'}
      }]
    },
    {
      path:'/features',
      redirect:'/features/sendMessage1',
      component:Layout,
      name:'功能',
      meta:{title:'功能'},
      children:[{
        path:'sendMessage1',
        name:'单文本消息发送',
        component:() => import('@/views/features/sendMessage/singleText'),
        meta:{title:'单文本发送消息'}
      },
        {
          path:'sendMessage2',
          name:'多媒体图文消息发送',
          component:()=>import('@/views/features/sendMessage/sendPicture'),
          meta:{title:'多媒体图文消息发送'}
        },
        {
          path:'autoReply',
          name:'自动回复',
          meta:{title:'自动回复'}
        },
        {
          path:'MenuSetting',
          name:'菜单设定',
          component:()=>import('@/views/features/sendMessage/menuSetting'),
          meta:{title:'设置菜单'},

        }]
    },
    {
      path:'/Management',
      redirect:'/Management/user',
      name:'管理',
      meta:{title:'管理'},
      children:[{
        path:'/user',
        name:'用户管理',
        meta:{title:'用户管理'}
      },
        {
          path:'/Message',
          name:'消息管理',
          meta:{title:'消息管理'}
        }]
    },
    {
      path:'/setting',
      redirect:'/setting/userInfo',
      name:'设置',
      meta:{title:'设置'},
      children:[{
        path:'userInfo',
        name:'个人中心',
        meta:{title:'个人中心'}
      },
        {
          path:'administrator',
          name:'设置管理员',
          meta:{title:'设置管理员'}
        }]
    }
    ]
})
