<template>
	<div class="home">
		<Layer />
		<Header />
		<div class="container">
			<section>
				<div class="page-header" id="banner">
					<div class="my-4">
						<h1><span class="emoji">🍖</span>米沢市のDJイベント、霜降りGROOVE episode #23</h1>
						<p>
							久しぶりに記憶が飛びました笑。飲んだお酒の量が楽しさを物語ってました！
						</p>
					</div>
					<ul class="img-gallery">
						<li><img src="/images/23/1.jpg" /></li>
						<li><img src="/images/23/2.jpg" /></li>
						<li><img src="/images/23/3.jpg" /></li>
					</ul>
				</div>
				<div class="row">
					<div class="col-md-6">
						<p>
							<img src="/images/23/flyer.jpg" />
						</p>
					</div>
					<div class="col-md-6">
						<div class="embed-container">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25181.48219314706!2d140.1303359!3d37.91441845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8af03f988c0001%3A0x34db0d69291e73ca!2zVG9ObmEgVG93TiAo44OI44Oz44OK44K_44Km44OzKQ!5e0!3m2!1sja!2sjp!4v1641998113653!5m2!1sja!2sjp"
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
		title: "山形県米沢市のDJイベント、霜降りGROOVE episode #23 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		meta: [
			{
				name: "description",
				content: "マニアックなレコードやCDがたくさんあるトンナタウンさんでDJ！",
			},
			{
				property: "og:url",
				content: "https://shimofurigroove.github.io/2022-01-28",
			},
			{
				property: "og:title",
				content: "山形県米沢市のDJイベント、霜降りGROOVE episode #23 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
			},
			{
				property: "og:description",
				content: "マニアックなレコードやCDがたくさんあるトンナタウンさんでDJ！",
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
				page_path: "/2022-01-28",
			});
		},
	},
};
</script>
