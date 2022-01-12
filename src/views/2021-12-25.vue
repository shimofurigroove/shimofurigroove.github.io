<template>
	<div class="home">
		<Layer />
		<Header />
		<div class="container">
			<section>
				<div class="page-header" id="banner">
					<div class="my-4">
						<h1><span class="emoji">🍖</span>米沢市のDJイベント、霜降りGROOVE episode #22</h1>
						<p>
							クリスマスにいつもお世話になってる金熊食堂さんでイベントさせていただきました！<br>
							当日は吹雪の中、ソルフェジオさんもDJとして駆け付けてくださいました！ありがとうございました！<br>
							常連さんと一緒に楽しく踊りながらクリスマスの夜を過ごさせていただきました！
						</p>
					</div>
					<ul class="img-gallery">
						<li><img src="/images/22/1.jpg" /><br />1番手さがわ</li>
						<li><img src="/images/22/2.jpg" /><br />2番手もらけさん</li>
						<li><img src="/images/22/3.jpg" /><br />3番手ソルフェジオさん</li>
						<li><img src="/images/22/4.jpg" /><br />4番手くわけんさん</li>
					</ul>
				</div>
				<div class="row">
					<div class="col-md-6">
						<p><img src="/images/22/flyer.jpg" /></p>
					</div>
					<div class="col-md-6">
						<div class="embed-container">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12533.07125199015!2d140.3229477!3d38.2500947!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2327d0f7dcff178b!2sraf-rec!5e0!3m2!1sja!2sjp!4v1639393790974!5m2!1sja!2sjp"
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
		title: "山形県米沢市のDJイベント、霜降りGROOVE episode #22 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		meta: [
			{
				name: "description",
				content: "金熊食堂さんでクリスマスパーリー！",
			},
			{
				property: "og:url",
				content: "https://shimofurigroove.github.io/2021-12-25",
			},
			{
				property: "og:title",
				content: "山形県米沢市のDJイベント、霜降りGROOVE episode #22 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
			},
			{
				property: "og:description",
				content: "金熊食堂さんでクリスマスパーリー！",
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
				page_path: "/2021-12-25",
			});
		},
	},
};
</script>
