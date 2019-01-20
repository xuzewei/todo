import 'vuetify/dist/vuetify.min.css';

import { sync } from 'vuex-router-sync';
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import Panel from './components/Panel.vue';

Vue.use(Vuetify);
sync(store, router);

Vue.config.productionTip = false;

Vue.component('Panel', Panel);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
