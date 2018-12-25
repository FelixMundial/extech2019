import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/IndexPage'
import RegistrationPage from '@/components/RegistrationPage'
import Admin from '@/components/Admin'
import ProgramsPage from '@/components/ProgramsPage'
import TourPage from '@/components/TourPage'
import CommitteePage from '@/components/CommitteePage'
import NewsPage from '@/components/NewsPage'
import AccomPage from '@/components/AccomPage'
import ContactPage from '@/components/ContactPage'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/registration',
      name: 'RegistrationPage',
      component: RegistrationPage
    },
    {
      path: '/news',
      name: 'News',
      component: NewsPage
    },
    {
      path: '/committee',
      name: 'Committee',
      component: CommitteePage
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactPage
    },
    {
      path: '/accommodation',
      name: 'Accom',
      component: AccomPage
    },
    {
      path: '/exploration',
      name: 'Tours',
      component: TourPage
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/programs',
      name: 'Programs',
      component: ProgramsPage
    }
  ]
})
