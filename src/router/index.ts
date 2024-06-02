import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/HomeView.vue';
import Generes from '../views/Generes/index.vue';
import Show from '../views/Show/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/generes/:genere',
    name: 'Generes',
    component: Generes,
    props: true,
  },
  {
    path: '/shows/:id',
    name: 'show',
    component: Show,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
