import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuelidate from 'vuelidate';
import { VueMaskDirective } from 'v-mask';
import './assets/scss/index.scss';

Vue.config.productionTip = false;

Vue.directive('mask', VueMaskDirective);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
