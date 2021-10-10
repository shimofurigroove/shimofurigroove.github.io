<template>
	<div class="home">
		<Layer />
		<Header />
		<div class="container">
			<section>
				<div class="page-header" id="banner">
					<div class="my-4">
						<h1>🍖米沢のDJイベント、霜降りGROOVE episode #7</h1>
						<p>
							ご来場くださった方、配信見てくださった方、Live Arbさんありがとうございました！<br />
							DJで参加のHICHAさん、もらけさん、いつもありがとうございます！<br />
							当日ライブ配信のアーカイブは、<a href="https://twitcasting.tv/livearb/movie/649856545" target="_blank">「こちら」</a>。
						</p>
					</div>
					<ul class="img-gallery">
						<li><img src="/images/07/01.png" /></li>
						<li><img src="/images/07/02.png" /></li>
						<li><img src="/images/07/03.png" /></li>
						<li><img src="/images/07/04.png" /></li>
					</ul>
				</div>
				<div class="row">
					<div class="col-md-6">
						<p>
							<a href="https://twitcasting.tv/livearb/movie/649856545" target="_blank"><img src="/images/07/flyer.png"/></a>
						</p>
					</div>
					<div class="col-md-6">
						<p>
							当日ライブ配信のアーカイブは、<a href="https://twitcasting.tv/livearb/movie/649856545" target="_blank">「こちら」</a>。
							<br />
							<br />
							今回は30分交代を2巡するタイムテーブルでしたが、出番が2回あるとお酒を呑み過ぎないのでとてもよかったです。<br /><br />
							イベントを重ねるごとにフライヤーの迷走感が増してきてる点も、注目ポイントです。<br /><br />
							終盤にHICHAさんがケツメイシの手紙を流した時は、泣きそうになりました。ノスタルジックな気持ちを数日引きずるかと思います。
							<br />
							<br />
							（以上、さがわ談）
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
				<h2>トラックリスト</h2>
				<h3>さがわ</h3>
				<p>
					Heartbeat (Slom Remix) - Childish Gambino<br />
					J Cole - ATM ( ms mavy remix)<br />
					Maio (Feat. Neguim.) - sango<br />
					the good life. - oxy_gin<br />
					Pôr do Sol Parte 2 (Bonus) - sango<br />
					Jarreau Vandal - Saturday Love (Jaël 140 Remix) - JAEL<br />
					Yummy (Edit) - Kevas<br />
					When I Met You - Ta-ku<br />
					Drive Me Crazy (feat. Vic Mensa) - KAYTRANADA<br />
					Yap Yap - Vic Mensa<br />
					YAKYAKYAKYAK - CastMusic<br />
					WAP (Nick Bike 'Milli' Edit)(Acap Out)(Dirty) - Cardi B & Megan Thee Stallion<br />
					Japs in Paris - 3TOS<br />
					（後半は何かけたかメモってませんでした）
				</p>
				<h3>くわけん</h3>
				<p>
					Submarse ???<br />
					ERAST GEORGIANINTOKYO<br />
					HUNGER JAPPCATS<br />
					RHYMESTER ザ･グレート･アマチュアリズム (Oops! 2 Mystery Men Warehouse's Head Banger Remix)<br />
					PIZZICATO FIVE feat.You The Rock / 東京の合唱<br />
					GEORGE KRANZ DIN DAA DAA<br />
					Machinedrum SXLND<br />
					DUDE ENERGY SOME DESIRE<br />
					AERA LEAVING THE FICTION<br />
					DRY AND HEAVY The Athlete<br />
					JAMES PANTS NEVERLAND<br />
					tofubeats feat. PUNPEE Les Aventuriers<br />
					LIBRO 生命線<br />
					STUTUS Changes feat.JJJ<br />
					Minnie Riperton Oh By The Way<br />
					Soul Supreme Keep Moving<br />
					UA リズム<br />
					KAKATO リズム<br />
					DJ TAN ATOMO<br />
					Freddie Hubbard POVO<br />
					DJ ZINC SKA<br />
					Aspect Soul Lady<br />
					Groovemanspot NEURALGIA<br />
					coffee & cigarette band from c&c with friends<br />
					Joe Thomas Coco<br />
					ROGER I Want To Be Your Man<br />
					THE NOTORIOUS B.I.G JUICY
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
		title: "山形県米沢市のDJイベント、霜降りGROOVE episode #7 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
		meta: [
			{
				name: "description",
				content: "お越しくださった方、配信みてくださった方、誠にありがとうございました！",
			},
			{
				property: "og:url",
				content: "https://shimofurigroove.github.io/2020-11-06",
			},
			{
				property: "og:title",
				content: "山形県米沢市のDJイベント、霜降りGROOVE episode #7 | Shimofuri Groove, DJ event based in Yonezawa Yamagata",
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
				page_path: "/2020-11-06",
			});
		},
	},
};
</script>
