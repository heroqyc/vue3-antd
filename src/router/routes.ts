import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/home/HomeIndex.vue'),
  },
];

export default routes;
