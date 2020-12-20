import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta';
import Home from '../views/Home.vue'
import VueGtag from "vue-gtag";

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
  {
    path: '/',
    name: '山形県米沢市の贅沢ジューシーな音楽、DJイベント、霜降りGROOVE | Shimofuri Groove, DJ event based in Yonezawa Yamagata',
    component: Home
  },
  {
    path: '/2019-12-08',
    name: '山形県米沢市のDJイベント、霜降りGROOVE episode #1 | Shimofuri Groove, DJ event based in Yonezawa Yamagata',
    component: () => import('../views/2019-12-08.vue')
  },
  {
    path: '/2020-01-31',
    name: '山形県米沢市のDJイベント、霜降りGROOVE episode #2 | Shimofuri Groove, DJ event based in Yonezawa Yamagata',
    component: () => import('../views/2020-01-31.vue')
  },
  {
    path: '/2020-07-22',
    name: '山形県米沢市のDJイベント、霜降りGROOVE episode #3 | Shimofuri Groove, DJ event based in Yonezawa Yamagata',
    component: () => import('../views/2020-07-22.vue')
  },
  {
    path: '/2020-08-26',
    name: '山形県米沢市のDJイベント、霜降りGROOVE episode #4 | Shimofuri Groove, DJ event based in Yonezawa Yamagata',
    component: () => import('../views/2020-08-26.vue')
  },
  {
    path: '/2020-09-11',
    name: '山形県米沢市のDJイベント、霜降りGROOVE episode #5 | Shimofuri Groove, DJ event based in Yonezawa Yamagata',
    component: () => import('../views/2020-09-11.vue')
  },
  {
    path: '/2020-10-21',
    name: '山形県米沢市のDJイベント、霜降りGROOVE episode #6 | Shimofuri Groove, DJ event based in Yonezawa Yamagata',
    component: () => import('../views/2020-10-21.vue')
  },
  {
    path: '/2020-11-06',
    name: '山形県米沢市のDJイベント、霜降りGROOVE episode #7 | Shimofuri Groove, DJ event based in Yonezawa Yamagata',
    component: () => import('../views/2020-11-06.vue')
  },
  {
    path: '/2020-12-19',
    name: '山形県米沢市のDJイベント、霜降りGROOVE episode #8 | Shimofuri Groove, DJ event based in Yonezawa Yamagata',
    component: () => import('../views/2020-12-19.vue')
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

Vue.use(VueGtag, {
  config: { id: "UA-151890460-1" },
  pageTrackerTemplate(to) {
    return {
      page_title: to.name,
      page_path: to.path
    }
  }
}, router);

export default router
