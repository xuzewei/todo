import Vue from 'vue';
import Router from 'vue-router';
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import Projects from './views/Projects.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },

  ],
});
