<template>
	<div class="home">
		<Layer />
		<Header />
		<div class="container">
			<section>
				<div class="page-header" id="banner">
					<div class="my-4">
						<h1>🍖米沢市のDJイベント、霜降りGROOVE episode #10</h1>
						<p>
							新年一発目にして10回目！<br>
							金熊食堂さん、DJのみなさんいつもありがとうございます！DJ体験にも参加してくださった方、ありがとうございました！<br>
							DJコントローラー（見事に機種とDJソフトがバラバラ）3つによるB2Bはめちゃくちゃ楽しかったです！
						</p>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<p><img src="/images/10/flyer.png" /></p>
					</div>
					<div class="col-md-6">
						<p>
							あけましておめでとうございます！<br />
							今年ものんびりDJの練習会のようなことを金熊さんで開催します。PC、コントローラーなど持参していただき自由にDJしてOKです。<br />
							※ご連絡先をご記入いただいた後、Open DJにご参加ください。<br />
							※Open DJは先着順です。時間や進行の都合上、DJできない場合もあります。ご了承ください。
						</p>
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
		title: "山形県米沢市のDJイベント、霜降りGROOVE episode #10 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		meta: [
			{
				name: "description",
				content: "記念すべき10回目！金熊食堂さん、お越しくださった方、誠にありがとうございました！",
			},
			{
				property: "og:url",
				content: "https://shimofurigroove.github.io/2021-01-27",
			},
			{
				property: "og:title",
				content: "山形県米沢市のDJイベント、霜降りGROOVE episode #10 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
			},
			{
				property: "og:description",
				content: "記念すべき10回目！金熊食堂さん、お越しくださった方、誠にありがとうございました！",
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
				page_path: "/2021-01-27",
			});
		},
	},
};
</script>
