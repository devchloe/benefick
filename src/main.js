import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/assets/scss/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTag,
  faWonSign,
  faPlus,
  faSearchPlus,
  faSave,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.config.productionTip = false;

library.add(faTag);
library.add(faWonSign);
library.add(faPlus);
library.add(faSearchPlus);
library.add(faSave);
library.add(faCheck);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
