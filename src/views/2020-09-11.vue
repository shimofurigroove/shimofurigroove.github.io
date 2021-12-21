<template>
	<div class="home">
		<Layer />
		<Header />
		<div class="container">
			<section>
				<div class="page-header" id="banner">
					<div class="my-4">
						<h1><span class="emoji">🍖</span>米沢のDJイベント、霜降りGROOVE episode #5</h1>
						<p>
							ご来場くださった方、配信見てくださった方、Arbさんありがとうございました！DJで参加のHICHAさん、もらけさん、いつもありがとうございます！<br />
							飲みすぎましたー<br />
							当日ライブ配信していた動画は<a href="https://twitcasting.tv/livearb/movie/640005998" target="_blank">「こちら」</a>。
						</p>
					</div>
					<ul class="img-gallery">
						<li><img src="/images/05/01.png" /></li>
						<li><img src="/images/05/02.png" /></li>
						<li><img src="/images/05/03.jpg" /></li>
					</ul>
				</div>
				<div class="row">
					<div class="col-md-6">
						<p>
							<a href="https://twitcasting.tv/livearb/movie/640005998" target="_blank"><img src="/images/05/flyer.jpg"/></a><br />
							当日ライブ配信していた動画は<a href="https://twitcasting.tv/livearb/movie/640005998" target="_blank">「こちら」</a>
						</p>
					</div>
					<div class="col-md-6">
						<p>
							仕事で疲れたとき、いい音楽を聞きながら、のんびり飲める場所や他愛のないことを話せる相手って大事。<br />
							どこかで読んだけど、そういうことができる場所や友達を探すのが大人には大切ですよね。
						</p>
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
		title: "山形県米沢市のDJイベント、霜降りGROOVE episode #5 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		meta: [
			{
				name: "description",
				content: "久しぶりのLive Arbさん！お越しくださった方、配信みてくださった方、誠にありがとうございました！",
			},
			{
				property: "og:url",
				content: "https://shimofurigroove.github.io/2020-09-11",
			},
			{
				property: "og:title",
				content: "山形県米沢市のDJイベント、霜降りGROOVE episode #5 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
			},
			{
				property: "og:description",
				content: "久しぶりのLive Arbさん！お越しくださった方、配信みてくださった方、誠にありがとうございました！",
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
				page_path: "/2020-09-11",
			});
		},
	},
};
</script>
