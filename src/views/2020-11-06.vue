<template>
  <div class="home">
    <Layer/>
    <Header/>
    <div class="container">
        <section>
            <div class="page-header" id="banner">
                <div class="my-4">
                    <h1>🍖米沢のDJイベント、霜降りGROOVE episode #6</h1>
                    <p>ご来場くださった方、配信見てくださった方、Live Arbさんありがとうございました！<br>
                    DJで参加のHICHAさん、もらけさん、いつもありがとうございます！<br>
                    当日ライブ配信のアーカイブは、<a href="https://twitcasting.tv/livearb/movie/649856545" target="_blank">「こちら」</a>。
                    </p>
                </div>
                <div class="row img-gallery">
                    <div class="col-6 col-md-3"><img src="/images/07/01.png" class="img-fluid"></div>
                    <div class="col-6 col-md-3"><img src="/images/07/02.png" class="img-fluid"></div>
                    <div class="col-6 col-md-3"><img src="/images/07/03.png" class="img-fluid"></div>
                    <div class="col-6 col-md-3"><img src="/images/07/04.png" class="img-fluid"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <p><a href="https://twitcasting.tv/livearb/movie/649856545" target="_blank"><img src="/images/07/flyer.png" class="img-fluid"></a></p>
                </div>
                <div class="col-md-6">
                    <p>
                      当日ライブ配信のアーカイブは、<a href="https://twitcasting.tv/livearb/movie/649856545" target="_blank">「こちら」</a>。
                      <br>
                      <br>
                      今回は30分交代を2巡するタイムテーブルでしたが、出番が2回あるとお酒を呑み過ぎないのでとてもよかったです。<br><br>
                      イベントを重ねるごとにフライヤーの迷走感が増してきてる点も、注目ポイントです。<br><br>
                      終盤にHICHAさんがケツメイシの手紙を流した時は、泣きそうになりました。ノスタルジックな気持ちを数日引きずるかと思います（さがわ談）。
                    </p>
                    <div class='embed-container'><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3147.8016911132613!2d140.1099035!3d37.9116977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8af03ec396aaab%3A0x30deca2d8b11396b!2sLive%20ARB!5e0!3m2!1sja!2sjp!4v1572711206202!5m2!1sja!2sjp" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe></div>
                    <BackToTop/>
                </div>
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
    title: '霜降りGROOVE episode #7',
    meta: [
      {
        name: "description",
        content: "お越しくださった方、配信みてくださった方、誠にありがとうございました！"
      },
      {
        property: "og:url",
        content: "https://shimofurigroove.github.io/2020-11-06"
      },
      {
        property: "og:title",
        content: "霜降りGROOVE episode #7"
      },
      {
        property: "og:description",
        content: "お越しくださった方、配信みてくださった方、誠にありがとうございました！"
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
        page_path: '/2020-11-06',
      })
    }
  }
}
</script>
