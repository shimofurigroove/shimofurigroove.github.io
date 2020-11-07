<template>
  <div class="home">
    <Layer/>
    <Header/>
    <div class="container">
        <section>
            <div class="page-header" id="banner">
                <div class="my-4">
                    <h1>🍖米沢のDJイベント、霜降り<span class="dunkin">GROOVE</span></h1>
                    <p>各DJが今一番ハマってる、贅沢ジューシーな音楽をセレクト。<br>好きなジャンルを楽しんだり、敢えて普段は聞かないジャンルを聞いて、新たな発見をしたり。お気軽にお楽しみください。</p>
                    <p>Shimofuri Groove, a DJ event based in Yonezawa."Shimofuri" means marbled fat. It is a word commonly used to express high-ranking beef, like Yonezawa beef, one of the three major Japanese beef brands. In this DJ event, the DJ will serve you the fresh shimofuri groove.</p>
                </div>
            </div>
        </section>
        <section>
            <h2 id="sns">🐮SNS</h2>
            <p class="text-center">
                <a class="btn btn-primary" href="https://twitter.com/ShimofuriGroove" target="_blank" role="button">ついったー</a>
            </p>
        </section>
        <section>
            <h2 id="events">🦅開催予定 Upcoming Events</h2>
            <div class="row">
                <div class="col-md-12">
                  <p>2020/12/19（土）@LIVE ARBさんでDJイベント開催予定です。<br>
                      2020/12/25（金）@金熊食堂さんでDJ体験、オープンDJブース（フリーDJ）開催予定です。</p>
                </div>
            </div>
        </section>
        <section>
            <h2 id="movie">🍒配信 Live Stream</h2>
            <p>以下、過去回の配信動画です。作業用BGMに是非！</p>
            <p>Check out the archives of the live streams from the links below.</p>
            <ul>
                <li><a href="https://twitcasting.tv/livearb/movie/649856545" target="_blank">2020/11/06 Episode #7</a></li>
                <li><a href="https://www.pscp.tv/ShimofuriGroove/1BdGYnrzMwEJX" target="_blank">2020/10/21 Episode #6</a></li>
                <li><a href="https://twitcasting.tv/livearb/movie/640005998" target="_blank">2020/09/11 Episode #5</a></li>
                <li><a href="https://www.pscp.tv/ShimofuriGroove/1MYxNPylzPLGw" target="_blank">2019/12/08 Episode #1</a></li>
            </ul>
        </section>
        <section>
            <h2 id="archive">⛄️過去回 Archives</h2>
            <p>過去回の詳細情報や写真をまとめてます。</p>
            <p>Information and photos of past events.</p>
            <ul>
                <li><router-link to="/2020-11-06">2020/11/06 Episode #7</router-link></li>
                <li><router-link to="/2020-10-21">2020/10/21 Episode #6</router-link></li>
                <li><router-link to="/2020-09-11">2020/09/11 Episode #5</router-link></li>
                <li><router-link to="/2020-08-26">2020/08/26 Episode #4</router-link></li>
                <li><router-link to="/2020-07-22">2020/07/22 Episode #3</router-link></li>
                <li><router-link to="/2020-01-31">2020/01/31 Episode #2</router-link></li>
                <li><router-link to="/2019-12-08">2019/12/08 Episode #1</router-link></li>
            </ul>
        </section>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Layer from '@/components/Layer.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Layer,
    Header,
    Footer
  },
  methods: {
    track () {
      this.$gtag.pageview({
        page_path: '/',
      })
    }
  }
}
</script>
