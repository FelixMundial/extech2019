import Vue from 'vue'
import Router from 'vue-router'
import ExTech from '@/components/ExTech'
import RegistrationPage from '@/components/RegistrationPage'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ExTech',
      component: ExTech
    },
    {
      path: '/registration',
      name: 'RegistrationPage',
      component: RegistrationPage
    }
  ]
})
