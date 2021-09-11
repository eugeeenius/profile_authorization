import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: true,
  },

  mutations: {
    SET_THEME(state, payload) {
      state.darkMode = payload;
    },
  },

  actions: {
    setTheme({commit}, payload) {
      const strValue = JSON.stringify(payload);
      localStorage.setItem('darkMode', strValue);

      commit('SET_THEME', payload);
    },

    loadThemeState({commit}) {
      const theme = localStorage.getItem('darkMode');
      console.log(theme);
      const parsed = JSON.parse(theme);

      commit('SET_THEME', parsed ?? false);
    },
  },
});
