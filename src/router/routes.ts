import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/home',
    component: () => import('@/pages/test/index.vue')
  }
]

export default routes
