import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import JQuery from 'jquery'
window.$ = window.JQuery = JQuery
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import 'axios'

Vue.config.productionTip = false

Vue.filter('mayusculas', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.toUpperCase() 
})
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
