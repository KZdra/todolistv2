// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => defineAsyncComponent(() =>
        import('@/views/HomeView.vue')) 
    },
    {
      path: '/about',
      name: 'About',
      component: () => defineAsyncComponent(() =>
        import('@/views/ListDoneView.vue')) 
    },
    
    // ... add other routes
  ]
});

export default router;
