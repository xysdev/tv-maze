import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home/index.vue';
import Generes from '@/views/Generes/index.vue';
import Show from '@/views/Show/index.vue';
import Search from '@/views/Search/index.vue';
import AllShows from '@/views/AllShows/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/shows/all',
    name: 'All Shows',
    component: AllShows,
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
  {
    path: '/search',
    name: 'Seneres',
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
