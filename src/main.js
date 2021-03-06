import Vue from 'vue'
import App from './App.vue'
import router from './router'
import smoothScroll from 'vue-smooth-scroll'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(smoothScroll)

Vue.config.productionTip = false

require('@/assets/sass/main.scss')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
