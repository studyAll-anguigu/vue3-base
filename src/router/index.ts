import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/home',
    component: () => import('../components/home.vue'),
    name: 'Home',
  },
  {
    path: '/list',
    component: () => import('../components/list.vue'),
    name: 'List',
    children: [
      {
        path: 'detail/:id',
        component: () => import('../components/detail.vue'),
        name: 'Detail',
      },
    ],
  },
  {
    path: '/search',
    component: () => import('../components/search.vue'),
    name: 'Search',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
