<template>
  <div class="home">
    <Layer/>
    <Header/>
    <div class="container">
        <section>
            <div class="page-header" id="banner">
                <div class="my-4">
                    <h1>🍖米沢のDJイベント、霜降りGROOVE episode #1</h1>
                    <p>記念すべき第1回はArbさんで開催しました！みなさんありがとうございました！<br>
                    当日ライブ配信していた動画は<a href="https://www.pscp.tv/ShimofuriGroove/1MYxNPylzPLGw?t=3m6s" target="_blank">「こちら」</a>。</p>
                </div>
            </div>
        </section>
        <section>
            <div class="row">
                <div class="col-md-6">
                    <p><a href="/images/01/flyer_v5.png" target="_blank"><img src="/images/01/flyer_v5.png"></a></p>
                </div>
                <div class="col-md-6">
                    <p>
                        2019/12/8/SUN 13:00-19:00<br>
                        at LIVE ARB [b:arb]<br>
                        1,500円 1ドリンク付 12歳以下無料 再入場可<br>
                        13:00 さがわ (Drinking Buddies) Indie Pop,Nu-Disco <br>
                        14:00 まゆしぃ(ときめき♡メタモルフォーゼ) J-pop,アニソン<br>
                        15:00 HICHA (LAGOON) JAZZ,SOUL,FUNK,LATIN,etc<br>
                        16:00 KUWAKEN (OSHOWSHINIGHT) HIPHOP,etc<br>
                        17:00 TAN (OSHOWSHINIGHT) HIPHOP,JAZZ<br>
                        18:00 KESSO (EDIT JOHNSON)
                    </p>
                    <div class='embed-container'><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3147.8016911132613!2d140.1099035!3d37.9116977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8af03ec396aaab%3A0x30deca2d8b11396b!2sLive%20ARB!5e0!3m2!1sja!2sjp!4v1572711206202!5m2!1sja!2sjp" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe></div>
                    <h3>フライヤー</h3>
                    <p>フライヤーを置いてくださった店舗さん！※当イベントの内容には一切関与してません。敬称略、五十音順。</p>
                    <ul>
                        <li><a href="https://goo.gl/maps/aV4Hi9UuXXZ2dJ9C6" target="_blank">CAFE LABORATORY</a></li>
                        <li><a href="https://goo.gl/maps/gPhmMPMzPyhDqACS8" target="_blank">金熊食堂</a></li>
                        <li><a href="https://goo.gl/maps/uxGjXTKMvqvDkVBQ8" target="_blank">ToNna TowN</a></li>
                        <li><a href="https://g.page/hangoutyonezawa?share" target="_blank">HANG OUT</a></li>
                        <li><a href="https://goo.gl/maps/WwAkVkfTWFGbqHWi9" target="_blank">Live ARB</a></li>
                        <li><a href="https://goo.gl/maps/9JigffZgVkk7pXYS7" target="_blank">レイブンクロー</a></li>
                    </ul>
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
    title: '霜降りGROOVE episode #1',
    meta: [
      {
        name: "description",
        content: "記念すべき第1回はArbさんで開催しました！みなさんありがとうございました！"
      },
      {
        property: "og:url",
        content: "https://shimofurigroove.github.io/2019-12-08"
      },
      {
        property: "og:title",
        content: "霜降りGROOVE episode #1"
      },
      {
        property: "og:description",
        content: "記念すべき第1回はArbさんで開催しました！みなさんありがとうございました！"
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
        page_path: '/2019-12-08',
      })
    }
  }
}
</script>
