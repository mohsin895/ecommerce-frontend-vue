import Vue from 'vue';
import axios from 'axios';
// import VueAxios from 'vue-axios';
// Vue.use(VueAxios, axios);
import moment from 'moment';
import numeral from "numeral";
import Toaster from 'v-toaster';

import 'v-toaster/dist/v-toaster.css';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'vue-awesome/icons/flag'
// or import all icons if you don't care about bundle size
import 'vue-awesome/icons'
/* Register component with one of 2 methods */
import Icon from 'vue-awesome/components/Icon'
// globally (in your main .js file)
Vue.component('v-icon', Icon)
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

// vue select dropdown
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
Vue.component('v-select', vSelect)

//vue toast message
import iziToast from 'iziToast';
import iziToastcss from '../../static/css/izitoast.css';
import iziToastjs from '../../static/js/izitoast.min.js';
window.toast= iziToastjs;

//ant design 
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

// image magnifire
import ImageMagnifier from 'vue-image-magnifier'
Vue.use(ImageMagnifier)

// vue swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)



// vue svg icons
import icons from "v-svg-icons";
Vue.component("icon", icons);

//vue editor
import Vue2Editor from "vue2-editor";
Vue.use(Vue2Editor);

Vue.use(Toaster, {timeout: 3000});

Vue.config.productionTip = false;

import Paginate from 'vuejs-paginate';
Vue.component('paginate', Paginate);

import VueLazyload from 'vue-lazyload';
 
Vue.use(VueLazyload);
 
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
});


const base = axios.create({
	baseURL: "http://localhost/loyelApi/public/api/"
  // baseURL: "https://loyeltrade.com/loyelApi/public/api/"
});

Vue.prototype.$http = base;


Vue.filter("statusLabel", function(status) {
    if(status==1)
      return 'Active';
    if(status==2)
      return 'Inactive';
    if(status==0)
      return 'Deleted';
});

Vue.filter("yesNo", function(value) {
  if(value==1)
    return 'Yes';
  else
    return 'No';
});
Vue.filter("oldNew", function(value) {
  if(value==1)
    return 'New';
  else
    return 'Old';
});

Vue.filter("sellPrice",function(stockInfos){
    let sellPrice=0;
      stockInfos.forEach(stockInfo=>{
          sellPrice=parseInt(stockInfo.sellRate);
      });
    return parseInt(sellPrice);
});
Vue.filter("formatNumberWithOutDecimal",function(value){
	return numeral(value).format("0");
});
Vue.filter("formatNumberWithDecimal", function(value) {
  return numeral(value).format(0.0);
});

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY");
  }
});
Vue.filter("formatDateTime", function(value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY hh:mm A");
  }
});

Vue.filter("formatTime", function(value) {
  if (value) {
    return moment(String(value)).format("hh:mm A");
  }
});

Vue.filter("formatYear", function(value) {
  if (value) {
    return moment(String(value)).format("YYYY");
  }
});
Vue.filter("imageApis",function(productImages){
        
        let thumbs=[];
        let normal_size=[];

        productImages.forEach(productImage=>{
              thumbs.push({'id':productImage.id,'url':productImage.baseUrl+productImage.productImage});
              normal_size.push({'id':productImage.id,'url':productImage.baseUrl+productImage.productImage});
        });

        return {  
            'thumbs': thumbs,
            'normal_size':normal_size 
        };

});


try {
  window.Popper = require("popper.js").default;
  window.$ = window.jQuery = require("jquery");
  // require("bootstrap");
} catch (e) {}

export default {};