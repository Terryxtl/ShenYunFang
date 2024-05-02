import {createRouter, createWebHashHistory} from 'vue-router';
import p1 from '@/views/p1.vue';
import p2 from '@/views/p2.vue';
import p3 from '@/views/p3.vue';
import p4 from '@/views/p4.vue';
import p5 from '@/views/p5.vue';
import NotFound from '@/views/NotFound.vue';
import Home from '@/views/Home.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/1',
      component: p1,
    },
    {
      path: '/2',
      component: p2,
    },
    {
      path: '/3',
      component: p3,
    },
    {
      path: '/4',
      component: p4,
    },
    {
      path: '/5',
      component: p5,
    },
    {
      path: '/*',
      component: NotFound,
    },
  ],
});

export default router;
