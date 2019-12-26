import Vue from 'vue'
import Router from 'vue-router'
import axios from './utils/axios.js'
import Index from './components/Index.vue'
import Login from './components/Login.vue'
import Reg from './components/Reg.vue'

Vue.use(Router)
Vue.prototype.$axios = axios

export default new Router({
  mode:"hash",
  base:process.env.BASE_URL, 
  routes: [
    {
      path: '/shouye',
      name: '',
      component: Index,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg,
    },
    {
      path: '/',
      redirect: '/login',
    },
  ]
})


