// import router from '../router';
import Vue from 'vue';
import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    newProjectName: null,
    projects: [],
  },
  actions: {
    fetchProjects({ commit }) {
      return HTTP().get('/v0/projects')
        .then(({ data }) => {
          commit('setProjects', data);
        });
    },
    createProject({ commit, state }) {
      return HTTP().post('/v0/projects', {
        title: state.newProjectName,
      })
        .then(({ data }) => {
          commit('appendProject', data);
          commit('setNewProjectName', null);
        });
    },
  },
  getters: {
  },
  mutations: {
    setNewProjectName(state, name) {
      state.newProjectName = name;
    },
    appendProject(state, project) {
      state.projects.push(project);
    },
    setProjects(state, projects) {
      state.projects = projects;
    },
    setEditMode(state, project) {
      Vue.set(project, 'isEditMode', true);
    },
  },
};
