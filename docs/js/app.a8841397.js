(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],u=0,v=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);m&&m(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-a09c8a7e":"0f200c75","chunk-a09d1c3e":"79017c0f","chunk-a09dbab0":"bd5ef091","chunk-a09e0482":"190ca645","chunk-a0c3ea10":"b7c2271e","chunk-a0c614c8":"62bb705e","chunk-a0c76e62":"cc540fe3","chunk-a0c8d346":"898cf43b","chunk-a0c9a862":"8cdd3a39"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(t);var c=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",c.name="ChunkLoadError",c.type=n,c.request=i,a[1](c)}r[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var m=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0418":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[a("div",{staticClass:"container-fluid"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[a("img",{staticClass:"d-inline-block align-top mr-1",attrs:{src:"/images/logo.png",width:"30",height:"30",alt:"霜降りGROOVE logo"}}),t._v("霜降り"),a("span",{staticClass:"dunkin"},[t._v("GROOVE")])]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"nav-link",attrs:{to:"/#events"}},[t._v("開催予定 Upcoming Events")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"nav-link",attrs:{to:"/#movie"}},[t._v("配信 Live Stream")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"nav-link",attrs:{to:"/#archive"}},[t._v("過去回 Archives")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"nav-link",attrs:{to:"/#sns"}},[t._v("SNS")])],1)])])],1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbar","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],i={name:"Header"},o=i,s=a("2877"),l=Object(s["a"])(o,n,r,!1,null,null,null);e["a"]=l.exports},3587:function(t,e,a){},4026:function(t,e,a){"use strict";var n=a("3587"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{mode:"out-in"}},[a("router-view")],1)],1)},i=[],o={name:"App",metaInfo:{title:"霜降りGROOVE 米沢のDJイベント | Shimofuri Groove, DJ event based in Yonezawa",titleTemplate:"%s",meta:[{charset:"utf-8"},{name:"description",content:"山形県米沢市の贅沢ジューシーな音楽、DJイベント、霜降りGROOVE | Shimofuri Groove, DJ event based in Yonezawa Yamagata"},{name:"viewport",content:"width=device-width, initial-scale=1"},{property:"og:url",content:"https://shimofurigroove.github.io/"},{property:"og:title",content:"霜降りGROOVE 米沢のDJイベント | Shimofuri Groove, DJ event based in Yonezawa"},{property:"og:description",content:"山形県米沢市の贅沢ジューシーな音楽、DJイベント、霜降りGROOVE | Shimofuri Groove, DJ event based in Yonezawa Yamagata"},{property:"og:image",content:"https://shimofurigroove.github.io/images/og.jpg"},{property:"og:type",content:"website"},{property:"og:site_name",content:"霜降りGROOVE"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site:id",content:"@ShimofuriGroove"},{name:"twitter:creator",content:"@ShimofuriGroove"}]}},s=o,l=(a("5c0b"),a("2877")),c=Object(l["a"])(s,r,i,!1,null,null,null),u=c.exports,m=(a("b0c0"),a("d3b7"),a("8c4f")),v=a("58ca"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Layer"),a("Header"),a("div",{staticClass:"container"},[t._m(0),t._m(1),t._m(2),a("section",{attrs:{id:"archive"}},[a("h2",[t._v("⛄️過去回 Archives")]),a("p",[t._v("過去回の詳細情報や当日の様子をご覧いただけます！")]),a("p",[t._v("Click the flyers below for information and photos of past events.")]),a("ul",{staticClass:"img-gallery"},[a("li",[a("router-link",{attrs:{to:"/2021-01-27"}},[a("img",{attrs:{src:"/images/10/flyer.png"}})])],1),a("li",[a("router-link",{attrs:{to:"/2020-12-25"}},[a("img",{attrs:{src:"/images/09/flyer.png"}})])],1),a("li",[a("router-link",{attrs:{to:"/2020-12-19"}},[a("img",{attrs:{src:"/images/08/flyer.png"}})])],1),a("li",[a("router-link",{attrs:{to:"/2020-11-06"}},[a("img",{attrs:{src:"/images/07/flyer.png"}})])],1),a("li",[a("router-link",{attrs:{to:"/2020-10-21"}},[a("img",{attrs:{src:"/images/06/flyer_01.png"}})])],1),a("li",[a("router-link",{attrs:{to:"/2020-09-11"}},[a("img",{attrs:{src:"/images/05/flyer.jpg"}})])],1),a("li",[a("router-link",{attrs:{to:"/2020-08-26"}},[a("img",{attrs:{src:"/images/04/flyer.jpg"}})])],1),a("li",[a("router-link",{attrs:{to:"/2020-07-22"}},[a("img",{attrs:{src:"/images/03/flyer.jpg"}})])],1),a("li",[a("router-link",{attrs:{to:"/2020-01-31"}},[a("img",{attrs:{src:"/images/02/flyer.png"}})])],1),a("li",[a("router-link",{attrs:{to:"/2019-12-08"}},[a("img",{attrs:{src:"/images/01/flyer_v5.png"}})])],1)])]),a("section",{attrs:{id:"sns"}},[a("h2",[t._v("🐮SNS")]),t._m(3),a("Tweet",{attrs:{id:"ShimofuriGroove"}})],1)]),a("Footer")],1)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"page-header",attrs:{id:"banner"}},[a("div",{staticClass:"my-4"},[a("h1",[t._v(" 🍖米沢のDJイベント、霜降り "),a("span",{staticClass:"dunkin"},[t._v("GROOVE")])]),a("p",[t._v(" 各DJが今一番ハマってる、贅沢ジューシーな音楽をセレクト。 "),a("br"),t._v(" 好きなジャンルを楽しんだり、敢えて普段は聞かないジャンルを聞いて、新たな発見をしたり。お気軽にお楽しみください。 ")]),a("p",[t._v(' Shimofuri Groove, a DJ event based in Yonezawa."Shimofuri" means marbled fat. It is a word commonly used to express high-ranking beef, like Yonezawa beef, one of the three major Japanese beef brands. In this DJ event, the DJ will serve you the fresh shimofuri groove. ')])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"events"}},[a("h2",[t._v("🦅開催予定 Upcoming Events")]),a("ul",{staticClass:"date-list"},[a("li",[a("p",{staticClass:"date"},[t._v("2021.02.26 fri")]),a("p",{staticClass:"info"},[t._v(" @LIVE ARB [b:arb] ")])]),a("li",[a("p",{staticClass:"date"},[t._v("2021.03.24 wed")]),a("p",{staticClass:"info"},[t._v(" @金熊食堂 DJ体験、オープンDJブース（フリーDJ） ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"movie"}},[a("h2",[t._v("🍒配信 Live Stream")]),a("p",[t._v("以下、過去回の配信動画です。作業用BGMに是非！")]),a("p",[t._v("Check out the archives of the live streams from the links below.")]),a("ul",{staticClass:"img-gallery video-gallery"},[a("li",[a("a",{attrs:{href:"https://twitcasting.tv/livearb/movie/657171565",target:"_blank"}},[a("img",{attrs:{src:"https://twitcasting.tv/livearb/thumb/657171565"}})]),a("p",[t._v("2020.12.19 Episode #8")])]),a("li",[a("a",{attrs:{href:"https://twitcasting.tv/livearb/movie/649856545",target:"_blank"}},[a("img",{attrs:{src:"https://twitcasting.tv/livearb/thumb/649856545"}})]),a("p",[t._v("2020.11.06 Episode #7")])]),a("li",[a("a",{attrs:{href:"https://www.pscp.tv/ShimofuriGroove/1BdGYnrzMwEJX",target:"_blank"}},[a("img",{attrs:{src:"/images/06/periscope_cover_06.jpg"}})]),a("p",[t._v("2020.10.21 Episode #6")])]),a("li",[a("a",{attrs:{href:"https://twitcasting.tv/livearb/movie/640005998",target:"_blank"}},[a("img",{attrs:{src:"https://twitcasting.tv/livearb/thumb/640005998"}})]),a("p",[t._v("2020.09.11 Episode #5")])]),a("li",[a("a",{attrs:{href:"https://www.pscp.tv/ShimofuriGroove/1MYxNPylzPLGw",target:"_blank"}},[a("img",{attrs:{src:"/images/01/periscope_cover_01.jpg"}})]),a("p",[t._v("2019.12.08 Episode #1")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-center"},[a("a",{staticClass:"btn btn-primary",attrs:{href:"https://twitter.com/ShimofuriGroove",target:"_blank",role:"button"}},[t._v("Twitter")])])}],h=a("85cc"),f=a("0418"),g=a("fd2d"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"col-md-6"},[a("Timeline",{attrs:{id:t.user_id,sourceType:"profile",options:{tweetLimit:"3"}}})],1)},w=[],_=a("7397"),y={components:{Timeline:_["Timeline"]},data:function(){return{user_id:"ShimofuriGroove"}}},k=y,O=(a("4026"),Object(l["a"])(k,b,w,!1,null,"69e79fc4",null)),E=O.exports,G={name:"Home",components:{Layer:h["a"],Header:f["a"],Footer:g["a"],Tweet:E},methods:{track:function(){this.$gtag.pageview({page_path:"/"})}}},J=G,Y=Object(l["a"])(J,p,d,!1,null,null,null),C=Y.exports,D=a("a584");n["a"].use(m["a"]),n["a"].use(v["a"]);var S=[{path:"/",name:"山形県米沢市の贅沢ジューシーな音楽、DJイベント、霜降りGROOVE | Shimofuri Groove, DJ event based in Yonezawa Yamagata",component:C},{path:"/2019-12-08",name:"山形県米沢市のDJイベント、霜降りGROOVE episode #1 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",component:function(){return a.e("chunk-a0c3ea10").then(a.bind(null,"9125"))}},{path:"/2020-01-31",name:"山形県米沢市のDJイベント、霜降りGROOVE episode #2 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",component:function(){return a.e("chunk-a09d1c3e").then(a.bind(null,"be67"))}},{path:"/2020-07-22",name:"山形県米沢市のDJイベント、霜降りGROOVE episode #3 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",component:function(){return a.e("chunk-a0c614c8").then(a.bind(null,"5c4e"))}},{path:"/2020-08-26",name:"山形県米沢市のDJイベント、霜降りGROOVE episode #4 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",component:function(){return a.e("chunk-a09dbab0").then(a.bind(null,"c130"))}},{path:"/2020-09-11",name:"山形県米沢市のDJイベント、霜降りGROOVE episode #5 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",component:function(){return a.e("chunk-a09e0482").then(a.bind(null,"ae86"))}},{path:"/2020-10-21",name:"山形県米沢市のDJイベント、霜降りGROOVE episode #6 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",component:function(){return a.e("chunk-a0c76e62").then(a.bind(null,"553e"))}},{path:"/2020-11-06",name:"山形県米沢市のDJイベント、霜降りGROOVE episode #7 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",component:function(){return a.e("chunk-a09c8a7e").then(a.bind(null,"d9b1"))}},{path:"/2020-12-19",name:"山形県米沢市のDJイベント、霜降りGROOVE episode #8 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",component:function(){return a.e("chunk-a0c9a862").then(a.bind(null,"1e75"))}},{path:"/2020-12-25",name:"山形県米沢市のDJイベント、霜降りGROOVE episode #9 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",component:function(){return a.e("chunk-a0c8d346").then(a.bind(null,"2ab3"))}}],x=new m["a"]({scrollBehavior:function(t,e,a){return a||{x:0,y:0}},mode:"history",base:"",routes:S});n["a"].use(D["a"],{config:{id:"UA-151890460-1"},pageTrackerTemplate:function(t){return{page_title:t.name,page_path:t.path}}},x);var j=x,L=a("b25f"),R=a.n(L);a("4989"),a("ab8b");n["a"].use(R.a),n["a"].config.productionTip=!1,a("9299"),new n["a"]({router:j,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"85cc":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{style:{backgroundPosition:"0px "+t.layer1+"px"},attrs:{id:"layer1"}}),a("div",{style:{backgroundPosition:"0px "+t.layer2+"px"},attrs:{id:"layer2"}})])},r=[],i={name:"Layer",data:function(){return{scrollY:0,layer1:0,layer2:0}},mounted:function(){window.addEventListener("scroll",this.calculateScrollY),window.addEventListener("scroll",this.parallaxLayer1),window.addEventListener("scroll",this.parallaxLayer2)},beforeDestroy:function(){window.removeEventListener("scroll",this.calculateScrollY),window.removeEventListener("scroll",this.parallaxLayer1),window.removeEventListener("scroll",this.parallaxLayer2)},methods:{calculateScrollY:function(){this.scrollY=window.scrollY},parallaxLayer1:function(){this.layer1=window.scrollY/20},parallaxLayer2:function(){this.layer2=window.scrollY/50}}},o=i,s=a("2877"),l=Object(s["a"])(o,n,r,!1,null,null,null);e["a"]=l.exports},9299:function(t,e,a){},"9c0c":function(t,e,a){},fd2d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("p",{staticClass:"text-center"},[t._v("©"+t._s(t.year)+", "),a("span",{staticClass:"dunkin"},[t._v("霜降りGROOVE")]),t._v(".")])])},r=[],i={name:"Footer",computed:{year:function(){return(new Date).getFullYear()}}},o=i,s=a("2877"),l=Object(s["a"])(o,n,r,!1,null,null,null);e["a"]=l.exports}});
//# sourceMappingURL=app.a8841397.js.map