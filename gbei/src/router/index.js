import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Ecology from '@/views/Ecology'
import Team from '@/views/Team'
import Ahead from '@/views/Ahead'
import Contact from '@/views/Contact'
import GTB from '@/views/GTB'
import store from '@/store/index'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  name: 'Home',
  component: Home,
  meta: {
    title: '京贝尔官方网站',
    enTitle: 'GBEI OFFICIAL WEBSITE'
  }
}, {
  path: '/about',
  name: 'About',
  component: About,
  meta: {
    title: '关于京贝尔 - 京贝尔官方网站',
    enTitle: 'About GBEI - GBEI OFFICIAL WEBSITE'
  }
}, {
  path: '/team',
  name: 'Team',
  component: Team,
  meta: {
    title: '人才力量 - 京贝尔官方网站',
    enTitle: 'Talent power - GBEI OFFICIAL WEBSITE'
  }
}, {
  path: '/ecology',
  name: 'Ecology',
  component: Ecology,
  meta: {
    title: '京贝尔生态 - 京贝尔官方网站',
    enTitle: 'GBEI Ecology - GBEI OFFICIAL WEBSITE'
  }
}, {
  path: '/ahead',
  name: 'Ahead',
  component: Ahead,
  meta: {
    title: '展望京贝尔 - 京贝尔官方网站',
    enTitle: 'Outlook GBEI - GBEI OFFICIAL WEBSITE'
  }
}, {
  path: '/contact',
  name: 'Contact',
  component: Contact
}, {
  path: '/gtb',
  name: 'GTB',
  component: GTB,
  meta: {
    title: 'GTB - 京贝尔官方网站',
    enTitle: 'GTB - GBEI OFFICIAL WEBSITE'
  }
}]

const scrollBehavior = function (to, form, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return {
      x: 0,
      y: 0
    }
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior
})

router.beforeEach((to, from, next) => {
  let lang = store.state.lang
  if (lang == 'en') {
    document.title = to.meta.enTitle
  } else {
    document.title = to.meta.title
  }

  next()
})

export default router