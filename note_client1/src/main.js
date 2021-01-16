import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import setAuthToken from './setAuthToken'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

Vue.config.productionTip = false

const token = localStorage.getItem('auth_token')
setAuthToken(token)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
