<template>
  <div id="app">
    <transition mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    title:
      "霜降りGROOVE 米沢のDJイベント | Shimofuri Groove, DJ event based in Yonezawa",
    titleTemplate: "%s",
    meta: [
      { charset: "utf-8" },
      {
        name: "description",
        content: "山形県米沢市の贅沢ジューシーな音楽、DJイベント、霜降りGROOVE | Shimofuri Groove, DJ event based in Yonezawa Yamagata"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        property: "og:url",
        content: "https://shimofurigroove.github.io/"
      },
      {
        property: "og:title",
        content: "霜降りGROOVE 米沢のDJイベント | Shimofuri Groove, DJ event based in Yonezawa"
      },
      {
        property: "og:description",
        content: "山形県米沢市の贅沢ジューシーな音楽、DJイベント、霜降りGROOVE | Shimofuri Groove, DJ event based in Yonezawa Yamagata"
      },
      {
        property: "og:image",
        content: "https://shimofurigroove.github.io/img/og.jpg"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:site_name",
        content: "霜降りGROOVE"
      },
      {
        property: "twitter:card",
        content: "summary_large_image"
      },
      {
        property: "twitter:site:id",
        content: "@ShimofuriGroove"
      },
      {
        property: "twitter:creator",
        content: "@ShimofuriGroove"
      }
    ]
  },
};
</script>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>