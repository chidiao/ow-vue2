import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Group from '@/views/Group'
import History from '@/views/History'
import Case from '@/views/Case'
import CaseDetail from '@/views/Case/detail'
import Contact from '@/views/Contact'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: Home },
  { path: '/group', name: 'group', component: Group },
  { path: '/history', name: 'history', component: History },
  { path: '/case', name: 'case', component: Case },
  { path: '/case/:id', name: 'case', component: CaseDetail },
  { path: '/contact', name: 'contact', component: Contact },
]

const router = new VueRouter({
  routes
})

export default router
