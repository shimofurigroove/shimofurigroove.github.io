<template>
	<div class="home">
		<Layer />
		<Header />
		<div class="container">
			<section>
				<div class="page-header" id="banner">
					<div class="my-4">
						<h1><span class="emoji">🍖</span>米沢市のDJイベント、霜降りGROOVE episode #13</h1>
						<p>
							あいにくDJ体験、フリーDJは中止(T_T)<br>
							金熊食堂さんで美味しいごはんを食べながら、TWITCH経由の配信形式でお送りいたしました。（アーカイブ動画保管しておくのを失念してました💦）<br>
							唐揚げ定食、マグロのカマ焼き美味しかった！
						</p>
					</div>
					<ul class="img-gallery">
						<li><img src="/images/13/01.jpg" /></li>
						<li><img src="/images/13/02.jpg" /></li>
						<li><img src="/images/13/03.jpg" /></li>
					</ul>
				</div>
				<div class="row">
					<div class="col-md-6">
						<p><img src="/images/13/flyer.png" /></p>
					</div>
					<div class="col-md-6">
						<div class="embed-container">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12591.061337750092!2d140.1117743!3d37.9125474!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x44f6ae37e307a919!2z6YeR54aK6aOf5aCC!5e0!3m2!1sja!2sjp!4v1576427433769!5m2!1sja!2sjp"
								width="600"
								height="450"
								frameborder="0"
								style="border:0;"
								allowfullscreen=""
							></iframe>
						</div>
					</div>
				</div>
				<BackToTop />
			</section>
		</div>
		<Footer />
	</div>
</template>

<script>
// @ is an alias to /src
import Layer from "@/components/Layer.vue";
import Header from "@/components/Header.vue";
import BackToTop from "@/components/BackToTop.vue";
import Footer from "@/components/Footer.vue";

export default {
	name: "Home",
	metaInfo: {
		title: "山形県米沢市のDJイベント、霜降りGROOVE episode #13 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		meta: [
			{
				name: "description",
				content: "米沢市の金熊食堂さんで美味しいごはんを食べながらのTWITCH配信！",
			},
			{
				property: "og:url",
				content: "https://shimofurigroove.github.io/2021-03-25",
			},
			{
				property: "og:title",
				content: "山形県米沢市のDJイベント、霜降りGROOVE episode #13 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
			},
			{
				property: "og:description",
				content: "米沢市の金熊食堂さんで美味しいごはんを食べながらのTWITCH配信！",
			},
		],
	},
	components: {
		Layer,
		Header,
		BackToTop,
		Footer,
	},
	methods: {
		track() {
			this.$gtag.pageview({
				page_path: "/2021-03-25",
			});
		},
	},
};
</script>
