import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/books',
    name: 'books',
    component: () => import('../views/BooksView.vue')
  },
  {
    path: '/stores',
    name: 'stores',
    component: () => import('../views/StoresView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/shelf',
    name: 'shelf',
    component: () => import('../views/ShelfView.vue')
  },  
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },  
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignupView.vue')
  },
  {
    path: '/read',
    name: 'read',
    component: () => import('../views/ReadView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
