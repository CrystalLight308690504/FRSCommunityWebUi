import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue'
import router from './routers/'
import store from './store/'
import navigation from "components/navigation/"
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI);
Vue.component('navigation',navigation)
Vue.config.productionTip = false

var vue =new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
