import { createRouter, createWebHistory } from 'vue-router'
import BodyForm from "@/components/BodyForm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BodyForm
    },
    {
      path: '/preview',
      name: 'preview',
      component: () => import('../components/BodyPreview.vue')
    }
  ]
})

export default router
