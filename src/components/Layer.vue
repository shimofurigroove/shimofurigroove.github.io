<template>
    <div>
        <div id="layer1" v-bind:style="{backgroundPosition: '0px ' + layer1 + 'px'}"></div>
        <div id="layer2" v-bind:style="{backgroundPosition: '0px ' + layer2 + 'px'}"></div>
    </div>
</template>

<script>
export default {
  name: 'Layer',
  data() {
   return {
    scrollY: 0,
    layer1: 0,
    layer2: 0
   }
  },
  mounted() {
   window.addEventListener('scroll', this.calculateScrollY);
   window.addEventListener('scroll', this.parallaxLayer1);
   window.addEventListener('scroll', this.parallaxLayer2);
  },
  beforeDestroy() {
   window.removeEventListener('scroll', this.calculateScrollY);
   window.removeEventListener('scroll', this.parallaxLayer1);
   window.removeEventListener('scroll', this.parallaxLayer2);
  },
  methods: {
   calculateScrollY() {
    this.scrollY = window.scrollY;
   },
   parallaxLayer1() {
     this.layer1 = window.scrollY / 20;
   },
   parallaxLayer2() {
     this.layer2 = window.scrollY / 50;
   }
  },
}
</script>