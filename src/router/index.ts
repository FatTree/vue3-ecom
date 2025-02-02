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
      path: '/:locale',
      name: 'home',
        component: HomeView,
    },
    {
      path: '/:locale/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/:locale/:category',
      name: 'category',
      component: () => import('../views/Category/index.vue'),
    },
    {
      path: '/:locale/:category/:id',
      name: ':id',
      component: () => import('../views/Category/[id].vue'),
    },
    {
      path: '/:locale/purchase',
      name: 'purchase',
      component: () => import('../views/Purchase.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/:locale/member',
      name: 'member',
      component: () => import('../views/Member.vue'),
    },
    {
      path: '/:locale/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/:locale/registration',
      name: 'registration',
      component: () => import('../views/Registration.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/en',
    },
  ],
})

router.beforeEach((to, _, next) => {
  const locale = to.params.locale as string || 'en';
  if (!['en', 'ch'].includes(locale)) {
    return next('/en');
  }
  (i18n.global.locale as Ref<string>).value = locale;
  next();
});

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
