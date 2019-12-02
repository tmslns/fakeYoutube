import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Raccolta from '../views/Raccolta.vue'
import Cronologia from '../views/Cronologia.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/raccolta',
    name: 'raccolta',
    component: Raccolta
  },
  {
    path: '/cronologia',
    name: 'cronologia',
    component: Cronologia
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
