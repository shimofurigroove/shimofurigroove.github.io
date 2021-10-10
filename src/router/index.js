import Vue from "vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";
import Home from "../views/Home.vue";
import VueGtag from "vue-gtag";

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
	{
		path: "/",
		name: "山形県米沢市の贅沢ジューシーな音楽、DJイベント、霜降りGROOVE | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		component: Home,
	},
	{
		path: "/2019-12-08/",
		name: "山形県米沢市のDJイベント、霜降りGROOVE episode #1 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		component: () => import("../views/2019-12-08.vue"),
	},
	{
		path: "/2020-01-31/",
		name: "山形県米沢市のDJイベント、霜降りGROOVE episode #2 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		component: () => import("../views/2020-01-31.vue"),
	},
	{
		path: "/2020-07-22/",
		name: "山形県米沢市のDJイベント、霜降りGROOVE episode #3 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		component: () => import("../views/2020-07-22.vue"),
	},
	{
		path: "/2020-08-26/",
		name: "山形県米沢市のDJイベント、霜降りGROOVE episode #4 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		component: () => import("../views/2020-08-26.vue"),
	},
	{
		path: "/2020-09-11/",
		name: "山形県米沢市のDJイベント、霜降りGROOVE episode #5 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		component: () => import("../views/2020-09-11.vue"),
	},
	{
		path: "/2020-10-21/",
		name: "山形県米沢市のDJイベント、霜降りGROOVE episode #6 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		component: () => import("../views/2020-10-21.vue"),
	},
	{
		path: "/2020-11-06/",
		name: "山形県米沢市のDJイベント、霜降りGROOVE episode #7 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		component: () => import("../views/2020-11-06.vue"),
	},
	{
		path: "/2020-12-19/",
		name: "山形県米沢市のDJイベント、霜降りGROOVE episode #8 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		component: () => import("../views/2020-12-19.vue"),
	},
	{
		path: "/2020-12-25/",
		name: "山形県米沢市のDJイベント、霜降りGROOVE episode #9 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		component: () => import("../views/2020-12-25.vue"),
	},
	{
		path: "/2021-01-27/",
		name: "山形県米沢市のDJイベント、霜降りGROOVE episode #10 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		component: () => import("../views/2021-01-27.vue"),
	},
	{
		path: "/2021-02-20/",
		name: "山形県米沢市のDJイベント、霜降りGROOVE episode #11 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		component: () => import("../views/2021-02-20.vue"),
	},
	{
		path: "/2021-02-26/",
		name: "山形県米沢市のDJイベント、霜降りGROOVE episode #12 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		component: () => import("../views/2021-02-26.vue"),
	},
	{
		path: "/2021-03-25/",
		name: "山形県米沢市のDJイベント、霜降りGROOVE episode #13 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		component: () => import("../views/2021-03-25.vue"),
	},
	{
		path: "/2021-04-24/",
		name: "山形県米沢市のDJイベント、霜降りGROOVE episode #14 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		component: () => import("../views/2021-04-24.vue"),
	},
	{
		path: "/2021-05-21/",
		name: "山形県米沢市のDJイベント、霜降りGROOVE episode #15 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		component: () => import("../views/2021-05-21.vue"),
	},
	{
		path: "/2021-06-24/",
		name: "山形県米沢市のDJイベント、霜降りGROOVE episode #16 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		component: () => import("../views/2021-06-24.vue"),
	},
	{
		path: "/2021-08-22/",
		name: "山形県米沢市のDJイベント、霜降りGROOVE episode #17 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		component: () => import("../views/2021-08-22.vue"),
	},
	{
		path: "/2021-10-09/",
		name: "山形県米沢市のDJイベント、霜降りGROOVE episode #18 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		component: () => import("../views/2021-10-09.vue"),
	},
];

const router = new VueRouter({
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	},
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

Vue.use(
	VueGtag,
	{
		config: { id: "UA-151890460-1" },
		pageTrackerTemplate(to) {
			return {
				page_title: to.name,
				page_path: to.path,
			};
		},
	},
	router
);

export default router;
