import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antd from 'ant-design-vue'
import { message } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import 'fullpage.js/dist/fullpage.css'
import VueFullPage from 'vue-fullpage.js'
import http from '@/utils/http.js'
Vue.use(Antd)
Vue.prototype.$msg = message
Vue.prototype.$http = http
Vue.use(VueAwesomeSwiper)
Vue.use(VueFullPage)

import Block from '@/components/Block.vue'
Vue.component('Block', Block)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
