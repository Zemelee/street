import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/frame/NotFound.vue'

const routes = [
  // {
  //   base:'/street'
  // },
  {
    path: '/',
    component: Home,
    hidden: true,
    redirect: '/login',
  },
  { 
    path: '/home',
    component: () => import('../components/Index.vue'),
    hidden: true,
    redirect: '/home/index',
  },
  {
    path: '/home',
    name: '首页',
    component: Home,
    children: [
      {
        path: '/home/index',
        name: '公告栏',
        component: () => import('../components/Index.vue'),
      },
      {
        path: '/home/echarts',
        name: '可视化',
        component: () => import('../components/Echarts/Echarts.vue'),
      },
      
      {
        path: '/home/submit',
        name: '申请',
        component: () => import('../components/Submit.vue'),
      },
      {
        path: '/home/explain',
        name: 'Explain',
        component: () => import('../views/Explain.vue'),
      },
      {
        path: '/home/check',
        name: '审核',
        component: () => import('../components/Check.vue'),
        hidden: true,
        children: [
          {
            path: '/home/check/complain',
            name: '查看投诉',
            component: () => import('../components/ComplainCheck.vue'),
          },
          {
            path: '/home/check/apply',
            name: '审核申请',
            component: () => import('../components/ApplyCheck.vue'),
          },
          
        ]
      },
      {
        path: '/home/announce',
        name: '发布公告',
        component: () => import('../components/Announce.vue'),
        hidden: true
      },
    ]
  },
  {
    path: '/complain',
    name: 'Complain',
    component: () => import('../components/Complain.vue'),
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, hidden: true },

  {
    path: '/login',
    name: '登录',
    component: () => import('../views/Login.vue'),
    hidden: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
