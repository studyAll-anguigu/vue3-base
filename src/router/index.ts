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

/**
 * 路由导航守卫
 * 类型：
 *  全局路由守卫
 *     前置导航守卫  : 用的比较多
 *     解析导航守卫
 *     后置守卫
 *  路由独享导航守卫 ：用的比较少
 *  组件内路由导航首位
 *
 * 作用：通常用来做权限验证
 * **/
router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = to.name as string;
  next();
});

export default router;
