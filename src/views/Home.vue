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
                    <p><a href="/images/05/flyer.jpg" target="_blank"><img src="/images/05/flyer.jpg" class="img-fluid"></a></p>
                </div>
                <div class="col-md-6">
                    <p>
                      仕事で疲れたとき、いい音楽を聞きながら、のんびり飲める場所や他愛のないことを話せる相手って大事。<br>
                      どこかで読んだけど、そういうことができる場所や友達を探すのが大人には大切ですよね。
                    </p>
                    <div class='embed-container'><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3147.8016911132613!2d140.1099035!3d37.9116977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8af03ec396aaab%3A0x30deca2d8b11396b!2sLive%20ARB!5e0!3m2!1sja!2sjp!4v1572711206202!5m2!1sja!2sjp" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe></div>
                </div>
            </div>
            <p>2020/9/11@Live Arbさんの次は、2020/10/21@金熊食堂さんで開催予定です。</p>
        </section>
        <section>
            <h2 id="movie">🍒配信 Live Stream</h2>
            <p>過去回の配信道をアーカイブしてます。</p>
            <p>Check out the archives of the live streams from the link below.</p>
            <p class="text-center">
                <a class="btn btn-primary" href="https://www.pscp.tv/ShimofuriGroove/" target="_blank" role="button">Periscope</a>
            </p>
        </section>
        <section>
            <h2 id="archive">⛄️過去回 Archives</h2>
            <ul>
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
