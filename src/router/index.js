import { createWebHistory, createRouter } from 'vue-router'
import Articles from '../views/Articles.vue';

const routes = [
  {
    path: '/articles',
    name: 'articles',
    component: Articles,
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/Projects.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
