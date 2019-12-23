import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import storage from './utils/webStorage'
Vue.prototype.$storage=storage
Vue.config.productionTip = false


// 
//  storage.setItem('hehe',[1,2,3],30*1000)
// let result=storage.getItem('hehe')
// console.log(result)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
