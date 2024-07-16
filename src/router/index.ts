// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import { delayImport } from '@/utils/delayImport';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => delayImport(() => import('@/views/HomeView.vue'), 3000) // 3-second delay
    },
    {
      path: '/about',
      name: 'About',
      component: () => delayImport(() => import('@/views/ListDoneView.vue'), 3000) // 3-second delay
    },
    // ... add other routes
  ]
});

export default router;
