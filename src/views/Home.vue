<template>
	<div class="home">
		<Layer />
		<Header />
		<div class="container">
			<section>
				<div class="page-header" id="banner">
					<div class="my-4">
						<h1>
							🍖米沢のDJイベント、霜降り
							<span class="dunkin">GROOVE</span>
						</h1>
						<!-- <rotate-beef></rotate-beef> -->
						<p>
							各DJが今一番ハマってる、贅沢ジューシーな音楽をセレクト。
							<br />
							好きなジャンルを楽しんだり、敢えて普段は聞かないジャンルを聞いて、新たな発見をしたり。お気軽にお楽しみください。
						</p>
						<p>
							Shimofuri Groove, a DJ event based in Yonezawa."Shimofuri" means marbled fat. It is a word commonly used to express
							high-ranking beef, like Yonezawa beef, one of the three major Japanese beef brands. In this DJ event, the DJ will serve
							you the fresh shimofuri groove.
						</p>
					</div>
				</div>
			</section>
			<section id="events">
				<h2>🦅開催予定 Upcoming Events</h2>
				<ul class="date-list">
					<li>
						<p class="date">2021.02.20 sat</p>
						<div class="row">
							<div class="col-md-6">
								<p><img src="/images/11/flyer.png" /></p>
							</div>
							<div class="col-md-6">
								<p>
									カフェラボさんで初イベントです！体調に十分注意して、美味しいドリンクやスイーツと一緒にDJを楽しみましょー。
								</p>
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
					</li>
					<li>
						<p class="date">2021.02.26 fri</p>
						<div class="row">
							<div class="col-md-6">
								<p><img src="/images/12/flyer.png" /></p>
							</div>
							<div class="col-md-6">
								<p>
									2021年初アーブさん！あいにくの配信オンリーですが、ぜひみなさんのベストプレイスでDJのオススメの楽曲をお気軽にお楽しみください！<br>
									当日ライブ配信は、<a href="https://twitcasting.tv/livearb/" target="_blank">「こちら」</a>でご覧いただけます。
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
					</li>
					<li>
						<p class="date">2021.03.24 wed</p>
						<p class="info">
							@金熊食堂 DJ体験、オープンDJブース（フリーDJ）
						</p>
					</li>
				</ul>
			</section>
			<section id="movie">
				<h2>🍒配信 Live Stream</h2>
				<p>以下、過去回の配信動画です。作業用BGMに是非！</p>
				<p>Check out the archives of the live streams from the links below.</p>
				<ul class="img-gallery video-gallery">
					<li>
						<a href="https://twitcasting.tv/livearb/movie/657171565" target="_blank"
							><img src="https://twitcasting.tv/livearb/thumb/657171565" />
						</a>
						<p>2020.12.19 Episode #8</p>
					</li>
					<li>
						<a href="https://twitcasting.tv/livearb/movie/649856545" target="_blank"
							><img src="https://twitcasting.tv/livearb/thumb/649856545" />
						</a>
						<p>2020.11.06 Episode #7</p>
					</li>
					<li>
						<a href="https://www.pscp.tv/ShimofuriGroove/1BdGYnrzMwEJX" target="_blank"
							><img src="/images/06/periscope_cover_06.jpg" />
						</a>
						<p>2020.10.21 Episode #6</p>
					</li>
					<li>
						<a href="https://twitcasting.tv/livearb/movie/640005998" target="_blank"
							><img src="https://twitcasting.tv/livearb/thumb/640005998" />
						</a>
						<p>2020.09.11 Episode #5</p>
					</li>
					<li>
						<a href="https://www.pscp.tv/ShimofuriGroove/1MYxNPylzPLGw" target="_blank"
							><img src="/images/01/periscope_cover_01.jpg" />
						</a>
						<p>2019.12.08 Episode #1</p>
					</li>
				</ul>
			</section>
			<section id="archive">
				<h2>⛄️過去回 Archives</h2>
				<p>過去回の詳細情報や当日の様子をご覧いただけます！</p>
				<p>Click the flyers below for information and photos of past events.</p>
				<ul class="img-gallery">
					<li>
						<router-link to="/2021-01-27">
							<img src="/images/10/flyer.png" />
						</router-link>
					</li>
					<li>
						<router-link to="/2020-12-25">
							<img src="/images/09/flyer.png" />
						</router-link>
					</li>
					<li>
						<router-link to="/2020-12-19">
							<img src="/images/08/flyer.png" />
						</router-link>
					</li>
					<li>
						<router-link to="/2020-11-06">
							<img src="/images/07/flyer.png" />
						</router-link>
					</li>
					<li>
						<router-link to="/2020-10-21">
							<img src="/images/06/flyer_01.png" />
						</router-link>
					</li>
					<li>
						<router-link to="/2020-09-11">
							<img src="/images/05/flyer.jpg" />
						</router-link>
					</li>
					<li>
						<router-link to="/2020-08-26">
							<img src="/images/04/flyer.jpg" />
						</router-link>
					</li>
					<li>
						<router-link to="/2020-07-22">
							<img src="/images/03/flyer.jpg" />
						</router-link>
					</li>
					<li>
						<router-link to="/2020-01-31">
							<img src="/images/02/flyer.png" />
						</router-link>
					</li>
					<li>
						<router-link to="/2019-12-08">
							<img src="/images/01/flyer_v5.png" />
						</router-link>
					</li>
				</ul>
			</section>
			<section id="sns">
				<h2>🐮SNS</h2>
				<p class="text-center">
					<a class="btn btn-primary" href="https://twitter.com/ShimofuriGroove" target="_blank" role="button">Twitter</a>
				</p>
				<Tweet id="ShimofuriGroove"></Tweet>
			</section>
		</div>
		<Footer />
	</div>
</template>

<script>
// @ is an alias to /src
import Layer from "@/components/Layer.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
// import RotateBeef from "@/components/RotateBeef";
import Tweet from "@/components/TwitterPanel.vue";

export default {
	name: "Home",
	components: {
		Layer,
		Header,
		Footer,
		// RotateBeef,
		Tweet,
	},
	methods: {
		track() {
			this.$gtag.pageview({
				page_path: "/",
			});
		},
	},
};
</script>
