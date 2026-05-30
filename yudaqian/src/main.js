import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'animate.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
setTimeout(() => {
  AOS.init();
}, 1000);
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import { message } from 'ant-design-vue'
Vue.use(Antd);
Vue.prototype.$msg = message
import 'swiper/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

// http
import http from '@/http'
Vue.prototype.$http = http

// vuex
Vue.prototype.$store = store

// goto
function goto(path) {
  this.$router.push(path)
}
Vue.prototype.$goto = goto

// 全局组件
import btitle from "@/components/block-title";
import xtitle from '@/components/xing-title'
Vue.component('btitle', btitle)
Vue.component('xtitle', xtitle)

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
