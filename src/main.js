import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import FC from './fc'


Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

Vue.prototype.$config = { api: 'http://192.168.100.160/mm/testdataapi.php' }
Vue.prototype.$FC = FC

if (process.env.NODE_ENV === 'development') {
  Vue.prototype.$config.api = 'http://192.168.56.101/mm/testdataapi.php'
}

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
