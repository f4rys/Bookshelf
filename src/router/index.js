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
    component: () => import(/* webpackChunkName: "about" */ '../views/BooksView.vue')
  },
  {
    path: '/libraries',
    name: 'libraries',
    component: () => import(/* webpackChunkName: "about" */ '../views/LibrariesView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileView.vue')
  },
  {
    path: '/shelf',
    name: 'shelf',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShelfView.vue')
  },  
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },  
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignupView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
