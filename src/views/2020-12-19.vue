<template>
	<div class="home">
		<Layer />
		<Header />
		<div class="container">
			<section>
				<div class="page-header" id="banner">
					<div class="my-4">
						<h1><span class="emoji">🍖</span>米沢市のDJイベント、霜降りGROOVE episode #8</h1>
						<p>
							配信を見てくださった方、Live Arbさんありがとうございました！<br />
							サックスセッションで出演してくださったCHI3CHEEさん、DJで参加のYOSHIKIさん、HICHAさん、もらけさん、大雪の中ありがとうございました！<br />
							当日ライブ配信のアーカイブは、<a href="https://twitcasting.tv/livearb/movie/657171565" target="_blank">「こちら」</a>。
						</p>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<p>
							<a href="https://twitcasting.tv/livearb/movie/657171565" target="_blank"><img src="/images/08/flyer.png"/></a>
						</p>
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
				<h2>トラックリスト</h2>
				<h3>さがわ</h3>
				<p>
					XMAS MODE (Dirty) - esentrik<br />
					damn Right - AUDREY NUNA<br />
					Nickelback-Unit - esentrik<br />
					Juicy - Don Mayor<br />
					Ticklish - 02 Oh Boy 2020 - Ticklish<br />
					Kanye West x Krane - The Good Life Never Stops (MXTT HXLL Edit) - MXTT HXLL<br />
					P-LO - Type Beat (mattress edit) (sunroof remaster)_01<br />
					Jorja Smith - Come over (MXTT HXLL & Watermellow Edit) - MXTT HXLL<br />
					H(olla at ya boy)<br />
					Toosie Slide (Quinoa Jones Edit)<br />
					Jenevieve - B.B Powder (Jun-iLL x Cangrejo Remix) FINAL<br />
					Jennifer Lopez x Full Crate - Get Right (MXTT HXLL 'Krs' Edit) - MXTT HXLL<br />
					Rock Your Body (Nick Bike Stripped Acap Intro Edit) - Justin Timberlake<br />
					Sunday Service (f r a n c h i s e. Intro)<br />
					Kendrick Lamar x The Kount - Knight Alright (MXTT HXLL 'Trap Boogaloo' Edit) - MXTT HXLL<br />
					Marvin Gaye - I want you (Power Soul RMX)<br />
					Touch The Sky (Quinoa Jones Edit)<br />
					Finesse (VHOOR Flip) - VHOOR<br />
					Raphael Saadiq Ft. Q - Tip Get Involved (Jean Tonique Remix)<br />
					Selfish (Double A Flip) - 𝐝Ø𝔲𝔟ʟ𝔢 ₳<br />
					What You Need (Instrumental) - kaytranada<br />
					A Tribe Called Quest - Find A Way (Double A Flip) - 𝐝Ø𝔲𝔟ʟ𝔢 ₳<br />
					Soleil - Jiggy (Up. Records)<br />
					blackstar - respiration (quick tele edit)2.0<br />
					Forget Me Nots (RSCO edition)<br />
					the light edit - DNNY KAY<br />
					IIFFYYUULLUUVVMEE - Thaddeus <br />
					※無理してたくさんかけようとしたら雑になってしまいました。反省。
				</p>
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
		title: "山形県米沢市のDJイベント、霜降りGROOVE episode #8 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		meta: [
			{
				name: "description",
				content: "お越しくださった方、配信みてくださった方、誠にありがとうございました！",
			},
			{
				property: "og:url",
				content: "https://shimofurigroove.github.io/2020-12-19",
			},
			{
				property: "og:title",
				content: "山形県米沢市のDJイベント、霜降りGROOVE episode #8 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
			},
			{
				property: "og:description",
				content: "お越しくださった方、配信みてくださった方、誠にありがとうございました！",
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
				page_path: "/2020-12-19",
			});
		},
	},
};
</script>
