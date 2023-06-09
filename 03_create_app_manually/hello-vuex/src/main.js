console.log('src/main.js')
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

Vue.config.productionTip = false

Axios.defaults.baseURL = 'https://dev-orderservice.baedalgeek.kr'
Vue.prototype.axios = Axios
Vue.prototype.DEON = 'Adores January Garnet'

Vue.prototype.EventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
