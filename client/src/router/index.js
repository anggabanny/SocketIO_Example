import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Carousel from '../views/Carousel.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'carousel',
    component: Carousel
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
