<template>
  <div class="home">
    <Layer/>
    <Header/>
    <div class="container">
        <section>
            <div class="page-header" id="banner">
                <div class="my-4">
                    <h1>🍖米沢のDJイベント、霜降りGROOVE episode #3</h1>
                    <p>ご参加くださいましたみなさんありがとうございました！B'zで大盛りあがりな一夜でした笑。</p>
                </div>
                <div class="row">
                    <div class="col-md-4 col-6"><img src="/images/03/01.jpg" class="img-fluid"></div>
                </div>
            </div>
        </section>
        <section>
            <div class="row">
                <div class="col-md-6">
                    <p><a href="/images/03/flyer.jpg" target="_blank"><img src="/images/03/flyer.jpg" class="img-fluid"></a></p>
                </div>
                <div class="col-md-6">
                    <p>
                        米沢のDJイベントが増えてほしい、という思いで、DJ好きや興味がある方に向けたDJ体験・練習会を開催します！<br>
                        Open DJの時間では、PC、コントローラーなど持参していただき自由にDJしてOKです。<br>
                        ※Open DJは先着順です。時間や進行の都合上、DJできない場合もあります。ご了承ください。🙇<br>
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
  components: {
    Layer,
    Header,
    BackToTop,
    Footer
  }
}
</script>
