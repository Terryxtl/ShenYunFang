import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/1',
      component: () => import('@/views/p1.vue')
    },
    {
      path: '/2',
      component: () => import('@/views/p2.vue')
    },
    {
      path: '/3',
      component: () => import('@/views/p3.vue')
    },
    {
      path: '/4',
      component: () => import('@/views/p4.vue')
    },
    {
      path: '/5',
      component: () => import('@/views/p5.vue')
    },
    {
      path: '/*',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

export default router
