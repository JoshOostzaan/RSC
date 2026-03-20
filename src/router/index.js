import { createRouter, createWebHistory } from 'vue-router';

import LoginView from '@/views/LoginView.vue';
import DashboardView from '@/views/DashboardView.vue';
import KennisbaseView from '@/views/KennisbaseView.vue';
import ToegewezenView from '@/views/ToegewezenView.vue';
import UitgevoerdView from '@/views/UitgevoerdView.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView
  },
  {
    path: '/knowledge-base',
    name: 'Knowledge-base', 
    component: KennisbaseView
  },
  {
    path: '/inspections/assigned',
    name: 'Toegewezen', 
    component: ToegewezenView
  },
  {
    path: '/inspections/completed',
    name: 'Uitgevoerd', 
    component: UitgevoerdView
  },
  {
    path: '/',
    redirect: '/login'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

import { useAuthStore } from '@/stores/auth';

router.beforeEach((to) => {
  const authStore = useAuthStore();

  if (to.path == '/login' && authStore.isAuthenticated) {
    return '/dashboard';
  }
});

export default router;
