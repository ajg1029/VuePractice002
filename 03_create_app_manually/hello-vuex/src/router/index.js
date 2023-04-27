import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/tst1',
    name: 'tst1',
    component: () => import('../views/AxiosTest1.vue')
  },
  {
    path: '/tst2',
    name: 'tst2',
    component: () => import('../views/AxiosTest2.vue')
  },
  {
    path: '/bus1',
    name: 'bus1',
    component: () => import('../views/EventBusTest1.vue')
  },
  {
    path: '/mxn1',
    name: 'mxn1',
    component: () => import('../views/MixinTest1.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
