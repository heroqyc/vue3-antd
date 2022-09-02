import { RouteRecordRaw } from 'vue-router';

/**
 * 路由 meta 对象参数说明
 * meta: {
 *        title:         菜单栏 tagsView 菜单搜索
 *        isHide:        是否隐藏此路由
 *        isKeepAlive:   是否缓存组件状态
 *        isAffix:       是否固定在 tagsView 上
 *        roles:         当前路由权限标识,取角色管理。控制路由显示、隐藏。超级管理员: admin 普通角色: common
 *        icon:          菜单、tagsView 图标, 阿里: `iconfont xxx`,  fontawesome: `fa xxx`
 * }
 */

/*
 * 定义 404 401 页面
 */
export const notFoundandNoPower = [
  {
    path: '/:path(.*)*',
    name: 'notFound',
    component: () => import('/@/views/error/404.vue'),
    meta: {
      isHide: true,
    },
  },
  {
    path: '/401',
    name: 'noPower ',
    component: () => import('/@/views/error/401.vue'),
    meta: {
      isHide: true,
    },
  },
];

/**
 * 默认路由
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/',
    component: () => import('/@/layout/index.vue'),
    meta: {
      title: '布局界面',
    },
    children: [...notFoundandNoPower],
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('/@/views/home/home.vue'),
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('/@/views/login/login.vue'),
  },
];

export default routes;
