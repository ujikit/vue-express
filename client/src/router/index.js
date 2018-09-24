import Vue from 'vue'
import VueRouter from 'vue-router'
// Component
import IndexComponent from '@/components/Index'
import LoginComponent from '@/components/Login'
import SecureComponent from '@/components/Secure'

export var router = new VueRouter()
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexComponent
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    },
    {
      path: '/secure',
      name: 'secure',
      component: SecureComponent
    },
    // Not found route
    {
      path: '*',
      component: IndexComponent
    }
  ]
})
