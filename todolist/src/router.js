import Vue from 'vue'
import Router from 'vue-router'
import axios from './utils/http.js'
import Index from './views/Index.vue'
import Login from './views/Login.vue'
import Reg from './views/Reg.vue'

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


