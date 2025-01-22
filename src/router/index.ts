import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { i18n } from '@/i18n';
import { useI18n } from 'vue-i18n';
import type { Ref } from 'vue';
import App from '@/App.vue';


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
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/category/:category',
      name: 'category',
      component: () => import('../views/Category/index.vue'),
    },
    {
      path: '/category/:category/:id',
      name: ':id',
      component: () => import('../views/Category/[id].vue'),
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: () => import('../views/Purchase.vue'),
      meta: { requiresAuth: true }
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

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth) {
    onAuthStateChanged(auth, (user) => {
      console.log(user)
      if (user) {
        next();
      } else {
        next({ path: '/login', query: { redirect: to.fullPath } });
      }
    });
  } else {
    next();
  }
});

export default router;
