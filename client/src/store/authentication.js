import router from '../router';
import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    registerEmail: 'xzw',
    registerPassword: 'xzw123',
    registerError: null,
    token: null,
  },
  actions: {
    register({ commit, state }) {
      return HTTP().post('/v0/auth/register', {
        email: state.registerEmail,
        password: state.registerPassword,
      })
        .then(({ data }) => {
          commit('setToken', data.token);
          router.push('/');
        });
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setRegisterError(state, error) {
      state.registerError = error;
    },
    setRegisterEmail(state, email) {
      state.registerEmail = email;
    },
    setRegisterPassword(state, password) {
      state.registerPassword = password;
    },
  },
};
