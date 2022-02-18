// router/index

import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue'),
    meta: {
      title: '首页'
    }
  }
  // {
  //   path: '/aa',
  //   name: 'aa',
  //   component: () => import('../views/Index copy.vue'),
  //   meta: {
  //     title: '首页'
  //   }
  // }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
