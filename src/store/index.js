import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: true,
  },

  mutations: {
    SET_THEME(state) {
      state.darkMode = !state.darkMode;
    },
  },

  actions: {
    toggleTheme({commit}) {
      commit('SET_THEME');
    },
  },
});
