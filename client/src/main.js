import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import Panel from './components/Panel.vue';

import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader

Vue.use(Vuetify);
Vue.config.productionTip = false;

Vue.component('Panel', Panel);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
