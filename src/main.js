// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import app module
import App from './App'
//import router module
import router from './router'
import plugin from './plugin/plugin'
//import vuex module
import store from '@/store'
//import bootstrapVue module
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
// import 'vue-awesome/icons/flag'
// // or import all icons if you don't care about bundle size
// import 'vue-awesome/icons'
// /* Register component with one of 2 methods */
// import Icon from 'vue-awesome/components/Icon'
// // globally (in your main .js file)
// Vue.component('v-icon', Icon)
// import VueCarousel from 'vue-carousel';
// Vue.use(VueCarousel);

// // vue select dropdown
// import vSelect from 'vue-select'
// import 'vue-select/dist/vue-select.css';
// Vue.component('v-select', vSelect)

// //vue toast message
// import iziToast from 'iziToast';
// import iziToastcss from '../static/css/izitoast.css';
// import iziToastjs from '../static/js/izitoast.min.js';
// window.toast= iziToastjs;

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  plugin,
  components: { App },
  template: '<App/>'
})
