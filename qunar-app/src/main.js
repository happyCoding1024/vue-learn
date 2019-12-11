import Vue from 'vue';
import fastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';
import App from './App';
import router from './router';

require('swiper/css/swiper.css');

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  component: { App },
  render: h => h(App),
});
