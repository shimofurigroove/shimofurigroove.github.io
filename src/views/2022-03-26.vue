<template>
	<div class="home">
		<Layer />
		<Header />
		<div class="container">
			<section>
				<div class="page-header" id="banner">
					<div class="my-4">
						<h1><span class="emoji">🍖</span>米沢市のDJイベント、霜降りGROOVE episode #24</h1>
						<p>
							お越しくださった方、配信を見てくださった方、アーブさんありがとうございました！！！<br>
							霜降りGROOVE初登場のAmichang（の代理の人）とZeluさんを迎え、実ははじめてアーブさんのホールで開催！いつも以上に幅広いジャンルのパーティーでした！久しぶりに大音量で音楽を楽しめました。
						</p>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<p><img src="/images/24/flyer.png" /></p>
					</div>
					<div class="col-md-6">
						<div class="embed-container">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3147.8016911132613!2d140.1099035!3d37.9116977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8af03ec396aaab%3A0x30deca2d8b11396b!2sLive%20ARB!5e0!3m2!1sja!2sjp!4v1572711206202!5m2!1sja!2sjp"
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
		title: "山形県米沢市のDJイベント、霜降りGROOVE episode #24 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		meta: [
			{
				name: "description",
				content: "お越しくださった方、配信を見てくださった方、アーブさんありがとうございました！",
			},
			{
				property: "og:url",
				content: "https://shimofurigroove.github.io/2022-01-28",
			},
			{
				property: "og:title",
				content: "山形県米沢市のDJイベント、霜降りGROOVE episode #24 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
			},
			{
				property: "og:description",
				content: "お越しくださった方、配信を見てくださった方、アーブさんありがとうございました！",
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
				page_path: "/2022-03-26",
			});
		},
	},
};
</script>
