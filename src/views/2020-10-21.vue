<template>
  <div class="home">
    <Layer/>
    <Header/>
    <div class="container">
        <section>
            <div class="page-header" id="banner">
                <div class="my-4">
                    <h1>🍖米沢のDJイベント、霜降りGROOVE episode #6</h1>
                    <p>ご来場くださった方、配信見てくださった方、金熊食堂さんありがとうございました！DJで参加のもらけさん、いつもありがとうございます！<br>
                    DJ体験盛り上がってました！<br>
                    霜降りGROOVEのDJ体験イベントでは初の試みで会場の様子を配信してみました！金熊食堂さんで定期的に開催してる当イベントがどんな雰囲気なのか少しでもお伝えできてたら嬉しいです。
                    当日ライブ配信していた会場の様子は<a href="https://www.pscp.tv/ShimofuriGroove/1BdGYnrzMwEJX" target="_blank">「こちら」</a>。</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <p><a href="https://www.pscp.tv/ShimofuriGroove/1BdGYnrzMwEJX" target="_blank"><img src="/images/06/flyer_01.png" class="img-fluid"></a><br>
                    当日ライブ配信していた会場の様子は<a href="https://www.pscp.tv/ShimofuriGroove/1BdGYnrzMwEJX" target="_blank">「こちら」</a></p>
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
    title: '霜降りGROOVE episode #6',
    meta: [
      {
        name: "description",
        content: "お越しくださった方、配信みてくださった方、誠にありがとうございました！"
      },
      {
        property: "og:url",
        content: "https://shimofurigroove.github.io/2020-10-21"
      },
      {
        property: "og:title",
        content: "霜降りGROOVE episode #6"
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
        page_path: '/2020-10-21',
      })
    }
  }
}
</script>
