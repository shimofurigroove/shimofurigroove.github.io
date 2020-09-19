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
                <div class="col-md-6">
                    <p><a href="/images/06/flyer_01.jpg" target="_blank"><img src="/images/06/flyer_01.png" class="img-fluid"></a></p>
                </div>
                <div class="col-md-6">
                    <p>
                        Wax on wax off<br>
                        ミスターミヤギの言葉を胸に、日々レコードを擦る霜降り道場。<br>
                        <br>
                        DJ好きや、DJに興味がある方、一緒に練習しませんか？<br>
                        Open DJの時間では、レコード、PC、コントローラーなど持参していただき自由にDJしてOKです。<br>
                        ※Open DJは先着順です。時間や進行の都合上、DJできない場合もあります。ご了承ください。🙇<br>
                        <br>
                        常設予定の機器<br>
                        SL-1200MK3 x 2、DJM-S3、Traktor Scratch A6、Traktor Kontrol X1MK2<br>
                        <br>
                        配信するかもしれません。
                    </p>
                    <div class='embed-container'><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12591.061337750092!2d140.1117743!3d37.9125474!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x44f6ae37e307a919!2z6YeR54aK6aOf5aCC!5e0!3m2!1sja!2sjp!4v1576427433769!5m2!1sja!2sjp" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe></div>
                </div>
            </div>
        </section>
        <section>
            <h2 id="movie">🍒配信 Live Stream</h2>
            <p>過去回の配信道をアーカイブしてます。</p>
            <p>Check out the archives of the live streams from the link below.</p>
            <p class="text-center">
                <a class="btn btn-primary" href="https://www.pscp.tv/ShimofuriGroove/" target="_blank" role="button">Periscope</a>
            </p>
            <p class="text-center">
                <a class="btn btn-primary" href="https://twitcasting.tv/livearb/movie/640005998" target="_blank" role="button">Twitcasting</a>
            </p>
        </section>
        <section>
            <h2 id="archive">⛄️過去回 Archives</h2>
            <ul>
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
