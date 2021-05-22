<template>
	<div class="home">
		<Layer />
		<Header />
		<div class="container">
			<section>
				<div class="page-header" id="banner">
					<div class="my-4">
						<h1>🍖米沢市のDJイベント、霜降りGROOVE episode #14</h1>
						<p>
							カフェラボさんでは2回目となるイベントでした！<br>今回はタンテも常設し、配信もしてみました！※相変わらず配信は課題ありです…。
							体験会にお越しいただいた方、カフェラボさんありがとうございました！<br>
							HICHAさん、もらけさんもいつもありがとうございます！<br>
						</p>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<p><img src="/images/14/flyer.png" /></p>
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
		title: "山形県米沢市のDJイベント、霜降りGROOVE episode #14 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		meta: [
			{
				name: "description",
				content: "米沢市のカフェラボさんでDJ体験・フリーDJ開催！",
			},
			{
				property: "og:url",
				content: "https://shimofurigroove.github.io/2021-03-25",
			},
			{
				property: "og:title",
				content: "山形県米沢市のDJイベント、霜降りGROOVE episode #14 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
			},
			{
				property: "og:description",
				content: "米沢市のカフェラボさんでDJ体験・フリーDJ開催！",
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
				page_path: "/2021-04-24",
			});
		},
	},
};
</script>
