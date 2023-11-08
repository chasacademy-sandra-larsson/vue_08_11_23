import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'
import MovieList from '@/components/MovieList.vue'
import MovieDetails from '@/components/MovieDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/movies',
    name: 'Movies',
    component: MovieList
  },
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    component: MovieDetails
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
