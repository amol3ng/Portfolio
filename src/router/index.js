import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        // Small delay lets the page render before scrolling
        setTimeout(() => {
          const el = document.querySelector(to.hash)
          if (el) {
            resolve({
              el: to.hash,
              top: 80,        // offset for fixed navbar
              behavior: 'smooth'
            })
          } else {
            resolve({ top: 0 })
          }
        }, 50)
      })
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router