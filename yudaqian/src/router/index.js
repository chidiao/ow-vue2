import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import News from '@/views/News'
import NewsDetail from '@/views/NewsDetail'
import Team from '@/views/Team'
import Course from '@/views/Course'
import School from '@/views/School'
import Huanjing from '@/views/Huanjing'
import AboutUs from '@/views/AboutUs'
import Yuyue from '@/views/Yuyue'

import Kecheng from '@/views/Classification'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '豫大千教育，您身边的个性化创新教育服务专家 '
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '豫大千教育，您身边的个性化创新教育服务专家 '
    }
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    meta: {
      title: '豫大千教育，您身边的个性化创新教育服务专家 '
    }
  },
  {
    path: '/news/:id',
    name: 'NewsDetail',
    component: NewsDetail,
    meta: {
      title: '豫大千教育，您身边的个性化创新教育服务专家 '
    }
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
    meta: {
      title: '豫大千教育，您身边的个性化创新教育服务专家 '
    }
  },
  {
    path: '/course',
    name: 'Course',
    component: Course,
    meta: {
      title: '豫大千教育，暑假班，文化课培训，亲子夏令营'
    }
  },
  {
    path: '/course/:id',
    name: 'Course',
    component: Course,
    meta: {
      title: '豫大千教育，您身边的个性化创新教育服务专家 '
    }
  },
  {
    path: '/school',
    name: 'School',
    component: School,
    meta: {
      title: '豫大千教育，您身边的个性化创新教育服务专家 '
    }
  },
  {
    path: '/huanjing',
    name: 'Huanjing',
    component: Huanjing,
    meta: {
      title: '豫大千教育，您身边的个性化创新教育服务专家 '
    }
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs,
    meta: {
      title: '豫大千教育，您身边的个性化创新教育服务专家 '
    }
  },
  {
    path: '/yuyue/:id',
    name: 'Yuyue',
    component: Yuyue,
    meta: {
      title: '豫大千教育，您身边的个性化创新教育服务专家 '
    }
  },
  {
    path: '/kecheng',
    name: 'Kecheng',
    component: Kecheng,
    meta: {
      title: '豫大千教育，您身边的个性化创新教育服务专家 '
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router