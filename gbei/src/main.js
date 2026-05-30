import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from '@/utils/http.js'

// 插件
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
Vue.use(Antd)
import 'swiper/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import 'animate.css'
import WebpPlugun from 'vue-webp-plugin'
Vue.use(WebpPlugun)

// 国际化
const i18n = new VueI18n({
  locale: store.state.lang,
  messages: {
    'zh': require('@/assets/lang/zh.js'),
    'en': require('@/assets/lang/en.js')
  }
})

// 全局组件
import Gap from '@/components/Gap'
Vue.component("Gap", Gap)
import BigTitle from '@/components/BigTitle'
Vue.component("BigTitle", BigTitle)

Vue.prototype.$http = http
Vue.prototype.$store = store

Vue.config.productionTip = false

router.afterEach(to => {
  let {
    hash
  } = to
  hash && setTimeout(() => {
    let anchor = document.getElementById(hash.slice(1))
    anchor.scrollIntoView({
      behavior: 'smooth'
    });
  }, 1);
})

new Vue({
  router,
  store,
  i18n,
  mounted() {
    document.dispatchEvent(new Event('prerender'))
  },
  render: h => h(App)
}).$mount('#app')