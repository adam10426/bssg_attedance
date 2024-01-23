import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
// import 
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // redirect: '/folder/Inbox'
    component: () => import ('@/views/Login.vue')
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
