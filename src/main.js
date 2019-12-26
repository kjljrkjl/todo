import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import router from './router.js'
import store from './store'

Vue.config.productionTip = false

Vue.use(Vuex);


router.beforeEach((to, from, next) => {
  //console.log(to)
  if(to.path == '/shouye'){
    if(localStorage.getItem('uid')){
      next()
    }else{
      next('/login')
    }
  }
  else{
    next();
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
