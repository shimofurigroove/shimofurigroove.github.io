<template>
  <div class="home">
    <Layer/>
    <Header/>
    <div class="container">
        <section>
            <div class="page-header" id="banner">
                <div class="my-4">
                    <h1>🍖米沢のDJイベント、霜降りGROOVE episode #2</h1>
                    <p>ご参加くださいましたみなさんありがとうございました！DJに興味をもった方増えてくれましたでしょうか？また、フリーDJでは、様々なジャンルの音楽を聞けて、とても刺激になりました！また次回も是非開催したいですね。</p>
                </div>
                <div class="row img-gallery">
                    <div class="col-6 col-md-4"><img src="/images/02/05.jpg" class="img-fluid"><br>Jpopでつないでみよう！</div>
                    <div class="col-6 col-md-4"><img src="/images/02/01.jpg" class="img-fluid"><br>店員さんもDJ体験。</div>
                    <div class="col-6 col-md-4"><img src="/images/02/04.jpg" class="img-fluid"><br>Launch Pad Mini MK3でフィンガードラム。</div>
                    <div class="col-6 col-md-4"><img src="/images/02/02.jpg" class="img-fluid"><br>フリーDJにご参加くださった皆様ありがとうございます！</div>
                    <div class="col-6 col-md-4"><img src="/images/02/03.jpg" class="img-fluid"><br>いろんなジャンルの音楽を聞くことができました。</div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <p><a href="/images/02/flyer.png" target="_blank"><img src="/images/02/flyer.png" class="img-fluid"></a></p>
                </div>
                <div class="col-md-6">
                    <p>
                        米沢のDJイベントが増えてほしい、という思いでDJに興味がある方に向けてDJ体験会を開催します！<br>
                        Open DJの時間では、レコード、PC、コントローラーなどお持ちの方は自由にDJしてOKです。<br>
                        ※Open DJは先着順です。時間や進行の都合上、DJできない場合もあります。ご了承ください🙇<br>
                        <br>
                        常設予定の機器<br>
                        SL-1200MK3 x 2、DJM-S3、Traktor Scratch A6、Traktor Kontrol X1MK2
                    </p>
                    <div class='embed-container'><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12591.061337750092!2d140.1117743!3d37.9125474!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x44f6ae37e307a919!2z6YeR54aK6aOf5aCC!5e0!3m2!1sja!2sjp!4v1576427433769!5m2!1sja!2sjp" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe></div>
                </div>
                <BackToTop/>
            </div>
        </section>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Layer from '@/components/Layer.vue'
import Header from '@/components/Header.vue'
import BackToTop from '@/components/BackToTop.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  metaInfo: {
    title: '霜降りGROOVE episode #2',
    meta: [
      {
        name: "description",
        content: "ご参加くださいましたみなさんありがとうございました！DJに興味をもった方増えてくれましたでしょうか？また、フリーDJでは、様々なジャンルの音楽を聞けて、とても刺激になりました！また次回も是非開催したいですね。"
      },
      {
        property: "og:url",
        content: "https://shimofurigroove.github.io/2020-01-31"
      },
      {
        property: "og:title",
        content: "霜降りGROOVE episode #2"
      },
      {
        property: "og:description",
        content: "ご参加くださいましたみなさんありがとうございました！DJに興味をもった方増えてくれましたでしょうか？また、フリーDJでは、様々なジャンルの音楽を聞けて、とても刺激になりました！また次回も是非開催したいですね。"
      }
    ]
  },
  components: {
    Layer,
    Header,
    BackToTop,
    Footer
  },
  methods: {
    track () {
      this.$gtag.pageview({
        page_path: '/2020-01-31',
      })
    }
  }
}
</script>
