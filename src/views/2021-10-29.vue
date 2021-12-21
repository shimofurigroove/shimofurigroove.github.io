<template>
	<div class="home">
		<Layer />
		<Header />
		<div class="container">
			<section>
				<div class="page-header" id="banner">
					<div class="my-4">
						<h1><span class="emoji">🍖</span>米沢市のDJイベント、霜降りGROOVE episode #19</h1>
						<p>
							いつもカフェラボさんのお洒落な店内に緊張しちゃいます。HICHAさん、くわけんさんはオールバイナルセットはいつもながら素敵でした！  
							DJに興味を持ってくれた方もいらっしゃって嬉しかったです！ぜひいつか霜降りGROOVEでDJデビューしてほしいです！
						</p>
					</div>
					<ul class="img-gallery">
						<li><img src="/images/19/1.jpg" /></li>
						<li><img src="/images/19/2.jpg" /></li>
						<li><img src="/images/19/3.jpg" /></li>
						<li><img src="/images/19/4.jpg" /></li>
					</ul>
				</div>
				<div class="row">
					<div class="col-md-6">
						<p><img src="/images/19/flyer.jpg" /></p>
					</div>
					<div class="col-md-6">
						<div class="embed-container">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12590.587847422114!2d140.1100125!3d37.9153138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf7409470d44e9b!2sCAFE%20LABORATORY!5e0!3m2!1sja!2sjp!4v1612671790829!5m2!1sja!2sjp"
								width="600"
								height="450"
								frameborder="0"
								style="border:0;"
								allowfullscreen=""
								aria-hidden="false"
								tabindex="0"
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
		title: "山形県米沢市のDJイベント、霜降りGROOVE episode #19 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		meta: [
			{
				name: "description",
				content: "今回DJはくわけん、さがわに加えてHICHAさんも参戦！",
			},
			{
				property: "og:url",
				content: "https://shimofurigroove.github.io/2021-10-29",
			},
			{
				property: "og:title",
				content: "山形県米沢市のDJイベント、霜降りGROOVE episode #19 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
			},
			{
				property: "og:description",
				content: "今回DJはくわけん、さがわに加えてHICHAさんも参戦！",
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
				page_path: "/2021-10-29",
			});
		},
	},
};
</script>
