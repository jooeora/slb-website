// router/index

import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue'),
    meta: {
      title: '丝路国际银行'
    }
  },
  {
    path: '/accountType',
    name: 'accountType',
    component: () => import('../views/Person/accountType.vue'),
    meta: {
      title: '个人金融-账户种类'
    }
  },
  {
    path: '/opening',
    name: 'opening',
    component: () => import('../views/Person/opening.vue'),
    meta: {
      title: '个人金融-个人开户条件'
    }
  },
  {
    path: '/server',
    name: 'server',
    component: () => import('../views/Person/server.vue'),
    meta: {
      title: '个人金融-个人产品与服务'
    }
  },

  {
    path: '/accountTypeCom',
    name: 'accountTypeCom',
    component: () => import('../views/Company/accountType.vue'),
    meta: {
      title: '个人金融-账户种类'
    }
  },
  {
    path: '/openingCom',
    name: 'openingCom',
    component: () => import('../views/Company/opening.vue'),
    meta: {
      title: '个人金融-个人开户条件'
    }
  },
  {
    path: '/serverCom',
    name: 'serverCom',
    component: () => import('../views/Company/server.vue'),
    meta: {
      title: '个人金融-个人产品与服务'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue')
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
