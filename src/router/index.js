import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta';
import Home from '../views/Home.vue'

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/2019-12-08',
    name: '2019-12-08',
    component: () => import('../views/2019-12-08.vue')
  },
  {
    path: '/2020-01-31',
    name: '2020-01-31',
    component: () => import('../views/2020-01-31.vue')
  },
  {
    path: '/2020-07-22',
    name: '2020-07-22',
    component: () => import('../views/2020-07-22.vue')
  }
]

const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
       return savedPosition
    } else {
       return { x: 0, y: 0 }
    }
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
