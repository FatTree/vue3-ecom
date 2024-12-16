import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/:category',
      name: 'category',
      component: () => import('../views/Category/index.vue'),
      children: [
        {
          path: ':id',
          name: ':id',
          component: () => import('../views/Category/[id].vue'),
        }
      ]
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: () => import('../views/Purchase.vue'),
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('../views/Member.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/Registration.vue'),
    },
  ],
})

export default router
