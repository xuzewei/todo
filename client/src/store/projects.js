// import router from '../router';
import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    newProjectName: null,
  },
  actions: {
    createProject({ commit, state }) {
      return HTTP().post('/v0/projects', {
        title: state.newProjectName,
      });
    },
  },
  getters: {
  },
  mutations: {
    setNewProjectName(state, name) {
      state.newProjectName = name;
    },
  },
};
