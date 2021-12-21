<template>
	<div class="home">
		<Layer />
		<Header />
		<div class="container">
			<section>
				<div class="page-header" id="banner">
					<div class="my-4">
						<h1><span class="emoji">🍖</span>米沢市のDJイベント、霜降りGROOVE episode #21</h1>
						<p>
							山形市RAF-RECさんでの初めての米沢GROOVE出張編！お越しくださったお客様、RAF-RECさんありがとうございました！！！！DJする側もとっても楽しい一夜でした！
						</p>
					</div>
					<ul class="img-gallery">
						<li><img src="/images/21/1.jpg" /><br />霜降りGROOVE at 山形市RAF-REC</li>
						<li><img src="/images/21/2.jpg" /><br />2番手もらけさん</li>
						<li><img src="/images/21/3.jpg" /><br />3番手HICHAさん</li>
						<li><img src="/images/21/4.jpg" /><br />4番手くわけんさん</li>
						<li><img src="/images/21/5.jpg" /><br />盛り上がったB2B</li>
					</ul>
				</div>
				<div class="row">
					<div class="col-md-6">
						<p><img src="/images/21/flyer.jpg" /></p>
					</div>
					<div class="col-md-6">
						<div class="embed-container">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12533.07118199015!2d140.3229477!3d38.2500947!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2327d0f7dcff178b!2sraf-rec!5e0!3m2!1sja!2sjp!4v1639393790974!5m2!1sja!2sjp"
								width="600"
								height="450"
								style="border:0;"
								allowfullscreen=""
								loading="lazy"
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
		title: "山形県米沢市のDJイベント、霜降りGROOVE episode #21 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		meta: [
			{
				name: "description",
				content: "山形市RAF-RECさんでの初めての米沢GROOVE出張編！",
			},
			{
				property: "og:url",
				content: "https://shimofurigroove.github.io/2021-12-18",
			},
			{
				property: "og:title",
				content: "山形県米沢市のDJイベント、霜降りGROOVE episode #21 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
			},
			{
				property: "og:description",
				content: "山形市RAF-RECさんでの初めての米沢GROOVE出張編！",
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
				page_path: "/2021-12-18",
			});
		},
	},
};
</script>
