import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('/@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('/@/views/About.vue')
  }
]

export default createRouter({
  routes,
  history: createWebHashHistory()
})
