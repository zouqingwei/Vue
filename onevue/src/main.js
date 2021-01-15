// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css'// global css
import './assets/css/index.scss' 
import 'es6-promise/auto'
import store from './store'
import VueParticles from 'vue-particles'  
Vue.use(VueParticles)  
Vue.use(ElementUI)
Vue.config.productionTip = false

import axios from 'axios'
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
import '@/icons'
axios.interceptors.request.use(config=>{
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})  
Vue.prototype.$http=axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
